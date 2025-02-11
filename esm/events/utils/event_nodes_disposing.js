/**
 * DevExtreme (esm/events/utils/event_nodes_disposing.js)
 * Version: 24.1.7
 * Build date: Wed Oct 30 2024
 *
 * Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
import eventsEngine from "../core/events_engine";
import {
    removeEvent
} from "../remove";

function nodesByEvent(event) {
    return event && [event.target, event.delegateTarget, event.relatedTarget, event.currentTarget].filter((node => !!node))
}
export const subscribeNodesDisposing = (event, callback) => {
    eventsEngine.one(nodesByEvent(event), removeEvent, callback)
};
export const unsubscribeNodesDisposing = (event, callback) => {
    eventsEngine.off(nodesByEvent(event), removeEvent, callback)
};
