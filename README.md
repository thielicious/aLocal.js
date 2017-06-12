# aLocal.js

##### A JavaScript solution which automatically updates your address bar to localhost

#### [Documentation](http:thielicious.github.io/#alocal_doc) | [Downloads](http:thielicious.github.io/#alocal_dls) | [Licence](http:thielicious.github.io/#alocal_lic) 
---

<br>

## INTRODUCTION

**aLocal** ('a' for auto) is a tiny JavaScript snippet which automatically updates the address bar to localhost - ready for server-side scripts. An alternativity for newbies who plan to start programming in PHP like I did..<br>
Beginners who are not fond in such things start with XAMPP most likely. There are many other ways to fix it in almost any language or directly in host files on Windows. This is an example for a solution in plain JavaScript.

<br>

## SETUP

1. Follow this [link](http:thielicious.github.io/#alocal_dls) and choose your download option or open your Git CLI and enter the following:
```
git clone https://github.com/thielicious/eMM.git
```
2. Place this script in your root directory of your host.
3. Open to edit a PHP file which must be inside of the root path.
4. Embed **alocal.js** in your page header just like any other linked script<br>
`<script src="http://localhost/aLocal.js"></script>`
5. Save it and done.

<br>

## CONFIGURATION
- **.setPath(path)** defines the root path, default: XAMPP folder
- **.setLocal(server)** defines your server, default: localhost
- **.change()**	executes the change

<br>

## USAGE

Once embedded, it's ready to perform. Simply, open a PHP file in your browser, no need to alter the annoying address bar anymore. Not a special thing but a timesaver.

<br>
<br>
###### If you encounter any bugs, feel free to open up an [issue](https://github.com/thielicious/unPOSTer/issues), thank you.
---
**[thielicious.github.io](http://thielicious.github.io)**