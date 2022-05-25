import styles from '../styles/chatView.module.css'
import ChatHeader from './ChatHeader'
import MessageForm from './MessageForm'
import MessageCard from './MessageCard'

import { useContext } from 'react'
import { DiscordContext } from '../context/context'

const ChatView = () => {
    const { state } = useContext(DiscordContext)

    /* Get All the messages from the state -> filter them -> bring the ones that bellong to the selected chat   */
    const formattedMessagesArray = () => {
        const uniqueArray = state.messages.filter((value, index) => {
          const _value = JSON.stringify(value)
    
          return (
            index ===
            state.messages.findIndex(obj => {
              return JSON.stringify(obj) === _value
            })
          )
        })
    
        return uniqueArray
    }
    return (
        <div className={styles.chatView}>
            <ChatHeader />
            <div className={styles.messagesContainer}>
            {formattedMessagesArray().map((message, index) => (
                <MessageCard
                    key={index}
                    avatar={message.avatar}
                    sender={message.sender}
                    timestamp={message.createdAt}
                    content={message.content}
                />
            ))}
            </div>
            <MessageForm />
        </div>
    )
}

export default ChatView