(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{CpBc:function(t,e,r){var a=r("Y7ZC"),n=r("EP9H");a(a.G+a.F*(parseFloat!=n),{parseFloat:n})},EP9H:function(t,e,r){var a=r("5T2Y").parseFloat,n=r("oc46").trim;t.exports=1/a(r("5pKv")+"-0")!=-1/0?function(t){var e=n(String(t),3),r=a(e);return 0===r&&"-"==e.charAt(0)?-0:r}:a},KkdS:function(t,e,r){var a=r("Y7ZC"),n=r("5T2Y").isFinite;a(a.S,"Number",{isFinite:function(t){return"number"==typeof t&&n(t)}})},Rp86:function(t,e,r){r("bBy9"),r("FlQf"),t.exports=r("fXsU")},Wa2I:function(t,e,r){t.exports=r("e+cT")},XXOK:function(t,e,r){t.exports=r("Rp86")},"e+cT":function(t,e,r){r("CpBc"),t.exports=r("WEpk").parseFloat},fXsU:function(t,e,r){var a=r("5K7Z"),n=r("fNZA");t.exports=r("WEpk").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}},ioPa:function(t,e,r){r("KkdS"),t.exports=r("WEpk").Number.isFinite},q4wV:function(t,e,r){t.exports=r("ioPa")},zWze:function(t,e,r){"use strict";var a=r("hfKm"),n=r.n(a),o=r("2Eek"),i=r.n(o),c=r("XoMD"),u=r.n(c),l=r("Jo+v"),f=r.n(l),h=r("4mXO"),s=r.n(h),d=r("pLtp"),p=r.n(d),v=r("TbGu"),T=r.n(v),g=r("xHqa"),m=r.n(g),E=r("Wa2I"),y=r.n(E),D=r("q4wV"),w=r.n(D),_=r("eVuF"),O=r.n(_),b=r("XXOK"),A=r.n(b),C=r("Cg2A"),N=r.n(C),x=r("3eXy"),M=r("9UV2"),F=r.n(M),S=r("v5wO"),$=r("nQ0s");function P(e,t){var r=p()(e);if(s.a){var a=s()(e);t&&(a=a.filter(function(t){return f()(e,t).enumerable})),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach(function(t){m()(e,t,r[t])}):u.a?i()(e,u()(r)):P(r).forEach(function(t){n()(e,t,f()(r,t))})}return e}var K=["#f46a3f","#f58649","#f8a059","#f9b267","#fcbe76","#fad27d","#fad27d","#ffe5b2"],R=["#02366e","#064890","#0b69a5","#0aa0d1","#81d8f5","#d0e8f1"],V=["#AEACA6","#C7C5C1","#DFDEDB","#868D9A","#9A9EAC","#B7BAC4","#D0D1D7"],k=1,H=2,I=4,W={sortValue:function(t,e){return e.value-t.value},createMarkPoint:function(t,e){var r={name:2<arguments.length&&void 0!==arguments[2]?arguments[2]:"modification",coord:t,symbolSize:8,label:{normal:{show:!1}},itemStyle:{normal:{color:e,borderColor:e},emphasis:{label:{show:!1}}}};return console.log(r),console.log(this.formatTime(r.coord[0])),r},formatTime:function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(this.$store.state.isUS)return Object(S.formatDate)(N()(),"MM-DD",-10);var a,n=new Date(+t),o=10<=+(n.getMonth()+1)?n.getMonth()+1:"0".concat(n.getMonth()+1),i=10<=+(a=!0===e&&!0===r?new Date(this.$store.state.latestDate).getDate():n.getDate())?a:"0".concat(a);return"".concat(o,"/").concat(i)},adjustYMinMax:function(t,e,r,a){for(var n=t.getOption().dataZoom,o=n[0].startValue,i=n[0].endValue,c=e[o],u=e[o],l=o;l<=i;l+=1)e[l]<c&&(c=e[l]),e[l]>u&&(u=e[l]);for(var f=o;f<=i;f+=1)r[f]<c&&(c=r[f]),r[f]>u&&(u=r[f]);var h=u-c,s=Math.floor(Math.log(h)/Math.log(10)),d=2*Math.pow(10,s);c-=.2*h,u+=0*h,c=Math.floor(c/d)*d,u=Math.ceil(u/d)*d,c<0&&a&&(c=0),t.setOption({yAxis:[{min:c,max:u}]})},getModifications:function(t){var p=this;return x.a.getActivities(t).then(function(t){var e={},r=!0,a=!1,n=void 0;try{for(var o,i=A()(t);!(r=(o=i.next()).done);r=!0){var c=o.value,u=JSON.parse(c.changes);if(u.overflow_trigger){var l=u.overflow_trigger,f=l,h=p.$t("difference.detail_".concat(l)),s=p.formatTime(c.create_time);if(e[s]);else{var d={reason:f,detail:h};e[s]=d}}}}catch(t){a=!0,n=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return e}).catch(function(t){O.a.reject(t),p.handleError(t)})},getModificationsNew:function(t){var e={},r=!0,a=!1,n=void 0;try{for(var o,i=A()(t);!(r=(o=i.next()).done);r=!0){var c=o.value;if(c.status===$.a.DONE||c.status===$.a.DONE_BACKEND_DONE){var u=void 0,l=void 0,f=void 0;if(c.type===$.b.PORTFOLIO_REBALANCE_MORE_INVESTMENT||c.type===$.b.PORTFOLIO_REBALANCE_CASH_OUT){u=4,l=this.$t("difference.detail_".concat(4)),f=this.formatTime(c.updateTime)}if(c.type===$.b.PORTFOLIO_REBALANCE_DRIFT){u=5,l=this.$t("difference.detail_".concat(5)),f=this.formatTime(c.updateTime)}if(c.type===$.b.PORTFOLIO_REBALANCE_ALGO){u=5,l=this.$t("difference.detail_".concat(5)),f=this.formatTime(c.updateTime)}if(c.type===$.b.PORTFOLIO_REBALANCE_INVESTMENT_TARGET_CHANGE){u=5,l=this.$t("difference.detail_".concat(5)),f=this.formatTime(c.updateTime)}if(f&&!e[f]){var h={reason:u,detail:l};e[f]=h}}}}catch(t){a=!0,n=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return e},getEarnRatio:function(t){var e=t.length,r=Math.pow(t[e-1].price/t[e-61].price,.2)-1;return r=(100*r).toFixed(1)},getPieChartObject:function(t,e,r){var a,n=!(3<arguments.length&&void 0!==arguments[3])||arguments[3],o=4<arguments.length&&void 0!==arguments[4]&&arguments[4];a=!0===n||!0===o?e.weight:e.value,a=w()(e.weight)?e.weight:y()(e.weight);e.value;var i=99999;t.iuid&&(i=t.iuid.split("_")),"HK"===i[0]&&i[2]&&(i[2]="HKD"===i[2]?"HKD":i[2].padStart(5,"0")),isNaN(a)&&(a=0);var c=y()(F.a.formatNumber(100*a,2));return c=c.toFixed(2),{name:t.name,desc:t.desc,reason:t.reason,url:t.url,weight:a,percentage:c,value:+e.value||r*a,id:i[2],area:i[0]}},addColor:function(t,e){return B({},t,{itemStyle:{normal:{color:e}}})},handleWeight:function(t,e){var r=t.weight||t.value/e;return r=(r=y()(F.a.formatNumber(100*r,2))).toFixed(2)},handleDetail:function(t,e){var r,a=this,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=3<arguments.length&&void 0!==arguments[3]&&arguments[3],i=[],c=[],u=[],l=[],f=[],h=[],s="iuid",d=0;!0===n&&!1===o&&(s="iuid");for(var p=[],v=0;v<t.length;v+=1){if(p[v]={},p[v].name)console.log(p[v].name);else{var g="portfolio";(this.$store.state.isUS||this.$store.state.isHKUS)&&(g="portfolioUS"),p[v].name=this.$t("".concat(g,".").concat(t[v][s],"_name")),p[v].desc=this.$t("".concat(g,".").concat(t[v][s],"_desc")),p[v].reason=this.$t("".concat(g,".").concat(t[v][s],"_reason")),this.$store.state.isUS&&(p[v].url=this.$t("".concat(g,".").concat(t[v][s],"_url"))),p[v].iuid=t[v][s],this.$store.state.isGuodu&&"HK_00_HKD"===t[v][s]&&(p[v].name=this.$t("portfolio.guodu_cash"))}var m=this.getPieChartObject(p[v],t[v],e,n,o),E={value:this.handleWeight(t[v],e),name:p[v].name};m.id,t[v].flag&k?(c.push(m),i.push(E)):t[v].flag&I?(h.push(m),f.push(E)):t[v].flag&H?(l.push(m),u.push(E)):(c.push(m),i.push(E)),d<m.percentage&&(d=m.percentage)}var y=i.sort(this.sortValue).map(function(t,e){return a.addColor(t,K[e])}),D=u.sort(this.sortValue).map(function(t,e){return a.addColor(t,R[e])}),w=f.sort(this.sortValue).map(function(t,e){return a.addColor(t,V[e])});return r=[].concat(T()(D),T()(y),T()(w)),c=c.sort(this.sortValue).map(function(t,e){return B({},t,{color:K[e]})}),l=l.sort(this.sortValue).map(function(t,e){return B({},t,{color:R[e]})}),h=h.sort(this.sortValue).map(function(t,e){return B({},t,{color:V[e]})}),this.computeCashPercent(c,l,h),{otherData:h,stockData:c,bondData:l,upperStock:y,upperBonds:D,fundsValue:r,maxPercent:d}},showETFDetail:function(t,e){var r=this;return x.a.getTargetById(t).then(function(t){return r.handleDetail(r.targetWrapper(t),e,!1,!0)}).catch(function(t){O.a.reject(t),r.handleError(t)})},targetWrapper:function(t){var e=[],r=!0,a=!1,n=void 0;try{for(var o,i=A()(t.bond);!(r=(o=i.next()).done);r=!0){var c=o.value;c.flag=H,e.push(c)}}catch(t){a=!0,n=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}var u=!0,l=!1,f=void 0;try{for(var h,s=A()(t.others);!(u=(h=s.next()).done);u=!0){var d=h.value;d.flag=I,e.push(d)}}catch(t){l=!0,f=t}finally{try{u||null==s.return||s.return()}finally{if(l)throw f}}var p=!0,v=!1,g=void 0;try{for(var m,E=A()(t.stock);!(p=(m=E.next()).done);p=!0){var y=m.value;y.flag=k,e.push(y)}}catch(t){v=!0,g=t}finally{try{p||null==E.return||E.return()}finally{if(v)throw g}}return e},portfolioHoldingWrapper:function(t){var e=[],r=!0,a=!1,n=void 0;try{for(var o,i=A()(t);!(r=(o=i.next()).done);r=!0){var c=o.value;c.holdingType===$.d.STOCK&&(c.flag=k,e.push(c)),c.holdingType===$.d.BOND&&(c.flag=H,e.push(c)),c.holdingType===$.d.ALTERNATIVES&&(c.flag=I,e.push(c))}}catch(t){a=!0,n=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return e},showMarketUpdatedDetail:function(t,e,r,a,n){var o=this;return x.a.getPortfolioHolding(t).then(function(t){if(!a){if(t&&t.length<2)return x.a.getTargetById(e).then(function(t){return o.handleDetail(o.targetWrapper(t),r,!1,!0)}).catch(function(t){O.a.reject(t),o.handleError(t)});if(n)return x.a.getTargetById(e).then(function(t){return o.handleDetail(o.targetWrapper(t),r,!1,!0)}).catch(function(t){O.a.reject(t),o.handleError(t)})}return B({},o.handleDetail(o.portfolioHoldingWrapper(t),r,!0))}).catch(function(t){o.handleError(t)})},computePiePercent:function(t,e){var r=t.stockData,a=t.bondData,n=t.otherData,o=0,i=0,c=0;return r.forEach(function(t){o+=t.weight}),a.forEach(function(t){i+=t.weight}),n.forEach(function(t){c+=t.weight}),0===r.length&&(r[0]={color:K[0]}),0===a.length&&(a[0]={color:R[0]}),0===n.length&&(n[0]={color:V[0]}),[{value:o,color:r[0].color,name:this.$t("m_allocation.stock")},{value:i,color:a[0].color,name:this.$t("m_allocation.bond")},{value:c,color:n[0].color,name:this.$t("m_allocation.other")}]},computeCashPercent:function(t,e,r){t.forEach(function(t){t.weight}),e.forEach(function(t){t.weight}),r.forEach(function(t){"HKD"!==t.id&&t.weight})},handleTarget:function(t){stockData.forEach(function(t){t.weight}),bondData.forEach(function(t){t.weight}),otherData.forEach(function(t){"HKD"!==t.id&&t.weight})}};e.a={methods:B({},W)}}}]);