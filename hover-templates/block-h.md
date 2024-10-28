<span style='color:var(--vscode-symbolIcon-methodForeground);'>>h passcode</span> 

Siri Homekit interface (up to 16 virtual Homekit devices)

passcode = 111-11-111 keep this format, numbers 0-9

<span style='color:var(--vscode-symbolIcon-variableForeground);'>device</span>
name,type,opt,var1,var2...

<span style='color:var(--vscode-symbolIcon-variableForeground);'>name</span> = device name (max 23 characters)  

<span style='color:var(--vscode-symbolIcon-variableForeground);'>type</span> = device type (HAP_CID)
- 7 = outlet, on/off
- 5 = light, on/off,hue,sat,bri
- 10 = sensor

<span style='color:var(--vscode-symbolIcon-variableForeground);'>opt</span> = sensor type
- 0 = Temperature,val
- 1 = Humidity,val
- 2 = Light level,val
- 3 = Battery status,level,low battery,charging
- 4 = Ambient light level with extended range -10000,+10000
- 5 = Contact Sensor (switch)

<span style='color:var(--vscode-symbolIcon-variableForeground);'>var1 ...</span> = variable name (max 11 characters) the variables denote scripting variables that need to be set by script
the special variables  
@px x (1..9) directly set, read power states e.g. relays  
@sx x (1..9) directly read switch state  
@bx x (1..9) directly read button state

**Example** 
``` 
>h 111-11-111
outlet,7,0,@p1 lamp1,5,0,pwr,hue,sat,bri
temperature,10,0,tval
```

A restart is required after modification of descriptor!  
By faulty parameters the homekit dataset may get corrupted  
To reset the homekit dataset completely type in console script>hki(89)

Compilation: needs to add in linker to build_flags  
-DUSE_HOMEKIT  
lib_extra_dirs  
lib/libesp32_div