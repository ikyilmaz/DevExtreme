/**
 * DevExtreme (esm/__internal/ui/tab_panel/m_item.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import {
    noop
} from "../../../core/utils/common";
import CollectionWidgetItem from "../../ui/collection/m_item";
export default class TabPanelItem extends CollectionWidgetItem {
    _renderWatchers() {
        this._startWatcher("badge", noop);
        return super._renderWatchers()
    }
}
