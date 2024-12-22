import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './Store/store.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
      </BrowserRouter>
  </StrictMode>,
)