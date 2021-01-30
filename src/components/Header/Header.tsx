import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../Firebase'
import Button from '../Button/Button'
import classes from './Header.module.scss'

interface Props {

}

const Header: React.FC<Props> = props => {
    const [user] = useAuthState(auth)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
        document.body.classList.toggle("dark")
    }

    return (
        <header className={classes.Header}>
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
    )
}

export default Header
