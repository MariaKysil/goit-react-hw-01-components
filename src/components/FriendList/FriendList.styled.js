import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
