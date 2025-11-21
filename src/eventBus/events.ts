const subscriptions: {
  [key: string] : {
    channel: typeof Channels[keyof  typeof Channels],
    event: string,
  }} = {};

export enum Channels {
  intersect='@intersect/',
}

export const generateChannel = (channel: typeof Channels[keyof  typeof Channels], event: string) : IChannel => {
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

// TODO: remove subscriptions