import styled from 'styled-components';
import { generateRandomColor } from 'utils/GetRandomNumber';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  flex-direction: column;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`;

export const Item = styled.li`
  background-color: ${generateRandomColor};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  width: 80px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => p.theme.shadows.textShadow};
`;

export const Percentage = styled.span`
  color: ${p => p.theme.colors.white};
  text-shadow: ${p => p.theme.shadows.textShadow};
`;
