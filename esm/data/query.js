/**
 * DevExtreme (esm/data/query.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import {
    queryImpl
} from "./query_implementation";
const query = function() {
    const impl = Array.isArray(arguments[0]) ? "array" : "remote";
    return queryImpl[impl].apply(this, arguments)
};
export default query;
