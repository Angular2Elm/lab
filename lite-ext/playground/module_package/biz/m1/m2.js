KISSY.add(function(S,DOM){
	var info=DOM.create("<div style='font-size:30px;'>ģ��2��ʼ����</div>");
	DOM.prepend(info,document.body);
	return {
			log:function(s){
				DOM.html(info,s);
			}
	};
},{
	requires:["dom"]
});