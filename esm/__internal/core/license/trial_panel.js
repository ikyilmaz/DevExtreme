/**
 * DevExtreme (esm/__internal/core/license/trial_panel.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import {
    isClient,
    registerCustomComponents,
    renderTrialPanel
} from "./trial_panel.client";
export function showTrialPanel(buyNowUrl, version, customStyles) {
    if (isClient()) {
        renderTrialPanel(buyNowUrl, version, customStyles)
    }
}
export function registerTrialPanelComponents(customStyles) {
    if (isClient()) {
        registerCustomComponents(customStyles)
    }
}
