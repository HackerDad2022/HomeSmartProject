import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role= "menubar"]');

navBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBtn.getAttribute
    ('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('(flex');
})

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
