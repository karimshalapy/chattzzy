import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore, serverTimestamp } from '../../Firebase'
import Button from '../Button/Button'
import classes from './MessageForm.module.scss'

interface Props {

}

const MessageForm: React.FC<Props> = props => {
    const messageRef = firestore.collection("messages")
    const [message, setMessage] = useState("")
    const [user] = useAuthState(auth)

    const sendMessage = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser!
        await messageRef.add({
            text: message,
            senderName: user?.displayName,
            createdAt: serverTimestamp(),
            uid,
            photoURL
        })
        setMessage("")
    }

    return (
        <form onSubmit={sendMessage} className={classes.Form}>
            <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={e => { setMessage(e.target?.value) }}
                disabled={!user}
            />
            <Button variant="primary" type="submit" disabled={!(user && message)}>Submit</Button>
        </form>
    )
}

export default MessageForm
