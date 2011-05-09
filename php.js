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
		exp  : /\b(abstract|array|break|case|class|continue|default|die|do|echo|else|extends|false|for|foreach|function|if|interface|new|null|print|private|public|protected|return|static|switch|this|true|var|void|while|with)\b/
	},
	variable : {
	  exp : /(\$[A-Za-z0-9_!?]+)/
  }
});