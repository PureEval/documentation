import{f as k,g as w,h as I,o as a,c as n,a as r,i as A,v as S,j as f,F as p,k as u,u as v,t as h,p as b,l as E,_ as N,b as P}from"./app.2ac3657f.js";const L=JSON.parse('[{"text":"Global API","anchor":"global-api","items":[{"text":"Currying","link":"/api/currying","headers":[{"text":"curry()","anchor":"curry"},{"text":"uncurry()","anchor":"uncurry"}]},{"text":"Transform","link":"/api/transform","headers":[{"text":"compose()","anchor":"compose"},{"text":"pipe()","anchor":"pipe"},{"text":"call()","anchor":"call"}]},{"text":"Logic","link":"/api/logic","headers":[{"text":"either()","anchor":"either"},{"text":"both()","anchor":"both"},{"text":"gt()","anchor":"gt"},{"text":"gte()","anchor":"gte"},{"text":"lt()","anchor":"lt"},{"text":"lte()","anchor":"lte"},{"text":"equal()","anchor":"equal"},{"text":"when()","anchor":"when"},{"text":"when_v()","anchor":"when_v"},{"text":"unless()","anchor":"unless"},{"text":"unless_v()","anchor":"unless_v"},{"text":"ifElse()","anchor":"ifElse"},{"text":"ifElse_v()","anchor":"ifElse_v"}]},{"text":"String","link":"/api/string","headers":[{"text":"rexMatch()","anchor":"rexMatch"},{"text":"rexReplace()","anchor":"rexReplace"},{"text":"rexText()","anchor":"rexTest"},{"text":"split()","anchor":"split"},{"text":"toLower()","anchor":"toLower"},{"text":"toUpper()","anchor":"toUpper"},{"text":"trim()","anchor":"trim"},{"text":"words()","anchor":"words"}]}]}]'),m=c=>(b("data-v-ffef465d"),c=c(),E(),c),R={id:"api-index"},q={class:"header"},C=m(()=>r("h1",null,"API Reference",-1)),T={class:"api-filter"},U=m(()=>r("label",{for:"api-filter"},"Filter",-1)),V=["id"],B={class:"api-groups"},D=["href"],F={key:1,class:"no-match"},M=k({__name:"ApiIndex",setup(c){const l=w(""),d=i=>i.toLowerCase().replace(/-/g," "),x=I(()=>{const i=d(l.value),s=e=>d(e).includes(i);return L.map(e=>{if(s(e.text))return e;const o=e.items.map(t=>{if(s(t.text)||i.includes("ssr")&&t.text.startsWith("Server"))return t;const _=t.headers.filter(({text:g,anchor:y})=>s(g)||s(y));return _.length?{text:t.text,link:t.link,headers:_}:null}).filter(t=>t);return o.length?{text:e.text,items:o}:null}).filter(e=>e)});return(i,s)=>(a(),n("div",R,[r("div",q,[C,r("div",T,[U,A(r("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e)},null,512),[[S,l.value]])])]),f("",!0),(a(!0),n(p,null,u(v(x),e=>(a(),n("div",{key:e.text,class:"api-section"},[r("h2",{id:e.anchor},h(e.text),9,V),r("div",B,[(a(!0),n(p,null,u(e.items,o=>(a(),n("div",{key:o.text,class:"api-group"},[r("h3",null,h(o.text),1),r("ul",null,[(a(!0),n(p,null,u(o.headers,t=>(a(),n("li",{key:t.anchor},[r("a",{href:o.link+".html#"+t.anchor},h(t.text),9,D)]))),128))])]))),128))])]))),128)),v(x).length?f("",!0):(a(),n("div",F,' No API matching "'+h(l.value)+'" found. ',1))]))}});const O=N(M,[["__scopeId","data-v-ffef465d"]]),J=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","layout":"page"},"headers":[],"relativePath":"api/index.md","lastUpdated":1671974123000}'),j={name:"api/index.md"},z=Object.assign(j,{setup(c){return(l,d)=>(a(),n("div",null,[P(O)]))}});export{J as __pageData,z as default};
