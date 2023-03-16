import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementsByTagName("main")[0] as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
