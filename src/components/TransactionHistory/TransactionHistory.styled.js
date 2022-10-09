import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;

export const TableThead = styled.thead`
  background-color: ${p => p.theme.colors.darkBlue};
  color: ${p => p.theme.colors.white};
  & th {
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const TableItem = styled.tr`
  background-color: ${({ elIndex }) => {
    return elIndex % 2 === 0 ? '#fff' : '#B6D0E2';
  }};

  & > td {
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const TableCell = styled.th`
  padding: ${p => p.theme.space[3]}px;
`;
