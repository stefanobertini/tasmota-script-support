res =<span style='color:var(--vscode-symbolIcon-methodForeground);'>ct</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>num timer core (prio) (stack)</span>) 


Creates a task num (1 or 2) with optional priority and stack size which is executed every timer (ms) time on core 0 or 1

The sections are named
```
>t1 for task 1
>t2 for task 2
```
Requires #define USE_SCRIPT_TASK 

**Example**

```
>D
>B
; create task 1 every 1000 ms on core 0
ct(1 1000 0)
; create task 2 every 3000 ms on core 1
ct(2 3000 1)

>t1
print task1 on core %core%

>t2
print task2 on core %core%
```