/**
 * DevExtreme (esm/__internal/scheduler/r1/utils/timeline_week.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import {
    getValidCellDateForLocalTimeFormat
} from "./base";
export const getDateForHeaderText = (index, date, _ref) => {
    let {
        startDayHour: startDayHour,
        startViewDate: startViewDate,
        cellCountInDay: cellCountInDay,
        interval: interval,
        viewOffset: viewOffset
    } = _ref;
    return getValidCellDateForLocalTimeFormat(date, {
        startViewDate: startViewDate,
        startDayHour: startDayHour,
        cellIndexShift: index % cellCountInDay * interval,
        viewOffset: viewOffset
    })
};
