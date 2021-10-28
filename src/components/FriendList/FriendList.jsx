import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

function FriendList({friends}) {
    return (
        <ul className={styles.friend_list}>
            {friends.map((prop) => {
                const { id, avatar, name, isOnline } = prop;
                console.log(isOnline);
                return (
                
                    <li className={styles.item} id={id}>
                        {isOnline ?  (<span className = { styles.online } ></span>) : (<span className = { styles.offline } ></span>)}
                        <img className={styles.avatar} src={avatar} alt={name} width="48" />
                        <p className={styles.name}>{name}</p>
                   </li>
                   
                )})}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};


export default FriendList;