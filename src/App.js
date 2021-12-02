import { useState } from 'react';
import DigitalClock from './DigitalClock/DigitalClock'
import Stopwatch from './Stopwatch/Stopwach';
import LapList from './LapList/LapList';
import { Container, LapsContainer, Clock, Dashboard } from './app.styles';
import Controllers from './Controllers/Controllers';
import { useStopwatch } from './Stopwatch/stopwatch.hooks';

function App() {
  const [isStopwatchActive, setIsStopwatchActive] = useState(false);
  const {
    time,
    isActive,
    setIsActive,
    handleStart,
    handleReset,
    handleStop,
    setStopwatchSeconds,
    laps,
    setLaps
  } = useStopwatch()

  const onSwitchViewChange = () => {
    setStopwatchSeconds(0);
    setIsStopwatchActive(!isStopwatchActive);
    handleReset();
  }

  return (
    <Container>
      <Clock>
        {isStopwatchActive ?
          <Stopwatch laps={laps} switchView={onSwitchViewChange} time={time} /> :
          <DigitalClock switchView={onSwitchViewChange} />}
      </Clock>
      {<Dashboard>
        {isStopwatchActive && (
          <>
            <Controllers
              setLaps={setLaps}
              isActive={isActive}
              setIsActive={setIsActive}
              handleStart={handleStart}
              handleStop={handleStop}
              handleReset={handleReset} />
            <LapsContainer>
              <LapList laps={laps} />
            </LapsContainer>
          </>)}
      </Dashboard>}
    </Container >
  );
}

export default App;
