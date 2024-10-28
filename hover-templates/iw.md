<span style='color:var(--vscode-symbolIcon-methodForeground);'>iw</span> [<span style='color:var(--vscode-symbolIcon-variableForeground);'>aa val</span>], <span style='color:var(--vscode-symbolIcon-methodForeground);'>iw1</span> [<span style='color:var(--vscode-symbolIcon-variableForeground);'>aa val</span>],
<span style='color:var(--vscode-symbolIcon-methodForeground);'>iw2</span> [<span style='color:var(--vscode-symbolIcon-variableForeground);'>aa val</span>], <span style='color:var(--vscode-symbolIcon-methodForeground);'>iw3</span> [<span style='color:var(--vscode-symbolIcon-variableForeground);'>aa val</span>]  

Write val to register aa (1..3 bytes)  

If in aa bit 15 is set no, destination register is transfered (needed for some devices)  
If bit 14 is set byte order is reversed

I2C support requires #define USE_SCRIPT_I2C
