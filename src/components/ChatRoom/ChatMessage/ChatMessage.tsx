import React from 'react'
import { auth } from '../../../Firebase'
import Paragraph from '../../Paragraph/Paragraph'
import classes from './ChatMessage.module.scss'

interface Props {
    message: Message
}

const ChatMessage = React.forwardRef<HTMLDivElement, Props>(({ message }, ref) => {
    const isSent = message.uid === auth.currentUser?.uid
    return (
        <div className={`${classes.Message} ${isSent ? classes.Sent : ""}`} ref={ref}>
            <img src={message.photoURL} alt="user profile" />
            <Paragraph isSent={isSent}>{message.text}</Paragraph>
        </div>
    )
})

export default ChatMessage
