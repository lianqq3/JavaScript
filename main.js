const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow; // Declare a variable to store the reference to the main window

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 768,
        height: 560,
    });

    mainWindow.loadFile('src/index.html');

    // Send a message to the renderer process after the window is ready
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('window-loaded');
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Handle the 'button-click' event sent from the renderer process
ipcMain.on('button-click', (event, name) => {
 
    alert(`Hello ${name}, nice to see you!`);
    mainWindow.webContents.send('update-heading', name);
});
