import React, { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import context from "../../Context";
import { css } from "styled-components";

function Tags() {
  const { active, setActive, setPause } = useContext(context);
  const { progress, setProgress } = useContext(context);

  const tags = ["Work", "Short Break", "Long Break"];

  return (
    <TagsContainer>
      {tags.map((tag, idx) => (
        <Tag
          onClick={() => {
            setActive(idx);
            setPause(true);
          }}
          active={active === idx}
          key={idx}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
}

export default Tags;

const TagsContainer = styled.div`
  width: 40rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Tag = styled.button`
  all: unset;
  width: 10rem;
  text-align: center;
  padding: 0.3em;
  border-radius: 5rem;
  font-size: 1.8rem;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background: ${(props) => props.theme.colors.primary};
    `}
`;
