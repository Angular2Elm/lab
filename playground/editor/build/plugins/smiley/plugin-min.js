KISSY.Editor.add("smiley",function(b){b.addPlugin("smiley",function(){var a=KISSY.Editor,c=b.addButton("smiley",{contentCls:"ke-toolbar-smiley",title:"\u63d2\u5165\u8868\u60c5",mode:a.WYSIWYG_MODE,loading:true});a.use("smiley/support",function(){c.reload(a.SmileySupport)});this.destroy=function(){c.destroy()}})},{attach:false});