/**
 * DevExtreme (esm/__internal/ui/html_editor/formats/m_font.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import Quill from "devextreme-quill";
let FontStyle = {};
if (Quill) {
    FontStyle = Quill.import("attributors/style/font");
    FontStyle.whitelist = null
}
export default FontStyle;
