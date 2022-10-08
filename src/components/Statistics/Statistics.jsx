import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} class="item">
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
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
