<span style='color:var(--vscode-symbolIcon-methodForeground);'>sml</span> [<span style='color:var(--vscode-symbolIcon-variableForeground);'>n</span>] 

Get value of SML energy register n

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>sml</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>m 0 bd</span>)

Set SML baud rate of Meter m to bd (baud)

---
<span style='color:var(--vscode-symbolIcon-methodForeground);'>sml</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>m 1 htxt</span>) 

Send SML Hex string htxt as binary to Meter m

---
<span style='color:var(--vscode-symbolIcon-methodForeground);'>sml</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>-m 1 initstr</span>)

Reinits serial port of Meter m, initstr: "baud:mode" e.g. "9600:8E1", currently only baud and N,E,O are evaluated.

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>sml</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>m 2</span>)

Reads serial data received by Meter m into string (if m<0 reads hex values, else asci values) 

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>sml</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>m 3 hstr</span>)

Inserts SML Hexstring variable hstr as binary to Meter m in Output stream 

e.g. for special MODBUS cmds, hstr must be a string variable NO string constant

