<span style='color:var(--vscode-symbolIcon-methodForeground);'>>D ssize</span> 

ssize = optional max string size  
(default=19, max=48 unless increased with #define SCRIPT_MAXSSIZE)

Define and init variables here, must be the first section, no other code allowed.

<span style='color:var(--vscode-symbolIcon-variableForeground);'>p:vname</span>
specifies permanent variables.  
The number of permanent variables is limited by Tasmota rules space (50 bytes).  
Numeric variables are 4 bytes; string variables are one byte longer than the length of string.  
p vars are stored sequentially in the order of defintion. Therefore when specifing permanent variables, add newly defined ones always at the end of already defined p vars. otherwise variables are mixed up and string variables may even be destroyed.  

<span style='color:var(--vscode-symbolIcon-variableForeground);'>t:vname</span>
specifies countdown timers, if >0 they are decremented in seconds until zero is reached.  

<span style='color:var(--vscode-symbolIcon-variableForeground);'>i:vname</span>
specifies auto increment counters if = 0 (in seconds)

<span style='color:var(--vscode-symbolIcon-variableForeground);'>g:vname</span>
specifies global variable which is linked to all global variables with the same definition on all devices in the homenet.  
When a variable is updated in one device it is instantly updated in all other devices.  
If a section <span style='color:var(--vscode-symbolIcon-methodForeground);'>>G</span>  exists it is executed when a variable is updated from another device (this is done via UDP-multicast, so not always reliable) the global variable receiver may be reset by cmd gvr.

<span style='color:var(--vscode-symbolIcon-variableForeground);'>I:vname</span>
specifies an integer 32 bit variable instead of float. (limited support)  
Integer constants must be preceeded by '#'

<span style='color:var(--vscode-symbolIcon-variableForeground);'>m:vname</span>
specifies a median filter variable with 5 entries (for elimination of outliers)

<span style='color:var(--vscode-symbolIcon-variableForeground);'>M:vname</span>
specifies a moving average filter variable with 8 entries (for smoothing data, should be also used to define arrays) (max 5 filters in total m+M) optional another filter length (1..127) can be given after the definition.  
Filter vars can be accessed also in indexed mode <span style='color:var(--vscode-symbolIcon-variableForeground);'>vname[x]</span>  
(x = 1..N, x = 0 returns current array index pointer (may be set also), x = -1 returns array length, x = -2 returns array average)  
Using this filter, vars can be used as arrays, #define LARGE_ARRAYS allows for arrays up to 1000 entries  
Array may also be permanent by specifying an extra :p <span style='color:var(--vscode-symbolIcon-variableForeground);'>m:p:vname</span> defines a permanent array.  

Keep in mind however that in 1M Flash standard configurations you only have 50 bytes permanent storage which stands for a maximum of 12 numbers.  
(see list above for permanent storage in other configurations)  

Arrays may also be preset in auto increment mode  
array=X sets the value at index array[0] and increments the index by 1  
array = {x y z} sets 3 values in an array from index array[0]