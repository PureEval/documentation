import{_ as c,C as Q,o,c as r,k as e,H as a,w as t,a as s,Q as n}from"./chunks/framework.2005b65d.js";const S=JSON.parse('{"title":"Currying","description":"","frontmatter":{},"headers":[],"relativePath":"cn/api/currying.md","filePath":"cn/api/currying.md","lastUpdated":1695572245000}'),m={name:"cn/api/currying.md"},h=e("h1",{id:"curry-api",tabindex:"-1"},[s("Currying "),e("a",{class:"header-anchor",href:"#curry-api","aria-label":'Permalink to "Currying {#curry-api}"'},"​")],-1),i=e("p",null,"在这里要提醒您：除非特别说明，PureEval 中一切的多参函数都是柯里化的。",-1),y=e("h2",{id:"curry",tabindex:"-1"},[s("curry() "),e("a",{class:"header-anchor",href:"#curry","aria-label":'Permalink to "curry() {#curry}"'},"​")],-1),u=e("p",null,"将一个函数变为柯里化函数",-1),g=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),f={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.072ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18595.8 1000","aria-hidden":"true"},E=n("",1),w=[E],H=n("",9),k={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.072ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18595.8 1000","aria-hidden":"true"},x=n("",1),Z=[x],b=n("",4);function L(F,C,D,v,A,V){const l=Q("mo"),T=Q("mi"),p=Q("math"),d=Q("mjx-assistive-mml");return o(),r("div",null,[h,i,y,u,g,e("mjx-container",f,[(o(),r("svg",_,w)),a(d,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[a(l,{stretchy:"false"},{default:t(()=>[s("(")]),_:1}),a(l,{stretchy:"false"},{default:t(()=>[s("(")]),_:1}),a(T,null,{default:t(()=>[s("a")]),_:1}),a(l,null,{default:t(()=>[s(",")]),_:1}),a(T,null,{default:t(()=>[s("b")]),_:1}),a(l,null,{default:t(()=>[s(",")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(",")]),_:1}),a(T,null,{default:t(()=>[s("n")]),_:1}),a(l,{stretchy:"false"},{default:t(()=>[s(")")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("x")]),_:1}),a(l,{stretchy:"false"},{default:t(()=>[s(")")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("a")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("b")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("n")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("x")]),_:1})]),_:1})]),_:1})]),H,e("mjx-container",k,[(o(),r("svg",M,Z)),a(d,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[a(l,{stretchy:"false"},{default:t(()=>[s("(")]),_:1}),a(T,null,{default:t(()=>[s("a")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("b")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("n")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("x")]),_:1}),a(l,{stretchy:"false"},{default:t(()=>[s(")")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(l,{stretchy:"false"},{default:t(()=>[s("(")]),_:1}),a(T,null,{default:t(()=>[s("a")]),_:1}),a(l,null,{default:t(()=>[s(",")]),_:1}),a(T,null,{default:t(()=>[s("b")]),_:1}),a(l,null,{default:t(()=>[s(",")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(".")]),_:1}),a(l,null,{default:t(()=>[s(",")]),_:1}),a(T,null,{default:t(()=>[s("n")]),_:1}),a(l,{stretchy:"false"},{default:t(()=>[s(")")]),_:1}),a(l,{accent:"false",stretchy:"false"},{default:t(()=>[s("→")]),_:1}),a(T,null,{default:t(()=>[s("x")]),_:1})]),_:1})]),_:1})]),b])}const P=c(m,[["render",L]]);export{S as __pageData,P as default};