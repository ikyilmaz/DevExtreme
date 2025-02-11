/**
* DevExtreme (core/options.d.ts)
* Version: 24.1.7
* Build date: Wed Oct 30 2024
*
* Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import {
    Device,
} from './devices';

import {
    DeepPartial,
} from './index';

/**
 * Specifies the device-dependent default configuration properties for a component.
 */
export type DefaultOptionsRule<T> = {
    device?: Device | Device[] | ((device: Device) => boolean);
    options: DeepPartial<T>;
};
