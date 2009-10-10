// 2008.05.28 职位分类
var theJobCategories = [
	{ key:'50',label:'计算机/互联网/通信/电子',
		children:[
		{ key:'5001',label:'计算机硬件',
			children:[
			{ key:'500101',label:'高级硬件工程师'},
			{ key:'500102',label:'硬件工程师'},
			{ key:'500103',label:'电脑维修'}
			]},
		{ key:'5002',label:'计算机软件',
			children:[
			{ key:'500201',label:'高级软件工程师'},
			{ key:'500202',label:'软件工程师'},
			{ key:'500203',label:'软件UI设计师/工程师'},
			{ key:'500204',label:'仿真应用工程师'},
			{ key:'500205',label:'ERP实施顾问(ORACLE/SAP)'},
			{ key:'500206',label:'ERP技术开发(ORACLE/SAP)'},
			{ key:'500207',label:'需求工程师'},
			{ key:'500208',label:'系统集成工程师'},
			{ key:'500209',label:'系统分析员'},
			{ key:'500210',label:'系统工程师'},
			{ key:'500211',label:'系统架构设计师'},
			{ key:'500212',label:'数据库工程师/管理员'},
			{ key:'500213',label:'计算机辅助设计工程师'},
                        { key:'500214',label:'VC界面设计工程师'}
			]},
		{ key:'5003',label:'互联网开发及应用',
			children:[
			{ key:'500301',label:'互联网软件开发工程师'},
			{ key:'500302',label:'语音/视频开发工程师'},
			{ key:'500303',label:'多媒体/游戏开发工程师'},
			{ key:'500304',label:'网站营运经理/主管'},
			{ key:'500305',label:'网络工程师'},
			{ key:'500306',label:'UI设计师/顾问'},
			{ key:'500307',label:'网站架构设计师'},
			{ key:'500308',label:'网站维护工程师'},
			{ key:'500309',label:'系统管理员/网络管理员'},
			{ key:'500310',label:'网站策划'},
			{ key:'500311',label:'网站编辑'},
			{ key:'500312',label:'网页设计/制作/美工'},
			{ key:'500313',label:'网络信息安全工程师'},
			{ key:'500314',label:'智能大厦/综合布线'},
                        { key:'500315',label:'jsp程序员'},
                        { key:'500316',label:'网络维护人员'}
			]},
		{ key:'5004',label:'IT-管理',	// 2008.07.09 T-管理
			children:[
			{ key:'500401',label:'首席技术执行官CTO/首席信息官CIO'},
			{ key:'500402',label:'技术总监/经理'},
			{ key:'500403',label:'信息技术经理/主管'},
			{ key:'500404',label:'信息技术专员'},
			{ key:'500405',label:'IT项目总监'},
			{ key:'500406',label:'IT项目经理'},
			{ key:'500407',label:'IT项目主管'},
			{ key:'500408',label:'IT项目执行/协调人员'},
			               { key:'500409',label:'ERP管理员'}
			]},
		{ key:'5005',label:'IT-品管、技术支持',
			children:[
			{ key:'500501',label:'技术支持经理'},
			{ key:'500502',label:'技术支持工程师'},
			{ key:'500503',label:'计量工程师'},
			{ key:'500504',label:'标准化工程师'},
			{ key:'500505',label:'品质经理'},
			{ key:'500506',label:'系统测试'},
			{ key:'500507',label:'软件测试'},
			{ key:'500508',label:'硬件测试'},
			{ key:'500509',label:'测试员/品质'},
			{ key:'500510',label:'技术文员/助理'}
			]},
		{ key:'5006',label:'通信技术',
			children:[
			{ key:'500601',label:'通信技术工程师'},
			{ key:'500602',label:'有线传输工程师'},
			{ key:'500603',label:'无线通信工程师'},
			{ key:'500604',label:'电信交换工程师'},
			{ key:'500605',label:'数据通信工程师'},
			{ key:'500606',label:'移动通信工程师'},
			{ key:'500607',label:'电信网络工程师'},
			{ key:'500608',label:'通信电源工程师'},
			{ key:'500609',label:'增值产品开发工程师'},
			{ key:'500610',label:'无线工程区域主管'},
			{ key:'500611',label:'基站工程师'}
			]}
		]},
	{ key:'51',label:'销售/客服/技术支持',
		children:[
		{ key:'5101',label:'销售管理',
			children:[
			{ key:'510101',label:'销售总监'},
			{ key:'510102',label:'销售经理'},
			{ key:'510103',label:'销售主管'},
			{ key:'510104',label:'业务拓展主管/经理'},
			{ key:'510105',label:'渠道/分销经理'},
			{ key:'510106',label:'渠道/分销主管'},
			{ key:'510107',label:'客户经理/主管'},
			{ key:'510108',label:'区域销售总监'},
			{ key:'510109',label:'区域销售经理'}
			]},
		{ key:'5102',label:'销售人员',
			children:[
			{ key:'510201',label:'销售代表'},
			{ key:'510202',label:'渠道/分销专员'},
			{ key:'510203',label:'客户代表'},
			{ key:'510204',label:'销售工程师'},
			{ key:'510205',label:'电话销售'},
			{ key:'510206',label:'业务员/销售员'},
                        { key:'510207',label:'业务拓展主管'}
			]},
		{ key:'5103',label:'销售行政及商务',
			children:[
			{ key:'510301',label:'销售行政经理/主管'},
			{ key:'510302',label:'销售行政专员/助理'},
			{ key:'510303',label:'商务经理'},
			{ key:'510304',label:'商务主管/专员'},
			{ key:'510305',label:'商务助理'},
			{ key:'510306',label:'销售助理'},
                        { key:'510307',label:'电子商务经纪人'},
                        { key:'510308',label:'代理商'}
			]},
		{ key:'5104',label:'客服及技术支持',
			children:[
			{ key:'510401',label:'客服总监(非技术)'},
			{ key:'510402',label:'客服经理(非技术)'},
			{ key:'510403',label:'客服主管(非技术)'},
			{ key:'510404',label:'客服专员/助理(非技术)'},
			{ key:'510405',label:'客户关系经理/主管'},
			{ key:'510406',label:'投诉专员'},
			{ key:'510407',label:'售前/售后技术支持经理'},
			{ key:'510408',label:'售前/售后技术支持主管'},
			{ key:'510409',label:'售前/售后技术支持工程师'},
			{ key:'510410',label:'咨询热线/呼叫中心服务人员'}
			]}
		]},
	{ key:'52',label:'会计/金融/银行/保险',
		children:[
		{ key:'5201',label:'财务/审计/税务',
			children:[
			{ key:'520101',label:'首席财务官 CFO'},
			{ key:'520102',label:'财务总监'},
			{ key:'520103',label:'财务经理'},
			{ key:'520104',label:'财务顾问'},
			{ key:'520105',label:'财务主管/总帐主管'},
			{ key:'520106',label:'会计经理/会计主管'},
			{ key:'520107',label:'会计'},
			{ key:'520108',label:'出纳员'},
			{ key:'520109',label:'财务/会计助理'},
			{ key:'520110',label:'会计文员'},
			{ key:'520111',label:'财务分析经理/主管'},
			{ key:'520112',label:'财务分析员'},
			{ key:'520113',label:'成本经理/成本主管'},
			{ key:'520114',label:'成本管理员'},
			{ key:'520115',label:'审计经理/主管'},
			{ key:'520116',label:'审计专员/助理'},
			{ key:'520117',label:'税务经理/税务主管'},
			{ key:'520118',label:'税务专员/助理'},
			{ key:'520119',label:'统计员'},
			{ key:'520120',label:'工程会计'}
			]},
		{ key:'5202',label:'证券/金融/投资',
			children:[
			{ key:'520201',label:'证券/期货/外汇经纪人'},
			{ key:'520202',label:'证券分析师'},
			{ key:'520203',label:'股票/期货操盘手'},
			{ key:'520204',label:'金融/经济研究员'},
			{ key:'520205',label:'投资/基金项目经理'},
			{ key:'520206',label:'投资/理财顾问'},
			{ key:'520207',label:'投资银行业务'},
			{ key:'520208',label:'融资经理/融资主管'},
			{ key:'520209',label:'融资专员'},
			{ key:'520210',label:'拍卖师'}
			]},
		{ key:'5203',label:'银行',
			children:[
			{ key:'520301',label:'行长/副行长'},
			{ key:'520302',label:'资产评估/分析'},
			{ key:'520303',label:'风险控制'},
			{ key:'520304',label:'信贷管理/信用调查/分析人员'},
			{ key:'520305',label:'进出口/信用证结算'},
			{ key:'520306',label:'外汇交易'},
			{ key:'520307',label:'清算人员'},
			{ key:'520308',label:'高级客户经理/客户经理'},
			{ key:'520309',label:'客户主管/专员'},
			{ key:'520310',label:'银行柜员'},
			{ key:'520311',label:'银行卡、电子银行业务推广'}
			]},
		{ key:'5204',label:'保险',
			children:[
			{ key:'520401',label:'保险精算师'},
			{ key:'520402',label:'保险产品开发/项目策划'},
			{ key:'520403',label:'保险业务经理/主管'},
			{ key:'520404',label:'保险代理/经纪人/客户经理'},
			{ key:'520405',label:'理财顾问/财务规划师/寿险顾问'},
			{ key:'520406',label:'储备经理人'},
			{ key:'520407',label:'保险核保'},
			{ key:'520408',label:'保险理赔'},
			{ key:'520409',label:'保险客户服务/续期管理'},
			{ key:'520410',label:'保险培训师'},
			{ key:'520411',label:'保险内勤'},
			{ key:'520412',label:'契约管理'},
			               { key:'520413',label:'储备经理/主管'} //2009-02-26 root
			]}
		]},
	{ key:'53',label:'生产/营运/采购/物流',
		children:[
		{ key:'5301',label:'生产/营运',
			children:[
			{ key:'530101',label:'工厂经理/厂长'},
			{ key:'530102',label:'总工程师/副总工程师'},
			{ key:'530103',label:'部门经理/主管'},
			{ key:'530104',label:'项目工程师'},
			{ key:'530105',label:'营运经理'},
			{ key:'530106',label:'营运主管'},
			{ key:'530107',label:'生产经理/车间主任'},
			{ key:'530108',label:'生产计划/物料管理'},
			{ key:'530109',label:'生产主管/督导/领班'},
			{ key:'530110',label:'生产文员'},
			{ key:'530111',label:'化验员'},
                        { key:'530112',label:'车间班组长'},
                        { key:'530113',label:'SMT作业员/生产作业员'}, //2009-02-26 sg
                        { key:'530114',label:'工程队员'} //2009-02-26 sg
			]},
		{ key:'5302',label:'质量/安全管理',
			children:[
			{ key:'530201',label:'质量管理/测试经理(QA/QC经理)'},
			{ key:'530202',label:'质量管理/测试主管(QA/QC主管)'},
			{ key:'530203',label:'质量管理/测试工程师(QA/QC工程师)'},
			{ key:'530204',label:'质量检验员/测试员'},
			{ key:'530205',label:'可靠度工程师'},
			{ key:'530206',label:'故障分析工程师'},
			{ key:'530207',label:'认证工程师/审核员'},
			{ key:'530208',label:'体系工程师/审核员'},
			{ key:'530209',label:'安全/健康/环境经理/主管'},
			{ key:'530210',label:'安全/健康/环境工程师'},
			{ key:'530211',label:'供应商管理'},
			{ key:'530212',label:'采购材料/设备质量管理'}
			]},
		{ key:'5303',label:'工程/机械/能源',
			children:[
			{ key:'530301',label:'技术研发经理/主管'},
			{ key:'530302',label:'技术研发工程师'},
			{ key:'530303',label:'产品工艺/制程工程师'},
			{ key:'530304',label:'产品规划工程师'},
			{ key:'530305',label:'实验室负责人/工程师'},
			{ key:'530306',label:'工程/设备经理'},
			{ key:'530307',label:'工程/设备主管'},
			{ key:'530308',label:'工程/设备工程师'},
			{ key:'530309',label:'工程/机械绘图员'},
			{ key:'530310',label:'工业工程师'},
			{ key:'530311',label:'机械工程师'},
			{ key:'530312',label:'结构工程师'},
			{ key:'530313',label:'模具工程师'},
			{ key:'530314',label:'机电工程师'},
			{ key:'530315',label:'维修工程师'},
			{ key:'530316',label:'铸造/锻造工程师/技师'},
			{ key:'530317',label:'注塑工程师/技师'},
			{ key:'530318',label:'焊接工程师/技师'},
			{ key:'530319',label:'夹具工程师/技师'},
			{ key:'530320',label:'CNC工程师'},
			{ key:'530321',label:'冲压工程师/技师'},
			{ key:'530322',label:'锅炉工程师/技师'},
			{ key:'530323',label:'电力工程师/技术员'},
			{ key:'530324',label:'光源与照明工程'},
			{ key:'530325',label:'汽车/摩托车工程师'},
			{ key:'530326',label:'船舶工程师'},
			{ key:'530327',label:'轨道工程师/技术员'},
			{ key:'530328',label:'飞机维修机械师'},
			{ key:'530329',label:'飞行器设计与制造'},
			{ key:'530330',label:'水利/水电工程师'},
			{ key:'530331',label:'石油天然气技术人员'},
			{ key:'530332',label:'地质／地质勘测工程师'},
			{ key:'530333',label:'数控车床/数控冲床'},
			{ key:'530334',label:'数控编程'},
                        { key:'530335',label:'工程/机械技术员'},
                        { key:'530336',label:'石材加工技术师'}, //2009-02-26 root
                        { key:'530337',label:'不锈钢冷轧机机手'} //2009-02-26 root
			]},
		{ key:'5304',label:'汽车',
			children:[
			{ key:'530401',label:'汽车机构工程师'},
			{ key:'530402',label:'汽车设计工程师'},
			{ key:'530403',label:'汽车电子工程师'},
			{ key:'530404',label:'汽车质量管理'},
			{ key:'530405',label:'汽车安全性能工程师'},
			{ key:'530406',label:'汽车装配工艺工程师'},
			{ key:'530407',label:'汽车修理人员/学徒'},
			{ key:'530408',label:'4S店经理/维修站经理'},
			{ key:'530409',label:'汽车销售/经纪人'},
			{ key:'530410',label:'二手车评估师'},
			{ key:'530411',label:'电动车维修技师'},
			               { key:'530412',label:'售后顾问'} //2009-02-26 root
			]},
		{ key:'5305',label:'技工',
			children:[
			{ key:'530501',label:'普通技工/安装工'},
			{ key:'530502',label:'钳工/机修工/钣金工'},
			{ key:'530503',label:'电焊工/铆焊工/硬质合金焊接工'}, //2009-02-26增加硬质合金焊接工 root
			{ key:'530504',label:'车工/磨工/铣工/冲压工/锣工'},
			{ key:'530505',label:'切割技工'},
			{ key:'530506',label:'模具工'},
			{ key:'530507',label:'电工'},
			{ key:'530508',label:'叉车工'},
			{ key:'530509',label:'空调工/电梯工/锅炉工'},
			{ key:'530510',label:'水工/木工/漆工'},
			{ key:'530511',label:'操作工/不锈钢抛光工'},
			{ key:'530512',label:'裁剪车缝熨烫'},
			{ key:'530513',label:'热处理工'},
			{ key:'530514',label:'行车工'},
                        { key:'530515',label:'无心磨工/导磨工/光学粗磨工'},
                        { key:'530516',label:'内外圆磨床'},
                        { key:'530517',label:'装配工'},
                        { key:'530518',label:'空气调节工'}, //2009-02-26 root
                        { key:'530519',label:'泵车工/水压工'}, //2009-02-26 root
                        { key:'530520',label:'维保'}, //2009-02-26 root
                        { key:'530521',label:'汽吊起重工'} //2009-02-26 root
			]},
		{ key:'5306',label:'服装/纺织/皮革',
			children:[
			{ key:'530601',label:'服装/纺织设计'},
			{ key:'530602',label:'面料辅料开发'},
			{ key:'530603',label:'面料辅料采购'},
			{ key:'530604',label:'服装/纺织/皮革跟单'},
			{ key:'	',label:'质量管理/验货员(QA/QC)/检验员'},
			{ key:'530606',label:'板房/楦头/底格出格师'},
			{ key:'530607',label:'服装打样/制版/染色/匹染/印染'},
			{ key:'530608',label:'电脑放码员'},
			{ key:'530609',label:'纸样师/车板工'},
			{ key:'530610',label:'裁床'},
                        { key:'530611',label:'电脑袜机操作工'},
                        { key:'530612',label:'修布/缝纫学徒'}, //2009-02-26 root
                        { key:'530613',label:'质量跟单'}, //2009-02-26 root
                        { key:'530614',label:'上浆/刷毛/烫剪'}, //2009-02-26 root 
                        { key:'530615',label:'疏毛/和毛/挡车工'} //2009-02-26 root                      
			]},
		{ key:'5307',label:'采购',
			children:[
			{ key:'530701',label:'买手'},
			{ key:'530702',label:'采购总监'},
			{ key:'530703',label:'采购经理'},
			{ key:'530704',label:'采购主管'},
			{ key:'530705',label:'采购员'},
			{ key:'530706',label:'采购助理'}
			]},
		{ key:'5308',label:'贸易',
			children:[
			{ key:'530801',label:'外贸/贸易经理/主管'},
			{ key:'530802',label:'外贸/贸易专员/助理'},
			{ key:'530803',label:'国内贸易人员'},
			{ key:'530804',label:'业务跟单经理'},
			{ key:'530805',label:'高级业务跟单'},
			{ key:'530806',label:'业务跟单/单证'},
			{ key:'530807',label:'助理业务跟单'},
			               { key:'530808',label:'区域代理'} //2009-02-26 root
			]},
		{ key:'5309',label:'物流/仓储',
			children:[
			{ key:'530901',label:'物流总监'},
			{ key:'530902',label:'物流经理'},
			{ key:'530903',label:'物流主管'},
			{ key:'530904',label:'物流专员/助理'},
			{ key:'530905',label:'供应链总监'},
			{ key:'530906',label:'供应链经理'},
			{ key:'530907',label:'供应链主管/专员'},
			{ key:'530908',label:'物料经理'},
			{ key:'530909',label:'物料主管/专员'},
			{ key:'530910',label:'仓库经理/主管'},
			{ key:'530911',label:'仓库管理员/仓库验货员'},
			{ key:'530912',label:'运输经理/主管/业务员'},
			{ key:'530913',label:'货运代理'},
			{ key:'530914',label:'集装箱业务'},
			{ key:'530915',label:'海关事务管理'},
			{ key:'530916',label:'报关员'},
			{ key:'530917',label:'单证员'},
			{ key:'530918',label:'船务/空运陆运操作'},
			{ key:'530919',label:'快递员'},
			{ key:'530920',label:'调度员'},
			{ key:'530921',label:'理货员'},
			              { key:'530922',label:'配货/配送员'}, //2009-02-26 root
			              { key:'530923',label:'仓库送货工'} //2009-02-26 root
			]}
		]},
	{ key:'54',label:'生物/制药/医疗/护理 ',
		children:[
		{ key:'5401',label:'生物制药/医疗器械',
			children:[
			{ key:'540101',label:'生物工程/生物制药'},
			{ key:'540102',label:'化学分析测试员'},
			{ key:'540103',label:'医药技术研发管理人员'},
			{ key:'540104',label:'医药技术研发人员'},
			{ key:'540105',label:'临床研究员'},
			{ key:'540106',label:'临床协调员'},
			{ key:'540107',label:'药品注册'},
			{ key:'540108',label:'药品生产/质量管理'},
			{ key:'540109',label:'药品市场推广经理'},
			{ key:'540110',label:'药品市场推广主管/专员'},
			{ key:'540111',label:'医药招商'},
			{ key:'540112',label:'医药销售经理/主管'},
			{ key:'540113',label:'医药销售代表'},
			{ key:'540114',label:'医疗设备注册'},
			{ key:'540115',label:'医疗设备生产/质量管理'},
			{ key:'540116',label:'医疗器械市场推广'},
			{ key:'540117',label:'医疗器械销售'},
			{ key:'540118',label:'医疗器械维修人员'},
			               { key:'540119',label:'医疗护理人员'} //2009-02-27 root
			]},
		{ key:'5402',label:'化工',
			children:[
			{ key:'540201',label:'化工技术应用'},
			{ key:'540202',label:'化工实验室研究员/技术员'},
			{ key:'540203',label:'涂料研发工程师'},
			{ key:'540204',label:'配色技术员'},
			{ key:'540205',label:'塑料工程师'},
			{ key:'540206',label:'化妆品研发'},
			{ key:'540207',label:'食品/饮料研发'},
			                { key:'540208',label:'铝阳极氧化工程师'}, //2009-02-26 root
			                { key:'540209',label:'液压设计工程师'} //2009-02-26 root
			]},
		{ key:'5403',label:'医院/医疗/护理',
			children:[
			{ key:'540301',label:'医院管理人员'},
			{ key:'540302',label:'内科医生'},
			{ key:'540303',label:'外科医生'},
			{ key:'540304',label:'专科医生'},
			{ key:'540305',label:'牙科医生'},
			{ key:'540306',label:'麻醉医生'},
			{ key:'540307',label:'美容整形师'},
			{ key:'540308',label:'理疗师'},
			{ key:'540309',label:'中医科医生'},
			{ key:'540310',label:'针灸、推拿'},
			{ key:'540311',label:'心理医生'},
			{ key:'540312',label:'营养师'},
			{ key:'540313',label:'药库主任/药剂师'},
			{ key:'540314',label:'医药学检验'},
			{ key:'540315',label:'公共卫生/疾病控制'},
			{ key:'540316',label:'护理主任/护士长'},
			{ key:'540317',label:'护士/护理人员'},
			{ key:'540318',label:'兽医'},
			               { key:'540319',label:'导医'} //2009-02-27 root
			]}
		]},
	{ key:'55',label:'广告/市场/媒体/艺术',
		children:[
		{ key:'5501',label:'广告',
			children:[
			{ key:'550101',label:'广告客户总监/副总监'},
			{ key:'550102',label:'广告客户经理'},
			{ key:'550103',label:'广告客户主管/专员'},
			{ key:'550104',label:'广告创意/设计经理'},
			{ key:'550105',label:'广告创意总监'},
			{ key:'550106',label:'广告创意/设计主管/专员'},
			{ key:'550107',label:'美术指导'},
			{ key:'550108',label:'文案编辑'},
			{ key:'550109',label:'企业/业务发展经理'},
			{ key:'550110',label:'企业策划人员'},
			               { key:'550111',label:'数码设计'} //2009-02-26 root
			]},
		{ key:'5502',label:'公关/媒介',
			children:[
			{ key:'550201',label:'公关经理'},
			{ key:'550202',label:'公关主管'},
			{ key:'550203',label:'公关专员'},
			{ key:'550204',label:'会务经理'},
			{ key:'550205',label:'会务主管'},
			{ key:'550206',label:'会务专员'},
			{ key:'550207',label:'媒介经理'},
			{ key:'550208',label:'媒介主管'},
			{ key:'550209',label:'媒介专员'},
			{ key:'550210',label:'公关/媒介助理'}
			]},
		{ key:'5503',label:'市场/营销',
			children:[
			{ key:'550301',label:'市场/营销/拓展总监'},
			{ key:'550302',label:'市场/营销/拓展经理'},
			{ key:'550303',label:'市场/营销/拓展主管'},
			{ key:'550304',label:'市场/营销/拓展专员'},
			{ key:'550305',label:'市场助理'},
			{ key:'550306',label:'市场分析/调研人员'},
			{ key:'550307',label:'产品/品牌经理'},
			{ key:'550308',label:'产品/品牌主管'},
			{ key:'550309',label:'产品/品牌专员'},
			{ key:'550310',label:'市场通路经理/主管'},
			{ key:'550311',label:'市场通路专员'},
			{ key:'550312',label:'市场企划经理/主管'},
			{ key:'550313',label:'市场企划专员'},
			{ key:'550314',label:'促销经理'},
			{ key:'550315',label:'促销主管/督导'},
			{ key:'550316',label:'促销员/导购'},
			{ key:'550317',label:'选址拓展'}
			]},
		{ key:'5504',label:'影视/媒体',
			children:[
			{ key:'550401',label:'影视策划/制作人员'},
			{ key:'550402',label:'导演/编导'},
			{ key:'550403',label:'艺术/设计总监'},
			{ key:'550404',label:'经纪人/星探'},
			{ key:'550405',label:'演员/模特/主持人/歌手'},
			{ key:'550406',label:'摄影师'},
			{ key:'550407',label:'音效师'},
			{ key:'550408',label:'配音员'},
			{ key:'550409',label:'化妆师/造型师'},
                        { key:'550410',label:'摄影师助理'}
                         ]},
		{ key:'5505',label:'写作/出版/印刷',
			children:[
			{ key:'550501',label:'总编/副总编'},
			{ key:'550502',label:'编辑/作家/撰稿人'},
			{ key:'550503',label:'记者'},
			{ key:'550504',label:'美术编辑'},
			{ key:'550505',label:'排版设计'},
			{ key:'550506',label:'校对/录入'},
			{ key:'550507',label:'出版/发行'},
			{ key:'550508',label:'电分操作员'},
			{ key:'550509',label:'印刷排版/制版'},
			{ key:'550510',label:'数码直印/菲林输出'},
			{ key:'550511',label:'打稿机操作员'},
			{ key:'550512',label:'调墨技师'},
			{ key:'550513',label:'印刷机械机长'},
			{ key:'550514',label:'晒版/拼版/装订/烫金技工'}
			]},
		{ key:'5506',label:'艺术/设计',
			children:[
			{ key:'550601',label:'平面设计'},
			{ key:'550602',label:'动画/3D设计'},
			{ key:'550603',label:'店面/陈列/展览设计'},
			{ key:'550604',label:'多媒体设计'},
			{ key:'550605',label:'包装设计'},
			{ key:'550606',label:'工业/产品设计'},
			{ key:'550607',label:'工艺品/珠宝设计鉴定'},
			{ key:'550608',label:'家具/家居用品设计'},
			{ key:'550609',label:'玩具设计'},
                        { key:'550610',label:'美工设计'},
                        { key:'550611',label:'灯具结构设计师'} //2009-02-26 sg
			]}
		]},
	{ key:'56',label:'建筑/房地产',
		children:[
		{ key:'5601',label:'建筑工程',
			children:[
			{ key:'560101',label:'建筑工程师'},
			{ key:'560102',label:'结构/土木/土建工程师'},
			{ key:'560103',label:'公路/桥梁/港口/隧道工程'},
			{ key:'560104',label:'岩土工程'},
			{ key:'560105',label:'电气工程'},
			{ key:'560106',label:'给排水/暖通工程'},
			{ key:'560107',label:'幕墙工程师'},
			{ key:'560108',label:'城市规划与设计'},
			{ key:'560109',label:'室内外装潢设计'},
			{ key:'560110',label:'园艺/园林/景观设计/绿化'},
			{ key:'560111',label:'测绘/测量'},
			{ key:'560112',label:'建筑制图'},
			{ key:'560113',label:'工程造价师/预结算'},
			{ key:'560114',label:'建筑工程管理/项目经理'},
			{ key:'560115',label:'建筑工程验收'},
			{ key:'560116',label:'工程监理'},
			{ key:'560117',label:'施工员'},
                        { key:'560118',label:'主案设计师'},
                        { key:'560119',label:'亮化灯具安装电工/家具安装'}, //2009-02-26 root
                        { key:'560120',label:'基建前期办公人员'}, //2009-02-26 root
                        { key:'560121',label:'产品导购员'} //2009-02-26 root
			]},
		{ key:'5602',label:'房地产',
			children:[
			{ key:'560201',label:'房地产开发/策划经理'},
			{ key:'560202',label:'房地产开发/策划主管/专员'},
			{ key:'560203',label:'房产项目配套工程师'},
			{ key:'560204',label:'房地产项目招标专员'},
			{ key:'560205',label:'房地产评估'},
			{ key:'560206',label:'房地产中介/交易'},
			{ key:'560207',label:'房地产销售人员'}
			]},
		{ key:'5603',label:'物业管理',
			children:[
			{ key:'560301',label:'高级物业顾问/物业顾问'},
			{ key:'560302',label:'物业管理经理/主管'},
			{ key:'560303',label:'物业管理专员/助理'},
			{ key:'560304',label:'物业招商/租赁/租售'},
			{ key:'560305',label:'物业设施管理人员'},
			{ key:'560306',label:'物业维修人员'},
			{ key:'560307',label:'强电维护维修员'},
			               { key:'560308',label:'店铺经理'}, //2009-02-26 root
			               { key:'560309',label:'物业稽查员'}, //2009-02-26 root
			               { key:'560310',label:'弱电维修员'} //2009-02-26 root
			]}
		]},
	{ key:'57',label:'人力资源/行政/高级管理',
		children:[
		{ key:'5701',label:'人力资源',
			children:[
			{ key:'570101',label:'人事总监'},
			{ key:'570102',label:'人事经理'},
			{ key:'570103',label:'人事主管'},
			{ key:'570104',label:'人事专员'},
			{ key:'570105',label:'人事助理'},
			{ key:'570106',label:'招聘经理/主管'},
			{ key:'570107',label:'招聘专员/助理'},
			{ key:'570108',label:'薪资福利经理/主管'},
			{ key:'570109',label:'薪资福利专员/助理'},
			{ key:'570110',label:'绩效考核经理/主管'},
			{ key:'570111',label:'绩效考核专员/助理'},
			{ key:'570112',label:'培训经理/主管'},
			{ key:'570113',label:'培训专员/助理/培训师'},
			{ key:'570114',label:'企业文化/员工关系'}
			]},
		{ key:'5702',label:'高级管理',
			children:[
			{ key:'570201',label:'首席执行官CEO/总裁/总经理'},
			{ key:'570202',label:'首席运营官COO'},
			{ key:'570203',label:'副总经理/副总裁'},
			{ key:'570204',label:'合伙人'},
			{ key:'570205',label:'总监'},
			{ key:'570206',label:'办事处首席代表'},
			{ key:'570207',label:'办事处/分公司/分支机构经理'},
			{ key:'570208',label:'总裁助理/总经理助理'},
			               { key:'570209',label:'领班/经理'} //2009-02-26 root
			]},
		{ key:'5703',label:'行政/后勤',
			children:[
			{ key:'570301',label:'行政总监'},
			{ key:'570302',label:'行政经理/主管/办公室主任'},
			{ key:'570303',label:'行政专员/助理'},
			{ key:'570304',label:'经理助理/秘书'},
			{ key:'570305',label:'前台接待/总机/接待'},
			{ key:'570306',label:'后勤/内务'},
			{ key:'570307',label:'图书管理员/资料管理员'},
			{ key:'570308',label:'电脑操作员/打字员'},
			{ key:'570309',label:'文员/私人助理'},
                        { key:'570310',label:'外勤'},
                        { key:'570311',label:'文案助理'}
			]}
		]},
	
	{ key:'60',label:'公务员/翻译/其他',
		children:[
		{ key:'6001',label:'公务员',
			children:[
			{ key:'600101',label:'政府机关'},
			{ key:'600102',label:'检察院/法院/公安'},
			{ key:'600103',label:'事业单位'}
			]},
		{ key:'6002',label:'翻译',
			children:[
			{ key:'600201',label:'英语翻译'},
			{ key:'600202',label:'日语翻译'},
			{ key:'600203',label:'德语翻译'},
			{ key:'600204',label:'法语翻译'},
			{ key:'600205',label:'俄语翻译'},
			{ key:'600206',label:'意大利语翻译'},
			{ key:'600207',label:'西班牙语翻译'},
			{ key:'600208',label:'葡萄牙语翻译'},
			{ key:'600209',label:'阿拉伯语翻译'},
			{ key:'600210',label:'韩语/朝鲜语翻译'},
			{ key:'600211',label:'泰语翻译'},
			{ key:'600212',label:'中国方言翻译'},
			{ key:'600213',label:'小语种翻译'}
			]},
		{ key:'6003',label:'在校学生',
			children:[
			{ key:'600301',label:'研究生'},
			{ key:'600302',label:'大学/大专应届毕业生'},
			{ key:'600303',label:'中专/职校生'}
			]},
		{ key:'6004',label:'储备干部/培训生',
			children:[
			{ key:'600401',label:'储备干部'},
			{ key:'600402',label:'培训生'},
			{ key:'600403',label:'实习生'}
			]},
		{ key:'6005',label:'兼职'				// 2009.01.19 不需要两个编号 600501
			}
		]}
];

var theJobCategoryMap = theJobCategories;