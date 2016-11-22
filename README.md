# aLocal.js
Recent Version: v1.0<br>
&copy; 2015 by x7ee1
modified 2016 &copy; by Thielicious


Beginners who are not fond in such things start with XAMPP most likely. There are many other ways to fix it in almost any language or directly in host files on Windows.<br>

But this is an example for a solution in plain JavaScript: <br>

**aLocal** ('a' for auto) is a tiny JavaScript snippet which automatically changes the address to localhost - ready for server-side scripts. An alternativity for newbies who plan to start programming in PHP..

### Install
1. Place this script in your root directory of your host.
2. Open to edit a PHP file which must be inside of the root path.
3. Embed **alocal.js** in your page header just like any other linked script<br>
    <code>
      &lt;script src="[filepath]/aLocal.js">&lt;/script>
    </code>
4. Save it and it's done.
<br>

### Config
- *.setPath(path)		defines the root path, default: XAMPP folder
- *.setLocal(server)	defines your server, default: localhost
- *.change()			executes the change
<br>

### Usage
Once embedded, it's ready to perform. Open a PHP file in a browser and see what happens. Not a special thing but a timesaver.<br>
You may change the path to your root inside the script which you usually use, for example **C://XAMPP/htdocs**.<br>
<br>

Enjoy.<br>
<br>
http://thielicious.github.io