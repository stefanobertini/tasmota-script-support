<span style='color:var(--vscode-symbolIcon-methodForeground);'>ow</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>SEL &lt;opt PAR&gt;</span>) 

Onewire support requires #define USE_SCRIPT_ONEWIRE  

- SEL 0 = init bus with pin number N (if bit 15 ist set, select serial DS2480B, lsb = rec pin, msb = trx pin)  
- SEL 1 = reset cmd
- SEL 2 = skip cmd
- SEL 3 = write PAR
- SEL 4 = read
- SEL 5 = reset search cmd
- SEL 6 = search cmd addr index PAR
- SEL 7 = select cmd addr index PAR SEL 8 = select and set bits index PAR
- SEL 9 = select and read word index PAR bit 7 = 0 start, bit 7 = 1 read result
- SEL 10-18 = get byte (1-8) of adress from index PAR
- SEL 99 = delete bus driver



Support for onewire either directly or via serial port with onewire bus driver DS2480B