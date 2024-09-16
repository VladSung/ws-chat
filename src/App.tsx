import { useWebSocket } from './api'
import { MessageList } from './components/message-list'

function App() {
  
  const {messages, loading, sendMessage, clientId} = useWebSocket()

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {loading ? <div>Loading</div> :<MessageList clientId={clientId} messages={messages} sendMessage={sendMessage} />
      }
      </div>
    </>
  )
}

export default App
