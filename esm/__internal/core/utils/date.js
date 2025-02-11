/**
 * DevExtreme (esm/__internal/core/utils/date.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const addOffsets = (date, offsets) => {
    const newDateMs = offsets.reduce(((result, offset) => result + offset), date.getTime());
    return new Date(newDateMs)
};
export const dateUtilsTs = {
    addOffsets: addOffsets
};
