import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from './App.jsx'

injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
)
