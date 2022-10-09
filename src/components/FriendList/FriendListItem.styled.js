import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 70px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
  padding: ${p => p.theme.space[4]}px;
`;

export const Status = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[4]}px;
  background-color: ${({ isOnline }) => {
    return isOnline ? '#32CD32' : '#D22B2B';
  }};
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Name = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;
