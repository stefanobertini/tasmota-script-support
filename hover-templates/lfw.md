<span style='color:var(--vscode-symbolIcon-methodForeground);'>lfw</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>fname payload limit</span>) 

Logs a string (payload) to a file (fname) with size limit (limit)  
Payload is added to end of file together with a LF character.  
If file size is exceeded, the first line of file is removed.

Requires #define USE_SCRIPT_FATFS_EXT