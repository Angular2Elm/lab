KISSY.add(function(S,DOM,Event,m2){
	var btn=DOM.create("<button>ģ��1��ʼ���ˣ����԰���</button>");
	DOM.prepend(btn,document.body);
	Event.on(btn,"click",function(){
			m2.log("ģ��1����ģ��2��");
	});
},{
	requires:["dom","event","./m1/m2"]
});