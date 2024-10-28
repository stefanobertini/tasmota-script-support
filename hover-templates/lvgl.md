<span style='color:var(--vscode-symbolIcon-methodForeground);'>lvgl</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>sel ...</span>) 

General lvgl call.  
Each object gets a concurrent number 1 ... N with which you can reference the object 

- sel = 0 => initialize LVGL with current display - sel = 1 => clear screen
- sel = 2 xp yp xs ys text => create a button. the button press is reported in section >lvb
- sel = 3 xp yp xs ys => create a slider. the slider move is reported in section >lvs
- sel = 4 xp yp xs ys min max => create a gauge.
- set = 5 objnr value => set gauge value.
- sel = 6 xp yp xs ys text => create a label.
- sel = 7 objnr text => set label text
- sel = 8 create a keyboard, just get a look and feel
- sel = 50 => get obj nr from caller in callback >lvb or >lvs
- sel = 51 => get event nr from caller in callback >lvb or >lvs
- sel = 52 => get slider value from caller in callback >lvs

Requires #define USE_LVGL 
