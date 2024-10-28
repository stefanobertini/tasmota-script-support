<span style='color:var(--vscode-symbolIcon-methodForeground);'>sra</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>ARRAY flags</span>)  
<span style='color:var(--vscode-symbolIcon-methodForeground);'>sra</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>len ARRAY flags</span>)

Fill an array from serial port.  
If USE_SML_M is enabled and Array size is 8 it is assumed to be a MODBUS request and the checksum is evaluated.  

if OK 8 is returned, else -2, or if flags is set Modbus response is assumed and ckum is calculated, 0 = standard Modbus, 1 = Rec BMA mode, return -2 on checksum error

Serial IO support requires #define USE_SCRIPT_SERIAL