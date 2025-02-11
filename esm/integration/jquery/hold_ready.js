/**
 * DevExtreme (esm/integration/jquery/hold_ready.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import jQuery from "jquery";
import {
    themeReadyCallback
} from "../../ui/themes_callback";
import readyCallbacks from "../../core/utils/ready_callbacks";
if (jQuery && !themeReadyCallback.fired()) {
    const holdReady = jQuery.holdReady || jQuery.fn.holdReady;
    holdReady(true);
    themeReadyCallback.add((function() {
        readyCallbacks.add((function() {
            holdReady(false)
        }))
    }))
}
