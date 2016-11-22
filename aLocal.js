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


var aLocal = function() {								// Constructor

	
	this.local = 'http://localhost/';					// this will replace the XAMPP folder
	this.path = 'file:///C:/xampp/htdocs/';				// root path (default XAMPP folder)				
	
	this.current = () => { 								// current path

		return window.location.toString();
	}			
	
	this.root = () => {									// returns root folder
		
		if (this.path) {
			let fetch = this.path.split('/');
			return fetch[fetch.length-2];
		}
	}

	aLocal.prototype.change = () => {					// checks if it matches and modifies the current path

		if (this.current().match(this.path)) {

			let modified = 
				this.local + this.current().substring(
					this.current().lastIndexOf(
					
						(() => { 						// fetches the page folder inside htdocs
						
							var folder = this.current().substring(
								this.current().lastIndexOf(
								'/'+this.root()+'/')
							+1);
								
							return folder.split('/')[1]; 
						})()
					)
				);

			window.location.href = modified;			// spits out the modified URL and refresh page
		
		} else if (!this.current().match(this.local)) {
			alert('[alocal.js]\n\nPath not found:\n'+this.path);
		}
	}
	
	aLocal.prototype.setLocal = (local) => {			// changes server

		if (local.match(/http?s+:|\/\//g)) { 
			this.local = local;
		}
	}

	aLocal.prototype.setPath = (path) => {				// changes file path

		if (path != null) {
			let new_path = new RegExp(path, 'g');
			this.path = new_path.toString();
			this.path = this.path.replace(/\\\/+g/g,'/').replace(/\//,'');
		}
	}
	
};


var alocal = new aLocal();
alocal.change();