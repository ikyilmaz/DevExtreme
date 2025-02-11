/**
 * DevExtreme (esm/__internal/ui/multi_view/m_multi_view.animation.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import fx from "../../../animation/fx";
import {
    move
} from "../../../animation/translator";
export const _translator = {
    move($element, position) {
        move($element, {
            left: position
        })
    }
};
export const animation = {
    moveTo($element, position, duration, completeAction) {
        fx.animate($element, {
            type: "slide",
            to: {
                left: position
            },
            duration: duration,
            complete: completeAction
        })
    },
    complete($element) {
        fx.stop($element, true)
    }
};
