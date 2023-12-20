const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win;

const createWindow = () => {
	const name = require('./package.json').name;
	const version = require('./package.json').version;
	win = new BrowserWindow({
		title: `${name} - ${version}`,
		width: 1280,
		height: 720,
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#2f3241',
			symbolColor: '#74b1be',
			height: 60,
		},
	});
	win.setMenu(null);
	// win.setBackgroundColor('#eee');

	// win.setTitle(`${name} - ${version}`);

	// win.loadFile('./dist/test-v17/browser/index.html');
	const indexPathname = path.join(__dirname, 'dist/test-v17/browser/index.html');
	// console.log('pathname : ', indexPathname);
	win.loadURL(
		url.format({
			pathname: indexPathname,
			protocol: 'file:',
			slashes: true,
		})
	);
};

// app.whenReady().then(() => {
// 	createWindow();
// });
app.on('ready', createWindow);

// win.webContents.on('did-finish-load', () => {
// 	const name = require('./package.json').name;
// 	const version = require('./package.json').version;
// 	win.setTitle(`${name} - ${version}`);
// });
