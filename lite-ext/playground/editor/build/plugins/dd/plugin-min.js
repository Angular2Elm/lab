KISSY.Editor.add("dd",function(){function g(){g.superclass.constructor.apply(this,arguments);this._init()}function f(){f.superclass.constructor.apply(this,arguments);this._init()}function h(){h.superclass.constructor.apply(this,arguments)}var d=KISSY,e=d.Editor,k=d.Event,n=d.DOM,l=d.Node;if(!e.DD){e.DD={};g.ATTRS={timeThred:{},activeDrag:{},drags:{value:{}}};d.extend(g,d.Base,{_init:function(){e.Utils.lazyRun(this,"_prepare","_real")},reg:function(a){var b=this.get("drags");if(!a[0].id)a[0].id=d.guid("drag-");
b[a[0].id]=a;this._prepare()},_move:function(a){var b=this.get("activeDrag");b&&b._move(a)},_start:function(a){this.set("activeDrag",a);this._pg.css({display:"",height:n.docHeight()})},_end:function(a){var b=this.get("activeDrag");if(b){b._end(a);this.set("activeDrag",null);this._pg.css({display:"none"})}},_prepare:function(){this._pg=(new l("<div style='background-color:red;position:absolute;left:0;width:100%;top:0;z-index:9999;'></div>")).appendTo(document.body);this._pg.css("opacity",0);k.on(document,
"mousemove",e.Utils.throttle(this._move,this,10));k.on(document,"mouseup",this._end,this)},_real:function(){}});e.DD.DDM=new g;var i=e.DD.DDM;f.ATTRS={node:{},handlers:{value:{}}};d.extend(f,d.Base,{_init:function(){var a=this.get("node"),b=this.get("handlers");i.reg(a);if(d.isEmptyObject(b))b[a[0].id]=a;for(var c in b)if(b.hasOwnProperty(c)){var j=b[c],m=j.css("cursor");if(!m||m==="auto")j.css("cursor","move");j._4e_unselectable()}a.on("mousedown",this._handleMouseDown,this);a.on("mouseup",function(){i._end()})},
_check:function(a){var b=this.get("handlers"),c;for(c in b)if(b.hasOwnProperty(c))if(b[c]._4e_equals(a))return true;return false},_handleMouseDown:function(a){if(this._check(new l(a.target))){a.halt();i._start(this);var b=this.get("node"),c=a.pageX;a=a.pageY;b=b.offset();this.startMousePos={left:c,top:a};this.startNodePos=b;this._diff={left:c-b.left,top:a-b.top};this.fire("start")}},_move:function(a){this.fire("move",a)},_end:function(){}});d.extend(h,f,{_init:function(){h.superclass._init.apply(this,
arguments);var a=this.get("node"),b=this;b.on("move",function(c){a.offset({left:c.pageX-b._diff.left,top:c.pageY-b._diff.top})})}});e.Draggable=f;e.Drag=h}});