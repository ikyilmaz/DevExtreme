/**
 * DevExtreme (esm/integration/jquery/element_data.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import jQuery from "jquery";
import {
    setDataStrategy
} from "../../core/element_data";
import useJQueryFn from "./use_jquery";
const useJQuery = useJQueryFn();
if (useJQuery) {
    setDataStrategy(jQuery)
}
