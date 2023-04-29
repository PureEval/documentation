import{_ as c,r as l,o,c as r,a as e,b as t,w as a,d as T,e as n}from"./app.5dcfd437.js";const j=JSON.parse('{"title":"Currying","description":"","frontmatter":{},"headers":[{"level":2,"title":"curry()","slug":"curry","link":"#curry","children":[]},{"level":2,"title":"uncurry()","slug":"uncurry","link":"#uncurry","children":[]}],"relativePath":"api/currying.md","lastUpdated":1682760794000}'),m={name:"api/currying.md"},h=e("h1",{id:"curry-api",tabindex:"-1"},[T("Currying "),e("a",{class:"header-anchor",href:"#curry-api","aria-hidden":"true"},"#")],-1),i=e("p",null,"在这里要提醒您：除非特别说明，PureEval 中一切的多参函数都是柯里化的。",-1),y=e("h2",{id:"curry",tabindex:"-1"},[T("curry() "),e("a",{class:"header-anchor",href:"#curry","aria-hidden":"true"},"#")],-1),u=e("p",null,"将一个函数变为柯里化函数",-1),g=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),f={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.072ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18595.8 1000","aria-hidden":"true"},C=n("",1),D=[C],w=n("",9),H={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.072ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18595.8 1000","aria-hidden":"true"},k=n("",1),M=[k],x=n("",4);function Z(F,L,b,E,v,V){const Q=l("mo"),s=l("mi"),d=l("math"),p=l("mjx-assistive-mml");return o(),r("div",null,[h,i,y,u,g,e("mjx-container",f,[(o(),r("svg",_,D)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(s,null,{default:a(()=>[T("a")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(s,null,{default:a(()=>[T("b")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(s,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("x")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("a")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("b")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("x")]),_:1})]),_:1})]),_:1})]),w,e("mjx-container",H,[(o(),r("svg",A,M)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(s,null,{default:a(()=>[T("a")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("b")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("x")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("(")]),_:1}),t(s,null,{default:a(()=>[T("a")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(s,null,{default:a(()=>[T("b")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(".")]),_:1}),t(Q,null,{default:a(()=>[T(",")]),_:1}),t(s,null,{default:a(()=>[T("n")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T(")")]),_:1}),t(Q,{stretchy:"false"},{default:a(()=>[T("→")]),_:1}),t(s,null,{default:a(()=>[T("x")]),_:1})]),_:1})]),_:1})]),x])}const P=c(m,[["render",Z]]);export{j as __pageData,P as default};
