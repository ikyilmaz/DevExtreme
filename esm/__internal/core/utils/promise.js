/**
 * DevExtreme (esm/__internal/core/utils/promise.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
export function createPromise() {
    let resolve;
    let reject;
    const promise = new Promise(((res, rej) => {
        resolve = res;
        reject = rej
    }));
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    }
}
