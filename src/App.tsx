import React from 'react';
import classes from './App.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './Firebase';
import Button from './components/Button/Button';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className={classes.App}>
      <header>
        <h1>⚛️🔥💬</h1>
        <div>
          {
            user
              ? <Button variant="secondary" onClick={() => { auth.signOut() }}>Sign Out</Button>
              : null
          }
        </div>
      </header>
    </div>
  );
}

export default App;
