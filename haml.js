CodeHighlighter.addStyle("haml",{
  tag : {
		exp: /\%([^\s\{\=]+)/, 
	},
	comment : {
		exp  : /#[^\n]+/
	},
	brackets : {
		exp  : /\(|\)/
	},
	string : {
		exp  : /'[^']*'|"[^"]*"|`[^`]*`/
	},
	keywords : {
		exp  : /\b(and|break|case|class|def|do|else|elsif|end|for|if|include|module|or|raise|redo|require|rescue|retry|self|then|unless|until|when|while|yield)\b/
	},
	symbol : {
	  exp : /(:[A-Za-z0-9_!?]+|true|false)/
	},
	module_class : {
	  exp : /::[A-Za-z0-9_!?]+/
	},
	doctype : {
		exp: /!!! \w+\n/
	}
});