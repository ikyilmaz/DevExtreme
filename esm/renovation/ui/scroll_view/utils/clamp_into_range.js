/**
 * DevExtreme (esm/renovation/ui/scroll_view/utils/clamp_into_range.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
export function clampIntoRange(value, max, min) {
    return Math.max(Math.min(value, max), min)
}
