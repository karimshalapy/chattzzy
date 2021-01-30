import React, { useState } from 'react';
import classes from './App.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, GoogleAuthProvider } from './Firebase';
import ChatRoom from './components/ChatRoom/ChatRoom';
import MessageForm from './components/MessageForm/MessageForm';
import Button from './components/Button/Button';

function App() {
  const [user] = useAuthState(auth)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
    document.body.classList.toggle("dark")
  }

  return (
    <div className={classes.App}>
      <header>
        <h1 className={classes.MainHeading}>Chattzzy</h1>
        {
          user
            ?
            <div className={classes.headerBtnsBox}>
              <Button variant="secondary" onClick={toggleDarkMode}>
                <span role="img" aria-label={isDarkMode ? "Sun" : "Moon"}>
                  {isDarkMode ? "☀️" : "🌙"}
                </span>
              </Button>
              <Button variant="secondary" onClick={() => { auth.signOut() }}>Sign Out</Button>
            </div>
            : null
        }
      </header >
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
