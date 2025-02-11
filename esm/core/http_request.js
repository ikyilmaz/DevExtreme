/**
 * DevExtreme (esm/core/http_request.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import {
    getWindow
} from "./utils/window";
const window = getWindow();
import injector from "./utils/dependency_injector";
const nativeXMLHttpRequest = {
    getXhr: function() {
        return new window.XMLHttpRequest
    }
};
export default injector(nativeXMLHttpRequest);
