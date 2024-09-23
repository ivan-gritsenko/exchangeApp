import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://noncopyright.com/wp-content/uploads/2018/10/rawpixel-666934-unsplash.jpg')" }}>
        <App />
      </div>
    </ErrorBoundary>
  </StrictMode>,
)
