import{D as se,S as J,i as Q,s as W,e as g,k as C,E as T,c as b,a as m,d as o,n as H,F as U,G as ae,b as s,f as L,H as _,I as P,J as R,A as X,t as S,g as O,K as Y,L as B,M as le,N as re,O as ie,x as N,u as V,j as oe,m as ce,o as ue,w as ne,v as fe,P as ve,r as _e}from"../chunks/vendor-d0081ea9.js";import{i as F,a as G,u as x}from"../chunks/auth-968b1469.js";const he=()=>{const n=se("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},pe={subscribe(n){return he().page.subscribe(n)}};var de="/_app/assets/svelte-logo-87df40b8.svg";function me(n){let e,r,t,l,i;return{c(){e=g("li"),r=g("a"),t=S("Log In"),this.h()},l(c){e=b(c,"LI",{class:!0});var f=m(e);r=b(f,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var h=m(r);t=O(h,"Log In"),h.forEach(o),f.forEach(o),this.h()},h(){s(r,"href","/#"),s(r,"sveltekit:prefetch",""),s(r,"class","svelte-t2wq17"),s(e,"class","svelte-t2wq17")},m(c,f){L(c,e,f),_(e,r),_(r,t),l||(i=Y(r,"click",n[2]),l=!0)},p:P,d(c){c&&o(e),l=!1,i()}}}function ge(n){let e,r,t,l,i,c,f,h,w,E,k,v,a,p,I,q,M;return{c(){e=g("li"),r=g("a"),t=S("Home"),l=C(),i=g("li"),c=g("a"),f=S("About"),h=C(),w=g("li"),E=g("a"),k=S("Todos"),v=C(),a=g("li"),p=g("a"),I=S("Log Out"),this.h()},l(u){e=b(u,"LI",{class:!0});var d=m(e);r=b(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var A=m(r);t=O(A,"Home"),A.forEach(o),d.forEach(o),l=H(u),i=b(u,"LI",{class:!0});var $=m(i);c=b($,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var D=m(c);f=O(D,"About"),D.forEach(o),$.forEach(o),h=H(u),w=b(u,"LI",{class:!0});var K=m(w);E=b(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var y=m(E);k=O(y,"Todos"),y.forEach(o),K.forEach(o),v=H(u),a=b(u,"LI",{class:!0});var j=m(a);p=b(j,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var z=m(p);I=O(z,"Log Out"),z.forEach(o),j.forEach(o),this.h()},h(){s(r,"sveltekit:prefetch",""),s(r,"href","/"),s(r,"class","svelte-t2wq17"),s(e,"class","svelte-t2wq17"),B(e,"active",n[1].path==="/"),s(c,"sveltekit:prefetch",""),s(c,"href","/about"),s(c,"class","svelte-t2wq17"),s(i,"class","svelte-t2wq17"),B(i,"active",n[1].path==="/about"),s(E,"sveltekit:prefetch",""),s(E,"href","/todos"),s(E,"class","svelte-t2wq17"),s(w,"class","svelte-t2wq17"),B(w,"active",n[1].path==="/todos"),s(p,"href","/#"),s(p,"sveltekit:prefetch",""),s(p,"class","svelte-t2wq17"),s(a,"class","svelte-t2wq17")},m(u,d){L(u,e,d),_(e,r),_(r,t),L(u,l,d),L(u,i,d),_(i,c),_(c,f),L(u,h,d),L(u,w,d),_(w,E),_(E,k),L(u,v,d),L(u,a,d),_(a,p),_(p,I),q||(M=Y(p,"click",n[3]),q=!0)},p(u,d){d&2&&B(e,"active",u[1].path==="/"),d&2&&B(i,"active",u[1].path==="/about"),d&2&&B(w,"active",u[1].path==="/todos")},d(u){u&&o(e),u&&o(l),u&&o(i),u&&o(h),u&&o(w),u&&o(v),u&&o(a),q=!1,M()}}}function be(n){let e,r,t,l,i,c,f,h,w,E,k,v,a,p,I,q;function M(A,$){return A[0]?ge:me}let u=M(n),d=u(n);return{c(){e=g("header"),r=g("div"),t=g("a"),l=g("img"),c=C(),f=g("nav"),h=T("svg"),w=T("path"),E=C(),k=g("ul"),d.c(),v=C(),a=T("svg"),p=T("path"),I=C(),q=g("div"),this.h()},l(A){e=b(A,"HEADER",{class:!0});var $=m(e);r=b($,"DIV",{class:!0});var D=m(r);t=b(D,"A",{href:!0,class:!0});var K=m(t);l=b(K,"IMG",{src:!0,alt:!0,class:!0}),K.forEach(o),D.forEach(o),c=H($),f=b($,"NAV",{class:!0});var y=m(f);h=U(y,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var j=m(h);w=U(j,"path",{d:!0,class:!0}),m(w).forEach(o),j.forEach(o),E=H(y),k=b(y,"UL",{class:!0});var z=m(k);d.l(z),z.forEach(o),v=H(y),a=U(y,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Z=m(a);p=U(Z,"path",{d:!0,class:!0}),m(p).forEach(o),Z.forEach(o),y.forEach(o),I=H($),q=b($,"DIV",{class:!0});var te=m(q);te.forEach(o),$.forEach(o),this.h()},h(){ae(l.src,i=de)||s(l,"src",i),s(l,"alt","SvelteKit"),s(l,"class","svelte-t2wq17"),s(t,"href","https://kit.svelte.dev"),s(t,"class","svelte-t2wq17"),s(r,"class","corner svelte-t2wq17"),s(w,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),s(w,"class","svelte-t2wq17"),s(h,"viewBox","0 0 2 3"),s(h,"aria-hidden","true"),s(h,"class","svelte-t2wq17"),s(k,"class","svelte-t2wq17"),s(p,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),s(p,"class","svelte-t2wq17"),s(a,"viewBox","0 0 2 3"),s(a,"aria-hidden","true"),s(a,"class","svelte-t2wq17"),s(f,"class","svelte-t2wq17"),s(q,"class","corner svelte-t2wq17"),s(e,"class","svelte-t2wq17")},m(A,$){L(A,e,$),_(e,r),_(r,t),_(t,l),_(e,c),_(e,f),_(f,h),_(h,w),_(f,E),_(f,k),d.m(k,null),_(f,v),_(f,a),_(a,p),_(e,I),_(e,q)},p(A,[$]){u===(u=M(A))&&d?d.p(A,$):(d.d(1),d=u(A),d&&(d.c(),d.m(k,null)))},i:P,o:P,d(A){A&&o(e),d.d()}}}function we(n,e,r){let t,l;R(n,F,h=>r(0,t=h)),R(n,pe,h=>r(1,l=h));let i;X(async()=>{i=await G.createClient(),F.set(await i.isAuthenticated()),x.set(await i.getUser())});function c(){G.login(i,null)}function f(){G.logout(i)}return[t,l,c,f]}class Ee extends J{constructor(e){super();Q(this,e,we,be,W,{})}}function ee(n){let e;const r=n[2].default,t=ve(r,n,n[1],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&2)&&le(t,r,l,l[1],e?ie(r,l[1],i,null):re(l[1]),null)},i(l){e||(N(t,l),e=!0)},o(l){V(t,l),e=!1},d(l){t&&t.d(l)}}}function ke(n){let e,r,t,l,i,c,f,h,w,E,k;e=new Ee({});let v=n[0]&&ee(n);return{c(){oe(e.$$.fragment),r=C(),t=g("main"),v&&v.c(),l=C(),i=g("footer"),c=g("p"),f=S("visit "),h=g("a"),w=S("kit.svelte.dev"),E=S(" to learn SvelteKit"),this.h()},l(a){ce(e.$$.fragment,a),r=H(a),t=b(a,"MAIN",{class:!0});var p=m(t);v&&v.l(p),p.forEach(o),l=H(a),i=b(a,"FOOTER",{class:!0});var I=m(i);c=b(I,"P",{});var q=m(c);f=O(q,"visit "),h=b(q,"A",{href:!0,class:!0});var M=m(h);w=O(M,"kit.svelte.dev"),M.forEach(o),E=O(q," to learn SvelteKit"),q.forEach(o),I.forEach(o),this.h()},h(){s(t,"class","svelte-1izrdc8"),s(h,"href","https://kit.svelte.dev"),s(h,"class","svelte-1izrdc8"),s(i,"class","svelte-1izrdc8")},m(a,p){ue(e,a,p),L(a,r,p),L(a,t,p),v&&v.m(t,null),L(a,l,p),L(a,i,p),_(i,c),_(c,f),_(c,h),_(h,w),_(c,E),k=!0},p(a,[p]){a[0]?v?(v.p(a,p),p&1&&N(v,1)):(v=ee(a),v.c(),N(v,1),v.m(t,null)):v&&(_e(),V(v,1,1,()=>{v=null}),ne())},i(a){k||(N(e.$$.fragment,a),N(v),k=!0)},o(a){V(e.$$.fragment,a),V(v),k=!1},d(a){fe(e,a),a&&o(r),a&&o(t),v&&v.d(),a&&o(l),a&&o(i)}}}function qe(n,e,r){let t;R(n,F,f=>r(0,t=f));let{$$slots:l={},$$scope:i}=e,c;return X(async()=>{c=await G.createClient(),F.set(await c.isAuthenticated()),x.set(await c.getUser())}),n.$$set=f=>{"$$scope"in f&&r(1,i=f.$$scope)},[t,i,l]}class Le extends J{constructor(e){super();Q(this,e,qe,ke,W,{})}}export{Le as default};
