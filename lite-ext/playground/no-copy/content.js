/**
 * Just For Fun ,no copy no copy 
 * @author:yiminghe@gmail.com
 * @��������֧�ֿ���
 */
KISSY.ready(function(S) {
    var t = "textarea",
        m = "��ֹcopy!",
        Event = S.Event,
        doc = document,
        body = doc.body,
        DOM = S.DOM,
        Node = S.Node,
        clip = new Node(body.appendChild(DOM.create('<' + t + ' rows="1" cols="1" style="position:absolute;left:-9999px;">' + m + '</' + t + '>')))

    Event.on(document, "contextmenu", function(ev) {
        ev.halt();
    });
    Event.on(document, "keydown", function(ev) {
        var keyCode = ev.keyCode;

        //mac and win
        //�����ƿ�ݼ�
        if (keyCode === 67 && (ev.ctrlKey || ev.metaKey)) {
            //û�о�����Ϣ����͹���
            //ev.halt();
            //return;

            //����ԭ����ѡ������
            var s = new S.Selection(doc),r = s.getRanges()[0];
            //����
            // clip.html("��ֹcopy��");
            clip[0].focus();
            clip[0].select();
            //�첽
            setTimeout(function() {
                r.select();
            }, 0);
        }
    });
    body.appendChild(document.createTextNode("�������ݣ������copy�ҿ�����"));
});