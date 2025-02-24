import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import store from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Provider store={store}>
 <ThemeProvider>
  <App />
  </ThemeProvider>
 </Provider>
  </StrictMode>,
)
