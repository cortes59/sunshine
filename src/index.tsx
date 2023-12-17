import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

import './index.css'

import App from './App'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ThemeProvider } from '@mui/material'
import theme from './config/theme'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>
)
