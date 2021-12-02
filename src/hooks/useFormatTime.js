export const useFormatTime = (timeInSeconds) => {
  const seconds = `0${timeInSeconds % 60}`.slice(-2);
  const minutes = `0${(Math.floor(timeInSeconds / 60) % 60)}`.slice(-2)
  const hours = `0${Math.floor(timeInSeconds / 3600)}`.slice(-2)

  return `${hours}:${minutes}:${seconds}`
};
