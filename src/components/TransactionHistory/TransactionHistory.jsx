import PropTypes from 'prop-types';
import {
  TableItem,
  TableThead,
  TableWrapper,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableWrapper>
      <TableThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableThead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TableItem elIndex={index} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableItem>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
