(this.webpackJsonpdrumkit=this.webpackJsonpdrumkit||[]).push([[0],{14:function(e,a,t){},8:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var d=t(3),c=t(4),s=t(1),n=t(6),i=t(7),m=t(0),r=t.n(m),l=t(5),o=t.n(l),u=(t(14),function(e){Object(i.a)(t,e);var a=Object(n.a)(t);function t(e){var c;return Object(d.a)(this,t),(c=a.call(this,e)).state={display:null},c.handleKey=c.handleKey.bind(Object(s.a)(c)),c.handleClick=c.handleClick.bind(Object(s.a)(c)),c.setDisplay=c.setDisplay.bind(Object(s.a)(c)),c}return Object(c.a)(t,[{key:"setDisplay",value:function(e){this.setState({display:e})}},{key:"handleClick",value:function(e){var a=e.target.dataset.key;if(document.querySelector('audio[data-key="'.concat(a,'"]'))){var t=document.querySelector('audio[data-key="'.concat(a,'"]'));t.currentTime=0,this.setDisplay(e.target.id),t.play(),e.target.classList.add("playing")}}},{key:"handleClickUp",value:function(e){e.target.classList.remove("playing")}},{key:"handleKey",value:function(e){if(document.querySelector('.drum-pad[data-key="'.concat(e.keyCode,'"]'))){var a=document.querySelector('.drum-pad[data-key="'.concat(e.keyCode,'"]'));a.classList.add("playing"),this.setState({display:a.id})}if(document.querySelector('audio[data-key="'.concat(e.keyCode,'"]'))){var t=document.querySelector('audio[data-key="'.concat(e.keyCode,'"]'));t.currentTime=0,t.play()}}},{key:"handleKeyUp",value:function(e){document.querySelector('.drum-pad[data-key="'.concat(e.keyCode,'"]'))&&document.querySelector('.drum-pad[data-key="'.concat(e.keyCode,'"]')).classList.remove("playing")}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("mousedown",this.handleClick),document.addEventListener("mouseup",this.handleClickUp)}},{key:"render",value:function(){return r.a.createElement("div",{id:"drum-machine"},r.a.createElement("h1",null,"Drum Machine"),r.a.createElement("div",{id:"display"},this.state.display),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"drum-pad",id:"Kick","data-key":"81"},"Q",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","data-key":"81",className:"clip",id:"Q"})),r.a.createElement("div",{className:"drum-pad",id:"Open-HH","data-key":"87"},"W",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","data-key":"87",className:"clip",id:"W"})),r.a.createElement("div",{className:"drum-pad",id:"Closed-HH","data-key":"69"},"E",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","data-key":"69",className:"clip",id:"E"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"drum-pad",id:"Kick_n_Hat","data-key":"65"},"A",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","data-key":"65",className:"clip",id:"A"})),r.a.createElement("div",{className:"drum-pad",id:"Clap","data-key":"83"},"S",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","data-key":"83",className:"clip",id:"S"})),r.a.createElement("div",{className:"drum-pad",id:"Snare","data-key":"68"},"D",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3","data-key":"68",className:"clip",id:"D"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"drum-pad",id:"Side-Stick","data-key":"90"},"Z",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3","data-key":"90",className:"clip",id:"Z"})),r.a.createElement("div",{className:"drum-pad",id:"Shaker","data-key":"88"},"X",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3","data-key":"88",className:"clip",id:"X"})),r.a.createElement("div",{className:"drum-pad",id:"Punchy Kick","data-key":"67"},"C",r.a.createElement("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3","data-key":"67",className:"clip",id:"C"})))))}}]),t}(r.a.Component));o.a.render(r.a.createElement(u,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.b908b612.chunk.js.map