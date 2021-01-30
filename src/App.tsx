import React from 'react';
import classes from './App.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, GoogleAuthProvider } from './Firebase';
import ChatRoom from './components/ChatRoom/ChatRoom';
import MessageForm from './components/MessageForm/MessageForm';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
  const [user] = useAuthState(auth)
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.MainContainer}>
        <section className={classes.ChatContainer}>
          {
            user
              ? <ChatRoom />
              : <Button variant="white" onClick={signInWithGoogle}>Sign in with Google</Button>
          }
        </section>
        <MessageForm />
      </main>
    </div >
  );
}

export default App;
