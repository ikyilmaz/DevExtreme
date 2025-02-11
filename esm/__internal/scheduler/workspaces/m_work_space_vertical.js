/**
 * DevExtreme (esm/__internal/scheduler/workspaces/m_work_space_vertical.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import _extends from "@babel/runtime/helpers/esm/extends";
import {
    formatWeekdayAndDay
} from "../../scheduler/r1/utils/index";
import SchedulerWorkSpaceIndicator from "./m_work_space_indicator";
class SchedulerWorkspaceVertical extends SchedulerWorkSpaceIndicator {
    _getFormat() {
        return formatWeekdayAndDay
    }
    generateRenderOptions() {
        const options = super.generateRenderOptions();
        return _extends({}, options, {
            isGenerateTimePanelData: true
        })
    }
    _isRenderHeaderPanelEmptyCell() {
        return true
    }
}
export default SchedulerWorkspaceVertical;
