import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background:  rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
`;

export const ModalComponent = ({ setModalPhoto }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(false);
  }

  return <StyledModal onClick={handleOutsideClick}>Modal on</StyledModal>;
};
