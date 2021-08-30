import styled from "styled-components";

export const Handle = styled.div`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 2px;
  cursor: pointer;
  height: 16px;
  opacity:0;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 200ms ease-in;
  width: 16px;
  z-index: 1;
`;

export const Input = styled.input`
  cursor: pointer;
  height: 100%;
  position: absolute;
  width: 100%;
  opacity:0;
  z-index: 3;
  border-radius: 2px;
  &:checked + ${Handle} {
    left: calc(100% - 36px);
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  border-radius: 2px;
  box-shadow: #555555;
  cursor: pointer;
  display: inline-flex;
  height: 20px;
  position: relative;
  transition: background-color 200ms;
  width: 36px;
  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

export default StyledToggle;
