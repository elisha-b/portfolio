import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

let cursorLight = document.getElementById("cursor-light");

function istouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
    var x = !istouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !istouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  cursorLight.style.left = x + "px";
  cursorLight.style.top = y + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});
document.addEventListener("touchmove", (e) => {
  move(e);
});
