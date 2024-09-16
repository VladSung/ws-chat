export const colorFromId = (clientId:string, alpha?:number)=>{
    return `hsl(${clientId.slice(3,5)}deg 56.44% 47.61% / ${alpha || 20}%)`
}