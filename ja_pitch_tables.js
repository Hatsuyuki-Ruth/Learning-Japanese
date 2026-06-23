"use strict";

window.JaPronMini = (() => {
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function highSpan(content, withDownstep) {
    const downstep = withDownstep ? '<span class="pitch-down" aria-hidden="true"></span>' : "";
    return `<span class="pitch-high">${content}${downstep}</span>`;
  }

  function renderMora(mora, index, circledIndices) {
    const content = escapeHtml(mora);
    return circledIndices.has(index) ? `<span class="kana-circle">${content}</span>` : content;
  }

  function renderMoras(moras, start, end, circledIndices) {
    return moras.slice(start, end).map((mora, offset) => {
      return renderMora(mora, start + offset, circledIndices);
    }).join("");
  }

  function renderAccent(moras, accent, circled = []) {
    const circledIndices = new Set(circled);
    const resolvedAccent = accent < 0 ? moras.length + accent + 1 : accent;
    const highStart = resolvedAccent === 1 ? 0 : 1;
    const highEndExclusive = resolvedAccent === 0 ? moras.length : resolvedAccent;
    const before = renderMoras(moras, 0, highStart, circledIndices);
    const high = renderMoras(moras, highStart, highEndExclusive, circledIndices);
    const after = renderMoras(moras, highEndExclusive, moras.length, circledIndices);
    const hasDownstep = resolvedAccent > 0 && high.length > 0;
    return before + (high ? highSpan(high, hasDownstep) : "") + after;
  }

  function renderParts(parts) {
    return parts.map(part => {
      if (part.separator) {
        return `<span class="separator">${escapeHtml(part.separator)}</span>`;
      }
      return renderAccent(part.moras, part.accent, part.circled);
    }).join("");
  }

  return { escapeHtml, renderAccent, renderParts };
})();

