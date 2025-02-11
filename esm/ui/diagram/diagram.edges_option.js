/**
 * DevExtreme (esm/ui/diagram/diagram.edges_option.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import ItemsOption from "./diagram.items_option";
class EdgesOption extends ItemsOption {
    _getKeyExpr() {
        return this._diagramWidget._createOptionGetter("edges.keyExpr")
    }
}
export default EdgesOption;
