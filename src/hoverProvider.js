const vscode = require('vscode');

const { hoverMap } = require('./hoverMap');

function provideHover(document, position, token) {
  let word = document.getText(document.getWordRangeAtPosition(position));
  const documentText = document.getText();
  let value;

  // Handles >x code blockss
  if (documentText === word) {
    const line = getLineAtIndex(documentText, position.line);
    word = adjustBlockName(line);
  }

  if (hoverMap.has(word)) {
    value = hoverMap.get(word);
  } else {
    // Handles >x code blockss
    const line = getLineAtIndex(documentText, position.line);
    const blockword = adjustBlockName(line);
    if (hoverMap.has(blockword)) {
      value = hoverMap.get(blockword);
    } else {
      const variableComment = findVariableComments(documentText, word);
      if (variableComment !== "") {
        value = variableComment;
      //} else {
      //  value = "Not found " + word;
      }
    }
  }

  const contents = new vscode.MarkdownString(value);

  contents.isTrusted = true;
  contents.supportHtml = true;
  contents.supportThemeIcons = true;

  return new vscode.Hover(contents);
}

function adjustBlockName(line) {
  let word = line.trim();

  if (word.length > 1 && word[1] === word[1].toUpperCase()) {
    const secondLetterLower = word[1].toLowerCase();
    // Prefix "capital-" plus the lowercase of the second letter
    word = word.slice(0, 1) + "capital-" + secondLetterLower + word.slice(2,3).toLowerCase();
  }
  word = word.replace(/>/g, 'block-');
  return word;
}

// Build hover from comments preceding a variable
function findVariableComments(documentText, word) {
  const lines = documentText.split('\n');
  let foundD = false;
  let comment = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimStart();
    
    //console.log(`Read line ${line}`);

    if (!foundD && line.startsWith(">D")) {
      foundD = true;
      //console.log(`Start parsing`);
      continue;
    }

    if (foundD) {
      if (line.startsWith(">")) {
        //console.log(`Finish parsing`);
        return "";
      }

      if (line.startsWith(";")) {
        if (comment != "") {
          comment += "\n";
        }
        comment += line.substr(1);
        //console.log(`Comment is ${comment}`);
        continue;
      }

      const regex = /^(?:.:)*(.*?)(?:[ =].*$|$)/gmi;
      const match = regex.exec(line);
      if (match) {
        //console.log(`Variable found ${match[1]}`);
        if (match[1] === word) {
          //console.log(`Match found: returning comments`);
          return comment + addVariableModifiers(line);
        } else {
          //console.log(`Wrong variable`);
          comment = "";
        }
      }
    }
  }
  return "";
}

function addVariableModifiers(text) {
  let ret = "";
  if (text.includes("t:")) {
    ret += "Countdown timer";
  }

  if (text.includes("i:")) {
    ret += "Auto increment counter";
  }

  if (text.includes("g:")) {
    ret += "Global variable";
  }

  if (text.includes("I:")) {
    ret += "Integer 32 bit variable";
  }

  if (text.includes("m:")) {
    ret += "Median filter variable";
  }

  if (text.includes("M:")) {
    ret += "Moving average filter variable";
  }

  if (text.includes("p:")) {
    if (ret != "") {
      ret += "  \n";
    }
    ret += "Permanent variable";
  }

  if (ret != "") {
    ret = "  \n" + "  \n" + ret;
  }
  return ret;
}
function getLineAtIndex(documentText, index) {
  const lines = documentText.split('\n');
  const line = lines[index];
  return line;
}

module.exports = { provideHover };