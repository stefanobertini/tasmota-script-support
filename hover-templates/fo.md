fr = <span style='color:var(--vscode-symbolIcon-methodForeground);'>fo</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>fname m</span>) 

Open file fname.

Mode;
- 0 = read
- 1 = write
- 2 = append 

Returns file reference (0-3) or -1 for error 

Alternatively m may be:
- r = read
- w = write
- a = append 

For files on SD card, filename must be preceded with / e.g.   
fr=fo("/fname.txt" 0)
