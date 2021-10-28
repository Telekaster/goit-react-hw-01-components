import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
      <section className={styles.statistics}>

        {title &&
        <h2 className={styles.title}>{title}</h2>
        }

        <ul className={styles.stat_list}>

          {stats.map((stat) => (
            <li className={styles.item} key={stat.id}>
            <p className={styles.label}>{stat.label}</p>
            <p className="percentage">{stat.percentage}</p>
            </li>
        ))}
       
        </ul>

      </section>
    )
}


Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;

