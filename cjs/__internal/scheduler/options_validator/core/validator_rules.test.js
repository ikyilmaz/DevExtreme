/**
 * DevExtreme (cjs/__internal/scheduler/options_validator/core/validator_rules.test.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var _validator_rules = require("../../../scheduler/options_validator/core/validator_rules");
describe("createValidatorRule", (() => {
    it('should add the "name" property to the passed function', (() => {
        const result = (0, _validator_rules.createValidatorRule)("test-name", (() => true));
        expect(result.name).toBe("test-name")
    }))
}));
