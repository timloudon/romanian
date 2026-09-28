import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { requestPersistentStorage } from './storage/persistence'

void requestPersistentStorage()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Hash routing (URLs like .../#/review) instead of BrowserRouter: GitHub Pages has no
        server-side rewrite for a client-side router, so a direct link or a refresh on any
        route but "/" would 404 without it. */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