window.JaPitchTables = (() => {
  function renderForm(row) {
    const superscript = row.superscript
      ? `<sup class="superscript">${JaPronMini.escapeHtml(row.superscript)}</sup>`
      : "";
    return `<span class="entry">${JaPronMini.escapeHtml(row.form) + superscript}</span>`;
  }

  function renderForms(row) {
    if (row.entries) {
      return row.entries.map(entry => { return renderForm(entry); }).join("");
    }
    return renderForm(row);
  }

  function renderReading(reading) {
    const label = reading.label ? `<span class="usage">${JaPronMini.escapeHtml(reading.label)}</span>` : "";
    return label + JaPronMini.renderParts(reading.parts);
  }

  function renderReadingInline(reading) {
    return `<span class="kana">${renderReading(reading)}</span>`;
  }

  function renderReadingsSpan(readings) {
    return readings.map(reading => { return `<span class="entry">${renderReading(reading)}</span>`; }).join("");
  }

  function renderReadings(row) {
    if (row.entries) {
      return row.entries.map(entry => { return renderReadingsSpan(entry.readings); }).join("");
    }
    return renderReadingsSpan(row.readings);
  }

  function renderSectionedAccentCells(row, options) {
    const {
      formClass,
      accentClass
    } = options;
    if (!row) {
      return `<td class="${formClass}" lang="ja"></td><td class="${accentClass}" lang="ja"></td>`;
    }

    return `<td class="${formClass}" lang="ja">${renderForms(row)}</td>
      <td class="${accentClass}" lang="ja">${renderReadings(row)}</td>`;
  }

  function splitRows(rows, options) {
    const {
      columnCount,
      rowsPerColumn
    } = options;
    const resolvedColumnCount = columnCount || (rowsPerColumn ? Math.ceil(rows.length / rowsPerColumn) : 1);
    const resolvedRowsPerColumn = rowsPerColumn || Math.ceil(rows.length / resolvedColumnCount);

    return Array.from({ length: resolvedColumnCount }, (_value, columnIndex) => {
      const start = columnIndex * resolvedRowsPerColumn;
      return rows.slice(start, start + resolvedRowsPerColumn);
    });
  }

  function sectionColumnGroups(section) {
    return splitRows(section.rows, {
      columnCount: section.columnCount,
      rowsPerColumn: section.rowsPerColumn
    });
  }

  function renderSectionColumnHead(tableSelector, sections, sectionColumns, labels, rowHeaderTitle) {
    const thead = document.querySelector(`${tableSelector} thead`);
    if (!thead) return;

    const hasSectionTitles = sections.some(section => section.title);
    const rowHeader = rowHeaderTitle ? `<th rowspan="2">${JaPronMini.escapeHtml(rowHeaderTitle)}</th>` : "";
    const sectionHead = hasSectionTitles ? `<tr>${rowHeader}${sections.map((section, index) => {
      const colspan = labels.length * sectionColumns[index].length;
      return `<th colspan="${colspan}">${JaPronMini.escapeHtml(section.title || "")}</th>`;
    }).join("")}</tr>` : "";
    const labelRowHeader = rowHeaderTitle && !hasSectionTitles
      ? `<th>${JaPronMini.escapeHtml(rowHeaderTitle)}</th>`
      : "";
    const labelHead = `<tr>${labelRowHeader}${sectionColumns.map(columns => {
      return columns.map(() => {
        return labels.map(label => `<th>${JaPronMini.escapeHtml(label)}</th>`).join("");
      }).join("");
    }).join("")}</tr>`;
    thead.innerHTML = sectionHead + labelHead;
  }

  function renderSectionColumns(sectionColumns, options) {
    const {
      formClass,
      accentClass,
      rowHeaders
    } = options;
    const rowCount = Math.max(...sectionColumns.flat().map(column => column.length));
    const rows = [];

    for (let index = 0; index < rowCount; index += 1) {
      const rowHeader = rowHeaders ? `<th scope="row">${JaPronMini.escapeHtml(rowHeaders[index] || "")}</th>` : "";
      rows.push(`<tr>${rowHeader}${sectionColumns.map(columns => {
        return columns.map(column => {
          return renderSectionedAccentCells(column[index], { formClass, accentClass });
        }).join("");
      }).join("")}</tr>`);
    }

    return rows.join("");
  }

  function renderNotes(notesSelector, notes) {
    if (!notesSelector) return;

    const notesElement = document.querySelector(notesSelector);
    if (!notesElement) return;

    // Note text may contain trusted HTML, such as rendered pitch accents or line breaks.
    notesElement.innerHTML = notes.map(note => {
      const translation = note.translation
        ? `<span class="note-translation" lang="en">${JaPronMini.escapeHtml(note.translation)}</span>`
        : "";
      return `<li>
        <span class="note-label" lang="ja">${JaPronMini.escapeHtml(note.target)}</span>
        <span class="note-text" lang="ja">${note.text}</span>
        ${translation}
      </li>`;
    }).join("");
  }

  function renderSectionColumnAccentTable(options) {
    const {
      tableSelector,
      sections,
      rows,
      columnCount,
      rowsPerColumn,
      sectionColumnLabels = ["表記", "読みとアクセント"],
      columnLabels,
      rowHeaderTitle,
      rowHeaders,
      notesSelector,
      notes,
      formClass = "form",
      accentClass = "kana"
    } = options;

    const tbody = document.querySelector(`${tableSelector} tbody`);
    if (!tbody) return;

    const tableSections = sections || [{
      rows,
      columnCount,
      rowsPerColumn
    }];
    const labels = columnLabels || sectionColumnLabels;
    const sectionColumns = tableSections.map(section => sectionColumnGroups(section));
    const renderOptions = {
      formClass,
      accentClass,
      rowHeaders
    };
    renderSectionColumnHead(tableSelector, tableSections, sectionColumns, labels, rowHeaderTitle);
    tbody.innerHTML = renderSectionColumns(sectionColumns, renderOptions);

    renderNotes(notesSelector, notes);
  }

  return {
    renderSectionColumnAccentTable,
    renderReadingInline
  };
})();
