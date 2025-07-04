export const thirtyMinutesFromNow = (): Date => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 30);
  return now;
};
