import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Portal } from './logic/Portal';
import './styles/base.css';
import './styles/pseudo.css';
import './styles/portal.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portal />
  </StrictMode>,
);
