(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),i=a.n(o),c=(a(15),a(1)),r=a(4),l=a(5),h=a(7),u=a(6),k=a(8),d=function(e){return s.a.createElement("div",null,e.snakePoints.map(function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return s.a.createElement("div",{className:"snake-point",key:t,style:a})}))},f=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},m=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%"),backgroundColor:f()};return s.a.createElement("div",{className:"bait",style:t})},v=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},p={bait:v(),speed:200,direction:"RIGHT",snakePoints:[[0,0],[2,0]]},b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state=p,a.onKeyDown=function(e){switch((e=e||window.event).keyCode){case 38:a.setState({direction:"UP"});break;case 40:a.setState({direction:"DOWN"});break;case 37:a.setState({direction:"LEFT"});break;case 39:a.setState({direction:"RIGHT"})}},a.moveSnake=function(){var e=Object(c.a)(a.state.snakePoints),t=e[e.length-1];switch(a.state.direction){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}e.push(t),e.shift(),a.setState({snakePoints:e})},a}return Object(k.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakePoints[this.state.snakePoints.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(c.a)(this.state.snakePoints),a=t[t.length-1];t.pop(),t.forEach(function(t){a[0]==t[0]&&a[1]==t[1]&&e.onGameOver()})}},{key:"checkIfEat",value:function(){var e=this.state.snakePoints[this.state.snakePoints.length-1],t=this.state.bait;e[0]==t[0]&&e[1]==t[1]&&(this.setState({bait:v()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(c.a)(this.state.snakePoints);e.unshift([]),this.setState({snakePoints:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakePoints.length)),this.setState(p)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"game-area"},s.a.createElement(d,{snakePoints:this.state.snakePoints}),s.a.createElement(m,{dot:this.state.bait})),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"game-score"},s.a.createElement("h1",null," Score : ",this.state.snakePoints.length))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.519dafc2.chunk.js.map