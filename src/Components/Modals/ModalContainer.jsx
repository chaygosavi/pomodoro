import React, { useContext } from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import context from "../../Context";

function ModalContainer({ onClose }) {
  const {
    workTime,
    setWorkTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = useContext(context);

  return (
    <Container>
      <ModalContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              work: workTime / 60,
              short: shortBreakTime / 60,
              long: longBreakTime / 60,
            }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setShortBreakTime(values.short * 60);
              setLongBreakTime(values.long * 60);
              onClose();
            }}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="work">Work</label>
                  <Field type={"number"} name="work" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">Short Break</label>
                  <Field type={"number"} name="short" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break</label>
                  <Field type={"number"} name="long" min="1" max="60" />
                </FormControl>
              </InputWrapper>
              <ButtonContainer>
                <ApplyButton type="submit">Apply</ApplyButton>
              </ButtonContainer>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
}

export default ModalContainer;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(300%);
`;

const Container = styled.div`
  z-index: 99;
  position: absolute;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;
const ModalContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background-color: white;
`;
const ModalHeader = styled.div`
  color: black;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #000;
`;
const ModalTitle = styled.h3`
  font-size: 5rem;
`;
const ModalCloseButton = styled.button`
  all: unset;
  font-size: 5rem;
`;
const ModalBody = styled.div``;

const InputWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
`;
const FormControl = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  color: black;
  text-align: center;
  label {
    font-size: 2rem;
  }
  input {
    /* font-size: 2rem; */
    text-align: center;
    padding: 0.5rem;
    border: 0.5px solid #000;
    border-radius: 0.5rem;
    background: #ead8fc;
  }
`;

const ApplyButton = styled.button`
  all: unset;
  border-radius: 1rem;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 4rem;
`;
