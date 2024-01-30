import styled from "styled-components";

export const ControlButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  cursor: pointer;
  background: none;
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 16px;
  
  &:hover {
    background-color: rgba(208, 215, 222, 0.32);
  }
`;
