const vscode = require('vscode');
const scriptUtils = require('./scriptUtils');

const axios = require('axios');
const FormData = require('form-data');

function commandUpload() {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage(vscode.l10n.t('No open file.'));
		return;
	}

	let text = editor.document.getText();
	const regex = /^;ip=(.*)/gmi;
	const match = regex.exec(text);
	if (match) {
		const ipAddress = match[1].trim();
		
		// Apply #ifdef and #ifndef directives
		text = scriptUtils.preprocess(text, editor.document.eol)

		if (scriptUtils.isStripComments(text)) {
			text = scriptUtils.getDocumentTextWithoutComments(text, editor.document.eol)
		}

		vscode.window.showInformationMessage(vscode.l10n.t("Uploading to {0}", ipAddress));

		sendFile(text, ipAddress);

	} else {
		vscode.window.showInformationMessage(vscode.l10n.t('Please, insert a comment line with the ip address of your device.\n\n;IP=<your tasmota device ip>'), { modal: true });
	}
}

async function sendFile(text, ipAddress) {
    const form = new FormData();
	const config = vscode.workspace.getConfiguration('tasmota-script-support');
    const timeout = config.get('uploadTimeout', 5000); 

    form.append('uploaded', text, 'execute_script');

    try {
        const response = await axios.post(`http://${ipAddress}/exs?execute_script`, form, {
            headers: {
                ...form.getHeaders(),
                'Content-Disposition': 'form-data; name="uploaded"; filename="execute_script"'
            },
			timeout: timeout
        });

        vscode.window.showInformationMessage(vscode.l10n.t('File sent to: {0}, status: {1}, message: {2}' , ipAddress, response.statusText, response.data));
    } catch (error) {
        vscode.window.showErrorMessage(vscode.l10n.t('Error uploading file: {0}', error.message));
    }
}

module.exports = { commandUpload };