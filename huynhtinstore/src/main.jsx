import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reduxtoolkit/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="769823989526-9be21mf3e0ch7pkoihl8ol0dd53lssso.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>

)
