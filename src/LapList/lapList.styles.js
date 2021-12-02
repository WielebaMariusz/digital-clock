import styled from 'styled-components';

export const LapItem = styled.div`
  margin: 5px 25px;
  font-size: 25px;
`;

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  :nth-child(1) {
  color: ${({ marked }) => marked ? 'deepskyblue' : 'black'};
}
`;