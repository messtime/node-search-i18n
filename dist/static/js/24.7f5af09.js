(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"2V5u":function(t,e,o){"use strict";var a=o("Q3zb");o.n(a).a},HvGQ:function(t,e,o){"use strict";o.r(e);o("eFdw");var a=o("b0p+"),r=o.n(a),i=o("3eXy"),n=o("nQ0s"),s=r.a.aqmNavbar,c=r.a.aqmTypePanel,l=r.a.aqmSelectButton,u=r.a.aqmProfitchart,p={components:{aqmTypePanel:c,aqmSelectButton:l,aqmNote:r.a.aqmNote,aqmProfitchart:u,aqmNavbar:s},mixins:[],data:function(){return{profitType:[this.$t("predictChart.goodMarket"),this.$t("predictChart.normalMarket"),this.$t("predictChart.worseMarket")],title:this.$t("predictChart.expectedRevenue"),riskType:"",riskNameMap:{1:this.$t("result.risktype_1"),2:this.$t("result.risktype_2"),3:this.$t("result.risktype_3"),4:this.$t("result.risktype_4"),5:this.$t("result.risktype_5")},accData:{},hasPortfolio:!1,totalValue:0,investText:[this.$t("m_invest_type.risk_type"),this.$t("m_invest_type.combination_value")],showOrderingTip:!1,inTransfer:!1,cashType:"HKD ",typeDesc:this.$t("m_invest_type.invest_type_state"),areaColor:{color95:"rgba(0,0,0,0)",color75:"rgba(61,130,210,0.27)",color50:"rgba(74,144,226,0.5)",color25:"rgba(74,144,226,0.5)",color5:"rgba(61,130,210,0.27)"},itemColor:{normal:{color95:"#9e999a",color50:"rgba(74,144,226)",color5:"rgb(125,171,231)"},emphasis:{color95:"#9e999a",color50:"#32629a",color5:"rgb(125,171,231)"}},lineColor:{color95:" rgba(74,144,226,0.12)",color50:"rgba(74,144,226)"}}},computed:{},watch:{},methods:{init:function(){var e,o=this;i.a.getQuestionnaireAnswerLatest().then(function(t){o.riskType=t.riskType}).catch(function(t){o.handleError(t)}),i.a.getAdviceActive().then(function(t){t.length&&(e=t[0].target),i.a.getPortfolio().then(function(t){t.id&&(o.hasPortfolio=!0,o.totalValue=t.value,e=t.target,t.tradingStatus!==n.f.TRADING_IN_PROGRESS&&t.tradingStatus!==n.f.TRADING_WAIT||(o.showOrderingTip=!0)),e&&i.a.getProjection(e).then(function(t){o.$refs.lineChart.startDraw(t)}).catch(function(t){o.handleError(t)})}).catch(function(t){o.handleError(t)})}).catch(function(t){o.handleError(t)})},goBack:function(){this.$router.back()},goFaq:function(){this.$router.push("/faq")},ajustRisk:function(){},goQuestion:function(){var a=this;this.hasPortfolio?i.a.getAdviceActive().then(function(t){var e=!1;if(t.some(function(t){return(t.type===n.b.ACCOUNT_INVESTMENT_QUESTIONNAIRE||t.type===n.b.ACCOUNT_INVESTMENT_QUESTIONNAIRE_CHANGE)&&(e=!0,console.log("已经有问卷advice"),a.$router.push("/question"),!0)}),!e){var o={oid:localStorage.getItem("oid"),pid:localStorage.getItem("pid"),questionnaireId:localStorage.getItem("q_id"),portfolioId:localStorage.getItem("p_id"),iaccountId:localStorage.getItem("i_id"),status:0,type:n.b.ACCOUNT_INVESTMENT_QUESTIONNAIRE_CHANGE};i.a.postAdvisor(o).then(function(t){console.log(t),a.$router.push("/question")}).catch(function(t){a.handleError(t)})}}).catch(function(t){a.handleError(t)}):this.$router.push("/question")}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},beforeRouteEnter:function(t,e,o){o(function(t){})},beforeDestroy:function(){}},h=(o("2V5u"),o("KHd+")),_=Object(h.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"investtype-page"},[o("aqmNavbar",{attrs:{value:t.$t("m_invest_type.invest_type"),showClose:!0,showBack:!1,showHelp:!0},on:{goHelp:t.goFaq,close:t.emitClose}}),t._v(" "),o("aqmTypePanel",{staticStyle:{"margin-top":"20px"},attrs:{investText:t.investText,riskType:t.riskNameMap[t.riskType],value:t.totalValue,cashType:t.cashType}}),t._v(" "),o("aqmProfitchart",{ref:"lineChart",attrs:{isHKUS:t.$store.state.isHKUS||t.$store.state.isUS,areaColor:t.areaColor,itemColor:t.itemColor,lineColor:t.lineColor,title:t.title,type:t.profitType}}),t._v(" "),o("div",{staticClass:"investtype-state"},[o("p",[t._v(t._s(t.typeDesc))])]),t._v(" "),o("aqmNote",{attrs:{title:t.title,defaultDirect:"right"}},[o("div",{attrs:{slot:"aqm-note-content"},slot:"aqm-note-content"},[o("p",[t._v(t._s(t.$t("m_invest_type.note_content0"))+"\n        "),o("br"),t._v(" "+t._s(t.$t("m_invest_type.note_content1"))+"\n        "),o("br"),t._v(" "+t._s(t.$t("m_invest_type.note_content2"))+"\n        "),o("br"),t._v(" "+t._s(t.$t("m_invest_type.note_content3"))+"\n      ")])])]),t._v(" "),o("aqmSelectButton",{staticClass:"order-btn",attrs:{fontSize:16,height:39,borderRadius:3,value:t.$t("m_invest_type.adjust_risk"),disabled:t.showOrderingTip},on:{click:t.goQuestion}}),t._v(" "),o("footer",{staticClass:"footer-tab"},[o("aqm-tabbar",{attrs:{menu:t.menu_p,activeBtn:1}})],1)],1)},[],!1,null,null,null);e.default=_.exports},Q3zb:function(t,e,o){}}]);