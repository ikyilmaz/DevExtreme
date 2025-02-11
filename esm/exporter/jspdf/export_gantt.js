/**
 * DevExtreme (esm/exporter/jspdf/export_gantt.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
function exportGantt(options) {
    const component = options.component;
    return null === component || void 0 === component ? void 0 : component.exportToPdf(options)
}
export {
    exportGantt
};
