/**
 * DevExtreme (esm/__internal/scheduler/r1/utils/agenda.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import {
    setOptionHour
} from "./base";
export const calculateStartViewDate = (currentDate, startDayHour) => {
    const validCurrentDate = new Date(currentDate);
    return setOptionHour(validCurrentDate, startDayHour)
};
