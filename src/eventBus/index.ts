type Callback = () => void;

class EventBus {
  public static callbacks: Record<string, Array<Callback>> = {};
  static $on(event: IChannel, callback: Callback) {
    const {listenTo} = event;
    if(EventBus.callbacks[listenTo]) {
      EventBus.callbacks[listenTo].push(callback);
    } else {
      EventBus.callbacks[listenTo] = [callback];
    }
  };
  static $emit(event: IChannel) {
    const {listenTo} = event;
    if(listenTo in EventBus.callbacks) {
      EventBus.callbacks[listenTo].forEach((callback) => {
        callback();
      })
    } else {
      console.warn('EventBus event was not found');
    }
  }
  static $off(events: Array<keyof typeof EventBus.callbacks>) {
    events.forEach(event => {
      delete EventBus.callbacks[event]
    })
  }
}

export default EventBus;