(this["webpackJsonpspeed-typing-game"]=this["webpackJsonpspeed-typing-game"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(4),r=n.n(a),u=n(2);n(9);var s=n(1);var o=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(i.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(e),s=Object(u.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(!1),b=Object(u.a)(j,2),l=b[0],f=b[1],g=Object(i.useState)(0),h=Object(u.a)(g,2),m=h[0],O=h[1],p=Object(i.useRef)(null);function v(e){var t=e.target.value;a(t)}function x(){f(!0),d(e),a(""),O(0),p.current.disabled=!1,p.current.focus()}function C(){f(!1),O(S())}function S(){return c.split(" ").filter((function(e){return""!==e.trim()})).length}return Object(i.useEffect)((function(){setTimeout((function(){o>0&&l?d((function(e){return e-1})):C()}),1e3)}),[o,l]),{inputRef:p,text:c,handleChange:v,isTimeRunning:l,timeRemaining:o,startGame:x,wordCount:m}}(3),t=e.inputRef,n=e.text,c=e.handleChange,a=e.isTimeRunning,r=e.timeRemaining,o=e.startGame,d=e.wordCount;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Speed Typing Game"}),Object(s.jsx)("textarea",{ref:t,value:n,onChange:c,disabled:!a}),Object(s.jsxs)("h4",{children:["Time remaining: ",r]}),Object(s.jsx)("button",{onClick:o,disabled:a,children:"Start"}),Object(s.jsxs)("h1",{children:["Word count: ",d]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.cc5997cf.chunk.js.map