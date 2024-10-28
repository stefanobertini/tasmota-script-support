<span style='color:var(--vscode-symbolIcon-methodForeground);'>Conditional Statements</span> 

There are two syntax alternatives. You may NOT mix both formats.

```
if a==b  
and x==y  
or k==i 
then <do this>
else <do that>  
endif  
```

or

```
if a==b  
and x==y  
or k==i {  
  <do this> 
} else {  
  <do that>    
}
```

Remarks:  
The last closing bracket must be on a separate line.

Calculations are permitted in conditional expressions, e.g.  
`if var1-var2==var3*var4`

Conditional expressions may be enclosed in parentheses.  
The statement must be on a single line. e.g.,  
`if ((a==b) and ((c==d) or (c==e)) and (s!="x"))`