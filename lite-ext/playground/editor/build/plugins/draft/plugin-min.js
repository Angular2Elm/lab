KISSY.Editor.add("draft",function(j){var h=KISSY,e=h.Editor;e.Draft||function(){function i(a,b,c){for(a+="";a.length<b;)a=c+a;return a}function k(a){if(h.isNumber(a))a=new Date(a);return a instanceof Date?[a.getFullYear(),"-",i(a.getMonth()+1,2,"0"),"-",i(a.getDate(),2,"0")," ",i(a.getHours(),2,"0"),":",i(a.getMinutes(),2,"0"),":",i(a.getSeconds(),2,"0")].join(""):a}function l(a){this.editor=a;this._init()}var m=h.Node,n=h.JSON,o=window[e.STORE];h.augment(l,{_init:function(){var a=this,b=a.editor,
c=b.statusDiv,d=b.cfg.pluginConfig;d.draft=d.draft||{};a.draftInterval=d.draft.interval=d.draft.interval||5;a.draftLimit=d.draft.limit=d.draft.limit||5;c=(new m("<div class='ke-draft'><spa class='ke-draft-title'>内容正文每"+d.draft.interval+"分钟自动保存一次。</span></div>")).appendTo(c);a.timeTip=(new m("<span class='ke-draft-time''>")).appendTo(c);d=new e.TripleButton({text:"立即保存",cls:"ke-draft-mansave",title:"立即保存",container:c});var f=new e.Select({container:c,menuContainer:document.body,doc:b.document,width:"85px",
popUpWidth:"220px",title:"恢复编辑历史"});new e.TripleButton({cls:"ke-draft-help",title:"帮助",text:"帮助",container:c});var g=o.getItem("ke-draft-save"),p=[];a.versions=f;if(g)p=h.isString(g)?n.parse(decodeURIComponent(g)):g;a.drafts=p;a.sync();d.on("click",function(){a.save(false)});setInterval(function(){a.save(true)},a.draftInterval*60*1E3);f.on("click",a.recover,a);a.holder=c;e.Utils.sourceDisable(b,a)},disable:function(){this.holder.css("visibility","hidden")},enable:function(){this.holder.css("visibility",
"")},sync:function(){var a=this.draftLimit,b=this.timeTip,c=this.versions,d=this.drafts;d.length>a&&d.splice(0,d.length-a);a=[];for(var f,g=0;g<d.length;g++){f=d[g];f=(f.auto?"自动":"手动")+"保存于："+k(f.date);a.push({name:f,value:g})}c.set("items",a.reverse());b.html(f);o.setItem("ke-draft-save",encodeURIComponent(n.stringify(d)))},save:function(a){var b=this.drafts,c=j._getRawData();if(b[b.length-1]&&c==b[b.length-1].content)b.length-=1;this.drafts=b.concat({content:c,date:(new Date).getTime(),auto:a});
this.sync()},recover:function(a){var b=this.editor,c=this.drafts;a=a.newVal;this.versions.reset("value");if(confirm("确认恢复 "+k(c[a].date)+" 的编辑历史？")){b.fire("save");b._setRawData(c[a].content);b.fire("save")}}});e.Draft=l}();j.addPlugin(function(){e.storeReady(function(){new e.Draft(j)})})});
