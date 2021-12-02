import { useState, useEffect, useMemo } from 'react';
import { Container, LapItem } from './lapList.styles';

const LapList = ({ laps }) => {
  const [marked, setMarked] = useState(false);
  const reverseLaps = useMemo(() => [...laps].reverse(), [laps])

  useEffect(() => {
    setMarked(true)
    const timeOutId = setTimeout(() => setMarked(false), 5000)
    return () => {
      clearTimeout(timeOutId)
    }
  }, [laps]);

  return reverseLaps.map((lap, index, arr) => (
    <Container marked={marked}>
      <LapItem key={`${index}-${lap}`}>
        {`${arr.length - index}. ${lap}`}
      </LapItem>
    </Container>)
  )
};

export default LapList;
