//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECONDS_IN_MS = Math.pow(10, 12);

export const gigasecond = date => {
  let event = new Date;
  event.setTime(date.getTime());
  event.setMilliseconds(GIGASECONDS_IN_MS);
  return event;
};
