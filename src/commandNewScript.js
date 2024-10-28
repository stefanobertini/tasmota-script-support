const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

async function commandNewScript(context) {

    const config = vscode.workspace.getConfiguration('tasmota-script-support');
    const customTemplatePath = config.get('customTemplatePath', '');
    const defaultTemplatePath = path.join(context.extensionPath, 'templates', 'template.tas');

    const templatePath = (customTemplatePath == null || customTemplatePath === "" || !fs.existsSync(customTemplatePath.trim())) ? defaultTemplatePath : customTemplatePath ;

    const fileContent = await readFile(templatePath.trim());

    const doc = await vscode.workspace.openTextDocument({
        content: fileContent,
        language: 'tasmota'
    });

    await vscode.window.showTextDocument(doc);
}

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = { commandNewScript };