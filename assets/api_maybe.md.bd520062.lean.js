import{_ as c,r as p,o,c as n,a as e,b as Q,w as t,d as T,e as l}from"./app.9b2891ec.js";const c3=JSON.parse('{"title":"Maybe(Monad)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Maybe","slug":"maybe","link":"#maybe","children":[]},{"level":2,"title":"Maybe.of()","slug":"of","link":"#of","children":[]},{"level":2,"title":"Maybe.is()","slug":"is","link":"#is","children":[]},{"level":2,"title":"Maybe.isNothing()","slug":"isnothing","link":"#isnothing","children":[]},{"level":2,"title":"Maybe.map()","slug":"map","link":"#map","children":[]},{"level":2,"title":"Maybe.fold()","slug":"fold","link":"#fold","children":[]},{"level":2,"title":"Just()","slug":"just","link":"#just","children":[]},{"level":2,"title":"Nothing","slug":"nothing","link":"#nothing","children":[]}],"relativePath":"api/maybe.md","lastUpdated":1685967530000}'),u={name:"api/maybe.md"},_=l("",6),g={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.707ex",height:"2.26ex",role:"img",focusable:"false",viewBox:"0 -749.5 14898.6 999","aria-hidden":"true"},w=l("",1),y=[w],x=e("h2",{id:"of",tabindex:"-1"},[T("Maybe.of() "),e("a",{class:"header-anchor",href:"#of","aria-hidden":"true"},"#")],-1),M={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},k=l("",1),H=[k],D=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),Z={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.187ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 5828.6 899","aria-hidden":"true"},C=l("",1),v=[C],A=l("",3),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},S=l("",1),E=[S],j=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),P={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.237ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 4082.6 705","aria-hidden":"true"},N=l("",1),B=[N],J=l("",3),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},G=l("",1),$=[G],q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.443ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3732 899","aria-hidden":"true"},U=l("",1),K=[U],W=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),X={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.576ex",height:"2.751ex",role:"img",focusable:"false",viewBox:"0 -1011 7326.6 1216","aria-hidden":"true"},Q1=l("",1),t1=[Q1],T1=l("",5),a1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},e1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"31.201ex",height:"2.853ex",role:"img",focusable:"false",viewBox:"0 -1011 13790.7 1261","aria-hidden":"true"},l1=l("",1),s1=[l1],o1=l("",3),n1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.471ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3744 899","aria-hidden":"true"},r1=l("",1),i1=[r1],p1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},m1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",style:{"stroke-width":"3"}})])])],-1),c1=[m1],u1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.471ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3744 899","aria-hidden":"true"},g1=l("",1),f1=[g1],w1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},y1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.443ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3732 899","aria-hidden":"true"},x1=l("",1),M1=[x1],L1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},H1=l("",1),D1=[H1],Z1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.443ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3732 899","aria-hidden":"true"},C1=l("",1),v1=[C1],A1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.471ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3744 899","aria-hidden":"true"},F1=l("",1),S1=[F1],E1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},P1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",style:{"stroke-width":"3"}})])])],-1),I1=[P1],N1=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),B1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},J1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"42.14ex",height:"2.853ex",role:"img",focusable:"false",viewBox:"0 -1011 18625.8 1261","aria-hidden":"true"},R1=l("",1),z1=[R1],G1=l("",3),$1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},O1=l("",1),U1=[O1],K1=e("p",null,[T("实际同 "),e("a",{href:"#of"},"Maybe.of"),T("。")],-1),W1=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),X1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Y1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.187ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 5828.6 899","aria-hidden":"true"},Q3=l("",1),t3=[Q3],T3=l("",3),a3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},l3=l("",1),s3=[l3];function o3(n3,d3,r3,i3,p3,h3){const a=p("mi"),i=p("mtext"),s=p("mo"),d=p("math"),r=p("mjx-assistive-mml"),h=p("mrow"),m=p("mover");return o(),n("div",null,[_,e("mjx-container",g,[(o(),n("svg",f,y)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(a,null,{default:t(()=>[T("D")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(s,null,{default:t(()=>[T("=")]),_:1}),Q(a,null,{default:t(()=>[T("J")]),_:1}),Q(a,null,{default:t(()=>[T("u")]),_:1}),Q(a,null,{default:t(()=>[T("s")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(s,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:t(()=>[T("|")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("N")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(a,null,{default:t(()=>[T("h")]),_:1}),Q(a,null,{default:t(()=>[T("i")]),_:1}),Q(a,null,{default:t(()=>[T("n")]),_:1}),Q(a,null,{default:t(()=>[T("g")]),_:1})]),_:1})]),_:1})]),x,e("p",null,[T("将一个值提升为 "),e("mjx-container",M,[(o(),n("svg",L,H)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1})]),_:1})]),_:1})]),T(" 类型。")]),D,e("mjx-container",Z,[(o(),n("svg",b,v)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),A,e("p",null,[T("判断一个值是否为 "),e("mjx-container",V,[(o(),n("svg",F,E)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1})]),_:1})]),_:1})]),T(" 类型。")]),j,e("mjx-container",P,[(o(),n("svg",I,B)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(s,null,{default:t(()=>[T("∗")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("B")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("l")]),_:1})]),_:1})]),_:1})]),J,e("p",null,[T("判断该 "),e("mjx-container",R,[(o(),n("svg",z,$)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1})]),_:1})]),_:1})]),T(" 是否为 "),e("mjx-container",q,[(o(),n("svg",O,K)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("N")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(a,null,{default:t(()=>[T("h")]),_:1}),Q(a,null,{default:t(()=>[T("i")]),_:1}),Q(a,null,{default:t(()=>[T("n")]),_:1}),Q(a,null,{default:t(()=>[T("g")]),_:1})]),_:1})]),_:1})]),T("。")]),W,e("mjx-container",X,[(o(),n("svg",Y,t1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(m,null,{default:t(()=>[Q(h,null,{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1}),Q(s,{accent:"true"},{default:t(()=>[T("―")]),_:1})]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("B")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("l")]),_:1})]),_:1})]),_:1})]),T1,e("mjx-container",a1,[(o(),n("svg",e1,s1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(m,null,{default:t(()=>[Q(h,null,{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1}),Q(s,{accent:"true"},{default:t(()=>[T("―")]),_:1})]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("(")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T(")")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1})]),_:1})]),_:1})]),o1,e("p",null,[T("将函数应用到 "),e("mjx-container",n1,[(o(),n("svg",d1,i1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),T(" 中的 "),e("mjx-container",p1,[(o(),n("svg",h1,c1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),T("。")]),e("p",null,[T("传入两个单元函数参数，分别代表 "),e("mjx-container",u1,[(o(),n("svg",_1,f1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),T(" 为 "),e("mjx-container",w1,[(o(),n("svg",y1,M1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("N")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(a,null,{default:t(()=>[T("h")]),_:1}),Q(a,null,{default:t(()=>[T("i")]),_:1}),Q(a,null,{default:t(()=>[T("n")]),_:1}),Q(a,null,{default:t(()=>[T("g")]),_:1})]),_:1})]),_:1})]),T(" 与 "),e("mjx-container",L1,[(o(),n("svg",k1,D1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1})]),_:1})]),_:1})]),T(" 不为 "),e("mjx-container",Z1,[(o(),n("svg",b1,v1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("N")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(a,null,{default:t(()=>[T("h")]),_:1}),Q(a,null,{default:t(()=>[T("i")]),_:1}),Q(a,null,{default:t(()=>[T("n")]),_:1}),Q(a,null,{default:t(()=>[T("g")]),_:1})]),_:1})]),_:1})]),T(" 的处理情况。")]),e("p",null,[T("当匹配到 "),e("mjx-container",A1,[(o(),n("svg",V1,S1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),T(" 时，对应函数将会应用到 "),e("mjx-container",E1,[(o(),n("svg",j1,I1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),T(" 上，其函数值将作为返回值。")]),N1,e("mjx-container",B1,[(o(),n("svg",J1,z1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(m,null,{default:t(()=>[Q(h,null,{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1}),Q(s,{accent:"true"},{default:t(()=>[T("―")]),_:1})]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("(")]),_:1}),Q(a,null,{default:t(()=>[T("N")]),_:1}),Q(a,null,{default:t(()=>[T("o")]),_:1}),Q(a,null,{default:t(()=>[T("t")]),_:1}),Q(a,null,{default:t(()=>[T("h")]),_:1}),Q(a,null,{default:t(()=>[T("i")]),_:1}),Q(a,null,{default:t(()=>[T("n")]),_:1}),Q(a,null,{default:t(()=>[T("g")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T(")")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("(")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T(")")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1})]),_:1})]),_:1})]),G1,e("p",null,[e("mjx-container",$1,[(o(),n("svg",q1,U1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1})]),_:1})]),_:1})]),T(" 类型的构造函数。")]),K1,W1,e("mjx-container",X1,[(o(),n("svg",Y1,t3)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:t(()=>[Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(s,{stretchy:"false"},{default:t(()=>[T("→")]),_:1}),Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1}),Q(i,null,{default:t(()=>[T(" ")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1})]),_:1})]),_:1})]),T3,e("p",null,[e("mjx-container",a3,[(o(),n("svg",e3,s3)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[Q(a,null,{default:t(()=>[T("M")]),_:1}),Q(a,null,{default:t(()=>[T("a")]),_:1}),Q(a,null,{default:t(()=>[T("y")]),_:1}),Q(a,null,{default:t(()=>[T("b")]),_:1}),Q(a,null,{default:t(()=>[T("e")]),_:1})]),_:1})]),_:1})]),T(" 类型的构造函数。")])])}const u3=c(u,[["render",o3]]);export{c3 as __pageData,u3 as default};
