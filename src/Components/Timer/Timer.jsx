import React from "react";
import styled from "styled-components";
import CircularProgress from "./CircularProgress/CircularProgress";

function Timer() {
  return (
    <TimerContainer>
      <CircularProgress />
    </TimerContainer>
  );
}

export default Timer;

const TimerContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 45rem;
  width: 45rem;
  margin: 9rem auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
