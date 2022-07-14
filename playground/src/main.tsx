import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import App from './App'
import './styles/main.css'

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.querySelector('#app'),
)
