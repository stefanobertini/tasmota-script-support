# Tasmota Script Support

Streamline your ***Tasmota scripting*** workflow with this Visual Studio Code extension, designed to simplify the developement and upload of Tasmota scripts.  

This extension enhances the editing experience, adding features to manage code developement and allowing you to upload the script you're working on directly to your device with a single command.

Key features:
- [Syntax Highlighting](#Syntax-Highlighting)
- [Automatic script upload](#Automatic-script-upload)
- [#define, ifdef and ifndef preprocessor macros](##define,-ifdef-and-ifndef-preprocessor-macros)
- [Code Folding](#Code-Folding)
- [Hover hints on tasmota functions and variables documentation](#Hover-hints-on-tasmota-functions-and-variables-documentation)
- [Code Snippets](#Code-Snippets)
- [New Script Template](#New-Script-Template)

## Syntax Highlighting
![Syntax Highlighting](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/syntax-highlighting.gif?raw=true)

Simply save your scripts using the `.tas` or `.tasmota` extension to activate Tasmota grammar syntax highlighting.  

## Automatic script upload
![Script Upload](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/upload.gif?raw=true)

- **Automatic script upload**: 
Upload the script directly to your Tasmota device without leaving the editor.   
The extension uploads the content of the active editor, so there's no need to save the file you're editing before uploading.  
Just add a comment line with the IP Address or the name of your device,  
`;IP=<your_device_ip>` and then use the *Upload script to Tasmota* command.  
Use *Ctrl+Alt+u* on Windows/Linux or *Cmd+Alt+u* on Mac to trigger the command.

- **Automatic comment removal**: Clean up your code before uploading and save precious space by automatically stripping unnecessary comments, indentation and unuseful white spaces.  
You can now comment and indent your code as much as you like.  
Just add `;stripcomments` in your script file to activate this feature.

- **Script size calculation**: The status bar will display three counters showing:
  -  the plain script size
  -  the 'cleaned' script size (between ( ) )
  -  the remaining available characters (between [ ])  

  To use this feature, add `;scriptsize=<max_script_size>` in your script file to specify the maximum script dimension.  The check will not take into account the script compression algorithm executed by Tasmota.

## #define, ifdef and ifndef preprocessor macros
![preprocessor](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/preprocessor.gif?raw=true)


Dynamically add or remove parts of code in your script without having to comment and uncomment entire blocks of lines, simply by using preprocessor commands like `#define`, `#ifdef`, `#ifndef`.   
You can finally include all the debug messages you need and then remove them all at once.  
`#ifdef`, `#ifndef` directives cannot be nested.

## Code Folding
![Code Folding](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/folding.gif?raw=true) 
Automatic code folding for:
- Tasmota code blocks (>D >T ...)
- if...then...else and switch...case constructs
- function definitions

## Hover hints on tasmota functions and variables documentation
![Hover](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/default-hover.gif?raw=true)

![Variable Hover](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/variable-hover.gif?raw=true)

Hovering over a Tasmota function or a code block (>B, etc) will open a hint tooltip showing the description and the usage of the selected funtion.  

Adding appropriate comments before the declaration of each variable will allow you to always have the description of that variable's content available at any point in the code, simply by hovering over its name.  
Variable comments support markdown syntax.

## Code Snippets
![Snippets](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/snippets.gif?raw=true)

Start typing to instantly insert code snippets to:
- Add Device IP Comment
- Add ScriptSize
- Add StripComments
- Add #define DEBUG
- Add #ifdef DEBUG block
- Add #ifndef DEBUG block
- Create a button input component
- Create a checkbox input component
- Create a for-next loop
- Create a mapping function
- Create a multiline if-then-else
- Create an inline if-then-else
- Create a number input component
- Create a puilldown input component
- Create a radiobutton input component
- Create a sendmail command
- Create a slider input component
- Create a switch-case
- Create a text input component
- Create a time input component
- Set display special options

## New Script Template
![New Script Template](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/new-template.gif?raw=true)

Using the *Create new Tasmota script* command allows you to start from a pre-defined template and not from scratch.

You can use the default provided template or specify your own custom template using the extension configuration parameters.

## Configuration

Using the "*Preferences: Open Settings*" command you can configure the following settings:
- *tasmota-script-support.uploadTimeout*  
 Specifies the upload timeout (in milliseconds) used during script uploads.
- *tasmota-script-support.scriptSizeStatusBarItemRefreshTimeout*  
Refresh timeout for status bar indicator (in milliseconds).   
It is the amount of time the editor waits after your last keystroke before updating the stripped size of your script.
- *tasmota-script-support.customTemplatePath*  
It is the path to a custom template to be used by the 'Create new Tasmota script' command.  
Use null or "" to use the default provided template.

## Support and donate

Designed for developers working with Tasmota automation, this extension accelerates script deployment and boosts productivity.

If you use and appreciate this software, please consider the idea of supporting my efforts in mantaining it.

Thanks.

[![Donate](https://github.com/stefanobertini/tasmota-script-support/blob/develop/media/btn_donate_LG.gif?raw=true)](https://www.paypal.com/donate/?business=5RMJWB9RBHKXE&no_recurring=0&item_name=I+am+very+pleased+if+you+appreciate+my+open+source+software+and+if+you+want+to+help+support+my+efforts.&currency_code=EUR)


