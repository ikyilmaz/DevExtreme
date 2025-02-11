/**
 * DevExtreme (esm/renovation/ui/pager/utils/calculate_values_fitted_width.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
export const oneDigitWidth = 10;
export function calculateValuesFittedWidth(minWidth, values) {
    return minWidth + 10 * Math.max(...values).toString().length
}
