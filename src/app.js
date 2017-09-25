const { app, globalShortcut } = require('electron')
const macros = require('./macros')

app
  .on('ready', () => {
    Object.keys(macros).forEach(key => {
      const fn = macros[key]
      globalShortcut.register(key, fn)
      console.log(`Registered key "${key}" to run command "${fn.name}"`)
    })
  })
  .on('window-all-closed', () => app.quit())