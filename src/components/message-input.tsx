import { FormEventHandler, useRef } from "react"
import classes from './styles.module.css'

type MessageInputProps = {
    onSubmit: (text:string)=>void
}

export const MessageInput = ({onSubmit}:MessageInputProps)=>{
    const input = useRef<HTMLInputElement>(null)

    const onSubmitHandler:FormEventHandler<HTMLFormElement> = (event)=>{
        event.preventDefault();

        if(input.current?.value) onSubmit(input.current?.value)
    }

    return <form action='' className={classes.messageInput} method="POST" onSubmit={onSubmitHandler}>
        <input placeholder="start typing..." minLength={1} ref={input}/>
        <button type="submit">Send</button>
    </form>
} 