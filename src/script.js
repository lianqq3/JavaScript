console.log("whats up mga burat")

const { ipcRenderer } = require('electron');

ipcRenderer.on('window-loaded', () => {
    const buttonA = document.getElementById('Button_A');
    const headingA = document.getElementById('heading_A');

    buttonA.addEventListener('click', () =>{
        const name = prompt("What is your name?");
        alert(`Hello Name ${name}, its nice to see you!`);
        headingA.textContent = `Welcome ${name}`;
    });
});

