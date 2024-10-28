<span style='color:var(--vscode-symbolIcon-methodForeground);'>mp</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>x cond1 result1 cond2 result2 ... cond;&lt;n&gt; result&lt;n&gt;</span>) 

It addresses a standard task with less code and much flexibility: mapping an arbitrary incoming numeric value into the allowed range.   
The numeric value x (float only - no integer I:) passed as the first parameter is followed by parameter pairs which can be repeated.  
A parameter pair consists of condition and result.  
So input value x is compared to the conditions in the order they are provided as subsequent parameters.  
If the value matches the condition, the associated result is returned as function. Subsequent rules are skipped.  
If x matches none of the conditions, x is returned unchanged as result.


Conditions consist of one of the comparison operators "<", ">", "=" followed by a numeric value/variable.  
Be noted that 2-char-operators like ">=" are not allowed.  
Results consist of a numeric value/variable.

```
Example 1: y=mp(x <8 0)
This mapping reads: If x is less than 8 return 0, otherwise return x
                                                          
Example 2: y=mp(x >100 100)
This mapping reads: If x is greater than 100 return 100, otherwise x.

Example 3: y=mp(x <8 0 >100 100)
This mapping reads: Assigns 0 to y if x is less than 8. Assigns 100 to y if x is greater than 100. 
Assigns x to y for all values of x that do not meet the above criteria (8 to 100).

The above code of example 3 does the same as the following code - with just one line of code and 16 characters less:

y=x
if x<8 {
  y=0
}
if x>100 {
  y=100
}
```