(this.webpackJsonpcoronaboard=this.webpackJsonpcoronaboard||[]).push([[6],{288:function(e,a,t){"use strict";var r=t(289),n=t(0),o=t.n(n),c=t(247),l=t(253),i=t(254),s=t(74),m=t(270),d=t(293),u=["color","outline","size","title","divider","isCard"],p=Object(c.a)((function(e){return{root:{background:"transparent",boxShadow:"none",border:"none"},cardClass:{padding:e.spacing(3)},cardContent:{paddingLeft:0,paddingTop:0,paddingBottom:"0 !important"},divider:{marginBottom:e.spacing(3),marginTop:e.spacing(2)},spacer:{marginBottom:e.spacing(3)},breadcrumbTitle:{fontWeight:500,marginTop:e.spacing(1)}}}));a.a=function(e){var a=p(),t=(e.color,e.outline,e.size,e.title),n=e.divider,c=e.isCard,b=Object(r.a)(e,u),g=a.root;return c&&(g=a.cardClass),o.a.createElement(l.a,{className:g},o.a.createElement(i.a,{className:a.cardContent},o.a.createElement(d.a,b),t&&o.a.createElement(s.a,{className:a.breadcrumbTitle,variant:"h3"},t),!1===n&&!c&&o.a.createElement("div",{className:a.spacer}),!1!==n&&o.a.createElement(m.a,{className:a.divider})))}},289:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}t.d(a,"a",(function(){return r}))},292:function(e,a,t){"use strict";var r=t(1),n=t(2),o=t(0),c=(t(4),t(3)),l=t(6),i=t(74),s=o.forwardRef((function(e,a){var t=e.action,l=e.avatar,s=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.disableTypography,b=void 0!==p&&p,g=e.subheader,f=e.subheaderTypographyProps,v=e.title,y=e.titleTypographyProps,h=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=v;null==E||E.type===i.a||b||(E=o.createElement(i.a,Object(r.a)({variant:l?"body2":"h5",className:s.title,component:"span",display:"block"},y),E));var O=g;return null==O||O.type===i.a||b||(O=o.createElement(i.a,Object(r.a)({variant:l?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},f),O)),o.createElement(u,Object(r.a)({className:Object(c.a)(s.root,m),ref:a},h),l&&o.createElement("div",{className:s.avatar},l),o.createElement("div",{className:s.content},E,O),t&&o.createElement("div",{className:s.action},t))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},293:function(e,a,t){"use strict";var r=t(1),n=t(43),o=t(2),c=t(0),l=(t(93),t(4),t(3)),i=t(6),s=t(74),m=t(13),d=t(50),u=Object(d.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(100);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(o.a)(e,["classes"]);return c.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(u,{className:a.icon}))}));var g=c.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,p=e.expandText,g=void 0===p?"Show path":p,f=e.itemsAfterCollapse,v=void 0===f?1:f,y=e.itemsBeforeCollapse,h=void 0===y?1:y,E=e.maxItems,O=void 0===E?8:E,j=e.separator,N=void 0===j?"/":j,x=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=c.useState(!1),T=C[0],k=C[1],w=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return c.createElement(s.a,Object(r.a)({ref:a,component:u,color:"textSecondary",className:Object(l.a)(i.root,m)},x),c.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:a},t)):r.push(n),r}),[])}(T||O&&w.length<=O?w:function(e){return h+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,h)),[c.createElement(b,{"aria-label":g,key:"ellipsis",onClick:function(e){k(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-v,e.length)))}(w),i.separator,N)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},318:function(e,a,t){"use strict";var r=t(5),n=t(0),o=t(103),c=t(51);function l(e){var a=function(){var e=n.useContext(o.a);return Object(c.c)(e),e}(),t=a.formatMessage,r=a.textComponent,l=void 0===r?n.Fragment:r,i=e.id,s=e.description,m=e.defaultMessage,d=e.values,u=e.children,p=e.tagName,b=void 0===p?l:p,g=t({id:i,description:s,defaultMessage:m},d,{ignoreTag:e.ignoreTag});return Array.isArray(g)||(g=[g]),"function"===typeof u?u(g):b?n.createElement(b,null,n.Children.toArray(g)):n.createElement(n.Fragment,null,g)}l.displayName="FormattedMessage";var i=n.memo(l,(function(e,a){var t=e.values,n=Object(r.c)(e,["values"]),o=a.values,l=Object(r.c)(a,["values"]);return Object(c.d)(o,t)&&Object(c.d)(n,l)}));i.displayName="MemoizedFormattedMessage";a.a=i},326:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(74),c=t(255),l=t(253),i=t(292),s=t(270),m=t(254),d=t(58),u=t(46),p=t(318),b=t(288),g=t(39),f=t(53);a.default=function(){var e=Object(u.b)();return n.a.useEffect((function(){e({type:f.b,locale:"zh"}),e({type:f.c,rtlLayout:!0})}),[e]),n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{title:"RTL Layout"},n.a.createElement(o.a,{component:d.b,to:"/",variant:"subtitle2",color:"inherit",className:"link-breadcrumb"},"Home"),n.a.createElement(o.a,{variant:"subtitle2",color:"primary",className:"link-breadcrumb"},"RTL Layout")),n.a.createElement(c.a,{container:!0,spacing:g.f},n.a.createElement(c.a,{item:!0},n.a.createElement(l.a,null,n.a.createElement(i.a,{title:n.a.createElement(o.a,{component:"div",className:"card-header"},"RTL Layout")}),n.a.createElement(s.a,null),n.a.createElement(m.a,null,n.a.createElement(o.a,{variant:"body2"},n.a.createElement(p.a,{id:"message"})))))))}}}]);
//# sourceMappingURL=6.4394c52c.chunk.js.map