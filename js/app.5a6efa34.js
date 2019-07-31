(function(t){function a(a){for(var s,n,l=a[0],c=a[1],o=a[2],d=0,x=[];d<l.length;d++)n=l[d],r[n]&&x.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);v&&v(a);while(x.length)x.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,l=1;l<e.length;l++){var c=e[l];0!==r[c]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/chs.physiciansearch.client/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var v=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d"),e("db4d"),e("d1e7");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:""}},[e("v-toolbar-title",{staticClass:"headline text-uppercase"},[e("span",{staticClass:"font-weight-light"},[t._v("Search for Practitioner Information")])])],1),e("v-content",[e("ProviderSearch")],1)],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-card",{staticClass:"search mb-2"},[e("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[t._v("Search Criteria")]),e("v-card-text",[e("v-layout",{staticClass:"row",attrs:{"mt-2":""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-radio-group",{attrs:{row:""},on:{change:t.reset},model:{value:t.searchType,callback:function(a){t.searchType=a},expression:"searchType"}},[e("v-radio",{attrs:{label:"By Physician Name",value:"name"}}),e("v-radio",{attrs:{label:"By NPI",value:"npi"}}),e("v-radio",{attrs:{label:"By STAR ID",value:"star"}}),e("v-radio",{attrs:{label:"By License #",value:"license"}})],1)],1)],1),e("v-layout",{staticClass:"row",attrs:{"mt-2":""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-text-field",{attrs:{outlined:"",solo:"",placeholder:"Search Text"},model:{value:t.searchValue,callback:function(a){t.searchValue=a},expression:"searchValue"}})],1)],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-center",attrs:{xs12:""}},[e("v-btn",{on:{click:t.search}},[t._v("Search")])],1)],1)],1)],1),0!==t.practitioners.length||t.initialSearch?t._e():e("v-card",{staticClass:"results"},[e("v-card-text",[t._v("No Results Found")])],1),t.practitioners.length>1?e("v-card",{staticClass:"results mb-2"},[e("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[t._v("Select Provider")]),e("v-card-text",[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.practitioners,"items-per-page":5},on:{"click:row":t.practitionerSelected}})],1)],1):t._e(),null!==t.practitionerIndex?e("v-card",{staticClass:"results"},[e("v-card-title",{staticClass:"headline font-weight-regular blue-grey white--text"},[t._v("\n      "+t._s(t.practitioner.ProviderLastName)+", "+t._s(t.practitioner.ProviderFirstname)+" "+t._s(t.practitioner.ProviderDegree)+"\n      "),e("v-spacer"),t._v("\n      "+t._s(t.practitioner.status)+"\n    ")],1),e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","ma-2":""}},[e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Office Code:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v("code")]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Facility:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.facilities))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("STAR ID:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.StarId))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("NPI:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.ProviderNpi))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Primary Specialty:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.PrimarySpecialty))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("General Practice Area:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.specialtySecondary))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Medicare Number:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.medicareNumber))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("State License Number:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.NysLicense))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Medicaid Number:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.medicaidNumber))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Medicaid Type Code:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.medicaidType))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("LIHN Code:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.lihn))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("OSID Code:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.OSID))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Blue Cross Number:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.blueCrossNumber))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Active Date:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.activeDate))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm3:"","text-right":""}},[t._v("Inactive Date:")]),e("v-flex",{attrs:{xs6:"",sm3:""}},[t._v(t._s(t.practitioner.inactiveDate))])],1),e("v-layout",{attrs:{row:"",wrap:"","ma-2":""}},[e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv C:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.SCH_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv F:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.SFH_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv G:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.GSH_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv H:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.MCH_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv J:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.SJH_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv M:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.MMC_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv O:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.OLC_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv P:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.GSP_AdmitStatus))]),e("v-flex",{staticClass:"data-header",attrs:{xs6:"",sm2:"","text-right":""}},[t._v("Admit Priv S:")]),e("v-flex",{attrs:{xs6:"",sm2:""}},[t._v(t._s(t.practitioner.SCS_AdmitStatus))])],1),e("v-layout",{attrs:{wrap:""}},t._l(t.practitioner.addresses,function(a){return e("v-flex",{key:a.address1,attrs:{xs12:"",sm6:"",lg4:"","pa-2":"",bind:a}},[e("v-card",{staticClass:"address-card",attrs:{color:"purple lighten-5"}},[e("v-container",[e("v-layout",[e("v-flex",{attrs:{xs12:""}},[t._v(t._s(a.address1))])],1),e("v-layout",[e("v-flex",{attrs:{xs12:""}},[t._v(t._s(a.address2))])],1),e("v-layout",[e("v-flex",{attrs:{xs12:""}},[t._v(t._s(a.city)+", "+t._s(a.state)+" "+t._s(a.zip))])],1),e("v-layout",{attrs:{"mt-2":""}},[e("v-flex",{attrs:{xs12:""}},[e("v-layout",[e("i",{staticClass:"material-icons"},[t._v("phone")]),t._v("\n                    "+t._s(a.phone)+"\n                  ")])],1),e("v-flex",{attrs:{xs12:""}},[e("v-layout",[e("i",{staticClass:"material-icons"},[t._v("local_printshop")]),t._v("\n                    "+t._s(a.fax)+"\n                  ")])],1)],1)],1)],1)],1)}),1)],1)],1):t._e()],1)},l=[],c=(e("20d6"),e("bc3a")),o={name:"HelloWorld",data:function(){return{initialSearch:!0,searchType:null,searchValue:null,practitionerIndex:null,practitioners:[],headers:[{text:"Name",sortable:!0,value:"ProviderLongName"},{text:"NPI",sortable:!0,value:"ProviderNpi"},{text:"STAR ID",sortable:!0,value:"StarId"},{text:"NYS License",sortable:!0,value:"NysLicense"},{text:"Primary Specialty",sortable:!0,value:"PrimarySpecialty"}]}},computed:{practitioner:function(){return this.practitioners[this.practitionerIndex]}},methods:{reset:function(){this.searchValue=""},search:function(){var t=this;if(!this.searchType||this.searchValue){this.practitionerIndex=null,this.initialSearch=!1;var a="https://www030.chsli.org:3002/search",e=a+"?type=".concat(this.searchType,"&value=").concat(this.searchValue);c.get(e).then(function(a){t.practitioners=a.data;for(var e=0;e<t.practitioners.length;e++)t.practitioners[e].addresses=JSON.parse(t.practitioners[e].addresses);1===t.practitioners.length&&(t.practitionerIndex=0)}).catch(function(t){console.log("error - ",t)})}},practitionerSelected:function(t){this.practitionerIndex=this.practitioners.findIndex(function(a){return a.PractitionerLongName==t.PractitionerLongName&&a.ProviderNpi==t.ProviderNpi&&a.NysLicense==t.NysLicense&&a.SCH_AdmitStatus==t.SCH_AdmitStatus&&a.SFH_AdmitStatus==t.SFH_AdmitStatus&&a.GSH_AdmitStatus==t.GSH_AdmitStatus&&a.MCH_AdmitStatus==t.MCH_AdmitStatus&&a.SJH_AdmitStatus==t.SJH_AdmitStatus&&a.MMC_AdmitStatus==t.MMC_AdmitStatus&&a.OLC_AdmitStatus==t.OLC_AdmitStatus&&a.GSP_AdmitStatus==t.GSP_AdmitStatus&&a.SCS_AdmitStatus==t.SCS_AdmitStatus})}}},v=o,d=(e("c5d6"),e("2877")),x=e("6544"),u=e.n(x),p=e("8336"),f=e("b0af"),m=e("99d9"),h=e("a523"),_=e("8fea"),S=e("0e8f"),C=e("a722"),y=e("67b6"),g=e("43a6"),b=e("2fa4"),A=e("8654"),P=Object(d["a"])(v,n,l,!1,null,"4ca65480",null),w=P.exports;u()(P,{VBtn:p["a"],VCard:f["a"],VCardText:m["a"],VCardTitle:m["b"],VContainer:h["a"],VDataTable:_["a"],VFlex:S["a"],VLayout:C["a"],VRadio:y["a"],VRadioGroup:g["a"],VSpacer:b["a"],VTextField:A["a"]});var N={name:"App",components:{ProviderSearch:w},data:function(){return{}}},V=N,T=e("7496"),I=e("40dc"),O=e("a75b"),H=e("2a7f"),M=Object(d["a"])(V,r,i,!1,null,null,null),L=M.exports;u()(M,{VApp:T["a"],VAppBar:I["a"],VContent:O["a"],VToolbarTitle:H["a"]});var D=e("f309");s["a"].use(D["a"]);var j=new D["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({vuetify:j,render:function(t){return t(L)}}).$mount("#app")},"6abb":function(t,a,e){},c5d6:function(t,a,e){"use strict";var s=e("6abb"),r=e.n(s);r.a}});
//# sourceMappingURL=app.5a6efa34.js.map