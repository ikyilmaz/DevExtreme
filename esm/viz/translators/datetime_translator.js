/**
 * DevExtreme (esm/viz/translators/datetime_translator.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import dateUtils from "../../core/utils/date";

function parse(value) {
    return null !== value ? new Date(value) : value
}
export default {
    fromValue: parse,
    toValue: parse,
    _add: dateUtils.addDateInterval,
    convert: dateUtils.dateToMilliseconds
};
