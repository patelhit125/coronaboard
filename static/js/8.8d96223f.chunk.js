(this.webpackJsonpcoronaboard=this.webpackJsonpcoronaboard||[]).push([[8],{288:function(e,a,t){"use strict";var r=t(289),n=t(0),c=t.n(n),o=t(247),i=t(253),l=t(254),s=t(74),m=t(270),u=t(293),d=["color","outline","size","title","divider","isCard"],p=Object(o.a)((function(e){return{root:{background:"transparent",boxShadow:"none",border:"none"},cardClass:{padding:e.spacing(3)},cardContent:{paddingLeft:0,paddingTop:0,paddingBottom:"0 !important"},divider:{marginBottom:e.spacing(3),marginTop:e.spacing(2)},spacer:{marginBottom:e.spacing(3)},breadcrumbTitle:{fontWeight:500,marginTop:e.spacing(1)}}}));a.a=function(e){var a=p(),t=(e.color,e.outline,e.size,e.title),n=e.divider,o=e.isCard,f=Object(r.a)(e,d),b=a.root;return o&&(b=a.cardClass),c.a.createElement(i.a,{className:b},c.a.createElement(l.a,{className:a.cardContent},c.a.createElement(u.a,f),t&&c.a.createElement(s.a,{className:a.breadcrumbTitle,variant:"h3"},t),!1===n&&!o&&c.a.createElement("div",{className:a.spacer}),!1!==n&&c.a.createElement(m.a,{className:a.divider})))}},289:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}t.d(a,"a",(function(){return r}))},293:function(e,a,t){"use strict";var r=t(1),n=t(43),c=t(2),o=t(0),i=(t(93),t(4),t(3)),l=t(6),s=t(74),m=t(13),u=t(50),d=Object(u.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(100);var f=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(c.a)(e,["classes"]);return o.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),o.createElement(d,{className:a.icon}))}));var b=o.forwardRef((function(e,a){var t=e.children,l=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,p=e.expandText,b=void 0===p?"Show path":p,g=e.itemsAfterCollapse,h=void 0===g?1:g,v=e.itemsBeforeCollapse,E=void 0===v?1:v,y=e.maxItems,O=void 0===y?8:y,j=e.separator,x=void 0===j?"/":j,N=Object(c.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=o.useState(!1),k=C[0],w=C[1],S=o.Children.toArray(t).filter((function(e){return o.isValidElement(e)})).map((function(e,a){return o.createElement("li",{className:l.li,key:"child-".concat(a)},e)}));return o.createElement(s.a,Object(r.a)({ref:a,component:d,color:"textSecondary",className:Object(i.a)(l.root,m)},N),o.createElement("ol",{className:l.ol},function(e,a,t){return e.reduce((function(r,n,c){return c<e.length-1?r=r.concat(n,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:a},t)):r.push(n),r}),[])}(k||O&&S.length<=O?S:function(e){return E+h>=e.length?e:[].concat(Object(n.a)(e.slice(0,E)),[o.createElement(f,{"aria-label":b,key:"ellipsis",onClick:function(e){w(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-h,e.length)))}(S),l.separator,x)))}));a.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},331:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(288),o=t(74),i=t(255),l=t(58),s=t(39),m=t(247),u=Object(m.a)((function(e){return{frame:{height:"calc(100vh - 210px)"}}}));a.default=function(e){var a=u();return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"Icons"},n.a.createElement(o.a,{component:l.b,to:"/",variant:"subtitle2",color:"inherit",className:"link-breadcrumb"},"Home"),n.a.createElement(o.a,{variant:"subtitle2",color:"primary",className:"link-breadcrumb"},"Icons")),n.a.createElement(i.a,{container:!0,spacing:s.e},n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement("iframe",{title:"Material Icon",className:a.frame,width:"100%",src:"https://material-ui.com/components/material-icons/"}))))}}}]);
//# sourceMappingURL=8.8d96223f.chunk.js.map