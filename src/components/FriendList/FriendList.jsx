import PropTypes from 'prop-types';

function FriendList({friends}) {
    return (
        <ul class="friend-list">
            {friends.map((prop) => {
                const { id, avatar, name, isOnline } = prop;
                return (
                
                    <li class="item" id={id}>
                        <span class="status">{isOnline}</span>
                        <img class="avatar" src={avatar} alt={name} width="48" />
                        <p class="name">{name}</p>
                   </li>
                   
                )})};
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