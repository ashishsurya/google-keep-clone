import { CircularProgress } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { auth } from './firebase';
import LoginScreen from './LoginScreen';

function App() {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  if (loading) {
    return (
      <div>
        <h2>
          Authenticating <CircularProgress />
        </h2>
      </div>
    );
  }

  if (user) {
    return (
      <div className='app'>
        <Header />
        <div className='non__header'>
          <SideBar />
          <Main />
        </div>
      </div>
    );
  } else {
    return <LoginScreen />;
  }
}

export default App;
