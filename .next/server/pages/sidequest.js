(()=>{var e={};e.id=571,e.ids=[571,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2800:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>O,default:()=>k,getServerSideProps:()=>G,getStaticPaths:()=>E,getStaticProps:()=>w,reportWebVitals:()=>$,routeModule:()=>N,unstable_getServerProps:()=>D,unstable_getServerSideProps:()=>I,unstable_getStaticParams:()=>R,unstable_getStaticPaths:()=>C,unstable_getStaticProps:()=>M});var s={};r.r(s),r.d(s,{default:()=>y,getStaticProps:()=>q});var i=r(7093),o=r(5244),n=r(1323),a=r(2899),d=r.n(a),l=r(3414),c=r(997),p=r(6689),u=r(7147),m=r.n(u),g=r(1423),P=r.n(g);let x=require("styled-components");var f=r.n(x);let h=f().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,b=f().div`
  background-color: ${e=>e.completed?"#d4edda":"#f8d7da"};
  border: 2px solid ${e=>e.completed?"#28a745":"#dc3545"};
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`,S=f().h3`
  color: ${e=>e.completed?"#155724":"#721c24"};
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,v=f().p`
  color: ${e=>e.completed?"#155724":"#721c24"};
  margin-bottom: 1rem;
`,j=f().label`
  display: flex;
  align-items: center;
  cursor: pointer;
`,_=f().div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1rem;
`,A=f().div`
  width: ${e=>e.completed?"100%":"0%"};
  height: 10px;
  background-color: #28a745;
  transition: width 0.5s ease-in-out;
`;async function q(){let e=P().join(process.cwd(),"sidequests","sidequests.json");return{props:{sidequestsData:JSON.parse(m().readFileSync(e,"utf8"))}}}let y=({sidequestsData:e})=>{let[t,r]=(0,p.useState)(e),s=e=>{r(t.map(t=>t.id===e?{...t,completed:!t.completed}:t))};return(0,c.jsxs)(h,{children:[c.jsx("h1",{children:"Your Sidequests"}),t.map(e=>(0,c.jsxs)(b,{completed:e.completed,children:[c.jsx(S,{completed:e.completed,children:e.title}),c.jsx(v,{children:e.completed?"Completed!":"Not yet completed."}),(0,c.jsxs)(j,{children:[c.jsx("input",{type:"checkbox",checked:e.completed,onChange:()=>s(e.id)}),c.jsx("span",{style:{marginLeft:"10px"},children:e.completed?"Mark as incomplete":"Mark as complete"})]}),c.jsx(_,{children:c.jsx(A,{completed:e.completed})})]},e.id))]})},k=(0,n.l)(s,"default"),w=(0,n.l)(s,"getStaticProps"),E=(0,n.l)(s,"getStaticPaths"),G=(0,n.l)(s,"getServerSideProps"),O=(0,n.l)(s,"config"),$=(0,n.l)(s,"reportWebVitals"),M=(0,n.l)(s,"unstable_getStaticProps"),C=(0,n.l)(s,"unstable_getStaticPaths"),R=(0,n.l)(s,"unstable_getStaticParams"),D=(0,n.l)(s,"unstable_getServerProps"),I=(0,n.l)(s,"unstable_getServerSideProps"),N=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/sidequest",pathname:"/sidequest",bundlePath:"",filename:""},components:{App:l.default,Document:d()},userland:s})},3414:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(997);r(6764);let i=({Component:e,pageProps:t})=>s.jsx(e,{...t})},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},1423:e=>{"use strict";e.exports=require("path")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7147:e=>{"use strict";e.exports=require("fs")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[899],()=>r(2800));module.exports=s})();