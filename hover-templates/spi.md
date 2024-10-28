SPI IO support 

Requires #define USE_SCRIPT_SPI

<span style='color:var(--vscode-symbolIcon-methodForeground);'>spi</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>0 SCLK MOSI MISO</span>) 

Defines a software SPI port with pin numbers used for SCLK, MOSI, MISO  

<span style='color:var(--vscode-symbolIcon-methodForeground);'>spi</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>0 -1 freq</span>) 

Defines a hardware SPI port with pin numbers defined by Tasmota GPIO definition with bus frequency in Mhz.

<span style='color:var(--vscode-symbolIcon-methodForeground);'>spi</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>0 -2 freq</span>) 

Defines a hardware SPI port 2 on ESP32 with pin numbers defined by Tasmota GPIO definition

<span style='color:var(--vscode-symbolIcon-methodForeground);'>spi</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>1 N GPIO</span>) 

Sets the CS pin with index N (1..4) to pin Nr GPIO

<span style='color:var(--vscode-symbolIcon-methodForeground);'>spi</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>2 N ARRAY LEN S</span>) 

Sends and receives an ARRAY with LEN values 
With S (1..3) (8,16,24 bits)  
If N==-1 CS is ignored.  
If S==4 CS is raised after each byte.

