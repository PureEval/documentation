import{_ as g,o,c as r,a as l,b as t,w as a,d as T,e as n,r as s}from"./app.2ac3657f.js";const K=JSON.parse('{"title":"Curry","description":"","frontmatter":{},"headers":[{"level":2,"title":"curry()","slug":"curry","link":"#curry","children":[]},{"level":2,"title":"uncurry()","slug":"uncurry","link":"#uncurry","children":[]}],"relativePath":"api/curry.md","lastUpdated":1672139627000}'),f={name:"api/curry.md"},y=l("h1",{id:"curry-api",tabindex:"-1"},[T("Curry "),l("a",{class:"header-anchor",href:"#curry-api","aria-hidden":"true"},"#")],-1),_=l("h2",{id:"curry",tabindex:"-1"},[T("curry() "),l("a",{class:"header-anchor",href:"#curry","aria-hidden":"true"},"#")],-1),w=l("p",null,"将一个函数变为柯里化函数",-1),H=l("ul",null,[l("li",null,[l("strong",null,"Type")])],-1),k={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.072ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18595.8 1000","aria-hidden":"true"},C=n("",1),M=[C],x=l("ul",null,[l("li",null,[l("strong",null,"Details")])],-1),Z=l("p",null,"传入一个非柯里化函数作为参数，返回值为对应的柯里化后的函数。",-1),A=l("p",null,"柯里化后的函数一次传入一个参数或多个参数，如果没有达到原函数所需要接收的参数的量，则会返回一个函数继续接受接下来的参数。",-1),L=l("p",null,[T("显然的，非柯里化的函数必须要有与需求相符合的 "),l("code",null,"length"),T(" 属性以表明其参数数量。")],-1),b=l("p",null,"柯里化后的函数中有两个特殊属性：",-1),F={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.148ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.277ex",height:"5.428ex",role:"img",focusable:"false",viewBox:"0 -1449.5 8962.4 2399","aria-hidden":"true"},V=n("",1),E=[V],S=n("",7),j={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.072ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18595.8 1000","aria-hidden":"true"},N=n("",1),P=[N],I=n("",4);function R(q,J,$,z,G,O){const Q=s("mo"),e=s("mi"),d=s("math"),m=s("mjx-assistive-mml"),p=s("mtext"),c=s("mtd"),h=s("mtr"),i=s("mtable"),u=s("mrow");return o(),r("div",null,[y,_,w,H,l("mjx-container",k,[(o(),r("svg",D,M)),t(m,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(e,null,{default:a(()=>[T("a")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(e,null,{default:a(()=>[T("b")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(e,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("x")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("a")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("b")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("x")]),_:1})]),_:1})]),_:1})]),x,Z,A,L,b,l("mjx-container",F,[(o(),r("svg",v,E)),t(m,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,null,{default:a(()=>[T("C")]),_:1}),t(e,null,{default:a(()=>[T("u")]),_:1}),t(e,null,{default:a(()=>[T("r")]),_:1}),t(e,null,{default:a(()=>[T("r")]),_:1}),t(e,null,{default:a(()=>[T("i")]),_:1}),t(e,null,{default:a(()=>[T("e")]),_:1}),t(e,null,{default:a(()=>[T("d")]),_:1}),t(p,null,{default:a(()=>[T(" ")]),_:1}),t(u,{"data-mjx-texclass":"INNER"},{default:a(()=>[t(Q,{"data-mjx-texclass":"OPEN"},{default:a(()=>[T("{")]),_:1}),t(i,{columnalign:"left left",columnspacing:"1em",rowspacing:".2em"},{default:a(()=>[t(h,null,{default:a(()=>[t(c,null,{default:a(()=>[t(e,null,{default:a(()=>[T("l")]),_:1}),t(e,null,{default:a(()=>[T("e")]),_:1}),t(e,null,{default:a(()=>[T("n")]),_:1}),t(p,null,{default:a(()=>[T(" ")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("←")]),_:1})]),_:1})]),_:1}),t(h,null,{default:a(()=>[t(c,null,{default:a(()=>[t(e,null,{default:a(()=>[T("o")]),_:1}),t(e,null,{default:a(()=>[T("r")]),_:1}),t(e,null,{default:a(()=>[T("i")]),_:1}),t(e,null,{default:a(()=>[T("g")]),_:1}),t(e,null,{default:a(()=>[T("i")]),_:1}),t(e,null,{default:a(()=>[T("n")]),_:1}),t(p,null,{default:a(()=>[T(" ")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("←")]),_:1})]),_:1})]),_:1})]),_:1}),t(Q,{"data-mjx-texclass":"CLOSE",fence:"true",stretchy:"true",symmetric:"true"})]),_:1})]),_:1})]),_:1})]),S,l("mjx-container",j,[(o(),r("svg",B,P)),t(m,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(e,null,{default:a(()=>[T("a")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("b")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("x")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(e,null,{default:a(()=>[T("a")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(e,null,{default:a(()=>[T("b")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(e,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(e,null,{default:a(()=>[T("x")]),_:1})]),_:1})]),_:1})]),I])}const W=g(f,[["render",R]]);export{K as __pageData,W as default};
