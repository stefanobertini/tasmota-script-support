<span style='color:var(--vscode-symbolIcon-methodForeground);'>>w ButtonLabel</span> 

gGenerates a button with the name *"ButtonLabel"* in Tasmota main menu.  
Clicking this button displays a web page with the HTML data of this section.  
All cmds like in >W apply here.  
These lines are refreshed frequently to show e.g. sensor values.  
Lines preceded by \$ are static and not refreshed and displayed below lines without $.  
This option also enables a full webserver interface when USE_UFILESYS is active.  
You may display files from the flash or SD filesystem by specifying the url: IP/ufs/path .  
(supported files: *.jpg, *.html, *.txt)

<span style='color:var(--vscode-symbolIcon-methodForeground);'>>w1 >w2 >w3 >w4 >w5 >w6</span>  same as above <span style='color:var(--vscode-symbolIcon-methodForeground);'>>w</span>  

Requires compiling with #define SCRIPT_FULL_WEBPAGE.