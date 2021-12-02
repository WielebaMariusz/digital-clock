import { DisplayStopwatch, Container } from './stopwatch.styles';

const Stopwatch = ({ switchView, time }) => (
  <Container>
    <DisplayStopwatch>
      <div onClick={switchView}>{time}</div>
    </DisplayStopwatch>
  </Container >
);

export default Stopwatch;
