/**
 * templates support for kissy editor
 * @author:yiminghe@gmail.com
 */
KISSYEDITOR.add("editor-plugin-templates", function(KE) {
    var S = KISSY,
        Node = S.Node,
        Event = S.Event,
        KEN = KE.NODE,
        TripleButton = KE.TripleButton,
        Overlay = KE.SimpleOverlay,
        templates = [
            {
                demo:"ģ��1Ч����ʾhtml"  ,
                html:"<div style='border:1px solid red'>ģ��1Ч����ʾhtml</div>"
            },
            {
                demo:"ģ��2Ч����ʾhtml",
                html  :"<div style='border:1px solid red'>ģ��2Ч����ʾhtml</div>"
            }
        ],
        HTML = "<div class='ke-tpl'>";

    for (var i = 0; i < templates.length; i++) {
        var t = templates[i];
        HTML += "<div class='ke-tpl-list'>" + t.demo + "</div>";
    }
    HTML += "</div>";

    HTML += "<p style='text-align:right;margin:10px;'><button class='ke-tpl-ok'>ȷ��</button></p>";

    function TplUI(editor) {
        this.editor = editor;
        this._init();
    }

    S.augment(TplUI, {
        _init:function() {
            var self = this,editor = self.editor,el = new TripleButton({
                container:editor.toolBarDiv,
                text:"template",
                title:"ģ��"
            }),ui = new Overlay({mask:true});
            ui.body.html(HTML);
            var list = ui.body.all(".ke-tpl-list");

            ui.body.on("mouseover", function(ev) {
                var t = new Node(ev.target);
                //alert(t._4e_name());
                t = t._4e_ascendant(function(n) {
                    return n.hasClass("ke-tpl-list");
                }, true);
                //alert(t);
                if (t) {
                    list.removeClass("ke-tpl-hover");
                    t.addClass("ke-tpl-hover");
                }
            });
            var lhtml = ui.body._4e_first(function(n) {
                return n[0].nodeType == KEN.NODE_ELEMENT;
            });
            lhtml.on( "mouseleave", function(ev) {
                console.log(1);
                list.removeClass("ke-tpl-hover");
            });

            ui.body.on("click", function(ev) {
                var t = new Node(ev.target);
                t = t._4e_ascendant(function(n) {
                    return n.hasClass("ke-tpl-list");
                }, true);
                if (t) {
                    list.removeClass("ke-tpl-selected");
                    t.addClass("ke-tpl-selected");
                }
            });

            self.ui = ui;
            el.on("click", function() {
                ui.show();
            });

            ui.body.one(".ke-tpl-ok").on("click", function() {
                editor.focus();
                var t = ui.body.one(".ke-tpl-selected"),index = t._4e_index();
                if (index != -1)editor.insertHtml(templates[index].html);
                ui.hide();
            });
        }
    });

    KE.on("instanceCreated", function(ev) {
        var editor = ev.editor;
        new TplUI(editor);

    });

});