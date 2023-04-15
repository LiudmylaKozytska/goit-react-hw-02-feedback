import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  color: #f9fcff;
  margin-top: 12px;
  padding: 12px 40px;
  border-radius: 10px;
  border: none;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
