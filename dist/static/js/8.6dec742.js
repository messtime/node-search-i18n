(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2f92":function(t,e,n){"use strict";var r=n("blHf");n.n(r).a},Rp86:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("fXsU")},XXOK:function(t,e,n){t.exports=n("Rp86")},blHf:function(t,e,n){},fXsU:function(t,e,n){var r=n("5K7Z"),i=n("fNZA");t.exports=n("WEpk").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},mfTu:function(t,e,n){"use strict";n.r(e);var r=n("9Jkg"),x=n.n(r),i=n("XXOK"),_=n.n(i),a=(n("eFdw"),n("b0p+")),o=n.n(a),s=n("3eXy"),u={components:{aqmTransactionList:o.a.aqmTransactionList,aqmNavbar:o.a.aqmNavbar},mixins:[],data:function(){return{value:[],eventList:[],eventMap:{1:this.$t("m_invest_type.build_acc"),2:this.$t("trade.rebalance"),3:this.$t("trade.dividend"),4:this.$t("trade.deposit"),5:this.$t("trade.withdraw"),6:this.$t("trade.management_fee"),7:this.$t("trade.interest"),99:this.$t("trade.other")},txnNewMap:{0:this.$t("trade.all"),1:this.$t("trade.txnMap_1"),2:this.$t("trade.txnMap_2"),3:this.$t("trade.txnMap_3"),4:this.$t("trade.txnMap_4"),99:this.$t("trade.txnMap_5")},types:{1:1,2:1,3:2,4:3,5:1,7:4,99:99},type:{0:this.$t("m_invest_type.trade_type0"),1:this.$t("m_invest_type.trade_type1"),2:this.$t("m_invest_type.trade_type2")},listTitle:"",txnMap:{1:this.$t("trade.type_1"),2:this.$t("trade.type_2"),3:this.$t("trade.type_3"),4:this.$t("trade.type_4"),5:this.$t("trade.type_5"),6:this.$t("trade.type_6"),7:this.$t("trade.type_7"),8:this.$t("trade.type_8"),9:this.$t("trade_type_9")},hasTxn:!0}},computed:{},watch:{},methods:{init:function(){var T=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=localStorage.getItem("p_id");e&&"null"!=e&&"undefined"!=e&&0!=e?s.a.getTxnDetails(t).then(function(t){if(0===t.length)return T.hasTxn=!1,T.transactions=[],T.eventList=[],T.transaction={},void(T.listTitle=T.txnNewMap[T.selectTxnTypeValue]);t=t.filter(function(t){return[1,2,3,6].includes(t.eventGroup)}),1===T.selectTxnTypeValue&&(t=t.filter(function(t){return-1<[2].indexOf(t.eventGroup)})),2===T.selectTxnTypeValue&&(t=t.filter(function(t){return-1<[4].indexOf(t.eventGroup)})),3===T.selectTxnTypeValue&&(t=t.filter(function(t){return-1<[5].indexOf(t.eventGroup)})),4===T.selectTxnTypeValue&&(t=t.filter(function(t){return-1<[3].indexOf(t.eventGroup)})),5===T.selectTxnTypeValue&&(t=t.filter(function(t){return-1<[1].indexOf(t.eventGroup)})),6===T.selectTxnTypeValue&&(t=t.filter(function(t){return-1<[6].indexOf(t.eventGroup)}));var e={},s=[],n=[],r=!0,i=!1,a=void 0;try{for(var o,u=_()(t);!(r=(o=u.next()).done);r=!0){var c=o.value,p="".concat(c.reportDay,"-").concat(c.eventGroup,"-").concat(c.taskId),l=void 0,f="";if(""===c.iuid)f=l="";else{l=T.$store.state.isUS?"00"===c.iuid.split("_")[2]?"00":c.iuid.split("_")[2]:"00"===c.iuid.split("_")[2]?"00":c.iuid.split("_")[2].padStart(5,"0");var d="portfolio";(T.$store.state.isUS||T.$store.state.isHKUS)&&(d="portfolioUS"),f=T.$t("".concat(d,".").concat(c.iuid,"_name"))}e[p]||(s.push({date:c.reportDay,iuid:c.iuid,area:c.iuid.split("_")[0],id:l,txn:T.eventMap[c.eventGroup],data:f,money:c.amount,txnType:c.type,eventGroup:c.eventGroup,taskId:c.taskId,commission:c.commission,timeStamp:c.createTime}),e[p]=1),n.push({date:c.reportDay,iuid:c.iuid,area:c.iuid.split("_")[0],id:l,txn:T.eventMap[c.eventGroup],data:f,currency:c.currency,money:c.amount,txnType:c.type,eventGroup:c.eventGroup,taskId:c.taskId,commission:c.commission,timeStamp:c.createTime})}}catch(t){i=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}T.eventList=s,n.forEach(function(t){var e=!0,n=!1,r=void 0;try{for(var i,a=_()(s);!(e=(i=a.next()).done);e=!0){var o=i.value;t.eventGroup===o.eventGroup&&t.taskId===o.taskId&&t.date===o.date&&(t.money&&(t.money=t.money.toFixed(2)),t.commission&&(t.commission=t.commission.toFixed(2)),o.records=o.records||[],o.records.push(t))}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}),console.log(T.eventList),T.transactions=T.eventList;var h,v=[],y=[],m=function(t){return t.reduce(function(t,e){return t+ +e.money},0)};T.value=T.eventList,console.log(T.eventList),T.value.forEach(function(t){if(1!=t.txnType&&2!=t.txnType||(v=t.records.filter(function(t){return 1===t.txnType}),y=t.records.filter(function(t){return 2===t.txnType}),h=-(m(v)+m(y))),3==t.txnType){var e=t.records.filter(function(t){return 3===t.txnType});h=m(e)}if(4==t.txnType){var n=t.records.filter(function(t){return 4===t.txnType});h=m(n)}if(7==t.txnType){var r=t.records.filter(function(t){return 7===t.txnType});h=m(r)}if(8==t.txnType){var i=t.records.filter(function(t){return 8===t.txnType});h=m(i)}if(9==t.txnType){var a=t.records.filter(function(t){return 9===t.txnType});h=m(a)}t.amount=h,t.cashType="HKD","US"===t.area&&(t.cashType="USD"),"CN"===t.area&&(t.cashType="CNH")}),0===s.length?(T.listTitle="",T.transaction={}):(T.transaction=T.getTransaction(s[0]),T.listTitle=T.eventMap[s[0].eventGroup])}).catch(function(t){T.handleError(t)}):this.hasTxn=!1},goBack:function(){this.$router.go(-1)},goFaq:function(){this.$router.push("/faq")},openTransaction:function(t,e){this.itemActive=e,console.log(t,e),this.transaction=this.getTransaction(t),this.transaction.timeStamp=t.timeStamp,this.transaction.eventGroup=t.eventGroup,this.listTitle=this.eventMap[t.eventGroup],this.transaction.listTitle=this.listTitle,this.transaction.cashType=t.cashType,localStorage.setItem("transaction",x()(this.transaction)),console.log(this.transaction),this.$router.push("/transactionHistory")},getTransaction:function(t){if(!t)return{};var e=t.records;if(!e)return{};var n,r=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},i=function(t){return t.reduce(function(t,e){return t+ +e.money},0)},a=r(e).filter(function(t){return t});n=2<=e.length?i(a):a[0].money;var o=e[0].txnType,s=e.filter(function(t){return t.commission}).reduce(function(t,e){return t+ +e.commission},0);n+=s;for(var u=e.filter(function(t){return 1===t.txnType}),c=e.filter(function(t){return 2===t.txnType}),p=e.filter(function(t){return 3===t.txnType}),l=e.filter(function(t){return 4===t.txnType}),f=e.filter(function(t){return 7===t.txnType}),d=e.filter(function(t){return 8===t.txnType}),h=e.filter(function(t){return 9===t.txnType}),v=[],y=[],m=0;m<u.length;m++)v.push(JSON.parse(x()(u[m])));for(var T=0;T<c.length;T++)y.push(JSON.parse(x()(c[T])));return v.forEach(function(t){t.money=-t.money}),y.forEach(function(t){t.money=-t.money}),11===o&&(s=n),{buy:v,sell:y,saving:p,withdraw:l,dividends:f,fee:s,amount:n,interest:d,interestTax:h,titleType:o,portfolioMoney:i(v)+i(y),date:r(e).find(function(t){return t}).date}}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},beforeRouteEnter:function(t,e,n){n(function(t){})},beforeDestroy:function(){}},c=(n("2f92"),n("KHd+")),p=Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trade-page"},[n("aqmNavbar",{attrs:{value:t.$t("trade.title"),showClose:!0,showHelp:!0},on:{close:t.emitClose,goBack:t.emitBack,goHelp:t.goFaq}}),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.hasTxn,expression:"!hasTxn"}],staticClass:"no-records"},[t._v(t._s(t.$t("portfolio.history-no-content")))]),t._v(" "),n("aqmTransactionList",{directives:[{name:"show",rawName:"v-show",value:t.hasTxn,expression:"hasTxn"}],attrs:{showAmount:!1,value:t.value},on:{childClick:t.openTransaction}})],1)},[],!1,null,null,null);e.default=p.exports}}]);