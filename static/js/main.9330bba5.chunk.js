(window["webpackJsonpmemory-game"]=window["webpackJsonpmemory-game"]||[]).push([[0],{117:function(e,t,n){e.exports=n(236)},124:function(e,t,n){},125:function(e,t,n){},129:function(e,t){},131:function(e,t){},168:function(e,t){},169:function(e,t){},226:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(110),i=n.n(c),s=n(34),u=n(1),o=(n(123),n(15)),l=n(19),p=n(21),m=n(20),f=n(22),h=(n(124),n(125),n(111)),d=n.n(h),v=n(237),b=n(5),g=n.n(b),k=n(9),y=(n(226),n(112));function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=new function e(t){var n=this,a=t.uri,r=t.fetchOptions;Object(o.a)(this,e),this.uri=void 0,this.fetchOptions=void 0,this.requestWithGraphQL=function(){var e=Object(k.a)(g.a.mark((function e(t){var a,r,c,i,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,fetch(n.uri,w({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",authorization:a?"Bearer ".concat(a):""},body:JSON.stringify({query:t})},n.fetchOptions));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,i=c.data,s=c.errors,e.abrupt("return",{data:i,errors:s});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.uri=a,this.fetchOptions=w({},r)}({uri:"http://localhost:4000"}),j=a.createContext({user:{},updateUser:function(){}}),x=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(v.d)(),c=!1,i=function(){var a=Object(k.a)(g.a.mark((function a(r){var i,s,u,o,l,p;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),i=e.current.value,s=t.current.value,i){a.next=7;break}return alert("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.current.focus(),a.abrupt("return");case 7:if(s){a.next=11;break}return alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),t.current.focus(),a.abrupt("return");case 11:if(!c){a.next=13;break}return a.abrupt("return");case 13:return c=!0,a.next=16,E.requestWithGraphQL('mutation { \n      signIn(email: "'.concat(i,'", password: "').concat(s,'") {\n        token\n      }\n   }'));case 16:if(u=a.sent,o=u.data,l=u.errors,c=!1,!l){a.next=23;break}return alert(l[0].message),a.abrupt("return");case 23:p=o.signIn.token,localStorage.setItem("token",p),n.push("/");case 26:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(j.Consumer,null,(function(n){n.user;var a=n.updateUser;return r.a.createElement("div",{className:"container auth-container"},r.a.createElement("form",{name:"sign-in-form",className:"sign-in-form",onSubmit:function(e){i(e),a()}},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"text",name:"email",id:"email",ref:e})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"password"},"\ube44\ubc00\ubc88\ud638"),r.a.createElement("input",{type:"password",name:"password",id:"password",ref:t})),r.a.createElement("input",{type:"submit",className:"btn-signin",value:"\ub85c\uadf8\uc778"})))}))},S=(n(231),function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(v.d)(),i=!1,s=function(){var a=Object(k.a)(g.a.mark((function a(r){var s,u,o,l,p;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),s=e.current.value,u=t.current.value,o=n.current.value,s){a.next=8;break}return alert("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.current.focus(),a.abrupt("return");case 8:if(u){a.next=12;break}return alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),t.current.focus(),a.abrupt("return");case 12:if(o){a.next=16;break}return alert("\uc774\ub984\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),n.current.focus(),a.abrupt("return");case 16:if(!i){a.next=18;break}return a.abrupt("return");case 18:return i=!0,a.next=21,E.requestWithGraphQL('mutation { \n      signUp(email: "'.concat(s,'", password: "').concat(u,'", name: "').concat(o,'") {\n        token\n      }\n   }'));case 21:if(l=a.sent,p=l.errors,i=!1,!p){a.next=27;break}return alert(p[0].message),a.abrupt("return");case 27:alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \ub85c\uadf8\uc778 \ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),c.push("/");case 29:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-container"},r.a.createElement("form",{name:"sign-up-form",className:"sign-up-form",onSubmit:s},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"text",name:"email",id:"email",ref:e})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"password"},"\ube44\ubc00\ubc88\ud638"),r.a.createElement("input",{type:"password",name:"password",id:"password",ref:t})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"name"},"\uc774\ub984"),r.a.createElement("input",{type:"text",name:"name",id:"name",ref:n})),r.a.createElement("input",{type:"submit",className:"btn-signup",value:"\ud68c\uc6d0\uac00\uc785"})))}),C=(n(232),n(27));n(233);function N(e){return e.sort((function(){return.5-Math.random()})),e}var U=n(115),F=(n(234),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"getClassName",value:function(){var e=this.props,t=e.size,n=e.card,a=n.isFlipping,r=n.isOpened,c=n.isChecked,i=n.shouldShow,s=n.card;return"card x".concat(t," ").concat(a?r?"reverse-flip":"flip":"").concat(i||!s?" show open":"").concat(s?"":" disabled").concat(c?" checked":"")}},{key:"render",value:function(){var e=this.props,t=e.card,n=e.handleCardClick;return r.a.createElement("li",{className:this.getClassName(),onClick:function(e){n(t.id)}},t.card?r.a.createElement(U.a,{icon:t.card}):"")}}]),t}(a.Component)),D=[u.e,u.y,u.f,u.g,u.h,u.H,u.M,u.a,u.l,u.C,u.V,u.U,u.S,u.c,u.b,u.d,u.w,u.A,u.L,u.I,u.G,u.O,u.q,u.o,u.m,u.r,u.s,u.u,u.t,u.v,u.z,u.D,u.E,u.K,u.F,u.Q,u.j,u.p,u.B,u.x,u.J,u.k,u.n,u.i,u.N,u.P,u.R,u.T],I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cards:n.getNewCards(n.props.stage),isFlipping:!1,mapSize:n.getMapSize(n.props.stage),onNextStage:!1},n.checkCardIds=[],n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"getMapSize",value:function(e){var t=Math.floor(Math.sqrt(2*(e+2)));return 2*(e+2)===Math.pow(t,2)?t:t+1}},{key:"getNewCards",value:function(e){var t=N(D).slice(0,e+2),n=this.getMapSize(e),a=Math.pow(n,2),r=new Array(a-2*t.length).fill(0).map((function(e,t){return{id:1e3+t,card:null,isOpened:!0,isFlipping:!1,shouldShow:!1,isChecked:!0}}));return[].concat(Object(C.a)(N([].concat(Object(C.a)(t),Object(C.a)(t))).map((function(e,t){return{id:t,card:e,isOpened:!1,isFlipping:!1,shouldShow:!1,isChecked:!1}}))),Object(C.a)(r))}},{key:"flip",value:function(e){var t=this;return this.startFlip(e),new Promise((function(n,a){setTimeout((function(){setTimeout((function(){return t.finishFlip(e),n(!0)}),400),t.showCard(e)}),400)}))}},{key:"startFlip",value:function(e){var t=this.state.cards.slice(),n=!0,a=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;s<t.length&&t[s].card&&(t[s].isFlipping=!0)}}catch(u){a=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}this.setState({cards:t})}},{key:"finishFlip",value:function(e){var t=this.state.cards.slice(),n=!0,a=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;s<t.length&&t[s].card&&(t[s].isOpened=!t[s].isOpened,t[s].isFlipping=!1)}}catch(u){a=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}this.setState({cards:t})}},{key:"showCard",value:function(e){var t=this.state.cards.slice(),n=!0,a=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;s<t.length&&t[s].card&&(t[s].shouldShow=!t[s].isOpened)}}catch(u){a=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}this.setState({cards:t})}},{key:"handleCardClick",value:function(){var e=Object(k.a)(g.a.mark((function e(t){var n,a,r,c,i,s,u=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=this.state.cards.slice())[t]){e.next=3;break}return e.abrupt("return");case 3:if(n[t].card){e.next=5;break}return e.abrupt("return");case 5:if(!n[t].isOpened){e.next=7;break}return e.abrupt("return");case 7:if(!n[t].isChecked){e.next=9;break}return e.abrupt("return");case 9:if(!n[t].isFlipping){e.next=11;break}return e.abrupt("return");case 11:return(a=this.checkCardIds).push(t),e.next=15,this.flip([t]);case 15:if(!n.every((function(e){return!e.isFlipping}))){e.next=25;break}for(r=0,c=0,i=[];a.length>=2;)s=a.splice(0,2),n[s[0]].card.iconName===n[s[1]].card.iconName?(n[s[0]].isChecked=!0,n[s[1]].isChecked=!0,r++):(i.push.apply(i,Object(C.a)(s)),c++);if(!(i.length>0)){e.next=22;break}return e.next=22,this.flip(i);case 22:this.props.scoreUp(r),this.props.scoreDown(c),n.every((function(e){return e.isChecked}))?setTimeout((function(){u.props.stageUp(),u.setState({cards:u.getNewCards(u.props.stage),mapSize:u.getMapSize(u.props.stage),onNextStage:!0})}),800):this.setState({cards:n});case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(k.a)(g.a.mark((function e(){var t,n,a=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.cards,n=t.map((function(e){return e.id})),e.next=4,this.flip(n);case 4:setTimeout(Object(k.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.flip(n);case 2:case"end":return e.stop()}}),e)}))),1e3);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(k.a)(g.a.mark((function e(){var t,n,a=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.onNextStage,n=this.state.cards,t&&(this.setState({onNextStage:!1}),setTimeout(Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.map((function(e){return e.id})),e.next=3,a.flip(t);case 3:setTimeout(Object(k.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.flip(t);case 2:case"end":return e.stop()}}),e)}))),1e3);case 4:case"end":return e.stop()}}),e)}))),400));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.cards,a=t.mapSize;return r.a.createElement("section",{className:"deck"},r.a.createElement("ul",{className:"cards"},n.map((function(t,n){return r.a.createElement(F,{key:t.id,size:a,card:t,handleCardClick:e.handleCardClick.bind(e)})}))))}}]),t}(a.Component),M=n(116),P=(n(235),n(17)),z=Object(P.a)();function T(e){e.location,e.match,e.staticContext;var t=e.to,n=e.onClick,a=Object(M.a)(e,["location","match","staticContext","to","onClick"]);return r.a.createElement("button",Object.assign({},a,{onClick:function(e){n&&n(e),z.push(t)}}))}var R=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={stage:1,score:0,time:0},n.timerID=0,n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"initStage",value:function(){this.setState({stage:1})}},{key:"stageUp",value:function(){this.setState({stage:this.state.stage+1})}},{key:"startTimer",value:function(){var e=this;this.timerID=setInterval((function(){e.setState({time:e.state.time+1})}),1e3)}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"scoreUp",value:function(e){this.setState({score:this.state.score+100*e})}},{key:"scoreDown",value:function(e){this.setState({score:this.state.score-10*e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.stage,a=t.score,c=t.time;return r.a.createElement(j.Consumer,null,(function(t){var i=t.user;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\uc9dd \ub9de\ucd94\uae30 \uac8c\uc784"),r.a.createElement("div",{className:"sign-btn-group"},i&&i.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{marginRight:"5px"}},i.name),r.a.createElement(T,{className:"link-btn in"},"\ub0b4\uc815\ubcf4"),r.a.createElement(T,{className:"link-btn up"},"\ub85c\uadf8\uc544\uc6c3")):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{to:"/signin",className:"link-btn link-sign in"},"\ub85c\uadf8\uc778"),r.a.createElement(T,{to:"/signup",className:"link-btn link-sign up"},"\ud68c\uc6d0\uac00\uc785")))),r.a.createElement("main",null,r.a.createElement("section",{className:"score-panel"},r.a.createElement("div",null,"\uc2a4\ud14c\uc774\uc9c0: ",r.a.createElement("span",null,n)),r.a.createElement("div",null,"\uc810\uc218: ",r.a.createElement("span",null,a)),r.a.createElement("div",null,"\uc2dc\uac04: ",r.a.createElement("span",null,function(e){var t=String(Math.floor(e/3600)),n=e%3600,a=String(Math.floor(n/60)).padStart(2,"0"),r=String(e%60).padStart(2,"0");return"".concat(t,":").concat(a,":").concat(r)}(c)))),r.a.createElement(I,{stage:n,scoreUp:e.scoreUp.bind(e),scoreDown:e.scoreDown.bind(e),stageUp:e.stageUp.bind(e)})),r.a.createElement("footer",null))}))}}]),t}(a.Component),q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).updateUser=void 0,n.updateUser=function(){n.setState({user:n.getUser()})},n.state={user:n.getUser(),updateUser:n.updateUser},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"getUser",value:function(){var e=localStorage.getItem("token");return e?d.a.verify(e,"awesome-memory-game"):null}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/signin",component:x}),r.a.createElement(v.a,{exact:!0,path:"/signup",component:S}),r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,null)}})))}}]),t}(a.Component);s.b.add(u.W),i.a.render(r.a.createElement(v.b,{history:z},r.a.createElement(q,null)),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.9330bba5.chunk.js.map