(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{188:function(e,t,a){"use strict";t.a=e=>{const t={version:2,type:"kit"};t.uid=e.uid,t.icon=e.icon,t.title=e.name,t.desc=e.about;const a=t.search={},r=a.torrentSelector={},o=a.onGetValue={};if(a.searchUrl=e.search_path,e.root_url&&(a.baseUrl=e.root_url),e.auth&&(a.loginUrl=e.auth),e.post&&(a.requestType="POST",a.requestData=e.post),e.encode&&(a.onBeforeRequest=[{name:"encode",type:"cp1251"}]),a.listItemSelector=e.items,e.charset&&(a.requestMimeType="text/html; charset="+e.charset),e.cat_alt&&(e.cat_attr="alt",e.cat_alt=void 0),e.auth_f&&(a.loginFormSelector=e.auth_f),(e.sf||e.sl)&&(a.listItemSplice=[e.sf||0,-(e.sl||0)]),r.title=e.tr_name,r.url={selector:e.tr_link,attr:"href"},e.cat_name&&(r.categoryTitle=e.cat_name,e.cat_attr&&(r.categoryTitle={selector:r.categoryTitle,attr:e.cat_attr}),e.cat_link&&(r.categoryUrl={selector:e.cat_link,attr:"href"})),e.tr_size){r.size=e.tr_size,e.size_attr&&(r.size={selector:r.size,attr:e.size_attr});const t=[];e.size_r&&void 0!==e.size_rp&&t.push({name:"replaceRe",re:e.size_r,text:e.size_rp}),e.s_c&&t.push("convertSize"),t.length&&(o.size=t)}if(e.tr_dl&&(r.downloadUrl={selector:e.tr_dl,attr:"href"}),e.seed&&(r.seed=e.seed,e.seed_r&&(o.seed=[{name:"replaceRe",re:e.seed_r,text:e.seed_rp}])),e.peer&&(r.peer=e.peer,e.peer_r&&(o.peer=[{name:"replaceRe",re:e.peer_r,text:e.peer_rp}])),e.date){r.date=e.date,e.date_attr&&(r.date={selector:r.date,attr:e.date_attr});const t=[];e.t_r&&t.push({name:"replaceRe",re:e.t_r,text:e.t_r_r}),e.t_t_r&&t.push("replaceToday"),e.t_m_r&&t.push("replaceMonth"),void 0!==e.t_f&&"-1"!==e.t_f&&t.push({name:"timeFormat",format:e.t_f}),t.length&&(o.date=t)}return t}},189:function(e,t,a){"use strict";a(87);const r=(e,t)=>{const a={selector:null,pipeline:[]};if(e)return Array.isArray(t)||(t=[]),"string"==typeof e&&(e={selector:e}),a.selector=e.selector,"number"==typeof e.childNodeIndex&&a.pipeline.push({name:"getChild",args:[e.childNodeIndex]}),e.attr?a.pipeline.push({name:"getAttr",args:[e.attr]}):e.prop?a.pipeline.push({name:"getProp",args:[e.prop]}):e.html?(a.pipeline.push({name:"getHtml"}),a.pipeline.push({name:"trim"})):(a.pipeline.push({name:"getText"}),a.pipeline.push({name:"trim"})),t.forEach(e=>{"convertSize"===e?a.pipeline.push({name:"legacySizeFormat"}):"replaceToday"===e?a.pipeline.push({name:"legacyReplaceToday"}):"replaceMonth"===e?a.pipeline.push({name:"legacyReplaceMonth"}):"replaceRe"===e.name?a.pipeline.push({name:"replaceRe",args:[e.re,e.text]}):"timeFormat"===e.name&&a.pipeline.push({name:"legacyParseDate",args:[e.format]})}),a};t.a=e=>{const t={version:3,type:"kit"},a=t.search={};a.url=e.search.searchUrl;const o=e.search.requestType;o&&(a.method=o.toUpperCase());const s=e.search.requestData;s&&("POST"===a.method?a.body=s:a.query=s);const n=e.search.onBeforeRequest;if(Array.isArray(n)&&n.some(e=>{if("encode"===e.name&&"cp1251"===e.type)return a.encoding=e.type,!0}),e.search.requestMimeType){const t=/charset=([^;]+)/.exec(e.search.requestMimeType);t&&(e.search.charset=t[1])}const i=t.auth={},l=e.search.loginUrl;l&&(i.url=l);const c=e.search.loginFormSelector;c&&(i.loginForm={selector:c});const d=t.selectors={};d.row=r(e.search.listItemSelector),t.search.listItemSplice&&(d.skipFromStart=e.search.listItemSplice[0],d.skipFromEnd=-1*e.search.listItemSplice[1]),e.search.onGetValue=e.search.onGetValue||{},d.categoryTitle=r(e.search.torrentSelector.categoryTitle,e.search.onGetValue.categoryTitle),d.categoryUrl=r(e.search.torrentSelector.categoryUrl,e.search.onGetValue.categoryUrl),d.categoryId=r(e.search.torrentSelector.categoryId,e.search.onGetValue.categoryId),d.title=r(e.search.torrentSelector.title,e.search.onGetValue.title),d.url=r(e.search.torrentSelector.url,e.search.onGetValue.url),d.size=r(e.search.torrentSelector.size,e.search.onGetValue.size),d.downloadUrl=r(e.search.torrentSelector.downloadUrl,e.search.onGetValue.downloadUrl),d.seeds=r(e.search.torrentSelector.seed,e.search.onGetValue.seed),d.peers=r(e.search.torrentSelector.peer,e.search.onGetValue.peer),d.date=r(e.search.torrentSelector.date,e.search.onGetValue.date),d.nextPageUrl=r(e.search.nextPageSelector,e.search.onGetValue.nextPageSelector);const h=t.description={};h.icon=e.icon,h.name=e.title,e.desc&&(h.description=e.desc),e.updateUrl&&(h.updateUrl=e.updateUrl),e.downloadUrl&&(h.downloadUrl=e.downloadUrl);const p=e.search.baseUrl;return p&&(h.url=p),h.version=e.tVersion,t}},319:function(e,t,a){"use strict";a.r(t);var r=a(188),o=a(189);a(87);const s=a(342);var n=e=>{const t=[];t.push("==UserScript==");const a=new URL(e.search.url),r=e.description||{};t.push(`@name ${r.name}`),r.description&&t.push(`@description ${r.description}`),r.icon&&t.push(`@icon ${r.icon}`),r.updateUrl&&t.push(`@updateURL ${r.updateUrl}`),r.downloadUrl&&t.push(`@downloadURL ${r.downloadUrl}`),r.url?t.push(`@trackerURL ${r.url}`):t.push(`@trackerURL ${a.protocol}//${a.hostname}`),r.version?t.push(`@version ${e.description.version}`):t.push("@version 1.0"),t.push(`@connect *://${a.hostname}`),t.push("@require exKit"),t.push("==/UserScript==");const o=[];return o.push(...t.map(e=>`// ${e}`)),o.push(""),o.push(`const code = ${s(e)};`),o.push(""),o.push("API_exKit(code);"),o.join("\n")};t.default=e=>{let t=JSON.parse(e);return 1===t.version&&(t=Object(r.a)(t)),2===t.version&&(t=Object(o.a)(t)),n(t)}},423:function(e,t,a){"use strict";a(81),a(18),a(11),a(424);var r=a(1),o=a.n(r),s=a(52),n=a.n(s);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a=class extends o.a.Component{constructor(e){super(e),c(this,"handleBodyClick",e=>{this.dialog.contains(e.target)||this.props.onClose()}),c(this,"refDialog",e=>{this.dialog=e}),this.dialog=null}componentDidMount(){document.addEventListener("click",this.handleBodyClick)}componentWillUnmount(){document.removeEventListener("click",this.handleBodyClick)}render(){const e=["dialog__body"];this.props.className&&e.push(this.props.className);const t=this.props,a=(t.onClose,l(t,["onClose"])),r=o.a.createElement("div",i({},a,{ref:this.refDialog,className:e.join(" ")}),this.props.children);return n.a.createPortal(r,document.body)}}},424:function(e,t,a){},522:function(e,t,a){},550:function(e,t,a){"use strict";a.r(t);a(521),a(522);var r,o,s,n=a(1),i=a.n(n),l=a(5),c=a.n(l),d=a(17),h=a(423),p=a(3),u=a(190),m=a(319);function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const f=a(419);a(523),a(524),a(525),a(526),a(527);const _=Object(p.a)("Editor");let y=Object(d.b)("rootStore")(r=Object(d.c)((s=o=class extends i.a.Component{constructor(e){super(e),g(this,"refTextarea",e=>{e?this.editor||(this.editor=f.fromTextArea(e,{mode:"javascript",lineWrapping:!0,lineNumbers:!0,matchBrackets:!0,autoCloseBrackets:!0,continueComments:!0,styleActiveLine:!0,extraKeys:{"Ctrl-S":()=>{this.handleSave()},"Cmd-S":()=>{this.handleSave()}}}),this.editor.on("change",this.handleTextareaChange)):this.editor&&(this.editor.off("change",this.handleTextareaChange),this.editor.toTextArea(),this.editor=null)}),g(this,"autoUpdate",null),g(this,"refAutoUpdate",e=>{this.autoUpdate=e}),g(this,"refDialogTextarea",e=>{this.dialogTextarea=e}),g(this,"handleTextareaChange",e=>{this.editorStore.setCode(this.editor.getValue())}),g(this,"handleAutoUpdateChange",e=>{this.editorStore.options.setAutoUpdate(this.autoUpdate.checked)}),g(this,"handleAddCode",e=>{e.preventDefault(),this.setState({showAddCodeDialog:!0})}),g(this,"handleCloseWindow",e=>{e.preventDefault(),window.close()}),g(this,"handleDialogCancel",e=>{e&&e.preventDefault(),this.setState({showAddCodeDialog:!1})}),g(this,"handleDialogSave",e=>{e.preventDefault();const t=this.editorStore;try{const e=this.dialogTextarea.value,a=Object(m.default)(e);t.setCode(a),this.editor.setValue(a),this.setState({showAddCodeDialog:!1})}catch(e){_.error("Add code error",e),alert("Add code error: \n"+e.stack)}}),g(this,"handleSave",e=>{e&&e.preventDefault(),this.editorStore.save()}),this.state={showAddCodeDialog:!1},this.editor=null,this.dialogTextarea=null,this.props.rootStore.createEditor(e.type,e.id),"idle"===this.editorStore.state&&this.editorStore.fetchModule()}componentDidMount(){document.title=Object(u.a)("Code editor"),window.ga&&window.ga("send","pageview",{page:location.href,title:document.title})}componentWillUnmount(){this.props.rootStore.destroyEditor()}get editorStore(){return this.props.rootStore.editor}render(){const e=this.editorStore;if("done"!==e.state)return`Loading editor: ${e.state}`;let t=null;if("pending"===e.saveState)t="...";else{const a=["button head__action head__action-save"];"error"===e.saveState&&a.push("error"),t=i.a.createElement("a",{onClick:this.handleSave,href:"#save",className:a.join(" ")},chrome.i18n.getMessage("save"),e.hasChanges()?"*":"")}let a=null;"tracker"===e.type&&(a=i.a.createElement("a",{onClick:this.handleAddCode,href:"#code",className:"button head__action head__action-add-code"},chrome.i18n.getMessage("addTrackerCode")));let r=null;return this.state.showAddCodeDialog&&(r=i.a.createElement(h.a,{className:"dialog-code",onClose:this.handleDialogCancel},i.a.createElement("form",{onSubmit:this.handleDialogSave},i.a.createElement("span",{className:"dialog__label"},chrome.i18n.getMessage("enterTrackerCode")),i.a.createElement("textarea",{ref:this.refDialogTextarea,className:"dialog__textarea",name:"code"}),i.a.createElement("div",{className:"dialog__button_box"},i.a.createElement("input",{className:"button button-save",type:"submit",value:chrome.i18n.getMessage("save")}),i.a.createElement("input",{className:"button button-cancel",type:"button",onClick:this.handleDialogCancel,value:chrome.i18n.getMessage("cancel")}))))),i.a.createElement("div",{className:"page-ctr page-ctr--editor"},i.a.createElement("div",{className:"editor__head"},i.a.createElement("div",{className:"head__options"},i.a.createElement("label",null,i.a.createElement("input",{ref:this.refAutoUpdate,type:"checkbox",className:"option__auto-update",defaultChecked:e.options.autoUpdate,onChange:this.handleAutoUpdateChange}),i.a.createElement("span",null,chrome.i18n.getMessage("autoUpdate")))),i.a.createElement("div",{className:"head__action"},a,t,i.a.createElement("a",{onClick:this.handleCloseWindow,href:"#close",className:"button head__action head__action-close"},chrome.i18n.getMessage("close")))),i.a.createElement("div",{className:"editor__body"},i.a.createElement("textarea",{ref:this.refTextarea,className:"editor__textarea",defaultValue:e.code})),r)}},g(o,"propTypes",{rootStore:c.a.object,type:c.a.string,id:c.a.string}),r=s))||r)||r;t.default=y}}]);