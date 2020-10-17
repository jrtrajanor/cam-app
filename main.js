const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 640,
    height: 360,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    transparent: true,
    resizable: false
  })

  // e carrega o arquivo index.html do seu aplicativo.
  win.loadFile('index.html')

  
  win.setAlwaysOnTop(true, 'screen');
  
  win.on('will-move', function (event, rect) {
    //const { width, height } = screen.getPrimaryDisplay().workAreaSize

    //rect.height + rect.y > height && event.preventDefault()
    //rect.width + rect.x > width && event.preventDefault()

  })


/*
  mainWindow.on('minimize', function(event) {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on('close', function (event) {
    if (!app.isQuiting) {
        event.preventDefault();
        mainWindow.hide();
    }
    return false;
  });
  */

}

app.whenReady().then(createWindow)
