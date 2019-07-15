const {app, BrowserWindow} = require('electron')


let win
// default create window
createWindow = async () => {
    win = new BrowserWindow({ width : 800, height : 600, webPreferences: {nodeIntegration : true}})

    win.loadFile('index.html')

    // Open the devtools
    win.webContents.openDevTools()
    
    
    // Emitted when the windows is closed 
    win.on('closed',() => {
        win = null
    })
}



app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})

app.on('activate',() => {
    if(win === null) createWindow()
})