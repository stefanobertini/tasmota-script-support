<span style='color:var(--vscode-symbolIcon-methodForeground);'>gc</span>(<span style='color:var(--vscode-symbolIcon-variableForeground);'>T (size) array1 ... array4 "name" "label1" ... "label4" "entrylabels" "header" {"maxy1"} {"maxy2"}</span>)

Creates a *Graph control*

<span style='color:var(--vscode-symbolIcon-variableForeground);'>T</span> = type  
- b=barchart
- c=columnchart
- cs=columnchart stacked - C=combochart
- p=piechart
- l=linechart up to 4 lines with same scaling
- l2=linechart with exactly 2 lines and 2 y scales (must be given at end)
- lf2 like above but with splined lines
- h=histogram
- t=data table
- g=simple gauges (must give extra 3 vars after header, yellow start, red start, maxval)
- T=Timeline (special type arrays contains start,stop pairs in minutes timeofday)

b,l,h type may have the '2' option to specify exactly 2 arrays with 2 y scales given at the end of parameter list  

<span style='color:var(--vscode-symbolIcon-variableForeground);'>size</span> = optional size, allows to use only part of an array, must be lower then array size  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>array</span> = up to 4 arrays of data  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>name</span> = name of chart  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>label</span> = label for up to the 4 datasets in chart  
<span style='color:var(--vscode-symbolIcon-variableForeground);'>entrylabel</span> = labels of each x axis entry separated by '|' char  
- ("cntN" starts numbering entries with the number N an optional /X generates numbers divided by X. Produce labels that cycle through the array indexes, starting with the number N. For instance, "cnt6" with an array of length 8 will produce the labels 6|7|0|1|2|3|4|5| Using "cntN/X" will then divide the numeric value of the label, so "cnt6/2" with an array of length 8 will produce the labels 3|3|0|0|1|1|2|2|)  
- ("wdh: before a week definition generates a week with full hours)

<span style='color:var(--vscode-symbolIcon-variableForeground);'>header</span> = visible header name of chart  

The curve displayed in google chart starts at array index (array[0]) so array index must be set also. thus the displayed curve may be shifted to the desired position by adjusting the array index.

Additionally you have to define the html frame to put the chart in (both lines must be preceded by a $ char) e.g.

```
$<div id="chart1"style="width:640px;height:480px;margin:0 auto"></div>
$gc(c array1 array2 "wr" "pwr1" "pwr2" "mo|di|mi|do|fr|sa|so" "Solar feed")
```

You may define more then one chart.  
The charts id is chart1 ... chartN

## Very customized chart definition

Define a chart like above, but add a *t* to the definition
this generates a google table from the arrays e.g.:  

```
&gc(l*t* array1 array2 "wr" "pwr1" "pwr2" "mo|di|mi|do|fr|sa|so")
```

Then define the options for the graph as from the doku of google e.g.:

```
$var options = {
$vAxes:{0:{maxValue:40,title:'Außentemperatur'},1:{maxValue:60,title:'Solarspeicher'}},
$series:{0:{targetAxisIndex:0},1:{targetAxisIndex:1}},
$hAxis: {title: 'Wochenverlauf'},
$};
```

Then gc(e) closes the definition

```
$gc(e)
```


