/*
	alert ����
	v1.1(20090610) ���ñհ�ʵ��alert����ģʽ
	v1.2(20090611) ����buttonAlign���ж��밴ť
	v1.2.5(20090613) alertlite ����icon�Լ�callback����
	v1.3(20090806) Ext.ux.MessageBoxLite.res ���ʻ�֧��
*/
Ext.namespace('Ext.ux');
Ext.ux.MessageBoxLite = function (config) {	
	Ext.ux.MessageBoxLite.superclass.constructor.call(this,config);	
	this.el.addClass('x-window-dlg x-window-plain');	
	this.iconEl = Ext.DomHelper.insertFirst(this.body,{
		tag:'div',
		cls:'ext-mb-icon'
	},true);
	this.iconEl.enableDisplayMode('');
	this.info=Ext.DomHelper.append(this.body,{
		tag:'span'
	},true);
	
}

Ext.extend(Ext.ux.MessageBoxLite,Ext.ux.WindowLite,  {
	/**
	alert ȫ�ֵ�����ÿ�θ���title��info����
	**/
	updateInfo:function(config){		
		this.title.update(config.title);
	  this.info.update(config.info);
	  if(config.icon) {
			this.iconEl.show();
			this.iconEl.dom.className='ext-mb-icon '+'ext-mb-'+config.icon;
		}else {
			this.iconEl.hide();
		}
		//һ�����ÿ�ȵ�����ʾ
  	var size=this.body.getTextWidth(config.info,0,600)+30+(config.icon?49:0);
		var titleSize=this.header.getTextWidth(config.title,0,600)+30;
		this.body.setWidth(Math.max(size,titleSize));	  
		//�߶Ȳ���		
		this.updateWindowSize();		
	}
});
/*
	���ʻ�֧�֣��븲��
*/
Ext.ux.MessageBoxLite.res={
	buttonOk : 'ȷ��'
};
Ext.ux.MessageBoxLite.alert=function(){	
		
	var callback;	
	var alertInstance=new Ext.ux.MessageBoxLite({
		modal:true,
		drag:true,
		buttonAlign:'center',
		shadow:'frame',
		shadowOffset:6,
		defaultButton:Ext.ux.MessageBoxLite.res.buttonOk,
		buttons:[
			{
				text:Ext.ux.MessageBoxLite.res.buttonOk,
      	handler:function() {
      		this.hide();
      		if(callback) callback();
      	}
			}
		]
	});
	
	
	Ext.ux.MessageBoxLite.alert=function(config){	
		alertInstance.updateInfo(config);		
		alertInstance.show();
		callback=config.callback;
		return alertInstance;
	};
	
	return Ext.ux.MessageBoxLite.alert(arguments[0]);	
} 