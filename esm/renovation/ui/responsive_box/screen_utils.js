/**
 * DevExtreme (esm/renovation/ui/responsive_box/screen_utils.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
export const convertToScreenSizeQualifier = width => {
    if (width < 768) {
        return "xs"
    }
    if (width < 992) {
        return "sm"
    }
    if (width < 1200) {
        return "md"
    }
    return "lg"
};
