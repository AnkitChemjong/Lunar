import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './compo/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(  
    <AppProvider>
        <App />
    </AppProvider>
)
