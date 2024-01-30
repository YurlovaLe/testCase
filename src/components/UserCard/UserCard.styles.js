import styled from "styled-components";

export const UserCard = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(208, 215, 222);
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 16px;

  &:hover {
    background-color: rgba(208, 215, 222, 0.32);
  }
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 25px;
`;
