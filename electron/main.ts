import { app, BrowserWindow, shell } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
function create(){const win=new BrowserWindow({width:1480,height:940,minWidth:1080,minHeight:700,backgroundColor:'#08090c',titleBarStyle:'hidden',titleBarOverlay:{color:'#0b0c0f',symbolColor:'#a8abb4',height:40},webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});win.webContents.setWindowOpenHandler(({url})=>{if(url.startsWith('https:')) shell.openExternal(url);return{action:'deny'}});win.webContents.on('will-navigate',(e,url)=>{if(!url.startsWith('file:')) e.preventDefault()});win.loadFile(path.join(here,'../dist/index.html'));}
app.whenReady().then(create);app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)create()});
