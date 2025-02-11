/**
 * DevExtreme (renovation/ui/scroll_view/utils/normalize_offset_left.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
exports.normalizeOffsetLeft = normalizeOffsetLeft;

function normalizeOffsetLeft(scrollLeft, maxLeftOffset, rtlEnabled) {
    if (rtlEnabled) {
        return maxLeftOffset + scrollLeft
    }
    return scrollLeft
}
