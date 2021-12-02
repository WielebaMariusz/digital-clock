import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Clock = styled.div`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DigitalClock = ({ switchView }) => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Clock onClick={() => switchView()}>
      {time.toLocaleTimeString()}
    </Clock>
  )
}

export default DigitalClock;
