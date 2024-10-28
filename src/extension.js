const vscode = require('vscode');

const { provideHover } = require('./hoverProvider');
const { provideFoldingRanges } = require('./foldingProvider');

const { commandUpload } = require('./commandUpload');
const { commandNewScript } = require('./commandNewScript');

const { scriptSizeStatusBarItem } = require('./scriptSizeStatusBarItem');

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
		
	const disposableCommandUpload = vscode.commands.registerCommand('tasmota-script-support.commandUpload', commandUpload);
	const disposableCommandNewScript = vscode.commands.registerCommand('tasmota-script-support.commandNewScript', async () => { await commandNewScript(context)});
	const disposableHoverProvider = vscode.languages.registerHoverProvider("tasmota", { provideHover });
	const disposableFoldingProvider = vscode.languages.registerFoldingRangeProvider ('tasmota', { provideFoldingRanges });

	context.subscriptions.push(disposableCommandUpload);
	context.subscriptions.push(disposableCommandNewScript);
	context.subscriptions.push(disposableHoverProvider);
	context.subscriptions.push(disposableFoldingProvider);

	scriptSizeStatusBarItem();
}

function deactivate() {
}

module.exports = {
	activate,
	deactivate
}
