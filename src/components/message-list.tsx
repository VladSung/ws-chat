import { IMessage } from "../types"
import { colorFromId } from "../utils/colorFromId"
import { Message } from "./message"
import { MessageInput } from "./message-input"
import classes from './styles.module.css'

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

type MessageListProps = {
    messages: IMessage[]
    sendMessage: (text: string)=>void
    clientId: string
}

export const MessageList = ({messages, sendMessage, clientId}: MessageListProps)=>{
    const messagesList = messages.map((msg)=>(
        <Message key={msg.id} clientId={clientId} message={msg} />
    ))

    return <div style={{'--message-input': colorFromId(clientId, 40)}} className={classes.messageList}>
         <div className={classes.messageListInner}>
        {messagesList}
         </div>

        <MessageInput onSubmit={sendMessage}/>
    </div>
}