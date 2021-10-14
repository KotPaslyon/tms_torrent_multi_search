(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{544:function(e,t,a){},552:function(e,t,a){"use strict";a.r(t);a(18),a(11),a(544);var o,n,s,r,i,c,p,l,m,h=a(1),u=a.n(h),g=a(150),d=a(318),b=a(5),E=a.n(b),k=a(82),S=a(17),f=a(190),N=a(155);function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let v=Object(S.b)("rootStore")(o=Object(S.c)((s=n=class extends u.a.Component{constructor(e){super(e),_(this,"handleExport",e=>{e.preventDefault(),this.state.exportLock=!0,this.optionsStore.exportZip().then(...Object(N.a)(()=>{this.state.exportLock=!1}))}),_(this,"handleImport",e=>{e.preventDefault(),this.state.importLock=!0,this.optionsStore.importZip().then(...Object(N.a)(()=>{this.state.importLock=!1}))}),this.state={importLock:!1,exportLock:!1},"idle"===this.optionsStore.state&&this.optionsStore.fetchOptions()}componentDidMount(){document.title=Object(f.a)("Options"),window.ga&&window.ga("send","pageview",{page:location.href,title:document.title})}get optionsStore(){return this.props.rootStore.options}render(){const e=this.optionsStore;if("done"!==e.state)return`Loading options: ${e.state}`;let t=null;switch(this.props.page){case"main":t=u.a.createElement("div",{className:"page page-basic"},u.a.createElement("h2",{className:"page__title"},chrome.i18n.getMessage("basic")),u.a.createElement(x,{name:"hidePeerRow"}),u.a.createElement(x,{name:"hideSeedRow"}),u.a.createElement(x,{name:"categoryWordFilter"}),u.a.createElement(x,{name:"contextMenu"}),u.a.createElement(x,{name:"disablePopup"}),u.a.createElement(x,{name:"invertIcon"}),u.a.createElement(x,{name:"defineCategory"}),u.a.createElement(x,{name:"requestQueryDescription"}),u.a.createElement(x,{name:"singleResultTable"}),u.a.createElement(x,{name:"doNotSendStatistics"}));break;case"explorer":{const a=Object.keys(e.options.explorerSections).map(t=>"favorite"===t?null:u.a.createElement(x,{store:e.options.explorerSections,key:t,name:t}));t=u.a.createElement("div",{className:"page page-mainPage"},u.a.createElement("h2",{className:"page__title"},chrome.i18n.getMessage("mainPage")),u.a.createElement(x,{name:"originalPosterName"}),u.a.createElement(O,{name:"kpFolderId"}),u.a.createElement("h2",{className:"page__sub_title"},chrome.i18n.getMessage("showSections")),u.a.createElement("div",{className:"mainPage__sections"},a));break}case"backup":t=u.a.createElement("div",{className:"page page-backup"},u.a.createElement("h2",{className:"page__title"},chrome.i18n.getMessage("backupRestore")),u.a.createElement("div",{className:"page__buttons"},u.a.createElement("a",{onClick:this.handleExport,type:"button",href:"#",className:"button backup__export-zip"},chrome.i18n.getMessage("exportZip")),u.a.createElement("a",{onClick:this.handleImport,type:"button",href:"#",className:"button backup__import-zip"},chrome.i18n.getMessage("importZip"))))}return u.a.createElement("div",{className:"page-ctr"},u.a.createElement(g.a,null),u.a.createElement("div",{className:"main options-ctr"},u.a.createElement("div",{className:"sections"},u.a.createElement(k.b,{to:"/options/main",className:"sections__item","data-page":"basic"},chrome.i18n.getMessage("basic")),u.a.createElement(k.b,{to:"/options/explorer",className:"sections__item","data-page":"mainPage"},chrome.i18n.getMessage("mainPage")),u.a.createElement(k.b,{to:"/options/backup",className:"sections__item","data-page":"backup"},chrome.i18n.getMessage("backupRestore"))),u.a.createElement("div",{className:"options"},t),u.a.createElement("div",{className:"author"},u.a.createElement("a",{title:"email: leonardspbox@gmail.com",href:"mailto:leonardspbox@gmail.com"},"Anton"),", 2016")),u.a.createElement(d.a,null))}},_(n,"propTypes",{rootStore:E.a.object,page:E.a.string}),o=s))||o)||o,x=Object(S.b)("rootStore")(r=Object(S.c)((c=i=class extends u.a.Component{constructor(e){super(e),_(this,"handleOptionChange",e=>{const t=this.props.name;this.store.setValue(t,this.input.checked),this.props.rootStore.options.save()}),_(this,"refInput",e=>{this.input=e}),this.input=null}get store(){return this.props.store||this.props.rootStore.options.options}render(){const e=this.props.name;return u.a.createElement("div",{className:"option"},u.a.createElement("label",null,u.a.createElement("input",{ref:this.refInput,checked:this.store[e],onChange:this.handleOptionChange,type:"checkbox"}),u.a.createElement("span",null,chrome.i18n.getMessage(e))))}},_(i,"propTypes",{rootStore:E.a.object,name:E.a.string.isRequired,store:E.a.object}),r=c))||r)||r,O=Object(S.b)("rootStore")(p=Object(S.c)((m=l=class extends u.a.Component{constructor(e){super(e),_(this,"handleOptionChange",e=>{const t=this.props.name;this.props.rootStore.options.options.setValue(t,this.input.value),this.props.rootStore.options.save()}),_(this,"refInput",e=>{this.input=e}),this.input=null}render(){const e=this.props.rootStore.options.options,t=this.props.name;return u.a.createElement("div",{className:"option"},u.a.createElement("label",null,u.a.createElement("span",null,chrome.i18n.getMessage(t)),":",u.a.createElement("input",{ref:this.refInput,defaultValue:e[t],onChange:this.handleOptionChange,type:"text"})))}},_(l,"propTypes",{rootStore:E.a.object,name:E.a.string}),p=m))||p)||p;t.default=v}}]);