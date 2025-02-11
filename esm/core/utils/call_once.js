/**
 * DevExtreme (esm/core/utils/call_once.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const callOnce = function(handler) {
    let result;
    let wrappedHandler = function() {
        result = handler.apply(this, arguments);
        wrappedHandler = function() {
            return result
        };
        return result
    };
    return function() {
        return wrappedHandler.apply(this, arguments)
    }
};
export default callOnce;
