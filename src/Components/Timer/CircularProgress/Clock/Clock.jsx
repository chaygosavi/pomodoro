import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import context from "../../../../Context";

function Clock() {
  const { time, setTime, pause, setPause, initTime } = useContext(context);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  useEffect(() => {
    if (!pause && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, pause]);

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>

      {time === 0 ? (
        <ResetButton
          onClick={() => {
            setTime(initTime);
            setPause(true);
          }}
        >
          Reset
        </ResetButton>
      ) : (
        <StartPauseButton onClick={() => setPause(!pause)}>
          {pause ? "Start" : "Pause"}
        </StartPauseButton>
      )}
    </ClockContainer>
  );
}

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;
const StartPauseButton = styled.button`
  all: unset;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`;
const TimerText = styled.h3`
  font-size: 10rem;
`;

const ResetButton = styled.button`
  all: unset;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: red;
`;
