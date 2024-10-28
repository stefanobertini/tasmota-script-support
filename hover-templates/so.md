<span style='color:var(--vscode-symbolIcon-methodForeground);'>so</span>(<span style='color:var(--vscode-symbolIcon-variableForeground);'>flags</span>)  

*Special html options:*  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>WSO_NOCENTER</span> = 1 force elements not centered  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>WSO_NODIV</span> = 2 force elements not in extra \\\<div>
<span style='color:var(--vscode-symbolIcon-variableForeground);'>WSO_FORCEPLAIN</span> = 4 send line in plain (no table elements)  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>WSO_FORCEMAIN</span> = 8 send lines in main mode 

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>so</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>RXPIN TXPIN BR</span>)  
<span style='color:var(--vscode-symbolIcon-methodForeground);'>so</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>RXPIN TXPIN BR MMM</span>)  
<span style='color:var(--vscode-symbolIcon-methodForeground);'>so</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>RXPIN TXPIN BR MMM BSIZ</span>) 

Open serial port with:
- RXPIN
- TXPIN 
- BR baud rate
- MMM serial mode e.g 7E2 (all 3 modechars must be specified) 
- BSIZ serial IRW buffer size

Serial IO support requires #define USE_SCRIPT_SERIAL
