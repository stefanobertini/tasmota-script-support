const vscode = require('vscode');

 function provideFoldingRanges(document, context, token) {

    const foldingRanges = [];
    const startPattern = /^\s*>(B|BS|D|d|E|F|S|R|H|h|U|C|G|P|jp|T|t1|t2|ti1|ti2|ti3|ti4|b|J|W|WS|WM).*$/;  // Match lines containing > code block start
    const functionPattern = /^(\s*#(?!define|ifdef|ifndef|endif)\w+)/;  // Match lines that define a function name

    let startLine = null;
    let startStack = []; // Stack to store start lines for constructs like if/for/switch

    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i);
        if (startPattern.test(line.text) || functionPattern.test(line.text)) {
            if (startLine === null) {
                startLine = i;
            } else {
                foldingRanges.push(new vscode.FoldingRange(startLine, i - 1));
                startLine = i;
            }
        }
    }

    // If a folding block was started but not closed, close it at the end of the document
    if (startLine !== null && startLine < document.lineCount - 1) {
        foldingRanges.push(new vscode.FoldingRange(startLine, document.lineCount - 1));
    }

    //console.log("-----")
    let isFirstCase = false;
    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i).text.trim();

        if (/^\s*(}(?!\s*else)|endif|next)\s*/.test(line)) {
            //console.log("Pop: " + line)
            const start = startStack.pop();
            if (start !== undefined) {
                //console.log("AddRange: " + start + "-" + i);
                foldingRanges.push(new vscode.FoldingRange(start, i, vscode.FoldingRangeKind.Region));
            }
        }

        if (/^\s*(}\s*else\s*{)\s*/.test(line)) {
            //console.log("Pop: " + line)
            const start = startStack.pop();
            if (start !== undefined) {
                //console.log("AddRange: " + start + "-" + (i-1));
                foldingRanges.push(new vscode.FoldingRange(start, (i-1), vscode.FoldingRangeKind.Region));
            }
        }

        if (/^\s*(case)\s*/.test(line)) {
            //console.log("isFirstCase: " + isFirstCase)
            if(isFirstCase) {
                isFirstCase = false;
            } else {
                //console.log("Pop: " + line)
                const start = startStack.pop();
                if (start !== undefined) {
                    //console.log("AddRange: " + start + "-" + (i-1));
                    foldingRanges.push(new vscode.FoldingRange(start, (i-1), vscode.FoldingRangeKind.Region));
                }
            }
        }
        if (/^\s*(case)\s*/.test(line)) {
            startStack.push(i);
            //console.log("Push: " + line)
        } 

        if (/^\s*(if|}\s*else\s*{|switch|for)\s*/.test(line)) {
            isFirstCase = true;
            startStack.push(i);
            //console.log("Push: " + line)
        } 
        if (/^\s*(ends)\s*/.test(line)) {
            //console.log("Pop: " + line)
            let start = startStack.pop();
            if (start !== undefined) {
                //console.log("AddRange: " + start + "-" + (i-1));
                foldingRanges.push(new vscode.FoldingRange(start, (i-1), vscode.FoldingRangeKind.Region));
            }
            start = startStack.pop();
            if (start !== undefined) {
                //console.log("AddRange: " + start + "-" + i);
                foldingRanges.push(new vscode.FoldingRange(start, i, vscode.FoldingRangeKind.Region));
            }
        }        
    }

    return foldingRanges;
}

module.exports = { provideFoldingRanges };
