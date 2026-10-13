import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './story-platform.css';
import './responsive.css';
import './universe.css';

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
