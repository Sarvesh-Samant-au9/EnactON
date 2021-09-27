import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>Maps Only!! </h3>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background-color: #5454d4;
  color: #fff;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  z-index: 10;
  h3 {
    padding-left: 10px;
    cursor: pointer;
  }
`;

export default Navbar;
