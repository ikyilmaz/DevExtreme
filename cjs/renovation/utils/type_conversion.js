/**
 * DevExtreme (cjs/renovation/utils/type_conversion.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
exports.toNumber = toNumber;

function toNumber(attribute) {
    return attribute ? Number(attribute.replace("px", "")) : 0
}
