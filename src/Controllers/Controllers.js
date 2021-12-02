
import Button from './Components/Button';

const Controllers = ({ setLaps, isActive, setIsActive, handleStart, handleStop, handleReset }) => {
  return (
    <>
      <Button onClick={() => {
        setIsActive(!isActive);
        !isActive ? handleStart() : handleStop();
      }}>
        {!isActive ? 'START' : 'STOP'}
      </Button>
      <Button
        disabled={!isActive}
        onClick={setLaps} >
        {'MARK TIME'}
      </Button>
      <Button onClick={handleReset}>
        {'RESET'}
      </Button>
    </>);
};

export default Controllers;
