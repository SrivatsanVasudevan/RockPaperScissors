(this.webpackJsonprockpaperscissors=this.webpackJsonprockpaperscissors||[]).push([[0],[,,,,,,,,,,,,function(s,e,t){},function(s,e,t){},,function(s,e,t){},function(s,e,t){},function(s,e,t){},function(s,e,t){},function(s,e,t){},function(s,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),c=t(3),n=t.n(c),a=(t(12),t(4)),i=t(5),u=t(7),l=t(6),p=(t(13),t(0)),d=function(s){s.userInput,s.computerInput;var e=s.wins,t=s.loss,o=s.draw;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"results",children:[Object(p.jsxs)("div",{style:{margin:20},children:[" WINS: ",e]}),Object(p.jsxs)("div",{style:{margin:20},children:[" LOSSES: ",t]}),Object(p.jsxs)("div",{style:{margin:20},children:[" DRAWS: ",o]})]})})},m=(t(15),function(s){var e=s.userInput,t=s.computerInput,o=s.player,r=s.computer,c="https://cdn130.picsart.com/288074322023201.png?type=webp&to=min&r=640",n="http://assets.stickpng.com/images/580b585b2edbce24c47b2463.png",a="https://i.pinimg.com/originals/fa/d9/88/fad988caff49e215acccaf3f753a334f.png",i="",u="";return i="Rock"===e?c:"Paper"===e?n:a,u="Rock"===t?c:"Paper"===t?n:a,Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"players",children:[" ",Object(p.jsx)("img",{style:{backgroundColor:o},className:"image",src:i,alt:e})," "]}),Object(p.jsxs)("span",{className:"players",children:[" ",Object(p.jsx)("img",{className:"image",src:"https://media.istockphoto.com/vectors/versus-letters-or-vs-logo-comic-text-in-pop-art-style-vector-id853075280?k=6&m=853075280&s=170667a&w=0&h=RPFs-E3IZvbX3mujRHGY3wX7Mgyzx38iXXu4c0httUI=",alt:"VS"})," "]}),Object(p.jsxs)("span",{className:"players",children:[" ",Object(p.jsx)("img",{style:{backgroundColor:r},className:"image",src:u,alt:t})," "]})]})}),g=(t(16),function(s){var e=s.rock,t=s.paper,o=s.scissors;return Object(p.jsxs)("div",{className:"footer",children:["Remember!",Object(p.jsx)("img",{className:"footerImages",src:e,alt:"Rock"})," beats",Object(p.jsx)("img",{className:"footerImages",src:o,alt:"Scissors"}),",",Object(p.jsx)("img",{className:"footerImages",src:o,alt:"Scissors"})," beats",Object(p.jsx)("img",{className:"footerImages",src:t,alt:"Paper"})," and",Object(p.jsx)("img",{className:"footerImages",src:t,alt:"Paper"})," beats",Object(p.jsx)("img",{className:"footerImages",src:e,alt:"Rock"}),"!"]})}),j=(t(17),function(s){Object(u.a)(t,s);var e=Object(l.a)(t);function t(){var s;return Object(a.a)(this,t),(s=e.call(this)).updateInputs=function(e){var t=["Rock","Paper","Scissors"],o=t[Math.floor(Math.random()*t.length)];s.setState({userInput:e.target.value,computerInput:o,showPlayers:!1,madeSelection:!0,playerBackground:"",computerBackground:""})},s.checkWinner=function(){s.setState({showPlayers:!0});var e=s.state,t=e.userInput,o=e.computerInput;console.log(t+" "+o);var r=s.state,c=r.winCount,n=r.lossCount,a=r.drawCount;"Rock"===t&&"Scissors"===o&&(console.log("Win!"),c++,s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"springgreen",computerBackground:"red"})),"Scissors"===t&&"Paper"===o&&(console.log("Win!"),c++,s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"springgreen",computerBackground:"red"})),"Paper"===t&&"Rock"===o&&(console.log("Win!"),c++,s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"springgreen",computerBackground:"red"})),"Rock"===t&&"Paper"===o&&(console.log("Loss"),n++,s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"red",computerBackground:"springgreen"})),"Paper"===t&&"Scissors"===o&&(console.log("Loss"),n++,s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"red",computerBackground:"springgreen"})),"Scissors"===t&&"Rock"===o&&(console.log("Loss"),n++,s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"red",computerBackground:"springgreen"})),t===o&&(a++,console.log("Draw! "+a),s.setState({winCount:c,lossCount:n,drawCount:a,wins:c,loss:n,draw:a,user:t,computer:o,playerBackground:"yellow",computerBackground:"yellow"})),s.setState({user:t,computer:o,madeSelection:!1}),console.log(s.state.winCount+" "+s.state.lossCount+" "+s.state.drawCount)},s.state={winCount:0,lossCount:0,drawCount:0,wins:0,loss:0,draw:0,computerInput:"",userInput:"",user:"",computer:"",showPlayers:!1,madeSelection:!1,playerBackground:"",computerBackground:""},s}return Object(i.a)(t,[{key:"render",value:function(){var s=this.state,e=s.userInput,t=s.user,o=s.computer,r=s.wins,c=s.loss,n=s.draw,a=s.showPlayers,i=s.madeSelection,u=s.playerBackground,l=s.computerBackground;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"image",style:{backgroundColor:"Rock"===e?"blue":""},src:"https://cdn130.picsart.com/288074322023201.png?type=webp&to=min&r=640",alt:"Rock",className:"buttons",value:"Rock",onClick:this.updateInputs}),Object(p.jsx)("input",{type:"image",style:{backgroundColor:"Paper"===e?"blue":""},src:"http://assets.stickpng.com/images/580b585b2edbce24c47b2463.png",alt:"Paper",className:"buttons",value:"Paper",onClick:this.updateInputs}),Object(p.jsx)("input",{type:"image",style:{backgroundColor:"Scissors"===e?"blue":""},src:"https://i.pinimg.com/originals/fa/d9/88/fad988caff49e215acccaf3f753a334f.png",alt:"Scissors",className:"buttons",value:"Scissors",onClick:this.updateInputs})]}),Object(p.jsx)("div",{children:i?Object(p.jsx)("input",{type:"image",src:"https://pbskids.org/plumlanding/i/common/playbutton.png",alt:"Go!",className:"buttons",value:"Scissors",onClick:this.checkWinner}):null}),Object(p.jsx)("div",{children:a?Object(p.jsx)(m,{userInput:t,computerInput:o,player:u,computer:l}):null}),Object(p.jsx)("div",{children:Object(p.jsx)(d,{wins:r,loss:c,draw:n})}),Object(p.jsx)("div",{style:a||i?{marginTop:70}:{marginTop:135},children:Object(p.jsx)(g,{rock:"https://cdn130.picsart.com/288074322023201.png?type=webp&to=min&r=640",paper:"http://assets.stickpng.com/images/580b585b2edbce24c47b2463.png",scissors:"https://i.pinimg.com/originals/fa/d9/88/fad988caff49e215acccaf3f753a334f.png"})})]})}}]),t}(r.a.Component)),b=(t(18),function(){return Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("span",{style:{fontSize:40,color:"blue"},children:"ROCK, PAPER, SCISSORS!"}),Object(p.jsx)("div",{style:{margin:30},children:"Play rock, paper and scissors with the computer! Select one of the below to play!"})]})});t(19);var h=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{}),Object(p.jsx)(j,{})]})},w=function(s){s&&s instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,n=e.getTTFB;t(s),o(s),r(s),c(s),n(s)}))};n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),w()}],[[20,1,2]]]);
//# sourceMappingURL=main.1057d21b.chunk.js.map