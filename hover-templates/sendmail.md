<span style='color:var(--vscode-symbolIcon-methodForeground);'>sendmail</span> [<span style='color:var(--vscode-symbolIcon-variableForeground);'>server:port:user:passwd:from:to:subject</span>] msg  

The following parameters can be specified during compilation via #define directives in user_config_override.h:
* EMAIL_SERVER
* EMAIL_PORT
* EMAIL_USER
* EMAIL_PASSWORD
* EMAIL_FROM

To use any of these values, pass an * as its corresponding argument placeholder.

Example
```
sendmail [*:*:*:*:*:<rec@gmail.com>:theSubject] theMessage
```
Instead of passing the msg as a string constant, the body of the e-mail message may also be composed using the script m (note lower case) section. 

The specified text in this script section must end with a # character.

sendmail will use the m section if * is passed as the msg parameter. 

In this >m section you may also specify email attachments.   
@/filename specifies a file to be attached (if file system is present)  
&arrayname specifies an array attachment (as tab delimited text, no file system needed)
$N attach a webcam picture from rambuffer number N (usually 1)  

Requires #define USE_SENDMAIL  

Enabling this feature also enables Tasmota TLS as sendmail uses SSL.