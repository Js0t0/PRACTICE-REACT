import React from 'react'
import ReactDOM from 'react-dom/client'
import {ColorChanger} from './ColorChanger'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorChanger color_componente='blue'/>
  </React.StrictMode>,
)
