(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{101:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var c,n,r,i=a(3),s=a(0),l=a(13),j=a.n(l),o=(a(101),a(34)),b=a(169),d=a(178),O=a(174),u=a(156),h=a(183),x=a(111),m=a(163),g=a(167),f=a(166),p=a(162),v=a(164),y=a(165),C=a(110),w=a(62),N=a(61),k=a(8),E=a(161),T=a(78),A=a.n(T),L=a(182),B=a(189),I=a(158),M=Object(u.a)((function(e){return Object(h.a)({root:{cursor:"pointer",textTransform:"none",color:"dodgerBlue",whiteSpace:"pre-line",textAlign:"left"},icon:{marginRight:e.spacing(1)},black:{color:"black"}})})),R="copy",S="copied",D=(c={},Object(k.a)(c,R,"Copy"),Object(k.a)(c,S,"Copied"),c),F=function(e){var t=e.blackcolor,a=e.text,c=Object(L.a)(),n=Object(o.a)(c,2)[1],r=M(),l=Object(s.useState)(R),j=Object(o.a)(l,2),b=j[0],d=j[1],O=Object(s.useCallback)((function(){n(a),d(S)}),[n,a]),u=Object(s.useCallback)((function(){d(R)}),[d]);return Object(i.jsx)(I.a,{onClickAway:u,children:Object(i.jsx)(B.a,{title:D[b],arrow:!0,placement:"top",children:Object(i.jsxs)(E.a,{className:r.root,onClick:O,children:[Object(i.jsx)(A.a,{className:r.icon}),Object(i.jsx)("div",{className:t?"".concat(r.black):null,children:a})]})})})},_="AU",G="BR",V="CA",z="CH",P="DE",H="DK",J="ES",U="FI",W="FR",Z="GB",K="IE",q="IR",Q="NO",X="NL",Y="NZ",$="TR",ee="US",te=(n={},Object(k.a)(n,_,"Australian"),Object(k.a)(n,G,"Brazilian"),Object(k.a)(n,V,"Canadian"),Object(k.a)(n,z,"Chinese"),Object(k.a)(n,P,"German"),Object(k.a)(n,H,"Danish"),Object(k.a)(n,J,"Spanish"),Object(k.a)(n,U,"Finn"),Object(k.a)(n,W,"French"),Object(k.a)(n,Z,"British"),Object(k.a)(n,K,"Irish "),Object(k.a)(n,q,"Iranian"),Object(k.a)(n,Q,"Norwegian"),Object(k.a)(n,X,"Netherlander"),Object(k.a)(n,Y,"New Zealander"),Object(k.a)(n,$,"Turkish"),Object(k.a)(n,ee,"American"),n),ae=(r={},Object(k.a)(r,_,"red"),Object(k.a)(r,G,"pink"),Object(k.a)(r,V,"mediumpurple"),Object(k.a)(r,z,"cyan"),Object(k.a)(r,P,"yellow"),Object(k.a)(r,H,"mistyrose"),Object(k.a)(r,J,"magenta"),Object(k.a)(r,U,"orange"),Object(k.a)(r,W,"olive"),Object(k.a)(r,Z,"teal"),Object(k.a)(r,K,"violet"),Object(k.a)(r,q,"plum"),Object(k.a)(r,Q,"peru"),Object(k.a)(r,X,"cadetblue"),Object(k.a)(r,Y,"brown"),Object(k.a)(r,$,"silver"),Object(k.a)(r,ee,"goldenrod"),r),ce=a(59),ne=a(26),re="all",ie="male",se="female",le=new function e(){Object(ce.a)(this,e),this.filter={searchText:"",gender:re,nationality:""},Object(ne.c)(this)},je=Object(u.a)((function(e){return{table:{},row:{"& *:not(img)":{padding:"2px"}},small:{width:e.spacing(5),height:e.spacing(5),borderRadius:"50%"},name:{color:"dodgerBlue"},nat:{cursor:"pointer"}}})),oe=function(e){var t=e.data,a=je();return Object(i.jsx)(p.a,{component:C.a,children:Object(i.jsxs)(m.a,{className:a.table,"aria-label":"contacts table",children:[Object(i.jsx)(v.a,{children:Object(i.jsxs)(y.a,{children:[Object(i.jsx)(f.a,{children:"Avatar"}),Object(i.jsx)(f.a,{children:"Full name"}),Object(i.jsx)(f.a,{children:"Birthday"}),Object(i.jsx)(f.a,{children:"Email"}),Object(i.jsx)(f.a,{children:"Phone"}),Object(i.jsx)(f.a,{children:"Location"}),Object(i.jsx)(f.a,{children:"Nationality"})]})}),Object(i.jsx)(g.a,{children:t.map((function(e){return Object(i.jsxs)(y.a,{className:a.row,children:[Object(i.jsx)(f.a,{children:Object(i.jsx)("img",{className:a.small,alt:"",src:e.picture.thumbnail})}),Object(i.jsx)(f.a,{children:Object(i.jsx)(x.a,{className:a.name,children:"".concat(e.name.title," ").concat(e.name.first," ").concat(e.name.last)})}),Object(i.jsxs)(f.a,{children:[Object(i.jsxs)(x.a,{children:[Object(w.a)(Object(N.a)(e.dob.date),"MM/dd/yyyy")," "]}),Object(i.jsx)(x.a,{children:"".concat(e.dob.age," years")})]}),Object(i.jsx)(f.a,{children:Object(i.jsx)(F,{text:e.email})}),Object(i.jsx)(f.a,{children:Object(i.jsx)(F,{text:e.phone})}),Object(i.jsx)(f.a,{children:Object(i.jsx)(F,{blackcolor:!0,text:"/".concat(e.location.country,"/ \n\t\t\t   ").concat(e.location.street.name," ").concat(e.location.street.number)})}),Object(i.jsx)(f.a,{align:"right",className:a.nat,children:Object(i.jsx)(E.a,{onClick:function(){return le.filter.nationality=te[e.nat]},style:{backgroundColor:ae[e.nat]},children:te[e.nat]})})]},e.login.uuid)}))})]})})},be=a(176),de=a(80),Oe=a.n(de),ue=a(79),he=a.n(ue),xe=a(168),me=a(184),ge={TABLE:"table",GRID:"grid"},fe=function(e){var t=e.dataViewMode,a=e.setdataViewMode,c=Object(s.useCallback)((function(e,t){a(t)}),[a]);return Object(i.jsxs)(me.a,{size:"small",orientation:"horizontal",value:t,exclusive:!0,onChange:c,children:[Object(i.jsx)(xe.a,{value:ge.TABLE,"aria-label":ge.TABLE,children:Object(i.jsx)(he.a,{})}),Object(i.jsx)(xe.a,{value:ge.GRID,"aria-label":ge.GRID,children:Object(i.jsx)(Oe.a,{})})]})},pe=function(){return localStorage.getItem("dataViewMode")||ge.TABLE},ve=a(187),ye=a(81),Ce=a.n(ye),we=a(170),Ne=a(185),ke=a(177),Ee=a(171),Te=a(186),Ae=a(179),Le=Object(u.a)((function(e){return{root:{paddingBottom:e.spacing(2)},input_item:{minWidth:e.spacing(47),width:"100%"},clear_btn:{width:"100%",height:e.spacing(5)},paper:{padding:e.spacing(2)}}})),Be=Object(Ae.a)((function(){var e=Le(),t=le.filter;return Object(i.jsx)(b.a,{container:!0,className:e.root,children:Object(i.jsx)(C.a,{className:e.paper,children:Object(i.jsxs)(b.a,{container:!0,spacing:3,children:[Object(i.jsx)(b.a,{item:!0,xs:12,sm:12,md:6,xl:4,children:Object(i.jsx)(Ne.a,{size:"small",value:t.searchText,onChange:function(e){return t.searchText=e.target.value},className:e.input_item,placeholder:"Search by full name",endAdornment:Object(i.jsx)(we.a,{children:Object(i.jsx)(Ce.a,{})})})}),Object(i.jsx)(b.a,{item:!0,xs:12,sm:12,md:6,xl:4,children:Object(i.jsxs)(Ee.a,{variant:"outlined",className:e.input_item,children:[Object(i.jsx)(Te.a,{id:"gender",children:"Gender"}),Object(i.jsxs)(ke.a,{id:"gender",label:"gender",value:t.gender,onChange:function(e){return t.gender=e.target.value},children:[Object(i.jsx)(ve.a,{value:re,children:"All"}),Object(i.jsx)(ve.a,{value:ie,children:"Male"}),Object(i.jsx)(ve.a,{value:se,children:"Female"})]})]})}),Object(i.jsx)(b.a,{item:!0,xs:12,sm:12,md:6,xl:4,children:Object(i.jsx)(Ne.a,{value:t.nationality,onChange:function(e){return t.nationality=e.target.value},className:e.input_item,placeholder:"Nationality"})}),Object(i.jsx)(E.a,{size:"small",className:e.clear_btn,onClick:function(){return t.searchText="",t.gender=re,t.nationality=""},children:"Clear"})]})})})})),Ie=a(83),Me=a.n(Ie),Re=a(175),Se=a(67),De=a.n(Se),Fe=a(82),_e=new function e(){var t=this;Object(ce.a)(this,e),this.users=[],this.isLoading=!0,this.isError=!1,this.getContacts=Object(Fe.a)(De.a.mark((function e(){var a,c,n;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,fetch("https://randomuser.me/api/?results=400");case 4:return a=e.sent,e.next=7,a.json();case 7:if(c=e.sent,n=c.results,!c.error){e.next=12;break}throw new Error;case 12:t.users=n,t.isError=!1,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),t.isError=!0;case 19:return e.prev=19,t.isLoading=!1,e.finish(19);case 22:console.log(t.users);case 23:case"end":return e.stop()}}),e,null,[[0,16,19,22]])}))),Object(ne.c)(this)},Ge=a(172),Ve=a(173),ze=Object(u.a)((function(e){return{card:{whiteSpace:"pre-line",minHeight:e.spacing(20),textAlign:"center",margin:"0 auto"},large:{width:e.spacing(10),height:e.spacing(10),alignItems:"center",borderRadius:"50%"}}})),Pe=function(e){var t=e.data,a=ze();return Object(i.jsx)(b.a,{container:!0,className:a.card,children:t.map((function(e){return Object(i.jsx)(b.a,{item:!0,xs:12,lg:3,sm:6,children:Object(i.jsx)(Ge.a,{variant:"outlined",children:Object(i.jsxs)(Ve.a,{children:[Object(i.jsx)("img",{alt:"",src:e.picture.thumbnail,className:a.large}),Object(i.jsx)(x.a,{children:"".concat(e.name.title," ").concat(e.name.first," ").concat(e.name.last)}),Object(i.jsx)(E.a,{className:a.nat,onClick:function(){return le.filter.nationality=te[e.nat]},style:{backgroundColor:ae[e.nat]},children:te[e.nat]}),Object(i.jsx)(x.a,{children:Object(w.a)(Object(N.a)(e.dob.date),"MM/dd/yyyy")}),Object(i.jsxs)(x.a,{children:["".concat(e.dob.age," years")," "]}),Object(i.jsx)(x.a,{children:Object(i.jsx)(F,{text:e.email})}),Object(i.jsx)(F,{text:e.phone}),Object(i.jsx)(x.a,{children:Object(i.jsx)(F,{blackcolor:!0,text:"/".concat(e.location.country,"/ \n\t\t\t   ").concat(e.location.street.name," ").concat(e.location.street.number)})})]})})},e.login.uuid)}))})},He=a(180),Je=Object(u.a)((function(e){return Object(h.a)({root:{},headContainer:{marginTop:e.spacing(2)},refresh_button:{marginRight:e.spacing(1)}})})),Ue=Object(Ae.a)((function(){var e=Je(),t=_e.getContacts,a=_e.users,c=_e.isLoading,n=_e.isError,r=function(){var e=Object(s.useState)(pe),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){localStorage.setItem("dataViewMode",a)}),[a,c]),[a,c]}(),l=Object(o.a)(r,2),j=l[0],u=l[1],h=le.filter,m=a.filter((function(e){return"all"===h.gender||e.gender===h.gender})).filter((function(e){return!!(e.name.first+" "+e.name.last).toLowerCase().includes(h.searchText.toLowerCase())})).filter((function(e){return!!te[e.nat].toLowerCase().includes(h.nationality.toLowerCase())}));Object(s.useEffect)((function(){t()}),[t]);var g=Object(s.useState)(1),f=Object(o.a)(g,2),p=f[0],v=f[1],y=Math.ceil(m.length/8),C=8*p,w=C-8,N=m.slice(w,C);return Object(s.useEffect)((function(){v(1)}),[h.searchText,h.gender,h.nationality]),console.log(p),Object(i.jsx)(O.a,{className:e.root,children:Object(i.jsxs)(b.a,{container:!0,children:[Object(i.jsx)(b.a,{item:!0,xs:12,className:e.headContainer,children:Object(i.jsxs)(d.a,{display:"flex",justifyContent:"space-between",children:[Object(i.jsx)(x.a,{variant:"h5",component:"h1",children:"Contacts"}),Object(i.jsxs)(d.a,{display:"flex",children:[Object(i.jsx)(Re.a,{className:e.refresh_button,"aria-label":"refresh",onClick:function(){return t()},children:Object(i.jsx)(Me.a,{})}),Object(i.jsx)(fe,{dataViewMode:j,setdataViewMode:u,DATA_VIEW_MODE:ge})]})]})}),Object(i.jsx)(b.a,{item:!0,xs:12,children:Object(i.jsx)(d.a,{display:"flex",justifyContent:"space-between",children:Object(i.jsx)(Be,{})})}),Object(i.jsx)(He.a,{onChange:function(e,t){v(t)},count:y}),Object(i.jsx)(b.a,{item:!0,xs:12,children:c?Object(i.jsx)(be.a,{}):n?Object(i.jsx)("div",{children:"Error"}):j===ge.TABLE?Object(i.jsx)(oe,{data:N}):j===ge.GRID?Object(i.jsx)(Pe,{data:N}):"error"})]})})}));function We(){return Object(i.jsx)("div",{children:Object(i.jsx)(Ue,{})})}var Ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,191)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};j.a.render(Object(i.jsx)(We,{}),document.getElementById("root")),Ze()}},[[108,1,2]]]);
//# sourceMappingURL=main.dbf09316.chunk.js.map