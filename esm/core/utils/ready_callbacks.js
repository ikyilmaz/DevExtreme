/**
 * DevExtreme (esm/core/utils/ready_callbacks.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import domAdapter from "../dom_adapter";
import injector from "./dependency_injector";
import {
    hasWindow
} from "./window";
import callOnce from "./call_once";
let callbacks = [];
const subscribeReady = callOnce((() => {
    const removeListener = domAdapter.listen(domAdapter.getDocument(), "DOMContentLoaded", (() => {
        readyCallbacks.fire();
        removeListener()
    }))
}));
const readyCallbacks = {
    add: callback => {
        const windowExists = hasWindow();
        if (windowExists && "loading" !== domAdapter.getReadyState()) {
            callback()
        } else {
            callbacks.push(callback);
            windowExists && subscribeReady()
        }
    },
    fire: () => {
        callbacks.forEach((callback => callback()));
        callbacks = []
    }
};
export default injector(readyCallbacks);
