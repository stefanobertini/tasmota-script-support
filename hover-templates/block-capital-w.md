<span style='color:var(--vscode-symbolIcon-methodForeground);'>>W</span> 

The lines in this section are displayed in the web UI main page.  
Requires compiling with <span style='color:var(--vscode-symbolIcon-variableForeground);'>#define USE_SCRIPT_WEB_DISPLAY</span>  

You may put any html code here.
- Variables may be substituted using %var%
- HTML statements are displayed in the sensor section of the main page
- HTML statements preceded with a @ are displayed at the top of the page
- HTML statements preceded with a $ are displayed in the main section
- USER IO elements are displayed at the top of the page


For next loops are supported to repeat HTML code (precede with % char) <span style='color:var(--vscode-symbolIcon-variableForeground);'>%for var from to inc %next</span> 

This method is preferred: script subroutines may be called <span style='color:var(--vscode-symbolIcon-variableForeground);'>sub=name of subroutine</span>, like normal subroutines %=#sub in this subroutine a web line may be sent by <span style='color:var(--vscode-symbolIcon-variableForeground);'>wcs</span>  (see below) thus allowing dynamic HTML pages.

<span style='color:var(--vscode-symbolIcon-variableForeground);'>=#sub(x)</span> in any position of webline calls subroutine.  
This allows inserting content.

<span style='color:var(--vscode-symbolIcon-variableForeground);'>insa(array)</span> in any position insert all elements from an array comma separated.

<span style='color:var(--vscode-symbolIcon-variableForeground);'>%/file</span>  calls a file from the file system and send its content to browser.  
In this file any cmds may apply.