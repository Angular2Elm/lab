KISSY.Editor.add("maximize",function(n){var f=KISSY.Editor,g=KISSY,k=g.UA,l=g.Node,o=g.Event,m=f.TripleButton,h=g.DOM,i;f.Maximize||function(){function d(a){this.editor=a;this._init()}d.init=function(){i=(new l("<iframe style='position:absolute;top:-9999px;left:-9999px;' frameborder='0'></iframe>")).appendTo(document.body);d.init=null};g.augment(d,{_init:function(){var a=new m({container:this.editor.toolBarDiv,title:"全屏",contentCls:"ke-toolbar-maximize"});this.el=a;a.on("offClick",this.maximize,this);
a.on("onClick",this.restore,this);f.Utils.lazyRun(this,"_prepare","_real")},restore:function(){var a=this,b=a.editor;o.remove(window,"resize",a._maximize,a);a._saveEditorStatus();a._restoreState();a.el.set("state",m.OFF);setTimeout(function(){a._restoreEditorStatus();b.notifySelectionChange()},30)},_restoreState:function(){var a=document,b=this.editor,c=this._savedParents;if(c)for(var e=0;e<c.length;e++){var j=c[e];j.el.css("position",j.position)}b.wrap.css({height:this.iframeHeight});(new l(a.body)).css({width:"",
height:"",overflow:""});a.documentElement.style.overflow="";b.editorWrap.css({position:"static",width:this.editorWrapWidth});i.css({left:"-99999px",top:"-99999px"});window.scrollTo(this.scrollLeft,this.scrollTop)},_saveSate:function(){var a=this.editor,b=[],c=a.editorWrap;this.iframeHeight=a.wrap._4e_style("height");this.editorWrapWidth=c._4e_style("width");this.scrollLeft=h.scrollLeft();this.scrollTop=h.scrollTop();window.scrollTo(0,0);for(a=c.parent();a;){if(a.css("position")!="static"){b.push({el:a,
position:a.css("position")});a.css("position","static")}a=a.parent()}this._savedParents=b},_saveEditorStatus:function(){var a=this.editor;if(k.gecko&&a.iframeFocus)this.savedRanges=(a=a.getSelection())&&a.getRanges()},_restoreEditorStatus:function(){var a=this.editor,b=a.getSelection(),c=this.savedRanges;if(k.gecko&&a.iframeFocus){this.el.el[0].focus();a.focus();c&&b&&b.selectRanges(c)}if(a.iframeFocus&&b)(a=b.getStartElement())&&a[0]&&a._4e_scrollIntoView()},_maximize:function(){var a=this.editor,
b=a.editorWrap,c=h.viewportHeight(),e=h.viewportWidth(),j=a.statusDiv?a.statusDiv.height():0,p=a.toolBarDiv.height();if(k.ie){document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden"}else(new l(document.body)).css({width:0,height:0,overflow:"hidden"});b.css({position:"absolute",zIndex:990,width:e+"px"});i.css({zIndex:985,height:c+"px",width:e+"px"});b.offset({left:0,top:0});i.css({left:0,top:0});a.wrap.css({height:c-j-p-8+"px"})},_real:function(){var a=this,b=a.editor;
a._saveEditorStatus();a._saveSate();a._maximize();a._maximize();o.on(window,"resize",a._maximize,a);a.el.set("state",m.ON);setTimeout(function(){a._restoreEditorStatus();b.notifySelectionChange()},30)},_prepare:function(){d.init&&d.init()},maximize:function(){this._prepare()}});f.Maximize=d}();n.addPlugin(function(){new f.Maximize(n)})});
