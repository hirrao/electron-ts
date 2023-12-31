import { app, BrowserWindow } from "electron";
import * as path from "path";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
    height: 600,
  });
  mainWindow.setMenu(null);
  mainWindow.loadFile(path.join(__dirname, "../static/index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});