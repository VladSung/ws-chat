import { IMessage } from "../types";

export class MessageFactory {
    clientId: string;
    messagesCount: number = 0;

    constructor(){
        this.clientId = 'id'+ new Date().getDate()+Math.floor(Math.random()*100)
    }

    getClientId(){
        return this.clientId;
    }

    create(text:string){
        return JSON.stringify({
            clientId: this.clientId,
            text,
            timestamp: new Date().toString(),
            id: this.clientId + ++this.messagesCount
        })
    }

    parse(message:string){
        return JSON.parse(message) as IMessage
    }
}