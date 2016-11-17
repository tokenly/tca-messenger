webpackJsonp([2,0],{0:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=n(76),o=s(a),i=n(72),r=s(i);new o.default({el:"#app",template:"<App/>",data:function(){return{messages:[]}},components:{App:r.default}})},32:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return new i.default(function(t){c=new u.default({publishKey:"pub-c-ccbdf034-c8ed-4fd1-86fb-880758711b7f",subscribeKey:"sub-c-da59fece-ac28-11e6-a114-0619f8945a4f"}),c.addListener({status:function(e){"PNConnectedCategory"===e.category&&t()},message:function(e){console.log("received new messageNotification",e);for(var t=0;t<d.length;t++)d[t].call(this,e.message)}}),c.subscribe({channels:["control",e]})})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(35),i=s(o),r=n(71),u=s(r),c=void 0,d=[];t.default={init:function(e){return a(e)},onMessage:function(e){d.push(e)},publish:function(e,t,n,s){if(null==c)return void console.error("init pubnub first");var a={channel:e,message:{quantity:t,token:n,msg:s}};c.publish(a,function(e,t){e.error&&console.error(e.error)})}}},33:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(73),o=s(a);t.default={name:"app",components:{Messenger:o.default}}},34:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(32),o=s(a);t.default={name:"Messenger",data:function(){return{ready:!1,messages:this.$root.messages,quantity:null,token:null,message:null}},mounted:function(){var e=this,t="c",n=RegExp("[?&]"+t+"=([^&]*)").exec(window.location.search),s=n&&decodeURIComponent(n[1]);o.default.init(s).then(function(){e.ready=!0}),o.default.onMessage(function(t){e.messages.push(t)})},methods:{sendMessage:function(){o.default.publish("tcabroadcast",this.quantity,this.token,this.message),this.message=""}}}},69:function(e,t){},70:function(e,t){},72:function(e,t,n){var s,a;n(69),s=n(33);var o=n(74);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,e.exports=s},73:function(e,t,n){var s,a;n(70),s=n(34);var o=n(75);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-324ed8d8",e.exports=s},74:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"app"}},[e._h("messenger")])},staticRenderFns:[]}},75:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"chat"},[e._m(0)," ",e._m(1)," ",e._h("div",{directives:[{name:"show",rawName:"v-show",value:0==e.messages.length,expression:"messages.length == 0"}],staticClass:"no-messages"},["\n    Waiting for messages...\n  "])," ",e._h("div",{directives:[{name:"show",rawName:"v-show",value:e.messages.length>0,expression:"messages.length > 0"}],staticClass:"messages"},[e._l(e.messages,function(t){return e._h("pre",["["+e._s(t.quantity)+" "+e._s(t.token)+"] "+e._s(t.msg)])})])," ",e._m(2)," ",e._h("div",{staticClass:"input-group"},[e._h("label",{attrs:{for:"QuantityInput"}},["Quantity ",e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"quantity"}],attrs:{type:"text",id:"QuantityInput",placeholder:"10"},domProps:{value:e._s(e.quantity)},on:{input:function(t){t.target.composing||(e.quantity=t.target.value)}}})])])," ",e._h("div",{staticClass:"input-group"},[e._h("label",{attrs:{for:"TokenInput"}},["Token ",e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{type:"text",id:"TokenInput",placeholder:"TOKENLY"},domProps:{value:e._s(e.token)},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}})])])," ",e._h("div",{staticClass:"input-group"},[e._h("label",{attrs:{for:"MessageInput"}},["Message ",e._h("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticStyle:{width:"300px",height:"48px"},attrs:{id:"MessageInput",placeholder:"Your Message Here"},domProps:{value:e._s(e.message)},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])])," ",e._h("button",{attrs:{id:"SendButton",disabled:!e.ready},on:{click:function(t){e.sendMessage()}}},["Send"])])},staticRenderFns:[function(){var e=this;return e._h("h1",["Welcome User ",e._h("span",{attrs:{"data-my-uuid":""}})])},function(){var e=this;return e._h("div",{staticClass:"messages-header"},["Messages"])},function(){var e=this;return e._h("h2",["Publish A Message"])}]}}});
//# sourceMappingURL=app.3b87b54cdc6e200fb3af.js.map