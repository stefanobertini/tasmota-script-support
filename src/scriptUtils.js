const vscode = require('vscode');

function isStripComments(text) {
    const regex = /;\s*stripcomments/gmi;
	const match = regex.exec(text);
    return match;
}

function stripCrFromEol(text) {
    text = text.replace(/\r/gm, '');
	return text;
}

function getDocumentTextWithoutComments(text, eol) {
	const eolChar = eol==vscode.EndOfLine.LF ? "\n" : "\r\n";
	
    text = text.replace(/;.*$/gm, '');
    text = text.replace(/^(\s|\t)*/gm, '');
    text = text.split(eolChar).filter(line => line.trim() !== '').join(eolChar); 

	return text;
}

function preprocess(text, eol) {
	const eolChar = eol==vscode.EndOfLine.LF ? "\n" : "\r\n";

    const defines = new Set();
    const lines = text.split(eolChar);
    let result = [];
    let skip = false; 

    for (let line of lines) {
        const originalLine = line;
        line = line.trim();

        if (line.startsWith('#define')) {
            const identifier = line.substr(7).trim();
            defines.add(identifier);
        } else if (line.startsWith('#ifdef')) {
            const identifier = line.substr(6).trim();
            skip = !defines.has(identifier); 
        } else if (line.startsWith('#ifndef')) {
            const identifier = line.substr(7).trim();
            skip = defines.has(identifier); 
        } else if (line.startsWith('#endif')) {
            skip = false;
        } else if (!skip) {
            result.push(originalLine);
        }
    }

    return result.join(eolChar);
}

function getScriptSizeLimit(text) {
    const regex = /^; *scriptsize *= *(\d+) *$/gmi;
    const match = regex.exec(text);
    if (match) {
        const scriptSize = parseInt(match[1].trim(), 10);
        return scriptSize;
    } else {
        return -1;
    }
}


module.exports = { isStripComments, getDocumentTextWithoutComments, preprocess, getScriptSizeLimit, stripCrFromEol };

