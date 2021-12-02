import styled from 'styled-components';

export const SytledButton = styled.button`
  min-height: 35px;
  background-color: ${({ disabled }) => disabled ? '#8fbfb9' : '#2a9d8f'};
  color: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  border-style: none;
  margin: 5px 0;
  cursor: pointer;
  width: 200px;
`;

const Button = ({ children, ...props }) => {
  return (
    <SytledButton {...props}>
      {children}
    </SytledButton>
  );
};

export default Button;
