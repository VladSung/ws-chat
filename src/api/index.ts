import { useState } from "react";
import { IMessage } from "../types";
import { MessageFactory } from "../utils/MessageFactory";

const createWSConnection = () => {
    return new WebSocket(import.meta.env.VITE_WS_URL);
}

export const useWebSocket = () => {
    const [ws, setWs] = useState(createWSConnection());
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [loading, setLoading] = useState(true)
    
    const messageFactory = new MessageFactory()
    
    ws.onopen = () => {
        setLoading(false);
    }

    ws.onclose = () => {
        setLoading(true);
        setWs(createWSConnection())
    }

    ws.onmessage = (event) => {
        const newMessage = messageFactory.parse(event.data);
        setMessages((prev) => ([...prev, newMessage]))
    }

    const sendMessage = (text: string) => {
        const message = messageFactory.create(text)
        ws.send(message)
    }

    return { messages, sendMessage, loading }
}