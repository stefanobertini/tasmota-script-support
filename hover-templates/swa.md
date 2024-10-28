<span style='color:var(--vscode-symbolIcon-methodForeground);'>swa</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>ARRAY len flags</span>)

Send len bytes of an array to serial port  
If flags is set Modbus cmd is assumed and cksum is calculated, 0 = standard Modbus, 1 = Rec BMA mode

Serial IO support requires #define USE_SCRIPT_SERIAL