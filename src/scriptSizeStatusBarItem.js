const vscode = require('vscode');
const scriptUtils = require('./scriptUtils');

let refreshTimeout;
function scriptSizeStatusBarItem() {

	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.hide(); 

	const config = vscode.workspace.getConfiguration('tasmota-script-support');
    refreshTimeout = config.get('scriptSizeStatusBarItemRefreshTimeout', 1500); 

    let timeout = undefined;

    // Refresh timeout when configuration changes
	vscode.workspace.onDidChangeConfiguration(event => {
        let affected = event.affectsConfiguration("tasmota-script-support.scriptSizeStatusBarItemRefreshTimeout");
        if (affected) {
            const config = vscode.workspace.getConfiguration('tasmota-script-support');
            refreshTimeout = config.get('scriptSizeStatusBarItemRefreshTimeout', 1500); 
        }   
    })

    const countCharactersWithStrippedComments = () => {
        countCharacters(true);
    };

	function countCharacters (doStrippedCommentCount) {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            
            const document = editor.document;
            const language = editor.document.languageId;
            if (language === 'tasmota') {
                let text = document.getText();
                
                // Apply #ifdef and #ifndef directives
		        text = scriptUtils.preprocess(text, document.eol)
                const characterCount = text.length;
                const scriptSizeLimit = scriptUtils.getScriptSizeLimit(text); 

				let statusBarItemText;

				if (doStrippedCommentCount && scriptUtils.isStripComments(text)) {
					const strippedText = scriptUtils.getDocumentTextWithoutComments(text, document.eol);
					const strippedCount = strippedText.length;

                    if (scriptSizeLimit >= 0) {
                        const delta = scriptSizeLimit - strippedCount;
                        statusBarItemText = vscode.l10n.t("Script Size {0} ({1}) [-{2}]", characterCount, strippedCount, delta);
                    } else {
					    statusBarItemText = vscode.l10n.t("Script Size {0} ({1})", characterCount, strippedCount);
                    }
				} else {

                    if (scriptSizeLimit >= 0) {
                        const delta = scriptSizeLimit - characterCount;
                        statusBarItemText = vscode.l10n.t("Script Size {0} [-{1}]", characterCount, delta);
                    } else {
					    statusBarItemText = vscode.l10n.t("Script Size {0}", characterCount);
                    }                    
                	
				}

				statusBarItem.text = statusBarItemText;
                statusBarItem.show(); 
            } else {
                statusBarItem.hide(); 
            }
        } else {
            statusBarItem.hide(); 
        }
    };

    // Listens on editor changes
    vscode.workspace.onDidChangeTextDocument(() => {
        if (timeout) {
            clearTimeout(timeout);
        }
        
        // Immediatelly count real characters
		countCharacters(false);

        // After the timeout, count also stripping comments
        timeout = setTimeout(countCharactersWithStrippedComments, refreshTimeout); 
    });

    // Listens when the active editor changes
    vscode.window.onDidChangeActiveTextEditor(() => {
        countCharactersWithStrippedComments();
    });

    // At startup, count immediatelly with stripped comments
    countCharacters(true);
}


module.exports = { scriptSizeStatusBarItem };