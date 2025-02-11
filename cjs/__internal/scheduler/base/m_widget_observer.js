/**
 * DevExtreme (cjs/__internal/scheduler/base/m_widget_observer.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _ui = _interopRequireDefault(require("../../../ui/widget/ui.widget"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    }
}
class WidgetObserver extends _ui.default {
    notifyObserver(subject, args) {
        const observer = this.option("observer");
        if (observer) {
            observer.fire(subject, args)
        }
    }
    invoke() {
        const observer = this.option("observer");
        if (observer) {
            return observer.fire.apply(observer, arguments)
        }
    }
}
var _default = exports.default = WidgetObserver;
