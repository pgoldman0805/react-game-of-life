(this["webpackJsonpreact-game-of-life"]=this["webpackJsonpreact-game-of-life"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),i=t.n(c),o=t(5),a=t.n(o),u=(t(11),t(2)),l=function(e){var n=e.grid,t=e.handleCellClick;return Object(r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(n[0].length,", 20px)")},children:n.map((function(e,c){return e.map((function(e,i){return Object(r.jsx)("div",{onClick:function(){return t(c,i)},style:{width:20,height:20,border:"1px solid #333",margin:"0 10px",backgroundColor:n[c][i]?"#293D0E":void 0,boxShadow:"0 1px blue",borderRadius:"4px"}},"".concat(c,"-").concat(i))}))}))})},s=t(3),d=function(e){var n=function(){for(var e=[],n=0;n<30;n++)e.push(Array.from(Array(30),(function(){return 0})));return e},t=Object(c.useState)(n),r=Object(u.a)(t,2),i=r[0],o=r[1];return{numRows:30,numCols:30,operations:[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],initialGrid:n,randomGrid:function(){for(var n=[],t=0;t<30;t++)n.push(Array.from(Array(30),(function(){return Math.random()>e?1:0})));return n},grid:i,setGrid:o,handleCellClick:function(e,n){var t=Object(s.a)(i,(function(t){t[e][n]=i[e][n]?0:1}));o(t)}}},f=function(){var e=Object(c.useState)(50),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(c.useState)(.5),a=Object(u.a)(o,2),f=a[0],b=a[1],j=d(f),p=j.numRows,m=j.numCols,h=j.operations,O=j.initialGrid,g=j.randomGrid,x=j.grid,C=j.setGrid,v=j.handleCellClick,y=Object(c.useState)(!1),k=Object(u.a)(y,2),S=k[0],w=k[1],G=Object(c.useRef)();G.current=S;var T=Object(c.useCallback)((function(){G.current&&(C((function(e){return Object(s.b)(e,(function(n){for(var t=function(t){for(var r=function(r){var c=0;h.forEach((function(e){var i=Object(u.a)(e,2),o=i[0],a=i[1],l=t+o,s=r+a;l>=0&&l<p&&s>=0&&s<m&&(c+=n[l][s])})),c<2||c>3?n[t][r]=0:0===e[t][r]&&3===c&&(n[t][r]=1)},c=0;c<m;c++)r(c)},r=0;r<p;r++)t(r)}))})),setTimeout(T,t))}),[t,i]);Object(c.useEffect)((function(){T()}),[t,f,T]);return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)("aside",{style:{margin:20},children:[Object(r.jsx)("button",{onClick:function(){w(!S),S||(G.current=!0,T())},children:S?"stop":"start"}),Object(r.jsx)("button",{onClick:function(){return C(O)},children:"clear"}),Object(r.jsx)("button",{onClick:function(){return C(g)},children:"random"}),Object(r.jsx)("label",{children:"Set coefficient"}),Object(r.jsx)("input",{type:"range",name:"coefficient",min:"0",max:"1",step:"0.1",onChange:function(e){return function(e){b(Number.parseFloat(e.currentTarget.value))}(e)},value:f}),Object(r.jsx)("label",{children:"Set Speed"}),Object(r.jsx)("input",{type:"range",name:"speed",min:"50",max:"3000",step:"10",onChange:function(e){return function(e){console.log("oldSpeed: ".concat(t)),i(Number.parseInt(e.currentTarget.value)),console.log("newSpeed: ".concat(t))}(e)},value:t})]}),Object(r.jsx)(l,{grid:x,handleCellClick:v})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.7d00cccb.chunk.js.map