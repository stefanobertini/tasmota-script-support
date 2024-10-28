<span style='color:var(--vscode-symbolIcon-methodForeground);'>>H</span> 

Alexa Hue interface (up to 32 virtual hue devices)  
[See example here](https://tasmota.github.io/docs/Scripting-Language/#hue-emulation)

<span style='color:var(--vscode-symbolIcon-variableForeground);'>device, type, onVars</span>

Remark: hue values have a range from 0-65535.  Divide by 182 to assign HSBcolors hue values.

<span style='color:var(--vscode-symbolIcon-variableForeground);'>device</span> = device name  

<span style='color:var(--vscode-symbolIcon-variableForeground);'>type</span> = device type - E = extended color; S = switch  

<span style='color:var(--vscode-symbolIcon-variableForeground);'>onVars</span> = assign Hue "on" extended color parameters for hue, saturation, brightness, and color temperature (hue,sat,bri,ct) to scripter variables

**Example** 
``` 
lamp1,E,on=pwr1,hue=hue1,sat=sat1,bri=bri1,ct=ct1
```