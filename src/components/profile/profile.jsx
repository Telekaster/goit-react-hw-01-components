import PropTypes from 'prop-types';
import styles from './Profile.module.css'


function Profile( {avatar, name, tag, location, followers, views, likes }) {

    return (
      <div className={styles.profile}>
          <div className={styles.description}>
            <img
              src={avatar}
              alt="Аватар пользователя"
            className="avatar"
            width="100px"
            height="100px"
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
          </div>        

          <ul className={styles.stats}>
            <li className={styles.item}>
              <p className={styles.label}>Followers</p>
              <p className={styles.quantity}>{followers}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.label}>Views</p>
              <p className={styles.quantity}>{views}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.label}>Likes</p>
              <p className={styles.quantity}>{likes}</p>
            </li>
          </ul>
        </div>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.node
};

export default Profile;