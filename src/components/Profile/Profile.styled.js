import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.round}%;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Location = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.blue};

  & > li {
    display: flex;
    flex-direction: column;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    width: 33%;
  }

  & > li:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.bold};
`;
