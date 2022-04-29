import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Components/Modals/Modal";
import Tags from "./Components/Tags/Tags";
import Timer from "./Components/Timer/Timer";
import context from "./Context";
import { FaCog } from "react-icons/fa";

function App() {
  const [progress, setProgress] = useState(100);
  const [active, setActive] = useState(0);
  const [time, setTime] = useState();
  const [pause, setPause] = useState(true);
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(30 * 60);
  const [initTime, setInitTime] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    switch (active) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  }, [active, workTime, longBreakTime, shortBreakTime]);

  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <context.Provider
        value={{
          initTime,
          setInitTime,
          workTime,
          setWorkTime,
          shortBreakTime,
          setShortBreakTime,
          longBreakTime,
          setLongBreakTime,
          progress,
          setProgress,
          active,
          setActive,
          pause,
          setPause,
          time,
          setTime,
        }}
      >
        <Modal onClose={onClose} open={open} />
        <Title>Pomodoro</Title>
        <Tags />
        <Timer />
        <CogIcon onClick={onOpen}>
          <FaCog />
        </CogIcon>
      </context.Provider>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
