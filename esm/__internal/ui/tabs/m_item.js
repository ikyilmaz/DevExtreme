/**
 * DevExtreme (esm/__internal/ui/tabs/m_item.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import $ from "../../../core/renderer";
import CollectionWidgetItem from "../../ui/collection/m_item";
const TABS_ITEM_BADGE_CLASS = "dx-tabs-item-badge";
const BADGE_CLASS = "dx-badge";
const TabsItem = CollectionWidgetItem.inherit({
    _renderWatchers() {
        this.callBase();
        this._startWatcher("badge", this._renderBadge.bind(this))
    },
    _renderBadge(badge) {
        this._$element.children(".dx-badge").remove();
        if (!badge) {
            return
        }
        const $badge = $("<div>").addClass("dx-tabs-item-badge").addClass("dx-badge").text(badge);
        this._$element.append($badge)
    }
});
export default TabsItem;
