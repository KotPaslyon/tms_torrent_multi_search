(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{543:function(e,t,r){},551:function(e,t,r){"use strict";r.r(t);r(543);var o,a,s,i,n,c,l,m,p,u=r(1),h=r.n(u),y=r(150),d=r(318),v=r(17),b=r(5),g=r.n(b),k=r(67),_=r(82),q=r(190);function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const S=r(72);let f=Object(v.b)("rootStore")(o=Object(v.c)((s=a=class extends h.a.Component{constructor(e){super(e),"idle"===this.props.rootStore.history.state&&this.props.rootStore.history.fetchHistory()}componentDidMount(){document.title=Object(q.a)("History"),window.ga&&window.ga("send","pageview",{page:location.href,title:document.title})}get historyStore(){return this.props.rootStore.history}render(){const e=this.historyStore;if("done"!==e.state)return`Loading history: ${e.state}`;const t=e.getHistorySortByTime().map(e=>h.a.createElement(j,{key:e.query,query:e})),r=h.a.createElement("div",{className:"history"},t);return h.a.createElement("div",{className:"page-ctr"},h.a.createElement(y.a,null),h.a.createElement("div",{className:"content content-row"},h.a.createElement("div",{className:"main history-ctr"},r)),h.a.createElement(d.a,null))}},E(a,"propTypes",{rootStore:g.a.object}),o=s))||o)||o,j=Object(v.b)("rootStore")(i=Object(v.c)((c=n=class extends h.a.Component{constructor(...e){super(...e),E(this,"handleRemove",e=>{e.preventDefault();const t=this.props.rootStore.history,r=this.props.query;t.removeQuery(r.query),t.save()})}render(){const e=this.props.query,t=e.getClicksSortByTime().map(t=>h.a.createElement(w,{key:t.url,query:e,link:t})),r="/search?"+S.stringify({query:e.query});return h.a.createElement("div",{className:"history__item"},h.a.createElement("div",{className:"item item-query"},h.a.createElement("a",{className:"item__remove","data-action":"remove-query",href:"#remove",title:chrome.i18n.getMessage("delete"),onClick:this.handleRemove}),h.a.createElement(_.b,{className:"item__link",to:r},e.query||'""')),h.a.createElement("div",{className:"click_history item__click_history"},t))}},E(n,"propTypes",{rootStore:g.a.object,query:g.a.object.isRequired}),i=c))||i)||i,w=Object(v.b)("rootStore")(l=Object(v.c)((p=m=class extends h.a.Component{constructor(...e){super(...e),E(this,"handleRemove",e=>{e.preventDefault();const t=this.props.rootStore.history,r=this.props.query,o=this.props.link;r.removeClick(o.url),t.save()})}render(){const e=this.props.link;return h.a.createElement("div",{className:"item item-click_history"},h.a.createElement("a",{className:"item__remove","data-action":"remove-click_history",href:"#remove",title:chrome.i18n.getMessage("delete"),onClick:this.handleRemove}),h.a.createElement("span",{className:"item__date"},e.timeString),k.a.getReactComponent("a",{className:"item__link",target:"_blank",href:e.url},e.title,e.titleHighlightMap))}},E(m,"propTypes",{rootStore:g.a.object,query:g.a.object.isRequired,link:g.a.object.isRequired}),l=p))||l)||l;t.default=f}}]);