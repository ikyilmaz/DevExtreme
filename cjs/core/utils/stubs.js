/**
 * DevExtreme (cjs/core/utils/stubs.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
exports.stubComponent = stubComponent;

function stubComponent(componentName) {
    return class {
        constructor() {
            throw new Error(`Module '${componentName}' not found`)
        }
        static getInstance() {}
    }
}
