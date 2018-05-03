export default {
  /**
   * Helper function to emit events
   * @param {String|cc.Component.EventHanlder} events
   */
  emitEvents(events) {
    var e = events;
    if (typeof events === 'string') {
      e = this[events];
    }
    if (typeof e !== 'undefined') {
      cc.Component.EventHandler.emitEvents(e);
    }
  },
  /**
   * Call a event handler and return the result
   * @param {String|cc.Component.EventHandler} events
   */
  callHandler(events, args = []) {
    var e = events;
    if (typeof events === 'string') {
      e = this[events];
    }
    var result;
    if (typeof e !== 'undefined') {
      const target = e.target;
      const comp = target.getComponent(e.component);
      const handler = comp[e.handler];
      result = handler.apply(comp, args);
    }
    return result;
  }
};