import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DrawerMenuButtonContainer = styled.button`
  position: absolute;
  left: 10px;
  color: black;
  border: 0;
  background: none;
`;

export const SignOffContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 70px;

  & button {
    transition: 400ms ease-in-out;
  }

  & button:hover {
    transform: translateX(15px);
    transition: 400ms ease-in-out;
  }
`;

export const WelcomeTextContainer = styled.div`
  display: flex;
  align-items: center;
`;
