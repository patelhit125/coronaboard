(this.webpackJsonpcoronaboard=this.webpackJsonpcoronaboard||[]).push([[11],{333:function(e,a,t){"use strict";t.r(a);var n=t(294),r=t.n(n),c=t(295),l=t(40),i=t(17),o=t(0),m=t.n(o),s=t(247),d=t(255),E=t(280),u=t(253),p=t(254),g=t(74),f=t(292),v=t(270),b=t(249),h=t(18),y=t(314),x=t.n(y),j=t(315),I=t.n(j),O=t(316),w=t.n(O),N=t(317),k=t.n(N),S=t(91),L=t(296),D=t.n(L),F=t(39),z=t(275),R="".concat(F.a,"/timeseries.min.json"),A=Object(s.a)((function(){return{content:{padding:0,paddingBottom:"0 !important"}}})),_=function(e){var a,t=A(),n=Object(S.a)(),i=e.bgColor,s=e.footerData,E=e.title,f=e.vaccinedose,v=Object(o.useState)([]),b=Object(l.a)(v,2),h=b[0],y=b[1],x=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(R).then((function(e){return e.json()})).then((function(e){y(e.TT.dates)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j={type:"line",height:115,options:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#fff"],stroke:{curve:"smooth",width:3},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return"First Dose"}}},marker:{show:!1}}},series:[{name:"First Dose",data:[0]},{name:"Second Dose",data:[0]}]};return void 0===h.length&&Object.keys(h).map((function(e,a,t){void 0!==h[e].total.firstdosevaccinated&&(j.series[0].data.push(h[e].total.firstdosevaccinated),j.series[1].data.push(h[e].total.seconddosevaccinated))})),s&&(a=s.map((function(e,a){return m.a.createElement(d.a,{item:!0,key:a},m.a.createElement(z.a,{mt:3,mb:3,p:1},m.a.createElement(d.a,{container:!0,direction:"column",spacing:1,alignItems:"center"},m.a.createElement(g.a,{variant:"h4"},e.value),m.a.createElement(g.a,{variant:"subtitle2",color:"secondary"},e.label))))}))),Object(o.useEffect)((function(){x()}),[]),m.a.createElement(u.a,null,m.a.createElement(p.a,{className:t.content},m.a.createElement(z.a,{color:"#fff",bgcolor:i||n.palette.primary.main,p:3},m.a.createElement(d.a,{container:!0,direction:"column",spacing:1},m.a.createElement(d.a,{item:!0,container:!0,justify:"space-between",alignItems:"center"},E&&m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"subtitle1",color:"inherit"},E)),m.a.createElement(d.a,{item:!0},m.a.createElement(d.a,{container:!0,alignItems:"center"},f&&m.a.createElement(g.a,{variant:"subtitle1",color:"inherit"},f)))),j&&m.a.createElement(d.a,{item:!0},m.a.createElement(D.a,j)))),s&&m.a.createElement(d.a,{container:!0,justify:"space-around",alignItems:"center"},a)))},M=t(8),T=t.n(M),W=t(250),B=function(e){var a=Object(S.a)(),t=Object(W.a)(a.breakpoints.down("sm")),n=Object(W.a)(a.breakpoints.down("xs")),r=Object(o.useState)([]),c=Object(l.a)(r,2),i=c[0],s=c[1],b={height:225,type:"donut",options:{dataLabels:{enabled:!1},labels:["18 - 45","45 - 60","Above 60"],legend:{show:!0,position:"bottom",fontFamily:"inherit",labels:{colors:"inherit",fontFamily:"inherit"}},itemMargin:{horizontal:10,vertical:10},colors:[T.a.error,T.a.primary,T.a.warning]},series:[0,0,0]};return void 0===i.length&&(b.series=[i.vac_18_45,i.vac_45_60,i.above_60]),Object(o.useEffect)((function(){fetch(F.c).then((function(e){return e.json()})).then((function(e){s(e.vaccinationByAge)}))}),[]),m.a.createElement(u.a,null,m.a.createElement(f.a,{title:m.a.createElement(g.a,{t:"div",className:"card-header"},"Vaccination By Age")}),m.a.createElement(v.a,null),m.a.createElement(p.a,null,m.a.createElement(d.a,{container:!0,spacing:2,direction:t&&!n?"row":"column"},m.a.createElement(d.a,{item:!0,xs:12,sm:7,md:12},m.a.createElement(D.a,b)),m.a.createElement(E.a,{only:"sm"},m.a.createElement(d.a,{item:!0},m.a.createElement(v.a,null))),m.a.createElement(d.a,{item:!0,container:!0,direction:t&&!n?"column":"row",justify:"space-around",alignItems:"center",xs:12,sm:5,md:12},m.a.createElement(d.a,{item:!0},m.a.createElement(d.a,{container:!0,direction:"column",alignItems:"center"},m.a.createElement(g.a,{variant:"h6"},"18 - 45"),m.a.createElement(g.a,{variant:"subtitle1",style:{color:a.palette.error.main}},Object(F.g)(i.vac_18_45)))),m.a.createElement(d.a,{item:!0},m.a.createElement(d.a,{container:!0,direction:"column",alignItems:"center"},m.a.createElement(g.a,{variant:"h6"},"45 - 60"),m.a.createElement(g.a,{variant:"subtitle1",style:{color:a.palette.primary.main}},Object(F.g)(i.vac_45_60)))),m.a.createElement(d.a,{item:!0},m.a.createElement(d.a,{container:!0,direction:"column",alignItems:"center"},m.a.createElement(g.a,{variant:"h6"},"Above 60"),m.a.createElement(g.a,{variant:"subtitle1",style:{color:a.palette.warning.main}},Object(F.g)(i.above_60))))))))},P=t(306),V=t.n(P),C=t(307),J=t.n(C),q=Object(s.a)((function(e){var a;return{secondary:{marginTop:".5rem"},footer:{textAlign:"center",padding:e.spacing(1.2),paddingLeft:"20px",paddingRight:"20px",color:e.palette.common.white},container:(a={},Object(i.a)(a,e.breakpoints.down("sm"),{flexDirection:"column-reverse"}),Object(i.a)(a,e.breakpoints.up("sm"),{alignItems:"center"}),a),primaryIcon:Object(i.a)({},e.breakpoints.down("sm"),{marginBottom:".5rem"})}})),G=function(e){var a,t=e.primary,n=e.secondary,r=e.iconPrimary,c=e.color,l=e.footerData,i=e.iconFooter,o=q(),s=r,E=r?m.a.createElement(s,{fontSize:"large"}):null;1===i&&(a=V.a),2===i&&(a=J.a);var f=a?m.a.createElement(a,null):null,v=t||0;return m.a.createElement(u.a,null,m.a.createElement(p.a,null,m.a.createElement(d.a,{container:!0,justify:"space-between",className:o.container},m.a.createElement(d.a,{item:!0,lg:6,sm:6,xs:12},m.a.createElement(g.a,{variant:"h3",style:{color:c}},v),m.a.createElement(g.a,{variant:"subtitle1",className:o.secondary},n)),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"h2",style:{color:c},className:o.primaryIcon},E)))),m.a.createElement("div",{style:{background:c}},m.a.createElement(d.a,{container:!0,justify:"space-between",className:o.footer},m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2"},l)),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2"},f)))))},H=t(325),K=t(251),Q=t(309),U=t(313),X=t(312),Y=t(308),Z=t(310),$=t(311),ee="".concat(F.a,"/data.min.json"),ae=Object(s.a)((function(e){return{table:{minWidth:350},row:{padding:"1rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"},celllg:Object(i.a)({padding:"1rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"},e.breakpoints.down("sm"),{display:"none"}),cellsm:Object(i.a)({padding:"1rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"},e.breakpoints.up("sm"),{display:"none"}),confirmed:{color:e.palette.error.main,fontSize:12},recovered:{color:e.palette.success.main,fontSize:12},deceased:{color:e.palette.warning.main,fontSize:12}}}));function te(){var e=ae(),a=Object(o.useState)([]),t=Object(l.a)(a,2),n=t[0],i=t[1],s=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ee).then((function(e){return e.json()})).then((function(e){i(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){s()}),[]),m.a.createElement(d.a,{container:!0,spacing:F.f},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(u.a,null,m.a.createElement(f.a,{title:m.a.createElement(g.a,{component:"div",className:"card-header"},"State-wise Data")}),m.a.createElement(v.a,null),m.a.createElement(p.a,{className:"p-0"},m.a.createElement(Y.a,null,m.a.createElement(Q.a,{className:e.table,size:"small","aria-label":"simple table"},m.a.createElement(Z.a,null,m.a.createElement($.a,null,m.a.createElement(X.a,{className:e.row},"State"),m.a.createElement(X.a,null,"Confirmed"),m.a.createElement(X.a,null,"Active"),m.a.createElement(X.a,null,"Recovered"),m.a.createElement(X.a,null,"Deceased"),m.a.createElement(X.a,null,"Tested"),m.a.createElement(X.a,null,"Vaccinated"),m.a.createElement(X.a,null,"Population"))),m.a.createElement(U.a,null,Object.keys(n).map((function(a,t){var r,c,l;return m.a.createElement($.a,{key:t},m.a.createElement(X.a,{className:e.celllg},F.b[a]),m.a.createElement(X.a,{className:e.cellsm},a),m.a.createElement(X.a,null,m.a.createElement("div",null,parseInt(n[a].total.confirmed).toLocaleString("en-IN")),m.a.createElement("div",{className:e.confirmed},Object(F.d)(parseInt(null===(r=n[a].delta)||void 0===r?void 0:r.confirmed).toLocaleString("en-IN")))),m.a.createElement(X.a,null,(parseInt(n[a].total.confirmed)-parseInt(n[a].total.recovered)-parseInt(n[a].total.deceased)).toLocaleString("en-IN")),m.a.createElement(X.a,null,m.a.createElement("div",null,parseInt(n[a].total.recovered).toLocaleString("en-IN")),m.a.createElement("div",{className:e.recovered},Object(F.d)(parseInt(null===(c=n[a].delta)||void 0===c?void 0:c.recovered).toLocaleString("en-IN")))),m.a.createElement(X.a,null,m.a.createElement("div",null,parseInt(n[a].total.deceased).toLocaleString("en-IN")),m.a.createElement("div",{className:e.deceased},Object(F.d)(parseInt(null===(l=n[a].delta)||void 0===l?void 0:l.deceased).toLocaleString("en-IN")))),m.a.createElement(X.a,null,Object(F.g)(parseInt(n[a].total.tested))),m.a.createElement(X.a,null,Object(F.g)(parseInt(n[a].total.vaccinated))),m.a.createElement(X.a,null,Object(F.g)(parseInt(n[a].meta.population))))})))))),m.a.createElement(H.a,{className:"f-right"},m.a.createElement(K.a,{variant:"text",size:"small",color:"primary"},"View all States")))))}var ne="".concat(F.a,"/data.min.json"),re=Object(s.a)((function(e){var a;return{arrowicon:{"& svg":{width:"20px",height:"20px",verticalAlign:"top"}},flatcardbody:{padding:"0px !important","& svg":{width:"40px",height:"40px"}},flatcardblock:(a={padding:"25px 25px",borderLeft:"1px solid"+e.palette.background.default},Object(i.a)(a,e.breakpoints.down("xs"),{borderLeft:"none",borderBottom:"1px solid"+e.palette.background.default}),Object(i.a)(a,e.breakpoints.down("sm"),{borderBottom:"1px solid"+e.palette.background.default}),a),textsuccess:{color:e.palette.success.main},texterror:{color:e.palette.error.main}}}));a.default=function(){var e=re(),a=Object(h.a)(),t=Object(o.useState)([]),n=Object(l.a)(t,2),i=n[0],s=n[1],y=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ne).then((function(e){return e.json()})).then((function(e){s(e.TT)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=0,O=0,N=0,S=0,L=0,D=0,z=0,R=0,A=0,M=0,T=0,W=0,P=0,V=0,C=0,J=0,q=0,H=0,K=0,Q=0;return void 0===i.length&&(j=Object(F.g)(i.total.confirmed),O=Object(F.g)(i.total.recovered),N=Object(F.g)(i.total.deceased),S=Object(F.g)(i.total.confirmed-i.total.recovered-i.total.deceased),L=parseInt(i.delta.confirmed).toLocaleString("en-IN"),D=parseInt(i.delta.recovered).toLocaleString("en-IN"),z=parseInt(i.delta.deceased).toLocaleString("en-IN"),R=parseInt(i.delta.confirmed-i.delta.recovered-i.delta.deceased).toLocaleString("en-IN"),A=(i.total.confirmed/i.total.tested*100).toFixed(2),M=((i.total.confirmed-i.total.recovered-i.total.deceased)/i.total.confirmed*100).toFixed(2),T=(i.total.recovered/i.total.confirmed*100).toFixed(2),W=(i.total.deceased/i.total.confirmed*100).toFixed(2),P=(i.total.seconddosevaccinated/i.meta.population*100).toFixed(2),q=i.delta.confirmed>0?1:2,H=i.delta.confirmed-i.delta.recovered-i.delta.deceased>0?1:2,K=i.delta.recovered>0?1:2,Q=i.delta.deceased>0?1:2,V=i.total.vaccinated,C=i.total.firstdosevaccinated,J=i.total.seconddosevaccinated),Object(o.useEffect)((function(){y()}),[]),m.a.createElement(d.a,{container:!0,spacing:F.f},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,spacing:F.f},m.a.createElement(d.a,{item:!0,lg:3,sm:6,xs:6},m.a.createElement(G,{primary:j,secondary:"Confirmed",color:a.palette.error.main,footerData:L,iconPrimary:x.a,iconFooter:q})),m.a.createElement(d.a,{item:!0,lg:3,sm:6,xs:6},m.a.createElement(G,{primary:S,secondary:"Active",color:a.palette.primary.main,footerData:R,iconPrimary:I.a,iconFooter:H})),m.a.createElement(d.a,{item:!0,lg:3,sm:6,xs:6},m.a.createElement(G,{primary:O,secondary:"Recovered",color:a.palette.success.main,footerData:D,iconPrimary:w.a,iconFooter:K})),m.a.createElement(d.a,{item:!0,lg:3,sm:6,xs:6},m.a.createElement(G,{primary:N,secondary:"Deceased",color:a.palette.warning.main,footerData:z,iconPrimary:k.a,iconFooter:Q})))),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,spacing:F.f},m.a.createElement(d.a,{item:!0,lg:8,xs:12},m.a.createElement(d.a,{container:!0,spacing:F.f},m.a.createElement(d.a,{item:!0,xs:12,sm:6},m.a.createElement(d.a,{container:!0,spacing:F.f,direction:"column"},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(_,{title:"Vaccine Dose Administrated",vaccinedose:Object(F.g)(V),footerData:[{value:Object(F.g)(C),label:"First Dose"},{value:Object(F.g)(J),label:"Second Dose"}]})),m.a.createElement(E.a,{only:"sm"},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(u.a,null,m.a.createElement(p.a,{className:e.flatcardbody},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:0},m.a.createElement(d.a,{item:!0,sm:6,xs:12,className:e.flatcardblock},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"subtitle2",align:"left"},"vaccinated")),m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"h5",className:e.texterror,align:"right"},P,"%")))),m.a.createElement(d.a,{item:!0,sm:6,xs:12,className:e.flatcardblock},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"subtitle2",align:"left"},"Recovery")),m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"h5",className:e.textsuccess,align:"right"},T,"%"))))))))))),m.a.createElement(d.a,{item:!0,xs:12,sm:6},m.a.createElement(B,{title:"Vaccination By Age"})))),m.a.createElement(d.a,{item:!0,lg:4,xs:12},m.a.createElement(u.a,null,m.a.createElement(f.a,{title:m.a.createElement(g.a,{component:"div",className:"card-header"},"Total Ratios")}),m.a.createElement(v.a,null),m.a.createElement(p.a,null,m.a.createElement(d.a,{container:!0,spacing:F.f},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"body2"},"Test Positivity Ratio")),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2",align:"right"},A,"%")),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(b.a,{variant:"determinate",value:parseInt(A),color:"primary"})))),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"body2"},"Active Ratio")),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2",align:"right"},M,"%")),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(b.a,{variant:"determinate",value:parseInt(M),color:"secondary"})))),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"body2"},"Recovery Ratio")),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2",align:"right"},T,"%")),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(b.a,{variant:"determinate",value:parseInt(T),color:"primary"})))),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"body2"},"Case Fatality Ratio")),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2",align:"right"},W,"%")),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(b.a,{variant:"determinate",value:parseInt(W),color:"secondary"})))),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(d.a,{container:!0,alignItems:"center",spacing:1},m.a.createElement(d.a,{item:!0,sm:!0,zeroMinWidth:!0},m.a.createElement(g.a,{variant:"body2"},"Vaccinated Ratio")),m.a.createElement(d.a,{item:!0},m.a.createElement(g.a,{variant:"body2",align:"right"},P,"%")),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(b.a,{variant:"determinate",value:parseInt(P),color:"primary"})))))))))),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(te,{title:"State-wise Data"})))}}}]);
//# sourceMappingURL=11.ab113d88.chunk.js.map