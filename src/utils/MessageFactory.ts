import { IMessage } from "../types";

export class MessageFactory {
    private _clientId: string;
    messagesCount: number = 0;

    constructor(){
        this._clientId = 'id'+ Math.floor(Math.random()*360) + new Date().getDate()
    }

    getClientId(){
        return this._clientId;
    }

    create(text:string){
        return JSON.stringify({
            clientId: this._clientId,
            text,
            timestamp: new Date().toISOString(),
            id: this._clientId + ++this.messagesCount
        })
    }

    async parse(message:Blob){
        return JSON.parse(await message.text()) as IMessage
    }
}