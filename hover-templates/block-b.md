<span style='color:var(--vscode-symbolIcon-methodForeground);'>>b</span> 

Executed on button state change

<span style='color:var(--vscode-symbolIcon-variableForeground);'>bt[x]</span>  
Read button state (x = 1.. MAX_KEYS)

**Example** 
``` 
>D
tmp=0
>b
tmp=bt[1]
if tmp==0  
then  
print falling edge of button1  
endif  
if tmp==1  
then  
print rising edge of button1  
endif
```
