import App from '@components/App.jsx';
import Lenis from '@studio-freight/lenis';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

/* LENIS */
const lenis = new Lenis({ lerp: 0.2 });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
/* /LENIS */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
