
import { useState, useRef, useCallback } from 'react';
import { useFormatTime } from '../hooks/useFormatTime';

export const useStopwatch = () => {
  const [laps, setLaps] = useState([])
  const [isActive, setIsActive] = useState(false);
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const intervalRef = useRef(null)

  const time = useFormatTime(stopwatchSeconds);

  const setLapsHandler = useCallback(
    () => {
      setLaps((prev) => [...prev, time]);
    }, [time])

  const handleStart = () => {
    if (!isActive) {
      setStopwatchSeconds(0)
      setLaps([])
    };

    intervalRef.current = setInterval(() => {
      setStopwatchSeconds((timer = 0) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    setLaps([]);
    setStopwatchSeconds(0);
    setIsActive(false)
  };

  const handleStop = () => {
    clearInterval(intervalRef.current)
  };

  return {
    time,
    isActive,
    setIsActive,
    handleStart,
    handleReset,
    handleStop,
    setStopwatchSeconds,
    laps,
    setLaps: setLapsHandler,

  }
};
