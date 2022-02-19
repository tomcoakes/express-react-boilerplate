import * as ReactDOM from 'react-dom'

function App() {
  return <p>hello there!!!</p>
}

const domContainer = document.querySelector('#app')

ReactDOM.render(<App />, domContainer)
