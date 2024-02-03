import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//hmne App wala function import kr lia ab neeche html ke andr(embaaded javascript ki form mein)App ko call kr rhe hai 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
