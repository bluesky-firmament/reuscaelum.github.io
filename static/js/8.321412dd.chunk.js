(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{161:function(e,n,t){"use strict";t.r(n);var a=t(105),c=t(107),i=t(106),s=t(111),r=t(110),b=t(112),j=t(56),d=t(0),l=t(162),o=t(132),m=t.n(o),O=function(e){var n=Object(d.useState)({}),t=Object(j.a)(n,2),a=t[0],c=t[1],i=Object(d.useState)({}),s=Object(j.a)(i,2),o=s[0],O=s[1],h=Object(d.useState)(!1),p=Object(j.a)(h,2),x=p[0],u=p[1];Object(d.useEffect)((function(){0===Object.keys(o).length&&x&&(c(""),l.a.success({message:"Success",description:"Your message has been sent!"}))}),[o,x]);return{handleChange:function(e){e.persist(),c((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(r.a)({},e.target.name,e.target.value))})),O((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(r.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),O(e(a));3===Object.keys(a).length&&m.a.post("",Object(b.a)({},a)).then((function(){u(!0)}))},values:a,errors:o}};function h(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var p,x,u,g,f,v,y,w,S,C,k,z,E=t(55),Y=t(4),q=t(5),F=Object(q.b)("p")(p||(p=Object(Y.a)(["\n  margin-top: 1.5rem;\n"]))),J=Object(q.b)("div")(x||(x=Object(Y.a)(["\n  position: relative;\n  max-width: 700px;\n"]))),M=Object(q.b)("div")(u||(u=Object(Y.a)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),N=t(1),D=Object(i.a)()((function(e){var n=e.title,t=e.content,a=e.t;return Object(N.jsxs)(J,{children:[Object(N.jsx)("h6",{children:a(n)}),Object(N.jsx)(M,{children:Object(N.jsx)(F,{children:a(t)})})]})})),A=Object(q.b)("div")(g||(g=Object(Y.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),B=Object(q.b)("input")(f||(f=Object(Y.a)(["\n  font-size: 0.875rem;\n"]))),G=Object(q.b)("div")(v||(v=Object(Y.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),H=Object(q.b)("textarea")(y||(y=Object(Y.a)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),I=Object(q.b)("label")(w||(w=Object(Y.a)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),K=Object(i.a)()((function(e){var n=e.name,t=e.placeholder,a=e.onChange,c=e.t;return Object(N.jsxs)(A,{children:[Object(N.jsx)(I,{htmlFor:n,children:c(n)}),Object(N.jsx)(B,{placeholder:c(t),name:n,id:n,onChange:a})]})})),L=Object(i.a)()((function(e){var n=e.name,t=e.placeholder,a=e.onChange,c=e.t;return Object(N.jsxs)(G,{children:[Object(N.jsx)(I,{htmlFor:n,children:c(n)}),Object(N.jsx)(H,{placeholder:c(t),id:n,name:n,onChange:a})]})})),P=Object(q.b)("div")(S||(S=Object(Y.a)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),Q=Object(q.b)("form")(C||(C=Object(Y.a)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),R=Object(q.b)("span")(k||(k=Object(Y.a)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),T=Object(q.b)("div")(z||(z=Object(Y.a)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"])));n.default=Object(i.a)()((function(e){var n=e.title,t=e.content,i=e.id,r=e.t,b=O(h),j=b.values,d=b.errors,l=b.handleChange,o=b.handleSubmit,m=function(e){var n=e.type,t=d[n];return Object(N.jsx)(s.c,{direction:"left",children:Object(N.jsx)(R,{erros:d[n],children:t})})};return Object(N.jsx)(P,{id:i,children:Object(N.jsxs)(a.a,{justify:"space-between",align:"middle",children:[Object(N.jsx)(c.a,{lg:12,md:11,sm:24,xs:24,children:Object(N.jsx)(s.b,{direction:"left",children:Object(N.jsx)(D,{title:n,content:t})})}),Object(N.jsx)(c.a,{lg:12,md:12,sm:24,xs:24,children:Object(N.jsx)(s.b,{direction:"right",children:Object(N.jsxs)(Q,{autoComplete:"off",onSubmit:o,children:[Object(N.jsxs)(c.a,{span:24,children:[Object(N.jsx)(K,{type:"text",name:"name",placeholder:"Your Name",value:j.name||"",onChange:l}),Object(N.jsx)(m,{type:"name"})]}),Object(N.jsxs)(c.a,{span:24,children:[Object(N.jsx)(K,{type:"text",name:"email",placeholder:"Your Email",value:j.email||"",onChange:l}),Object(N.jsx)(m,{type:"email"})]}),Object(N.jsxs)(c.a,{span:24,children:[Object(N.jsx)(L,{placeholder:"Your Message",value:j.message||"",name:"message",onChange:l}),Object(N.jsx)(m,{type:"message"})]}),Object(N.jsx)(T,{children:Object(N.jsx)(E.a,{name:"submit",children:r("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=8.321412dd.chunk.js.map