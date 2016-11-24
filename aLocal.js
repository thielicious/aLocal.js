/*
	aLocal v1.1
	(c) 2016 by Thielicious
	thielicious.github.io	
	-----------------------
	
	
	Automatically changes the address bar to localhost. 

	*.setPath(path)		defines the root path, default: XAMPP folder
	*.setLocal(server)	defines your server, default: localhost
	*.change()			executes the change
*/



'use strict';


var aLocal = function() {
	
	// error notice prefix
	let err = '[alocal.js]\n\n';
	// local server (default localhost)
	this.local = 'http://localhost/';
	// root path (default XAMPP folder)
	this.path = 'file:///C:/xampp/htdocs/';
	// temporary raw value of path parameter
	this.reg_path;
	
	// current path
	this.current = () => { 	

		return window.location.toString();
	}			
	
	// returns root folder
	this.root = () => {	
		
		if (this.path) {
			let fetch = this.path.split('/');
			return fetch[fetch.length-2];
		}
	}

	// checks if it matches and modifies the current path
	aLocal.prototype.change = () => {

		if (this.current().match(this.path)) {

			let modified = 
				this.local + this.current().substring(
					this.current().lastIndexOf(
					
						// fetches the page/project inside the root folder
						(() => { 						
						
							var folder = this.current().substring(
								this.current().lastIndexOf(
								'/'+this.root()+'/')
							+1);
								
							return folder.split('/')[1]; 
						})()
					)
				);

			// spits out the modified URL and reloads the page
			window.location.href = modified;
			
		} else if (!this.current().match(this.local)) {
			alert(err+'File path not found:\n'+this.reg_path);
		}  
	}
	
	// defines server
	aLocal.prototype.setLocal = (local) => {

		if (local.match(/^http:\/\/\w+\//gi)) {
			this.local = local;
		} else {
			alert(err+local+' must be a valid URL');
		}
	}

	// defines file path
	aLocal.prototype.setPath = (path) => {

		if (path != null) {
			this.reg_path = path;
			let new_path = new RegExp(this.reg_path, 'g');
			
			this.path = new_path.toString();
			this.path = this.path.replace(/\\\/+g/g,'/').replace(/\//,'');
		}
	}
	
};

// execution
var alocal = new aLocal();
//optional: alocal.setPath('file:///C:/path/to/your/root/folder/');
//optional: alocal.setLocal('http://localhost or userdefined domain/');
alocal.change();
