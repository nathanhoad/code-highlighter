CodeHighlighter.addStyle("php",{
	comment : {
		exp  : /(\/\/[^\n]*\n?)|(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)/
	},
	brackets : {
		exp  : /\(|\)/
	},
	string : {
		exp  : /'[^']*'|"[^"]*"/
	},
	keywords : {
		exp  : /\b(array|break|case|continue|default|die|do|echo|else|false|for|foreach|function|if|new|null|print|private|public|protected|return|static|switch|this|true|var|void|while|with)\b/
	},
	variable : {
	  exp : /(\$[A-Za-z0-9_!?]+)/
  }
});