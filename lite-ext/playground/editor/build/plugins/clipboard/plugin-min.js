KISSY.Editor.add("clipboard",function(k){var c=KISSY.Editor,d=KISSY,o=d.Node,e=d.UA,p=c.Range,l=c.RANGE,m=d.Event;c.Paste||function(){function n(a){this.editor=a;this._init()}d.augment(n,{_init:function(){var a=this.editor;e.ie?m.on(a.document,"keydown",this._paste,this):m.on(a.document,"paste",this._paste,this)},_paste:function(a){if(!(a.type==="keydown"&&!(a.keyCode===86&&(a.ctrlKey||a.metaKey)))){var f=this,h=f.editor,g=h.document;if(f._running)a.halt();else{var i=h.getSelection();a=new p(g);var b=
new o(e.webkit?"<body></body>":"<div></div>",null,g);e.webkit&&b[0].appendChild(g.createTextNode(" "));g.body.appendChild(b[0]);b.css({position:"absolute",top:i.getStartElement().offset().top+"px",width:"1px",height:"1px",overflow:"hidden"});b.css("left","-1000px");var q=i.createBookmarks();a.setStartAt(b,l.POSITION_AFTER_START);a.setEndAt(b,l.POSITION_BEFORE_END);a.select(true);f._running=true;setTimeout(function(){b._4e_remove();var j;b=e.webkit&&(j=b._4e_first())&&j.hasClass("Apple-style-span")?
j:b;i.selectBookmarks(q);h.insertHtml(b.html());f._running=false},0)}}}});c.Paste=n}();k.addPlugin(function(){new c.Paste(k)})});