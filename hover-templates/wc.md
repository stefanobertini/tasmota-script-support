<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (<span style='color:var(--vscode-symbolIcon-variableForeground);'>sel p1 p2</span>) 

Control webcam  
sel = function selector   
p1 ... optional parameters

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (0 <span style='color:var(--vscode-symbolIcon-variableForeground);'>pres</span>) 

Init webcam with picture resolution pres  

Returns: 
- 0 when error 
- 2 when PSRAM found
- 1 otherwise

Pres values:
- 0 = FRAMESIZE_QQVGA, // 160x120
- 1 = FRAMESIZE_QQVGA2, // 128x160
- 2 = FRAMESIZE_QCIF, // 176x144
- 3 = FRAMESIZE_HQVGA, // 240x176
- 4 = FRAMESIZE_QVGA, // 320x240
- 5 = FRAMESIZE_CIF, // 400x296
- 6 = FRAMESIZE_VGA, // 640x480
- 7 = FRAMESIZE_SVGA, // 800x600
- 8 = FRAMESIZE_XGA, // 1024x768
- 9 = FRAMESIZE_SXGA, // 1280x1024
- 10 = FRAMESIZE_UXGA, // 1600x1200

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (1 <span style='color:var(--vscode-symbolIcon-variableForeground);'>bnum</span>)

Capture picture to rambuffer bnum (1..4), returns framesize of picture or 0 when error

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (2 <span style='color:var(--vscode-symbolIcon-variableForeground);'>sel p1</span>) 

Execute various controls

sel =
- 0 fs = set frame size (see above for constants)
- 1 se = set special effect
  - 0 = no effect
  - 1 = negative
  - 2 = black and white
  - 3 = reddish
  - 4 = greenish
  - 5 = blue
  - 6 = retro

- 2 fl = set horizontal flip 0,1
- 3 mi = set vertical mirror 0,1


To read a value without setting pass -1

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (3) 

Gets picture width

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (4) 

Gets picture height

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (5 <span style='color:var(--vscode-symbolIcon-variableForeground);'>p</span>) 

Start stop streaming
- 0 = stop
- 1 = start

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (6 <span style='color:var(--vscode-symbolIcon-variableForeground);'>p</span>) 

Start stop motion detector
- p = 0 => stop detector
- p = T start detector with picture every T ms
- p = -1 get picture difference
- p = -2 get picture brightness

---

<span style='color:var(--vscode-symbolIcon-methodForeground);'>wc</span> (7 <span style='color:var(--vscode-symbolIcon-variableForeground);'>p</span>) 

Start stop face detector
- p = 0 => stop detector
- p = T start detector with picture every T ms
- p = -1 get number of faces found in picture
