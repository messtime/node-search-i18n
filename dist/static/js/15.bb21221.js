(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4bvL":function(t,e,s){},"mF/w":function(t,e,s){"use strict";var n=s("4bvL");s.n(n).a},sFjh:function(t,e,s){"use strict";s.r(e);var n=s("3eXy"),a={components:{},props:{},mixins:[],data:function(){return{qztAgreeData:[{name:this.$t("hst.agreement_1"),url:"cn-aqumon-hs.pdf",enUrl:"en-aqumon-hs.pdf",twUrl:"tw-aqumon-hs.pdf",checked:!0},{name:this.$t("hst.agreement_2"),url:"cn-hs-client.pdf",enUrl:"en-hs-client.pdf",twUrl:"tw-hs-client.pdf",checked:!0}],signSample:"",signError:!1,sign:"",englishName:"",name:""}},computed:{},watch:{sign:function(t){t&&(t&&this.checkSign(t)?this.signError=!1:this.signError=!0)}},methods:{checkSign:function(t){return!!t&&(t===this.name||t===this.englishName)},back:function(){this.$router.push("/authentication")},init:function(){localStorage.getItem("englishName")&&(this.englishName=localStorage.getItem("englishName")),localStorage.getItem("name")&&(this.name=localStorage.getItem("name")),this.signSample=this.name||this.englishName},validate:function(){var e=this;if(this.$store.commit("CHANGE_ALERT_COUNT",0),this.qztAgreeData[0].checked&&this.qztAgreeData[1].checked)if(this.sign)if(this.signError)this.$alertBox(this.$t("hst.toast4"));else{var t={sign:this.sign};n.a.hsModifyAccount(t).then(function(){localStorage.setItem("openaccStatus",2e3),e.$router.push("/openaccNotice")}).catch(function(t){e.handleError(t)})}else this.$alertBox(this.$t("hst.toast5"));else this.$alertBox(this.$t("hst.toast3"))},AgreeCheck:function(t){t.checked=!t.checked},goAqumonAgree:function(t){"en"===this.$i18n.locale?localStorage.setItem("openaccPdf","https://oss-static.aqumon.com/pdf/pdfjs/web/viewer.html?file=/pdf/".concat(t.enUrl)):"zh_cn"===this.$i18n.locale?localStorage.setItem("openaccPdf","https://oss-static.aqumon.com/pdf/pdfjs/web/viewer.html?file=/pdf/".concat(t.url)):"zh_tw"===this.$i18n.locale&&localStorage.setItem("openaccPdf","https://oss-static.aqumon.com/pdf/pdfjs/web/viewer.html?file=/pdf/".concat(t.twUrl)),this.$router.push("/openaccpdf")}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},beforeDestroy:function(){}},i=(s("mF/w"),s("KHd+")),c=Object(i.a)(a,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"agreeconfirm-page"},[a("aqmNavbar",{attrs:{showClose:!0,value:n.$t("hst.agreement_title"),showHelp:!0},on:{goBack:n.back,close:n.emitClose,goHelp:n.goFaq}}),n._v(" "),a("div",{staticClass:"agreeconfirm-container"},[a("div",{staticClass:"agreeconfirm-cont"},[a("header",[a("p",{domProps:{innerHTML:n._s(n.$t("hst.agreement_desc"))}})]),n._v(" "),a("section",{staticClass:"aqm-agree"},[a("h1",[n._v(n._s(n.$t("hst.agreement_subtitle")))]),n._v(" "),a("h2",[n._v(n._s(n.$t("hst.agreement_sub_desc")))]),n._v(" "),n._l(n.qztAgreeData,function(e,s){return a("div",{staticClass:"agree-singel"},[a("div",{staticClass:"choose-agree",class:{checked:e.checked},on:{click:function(t){return n.AgreeCheck(e)}}}),n._v(" "),a("div",{staticClass:"agreement-item",on:{click:function(t){return n.goAqumonAgree(n.qztAgreeData[s])}}},[a("div",{staticClass:"agree-name"},[n._v(n._s(n.qztAgreeData[s].name))]),n._v(" "),a("div",{staticClass:"agree-arrow"})])])})],2),n._v(" "),a("section",{staticClass:"sign-notice"},[a("p",{staticClass:"footer-state"},[n._v(n._s(n.$t("account.agreement_sign_agreement"))+"\n          ")]),n._v(" "),a("p",{staticClass:"data-notice"},[n._v(n._s(n.$t("account.general_account_date"))+"： "+n._s(n._f("formatDate")(new Date,"yyyy.MM.dd")))]),n._v("\n        "+n._s(n.$t("hst.agreement_input_sign"))+"\n        "),n._v(" "),a("div",{staticClass:"sign-notice-suggest"},[n._v(n._s(n.signSample+" "))]),n._v(" "),a("aqmCommonInput",{ref:"sign",staticClass:"sign-btn",attrs:{placeholder:""+n.$t("hst.agreement_sign")+n.signSample,label:"",inputValue:n.sign,signSample:n.signSample,errorTip:n.$t("account.agreement_sign_error_null")},on:{"update:inputValue":function(t){n.sign=t},"update:input-value":function(t){n.sign=t}}})],1)]),n._v(" "),a("aqmSelectButton",{attrs:{value:n.$t("accounttransfer.agree"),fontSize:16,height:43,borderRadius:5},on:{click:n.validate}})],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);