/**
 * DevExtreme (renovation/ui/scroll_view/utils/get_scroll_left_max.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
exports.getScrollLeftMax = getScrollLeftMax;

function getScrollLeftMax(element) {
    return element.scrollWidth - element.clientWidth
}
