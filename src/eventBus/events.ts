type ChannelValues = typeof channels[keyof typeof channels]
const subscriptions: {
  [key: string] : {
    channel: ChannelValues,
    event: string,
  }} = {};

export const channels = {
  intersect: '@intersect/',
}

export const generateChannel = (channel: ChannelValues, event: string) : IChannel => {
  const listenToChannel = `${channel}${event}`;
  if(!subscriptions[listenToChannel]) {
    subscriptions[listenToChannel] = {
      channel,
      event,
    };
  }
  return {
    channel,
    event,
    listenTo:listenToChannel,
  }
}