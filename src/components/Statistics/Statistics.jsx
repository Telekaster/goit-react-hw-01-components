import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
    return (
      <section className="statistics">

        {title !== null &&
        <h2 className="title">{title}</h2>
        }

        <ul className="stat-list">

          {stats.map((stat) => (
            <li className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
            </li>
        ))}
       
        </ul>

      </section>
    )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
