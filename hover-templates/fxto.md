<span style='color:var(--vscode-symbolIcon-methodForeground);'>fxto</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>fr ts_from ts_to col_offs accum array1 array2 ... arrayn</span>) 

Same as <span style='color:var(--vscode-symbolIcon-methodForeground);'>fxt</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>fr ts_from ts_to col_offs accum array1 array2 ... arrayn</span>)  with time optimized access.

Read arrays from csv file from timestamp to timestamp with column offset and accumulate values into arrays1 .. N

Assumes csv file with timestamp in 1. 

Column and data values in columns 2 to n.

Requires #define USE_FEXTRACT