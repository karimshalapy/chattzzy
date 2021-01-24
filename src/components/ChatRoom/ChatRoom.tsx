import React, { useEffect, useRef, memo } from 'react'
import { firestore } from '../../Firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage/ChatMessage'
// import classes from

interface Props {

}

const ChatRoom: React.FC<Props> = props => {

    const messageRef = firestore.collection("messages")
    const query = messageRef.orderBy('createdAt').limit(75)
    const [messages] = useCollectionData<Message>(query, { idField: "id" })
    const messageElementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(messages)
        messageElementRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div>
            {
                messages
                && messages.map((item) => (
                    <ChatMessage key={item.id} message={item} ref={messageElementRef} />
                ))
            }
        </div>
    )
}

export default memo(ChatRoom)
