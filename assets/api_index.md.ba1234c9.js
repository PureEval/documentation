import{f as k,g as y,h as b,o as r,c as n,a,i as w,v as I,F as d,j as p,u as _,t as x,k as M,p as C,l as P,_ as j,b as S}from"./app.5dcfd437.js";const A=JSON.parse('[{"text":"Global API","anchor":"global-api","items":[{"text":"⭐Currying","link":"/api/currying","headers":[{"text":"curry()","anchor":"curry"},{"text":"uncurry()","anchor":"uncurry"}]},{"text":"⭐Transform","link":"/api/transform","headers":[{"text":"compose()","anchor":"compose"},{"text":"pipe()","anchor":"pipe"},{"text":"call()","anchor":"call"}]},{"text":"Logic","link":"/api/logic","headers":[{"text":"either()","anchor":"either"},{"text":"both()","anchor":"both"},{"text":"not()","anchor":"not"},{"text":"gt()","anchor":"gt"},{"text":"gte()","anchor":"gte"},{"text":"lt()","anchor":"lt"},{"text":"lte()","anchor":"lte"},{"text":"equal()","anchor":"equal"},{"text":"when()","anchor":"when"},{"text":"when_v()","anchor":"when_v"},{"text":"unless()","anchor":"unless"},{"text":"unless_v()","anchor":"unless_v"},{"text":"ifElse()","anchor":"ifElse"},{"text":"ifElse_v()","anchor":"ifElse_v"},{"text":"common()","anchor":"common"},{"text":"always()","anchor":"always"}]},{"text":"String","link":"/api/string","headers":[{"text":"rexMatch()","anchor":"rexMatch"},{"text":"rexReplace()","anchor":"rexReplace"},{"text":"rexText()","anchor":"rexTest"},{"text":"split()","anchor":"split"},{"text":"toLower()","anchor":"toLower"},{"text":"toUpper()","anchor":"toUpper"},{"text":"trim()","anchor":"trim"},{"text":"words()","anchor":"words"}]},{"text":"⭐StateMachine","link":"/api/stateMachine","headers":[{"text":"higherPipe()","anchor":"higherPipe"},{"text":"higherComp()","anchor":"higherCompose"},{"text":"coalgebra()","anchor":"coalgebra"},{"text":"stateMachine()","anchor":"stateMachine"}]},{"text":"Math","link":"/api/mathematics","headers":[{"text":"odd()","anchor":"odd"},{"text":"even()","anchor":"even"},{"text":"add()","anchor":"add"},{"text":"minus()","anchor":"minus"},{"text":"mul()","anchor":"mul"},{"text":"div()","anchor":"div"},{"text":"mod()","anchor":"mod"},{"text":"rema()","anchor":"rema"},{"text":"power()","anchor":"power"},{"text":"negate()","anchor":"negate"},{"text":"upper()","anchor":"upper"},{"text":"under()","anchor":"under"},{"text":"sort()","anchor":"sort"},{"text":"median()","anchor":"median"},{"text":"sum()","anchor":"sum"},{"text":"average()","anchor":"average"},{"text":"prod()","anchor":"prod"},{"text":"max()","anchor":"max"},{"text":"min()","anchor":"min"},{"text":"dec()","anchor":"dec"},{"text":"inc()","anchor":"inc"}]},{"text":"Range","link":"/api/range","headers":[{"text":"range()","anchor":"range"}]},{"text":"⭐Bind","link":"/api/bind","headers":[{"text":"_","anchor":"_"},{"text":"bind()","anchor":"bind"}]},{"text":"⭐Match","link":"/api/match","headers":[{"text":"match()","anchor":"match"}]},{"text":"List","link":"/api/list","headers":[{"text":"zipWith()","anchor":"zipWith"},{"text":"zip()","anchor":"zip"},{"text":"join()","anchor":"join"},{"text":"slice()","anchor":"slice"},{"text":"take()","anchor":"take"},{"text":"takeWhile()","anchor":"takeWhile"},{"text":"drop()","anchor":"drop"},{"text":"dropWhile()","anchor":"dropWhile"},{"text":"allCheck()","anchor":"allCheck"},{"text":"anyCheck()","anchor":"anyCheck"},{"text":"concat()","anchor":"concat"},{"text":"head()","anchor":"head"},{"text":"tail()","anchor":"tail"},{"text":"dropHead()","anchor":"dropHead"},{"text":"dropTail()","anchor":"dropTail"},{"text":"reverse()","anchor":"reverse"}]},{"text":"Object","link":"/api/object","headers":[{"text":"prop()","anchor":"prop"},{"text":"assoc()","anchor":"assoc"},{"text":"modify()","anchor":"modify"},{"text":"dissoc()","anchor":"dissoc"},{"text":"valuesIn()","anchor":"valuesIn"},{"text":"makePair()","anchor":"makePair"},{"text":"construct()","anchor":"construct"},{"text":"has()","anchor":"has"}]},{"text":"⭐Iterate","link":"/api/iterate","headers":[{"text":"iterate()","anchor":"iterate"},{"text":"map()","anchor":"map"},{"text":"flatMap()","anchor":"flatMap"},{"text":"forEach()","anchor":"forEach"},{"text":"reduce()","anchor":"reduce"},{"text":"fold()","anchor":"fold"},{"text":"scan()","anchor":"scan"}]},{"text":"filter","link":"/api/filter","headers":[{"text":"filter()","anchor":"filter"},{"text":"reject()","anchor":"reject"},{"text":"shied()","anchor":"shied"},{"text":"choose()","anchor":"choose"}]},{"text":"⭐Optics","link":"/api/optics","headers":[{"text":"Lens","anchor":"Lens"},{"text":"view","anchor":"view"},{"text":"set","anchor":"set"},{"text":"over","anchor":"over"}]},{"text":"⭐Maybe(Monad)","link":"/api/maybe","headers":[{"text":"Maybe","anchor":"maybe"},{"text":"Just()","anchor":"just"},{"text":"Nothing","anchor":"Nothing"}]}]}]'),f=h=>(C("data-v-34084fe4"),h=h(),P(),h),E={id:"api-index"},L={class:"header"},N=f(()=>a("h1",null,"API Reference",-1)),W={class:"api-filter"},R=f(()=>a("label",{for:"api-filter"},"Filter",-1)),T=["id"],z={class:"api-groups"},O=["href"],q={key:0,class:"no-match"},B=k({__name:"ApiIndex",setup(h){const s=y(""),l=i=>i.toLowerCase().replace(/-/g," "),u=b(()=>{const i=l(s.value),o=e=>l(e).includes(i);return A.map(e=>{if(o(e.text))return e;const c=e.items.map(t=>{if(o(t.text)||i.includes("ssr")&&t.text.startsWith("Server"))return t;const m=t.headers.filter(({text:g,anchor:v})=>o(g)||o(v));return m.length?{text:t.text,link:t.link,headers:m}:null}).filter(t=>t);return c.length?{text:e.text,items:c}:null}).filter(e=>e)});return(i,o)=>(r(),n("div",E,[a("div",L,[N,a("div",W,[R,w(a("input",{id:"api-filter","onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),type:"search",placeholder:"Enter keyword"},null,512),[[I,s.value]])])]),(r(!0),n(d,null,p(_(u),e=>(r(),n("div",{key:e.text,class:"api-section"},[a("h2",{id:e.anchor},x(e.text),9,T),a("div",z,[(r(!0),n(d,null,p(e.items,c=>(r(),n("div",{key:c.text,class:"api-group"},[a("h3",null,x(c.text),1),a("ul",null,[(r(!0),n(d,null,p(c.headers,t=>(r(),n("li",{key:t.anchor},[a("a",{href:c.link+".html#"+t.anchor},x(t.text),9,O)]))),128))])]))),128))])]))),128)),_(u).length?M("",!0):(r(),n("div",q,' No API matching "'+x(s.value)+'" found. ',1))]))}});const U=j(B,[["__scopeId","data-v-34084fe4"]]),F=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","layout":"page"},"headers":[],"relativePath":"api/index.md","lastUpdated":1671974123000}'),V={name:"api/index.md"},H=Object.assign(V,{setup(h){return(s,l)=>(r(),n("div",null,[S(U)]))}});export{F as __pageData,H as default};
