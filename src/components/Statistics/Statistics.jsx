import PropTypes from 'prop-types';
import { Item, Label, Percentage, Title } from './Statistics.styled';
import { Box } from 'components/Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {title && <Title>Upload stats</Title>}

      <Box display="flex" m={0} p={0} mb={3} boxShadow="boxShadow">
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
