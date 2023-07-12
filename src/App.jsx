import './App.css'

import Keyboard from './components/Keyboard/index'

function App() {
    return (
        <div className="App">
            <h1>Keyboard Test</h1>
            { /Mobi|Android|iPhone/i.test(navigator.userAgent) ? <h3>Please visit on a computer browser</h3> : <Keyboard /> }
        </div>
    )
}

export default App
