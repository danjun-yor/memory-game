(window["webpackJsonpmemory-game"]=window["webpackJsonpmemory-game"]||[]).push([[0],{50:function(e,t,a){e.exports=a(74)},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),i=a.n(c),s=a(27),o=a(4),u=a(10),l=(a(57),a(58),a(59),a(75)),p=a(6),m=a.n(p),f=a(13),d=a(23),h=a(30),v=a(20),b=a(26);a(61);function g(){var e=Object(h.a)(["\n  mutation SignInMutation($email: String!, $password: String!) {\n    signUp(email: $email, password: $password) {\n      token\n    }\n  }\n"]);return g=function(){return e},e}var w=Object(v.b)(g()),k=function(){var e=Object(b.a)(w),t=Object(d.a)(e,1)[0],a=Object(n.useState)(!0),c=Object(d.a)(a,2),i=(c[0],c[1],Object(n.useRef)(null)),s=Object(n.useRef)(null),o=function(){var e=Object(f.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:{email:i.current,password:s.current}});case 2:a=e.sent,n=a.data.signUp.token,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),o();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-container"},r.a.createElement("form",{name:"sign-in-form",className:"sign-in-form",onSubmit:u},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"text",name:"email",id:"email",ref:i})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"password"},"\ube44\ubc00\ubc88\ud638"),r.a.createElement("input",{type:"password",name:"password",id:"password",ref:s})),r.a.createElement("input",{type:"submit",className:"btn-signin",value:"\ub85c\uadf8\uc778"})))};a(64);function y(){var e=Object(h.a)(["\n  mutation SignUpMutation($email: String!, $password: String!, $name: String!) {\n    signUp(email: $email, password: $password, name: $name) {\n      token\n    }\n  }\n"]);return y=function(){return e},e}var O=Object(v.b)(y()),j=function(){var e=Object(b.a)(O),t=Object(d.a)(e,1)[0],a=Object(n.useState)(!0),c=Object(d.a)(a,2);c[0],c[1];console.log(localStorage.getItem("token"));var i=Object(n.useRef)(null),s=Object(n.useRef)(null),o=Object(n.useRef)(null),u=function(){var e=Object(f.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:{name:o.current,email:i.current,password:s.current}});case 2:a=e.sent,n=a.data.signUp.token,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container auth-container"},r.a.createElement("form",{name:"sign-up-form",className:"sign-up-form",onSubmit:l},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"email"},"\uc774\uba54\uc77c"),r.a.createElement("input",{type:"text",name:"email",id:"email",ref:i})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"password"},"\ube44\ubc00\ubc88\ud638"),r.a.createElement("input",{type:"password",name:"password",id:"password",ref:s})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"name"},"\uc774\ub984"),r.a.createElement("input",{type:"text",name:"name",id:"name",ref:o})),r.a.createElement("input",{type:"submit",className:"btn-signup",value:"\ud68c\uc6d0\uac00\uc785"})))},E=a(17),S=a(18),x=a(21),C=a(19),N=a(22),F=(a(65),a(24));a(66);function M(e){return e.sort((function(){return.5-Math.random()})),e}var U=a(45),I=(a(69),function(e){function t(){return Object(E.a)(this,t),Object(x.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(S.a)(t,[{key:"getClassName",value:function(){var e=this.props,t=e.size,a=e.card,n=a.isFlipping,r=a.isOpened,c=a.isChecked,i=a.shouldShow,s=a.card;return"card x".concat(t," ").concat(n?r?"reverse-flip":"flip":"").concat(i||!s?" show open":"").concat(s?"":" disabled").concat(c?" checked":"")}},{key:"render",value:function(){var e=this.props,t=e.card,a=e.handleCardClick;return r.a.createElement("li",{className:this.getClassName(),onClick:function(e){a(t.id)}},t.card?r.a.createElement(U.a,{icon:t.card}):"")}}]),t}(n.Component)),D=[o.e,o.y,o.f,o.g,o.h,o.H,o.M,o.a,o.l,o.C,o.V,o.U,o.S,o.c,o.b,o.d,o.w,o.A,o.L,o.I,o.G,o.O,o.q,o.o,o.m,o.r,o.s,o.u,o.t,o.v,o.z,o.D,o.E,o.K,o.F,o.Q,o.j,o.p,o.B,o.x,o.J,o.k,o.n,o.i,o.N,o.P,o.R,o.T],z=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={cards:a.getNewCards(a.props.stage),isFlipping:!1,mapSize:a.getMapSize(a.props.stage),onNextStage:!1},a.checkCardIds=[],a}return Object(N.a)(t,e),Object(S.a)(t,[{key:"getMapSize",value:function(e){var t=Math.floor(Math.sqrt(2*(e+2)));return 2*(e+2)===Math.pow(t,2)?t:t+1}},{key:"getNewCards",value:function(e){var t=M(D).slice(0,e+2),a=this.getMapSize(e),n=Math.pow(a,2),r=new Array(n-2*t.length).fill(0).map((function(e,t){return{id:1e3+t,card:null,isOpened:!0,isFlipping:!1,shouldShow:!1,isChecked:!0}}));return[].concat(Object(F.a)(M([].concat(Object(F.a)(t),Object(F.a)(t))).map((function(e,t){return{id:t,card:e,isOpened:!1,isFlipping:!1,shouldShow:!1,isChecked:!1}}))),Object(F.a)(r))}},{key:"flip",value:function(e){var t=this;return this.startFlip(e),new Promise((function(a,n){setTimeout((function(){setTimeout((function(){return t.finishFlip(e),a(!0)}),400),t.showCard(e)}),400)}))}},{key:"startFlip",value:function(e){var t=this.state.cards.slice(),a=!0,n=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var s=c.value;s<t.length&&t[s].card&&(t[s].isFlipping=!0)}}catch(o){n=!0,r=o}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}this.setState({cards:t})}},{key:"finishFlip",value:function(e){var t=this.state.cards.slice(),a=!0,n=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var s=c.value;s<t.length&&t[s].card&&(t[s].isOpened=!t[s].isOpened,t[s].isFlipping=!1)}}catch(o){n=!0,r=o}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}this.setState({cards:t})}},{key:"showCard",value:function(e){var t=this.state.cards.slice(),a=!0,n=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var s=c.value;s<t.length&&t[s].card&&(t[s].shouldShow=!t[s].isOpened)}}catch(o){n=!0,r=o}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}this.setState({cards:t})}},{key:"handleCardClick",value:function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,r,c,i,s,o=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=this.state.cards.slice())[t]){e.next=3;break}return e.abrupt("return");case 3:if(a[t].card){e.next=5;break}return e.abrupt("return");case 5:if(!a[t].isOpened){e.next=7;break}return e.abrupt("return");case 7:if(!a[t].isChecked){e.next=9;break}return e.abrupt("return");case 9:if(!a[t].isFlipping){e.next=11;break}return e.abrupt("return");case 11:return(n=this.checkCardIds).push(t),e.next=15,this.flip([t]);case 15:if(!a.every((function(e){return!e.isFlipping}))){e.next=25;break}for(r=0,c=0,i=[];n.length>=2;)s=n.splice(0,2),a[s[0]].card.iconName===a[s[1]].card.iconName?(a[s[0]].isChecked=!0,a[s[1]].isChecked=!0,r++):(i.push.apply(i,Object(F.a)(s)),c++);if(!(i.length>0)){e.next=22;break}return e.next=22,this.flip(i);case 22:this.props.scoreUp(r),this.props.scoreDown(c),a.every((function(e){return e.isChecked}))?setTimeout((function(){o.props.stageUp(),o.setState({cards:o.getNewCards(o.props.stage),mapSize:o.getMapSize(o.props.stage),onNextStage:!0})}),800):this.setState({cards:a});case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.cards,a=t.map((function(e){return e.id})),e.next=4,this.flip(a);case 4:setTimeout(Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.flip(a);case 2:case"end":return e.stop()}}),e)}))),1e3);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.onNextStage,a=this.state.cards,t&&(this.setState({onNextStage:!1}),setTimeout(Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.map((function(e){return e.id})),e.next=3,n.flip(t);case 3:setTimeout(Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.flip(t);case 2:case"end":return e.stop()}}),e)}))),1e3);case 4:case"end":return e.stop()}}),e)}))),400));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.cards,n=t.mapSize;return r.a.createElement("section",{className:"deck"},r.a.createElement("ul",{className:"cards"},a.map((function(t,a){return r.a.createElement(I,{key:t.id,size:n,card:t,handleCardClick:e.handleCardClick.bind(e)})}))))}}]),t}(n.Component),$=a(46),T=(a(70),a(16)),R=Object(T.a)();function A(e){e.location,e.match,e.staticContext;var t=e.to,a=e.onClick,n=Object($.a)(e,["location","match","staticContext","to","onClick"]);return r.a.createElement("button",Object.assign({},n,{onClick:function(e){a&&a(e),R.push(t)}}))}var q=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={stage:1,score:0,time:0},a.timerID=0,a}return Object(N.a)(t,e),Object(S.a)(t,[{key:"initStage",value:function(){this.setState({stage:1})}},{key:"stageUp",value:function(){this.setState({stage:this.state.stage+1})}},{key:"startTimer",value:function(){var e=this;this.timerID=setInterval((function(){e.setState({time:e.state.time+1})}),1e3)}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"scoreUp",value:function(e){this.setState({score:this.state.score+100*e})}},{key:"scoreDown",value:function(e){this.setState({score:this.state.score-10*e})}},{key:"render",value:function(){var e=this.state,t=e.stage,a=e.score,n=e.time;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\uc9dd \ub9de\ucd94\uae30 \uac8c\uc784"),r.a.createElement(A,{to:"/login",className:"login-link"},"\ub85c\uadf8\uc778")),r.a.createElement("main",null,r.a.createElement("section",{className:"score-panel"},r.a.createElement("div",null,"\uc2a4\ud14c\uc774\uc9c0: ",r.a.createElement("span",null,t)),r.a.createElement("div",null,"\uc810\uc218: ",r.a.createElement("span",null,a)),r.a.createElement("div",null,"\uc2dc\uac04: ",r.a.createElement("span",null,function(e){var t=String(Math.floor(e/3600)),a=e%3600,n=String(Math.floor(a/60)).padStart(2,"0"),r=String(e%60).padStart(2,"0");return"".concat(t,":").concat(n,":").concat(r)}(n)))),r.a.createElement(z,{stage:t,scoreUp:this.scoreUp.bind(this),scoreDown:this.scoreDown.bind(this),stageUp:this.stageUp.bind(this)})),r.a.createElement("footer",null))}}]),t}(n.Component),B=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/signin",component:k}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:j}),r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(q,null)}}))},J=new v.a({uri:"http://localhost:4000",request:function(e){var t=localStorage.getItem("token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})}});s.b.add(o.W),i.a.render(r.a.createElement(u.a,{client:J},r.a.createElement(l.b,{history:R},r.a.createElement(B,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.013d24fe.chunk.js.map