import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

function FriendList({friends}) {
    return (
        <ul className={styles.friend_list}>
            {friends.map((prop) => {
                const { id, avatar, name, isOnline } = prop;
                return (
                
                    <li className={styles.item} key={id}>
                        <span className = {isOnline ? (styles.online) : (styles.offline)}></span>
                        <img className={styles.avatar} src={avatar} alt={name} width="48" />
                        <p className={styles.name}>{name}</p>
                   </li>
                   
                )})}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};


export default FriendList;