import { IMessage } from "../types";
import { colorFromId } from "../utils/colorFromId";
import classes from './styles.module.css'


declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

type MessageProps = {
    message: IMessage
    clientId: string
}

export const Message = ({message, clientId}:MessageProps)=>{
    return <div className={classes.message} style={{'--message-color':colorFromId(message.clientId, 20)}}>
        {clientId === message.clientId && <span className={classes.text}>ME:</span>}
        <span className={classes.text}>{message.text}</span>
        <span className={classes.date}>{message.timestamp}</span>
    </div>
}