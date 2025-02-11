/**
 * DevExtreme (esm/localization/globalize/core.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import Globalize from "globalize";
import coreLocalization from "../core";
import {
    enCldr
} from "../cldr-data/en";
import {
    supplementalCldr
} from "../cldr-data/supplemental";
if (Globalize && Globalize.load) {
    if (!Globalize.locale()) {
        Globalize.load(enCldr, supplementalCldr);
        Globalize.locale("en")
    }
    coreLocalization.inject({
        locale: function(locale) {
            if (!locale) {
                return Globalize.locale().locale
            }
            Globalize.locale(locale)
        }
    })
}
