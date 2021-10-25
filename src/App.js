import './App.css';
import Profile from './components/profile/profile'
import user from './user.json';

const { avatar, name, tag, location } = user;
const { followers, views, likes } = user.stats;


function App() {

  return (
    <Profile
      avatar={avatar}
      name={name}
      tag={tag}
      location={location}
      followers={followers}
      views={views}
      likes={likes}
    />

  );
}

export default App;
