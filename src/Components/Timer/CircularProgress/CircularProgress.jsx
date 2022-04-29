import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import context from "../../../Context";
import Clock from "./Clock/Clock";

function CircularProgress() {
  const { progress, setProgress, time, initTime } = useContext(context);

  useEffect(() => {
    setProgress(time / (initTime / 100));
  }, [setProgress, time]);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
  );
}

export default CircularProgress;

const OuterCircle = styled.div`
  /* background-color: red; */
  background: conic-gradient(
    red ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
  height: 35rem;
  width: 35rem;
  /* margin: 9rem auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const InnerCircle = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};

  height: 33.5rem;
  width: 33.5rem;
  /* margin: 9rem auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
