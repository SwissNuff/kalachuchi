var ze=Object.defineProperty;var Ye=(t,e,s)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ue=(t,e,s)=>(Ye(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();function H(){}function Ie(t,e){for(const s in e)t[s]=e[s];return t}function Ee(t){return t()}function ge(){return Object.create(null)}function te(t){t.forEach(Ee)}function He(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Re(t){return Object.keys(t).length===0}function B(t){return t??""}function l(t,e){t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t){return document.createElement(t)}function Fe(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function f(){return V(" ")}function Q(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function d(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function ve(t,e){for(const s in e)d(t,s,e[s])}function Be(t){return Array.from(t.childNodes)}function je(t,e){e=""+e,t.data!==e&&(t.data=e)}function We(t,e,s,n){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}let me;function ae(t){me=t}const ie=[],be=[];let le=[];const ye=[],Ue=Promise.resolve();let he=!1;function Ke(){he||(he=!0,Ue.then(qe))}function pe(t){le.push(t)}const fe=new Set;let ne=0;function qe(){if(ne!==0)return;const t=me;do{try{for(;ne<ie.length;){const e=ie[ne];ne++,ae(e),Ve(e.$$)}}catch(e){throw ie.length=0,ne=0,e}for(ae(null),ie.length=0,ne=0;be.length;)be.pop()();for(let e=0;e<le.length;e+=1){const s=le[e];fe.has(s)||(fe.add(s),s())}le.length=0}while(ie.length);for(;ye.length;)ye.pop()();he=!1,fe.clear(),ae(t)}function Ve(t){if(t.fragment!==null){t.update(),te(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}function Ge(t){const e=[],s=[];le.forEach(n=>t.indexOf(n)===-1?e.push(n):s.push(n)),s.forEach(n=>n()),le=e}const de=new Set;let ee;function we(){ee={r:0,c:[],p:ee}}function xe(){ee.r||te(ee.c),ee=ee.p}function D(t,e){t&&t.i&&(de.delete(t),t.i(e))}function R(t,e,s,n){if(t&&t.o){if(de.has(t))return;de.add(t),ee.c.push(()=>{de.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}else n&&n()}function Je(t,e){const s={},n={},a={$$scope:1};let i=t.length;for(;i--;){const u=t[i],m=e[i];if(m){for(const o in u)o in m||(n[o]=1);for(const o in m)a[o]||(s[o]=m[o],a[o]=1);t[i]=m}else for(const o in u)a[o]=1}for(const u in n)u in s||(s[u]=void 0);return s}function K(t){t&&t.c()}function j(t,e,s){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,s),pe(()=>{const i=t.$$.on_mount.map(Ee).filter(He);t.$$.on_destroy?t.$$.on_destroy.push(...i):te(i),t.$$.on_mount=[]}),a.forEach(pe)}function W(t,e){const s=t.$$;s.fragment!==null&&(Ge(s.after_update),te(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Xe(t,e){t.$$.dirty[0]===-1&&(ie.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,s,n,a,i,u=null,m=[-1]){const o=me;ae(t);const c=t.$$={fragment:null,ctx:[],props:i,update:H,not_equal:a,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ge(),dirty:m,skip_bound:!1,root:e.target||o.$$.root};u&&u(c.root);let k=!1;if(c.ctx=s?s(t,e.props||{},(g,A,...v)=>{const y=v.length?v[0]:A;return c.ctx&&a(c.ctx[g],c.ctx[g]=y)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](y),k&&Xe(t,g)),A}):[],c.update(),k=!0,te(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const g=Be(e.target);c.fragment&&c.fragment.l(g),g.forEach(h)}else c.fragment&&c.fragment.c();e.intro&&D(t.$$.fragment),j(t,e.target,e.anchor),qe()}ae(o)}class X{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){W(this,1),this.$destroy=H}$on(e,s){if(!He(s))return H;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const a=n.indexOf(s);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ze);function Qe(t){let e;return{c(){e=r("nav"),e.innerHTML='<div class="flex justify-between"><div><span class="font-semibold flex items-center">Kalachuchi</span></div> <div class="flex items-center space-x-7"><a href="#" class="underline">Home</a> <a href="#" class="underline">Background</a> <a href="#" class="underline">Data</a> <a href="#" class="underline">Methodology</a> <a href="#" class="underline">Results</a> <a href="#" class="underline">Team</a></div></div>',d(e,"class","h-16 items-center rounded-lg bg-white shadow-sm px-8 mx-6 pt-5 pb-3 px-2")},m(s,n){p(s,e,n)},p:H,i:H,o:H,d(s){s&&h(e)}}}class et extends X{constructor(e){super(),J(this,e,null,Qe,G,{})}}function tt(t){let e,s,n=[{width:t[1]},{height:t[1]},{viewBox:t[2]},{style:s=t[3]?"color: "+t[3]+";":""},{"stroke-width":"0"},{class:t[4]},t[0].a,t[6],{xmlns:"http://www.w3.org/2000/svg"}],a={};for(let i=0;i<n.length;i+=1)a=Ie(a,n[i]);return{c(){e=Fe("svg"),ve(e,a)},m(i,u){p(i,e,u),e.innerHTML=t[5]},p(i,[u]){u&32&&(e.innerHTML=i[5]),ve(e,a=Je(n,[u&2&&{width:i[1]},u&2&&{height:i[1]},u&4&&{viewBox:i[2]},u&8&&s!==(s=i[3]?"color: "+i[3]+";":"")&&{style:s},{"stroke-width":"0"},u&16&&{class:i[4]},u&1&&i[0].a,u&64&&i[6],{xmlns:"http://www.w3.org/2000/svg"}]))},i:H,o:H,d(i){i&&h(e)}}}function st(t,e,s){let{src:n}=e,{size:a="1em"}=e,{viewBox:i=void 0}=e,{color:u="currentColor"}=e,{title:m=void 0}=e,{className:o=""}=e,c,k={};return t.$$set=g=>{"src"in g&&s(0,n=g.src),"size"in g&&s(1,a=g.size),"viewBox"in g&&s(2,i=g.viewBox),"color"in g&&s(3,u=g.color),"title"in g&&s(7,m=g.title),"className"in g&&s(4,o=g.className)},t.$$.update=()=>{t.$$.dirty&9&&(s(6,k={}),u&&(n.a.stroke!=="none"&&s(6,k.stroke="currentColor",k),n.a.fill!=="none"&&s(6,k.fill="currentColor",k))),t.$$.dirty&129&&s(5,c=(m?`<title>${m}</title>`:"")+n.c)},[n,a,i,u,o,c,k,m]}class re extends X{constructor(e){super(),J(this,e,st,tt,G,{src:0,size:1,viewBox:2,color:3,title:7,className:4})}}const _e={a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>'},nt={a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"></path>'};function ke(t){let e;return{c(){e=V(`Gender-based violence is a critical issue that affects communities\r
      worldwide, and social media platforms often become spaces where these\r
      experiences are shared. Our project focuses on analyzing narratives around\r
      gender-based violence within Filipino Reddit communities. By examining\r
      these discussions, we aim to identify patterns and insights that could\r
      inform better responses and preventative measures.`)},m(s,n){p(s,e,n)},d(s){s&&h(e)}}}function $e(t){let e;return{c(){e=V(`Gender-based violence is a pervasive and distressing issue that affects\r
      individuals across the globe. In the digital age, social media platforms\r
      have become pivotal spaces where people share their experiences and seek\r
      support. This project specifically examines narratives of gender-based\r
      violence within Filipino Reddit communities, aiming to uncover underlying\r
      patterns and trends that could inform more effective responses and\r
      prevention strategies.`)},m(s,n){p(s,e,n)},d(s){s&&h(e)}}}function Te(t){let e;return{c(){e=V(`We hypothesize that posts about gender-based violence show significant\r
      variations in engagement and content type depending on the demographic and\r
      date of posting, highlighting specific times or demographics that might be\r
      more vulnerable.`)},m(s,n){p(s,e,n)},d(s){s&&h(e)}}}function Ae(t){let e;return{c(){e=r("p"),e.textContent=`We propose to methodically analyze Reddit posts to uncover patterns and\r
        insights that can help in understanding and mitigating gender-based\r
        violence among the Filipino Reddit community. This includes examining\r
        the frequency of discussions, the context in which they occur, and the\r
        impact of community response on these posts.`},m(s,n){p(s,e,n)},d(s){s&&h(e)}}}function it(t){let e,s,n,a,i,u,m,o,c,k,g,A,v,y,$,x,_,O,q,F,w,L,b,C,M,U,E=t[0]==="overview"&&ke(),z=t[0]==="problem"&&$e(),S=t[0]==="hypothesis"&&Te(),T=t[0]==="solution"&&Ae();return{c(){e=r("div"),s=r("h1"),s.textContent="Our Research Focus",n=f(),a=r("div"),i=r("a"),u=V("Overview"),o=f(),c=r("a"),k=V("Problem"),A=f(),v=r("a"),y=V("Hypothesis"),x=f(),_=r("a"),O=V("Solution"),F=f(),w=r("div"),E&&E.c(),L=f(),z&&z.c(),b=f(),S&&S.c(),C=f(),T&&T.c(),d(s,"class","text-center"),d(i,"class",m=B(t[0]==="overview"?"active":"")+" svelte-i6od6k"),d(c,"class",g=B(t[0]==="problem"?"active":"")+" svelte-i6od6k"),d(v,"class",$=B(t[0]==="hypothesis"?"active":"")+" svelte-i6od6k"),d(_,"class",q=B(t[0]==="solution"?"active":"")+" svelte-i6od6k"),d(a,"class","nav-links text-center space-x-2 svelte-i6od6k"),d(w,"class","pt-8 text-xl"),d(e,"class","flex flex-col align-center mx-6 bg-white rounded-2xl py-16 px-48 space-y-2")},m(P,N){p(P,e,N),l(e,s),l(e,n),l(e,a),l(a,i),l(i,u),l(a,o),l(a,c),l(c,k),l(a,A),l(a,v),l(v,y),l(a,x),l(a,_),l(_,O),l(e,F),l(e,w),E&&E.m(w,null),l(w,L),z&&z.m(w,null),l(w,b),S&&S.m(w,null),l(w,C),T&&T.m(w,null),M||(U=[Q(i,"click",t[2]),Q(c,"click",t[3]),Q(v,"click",t[4]),Q(_,"click",t[5])],M=!0)},p(P,[N]){N&1&&m!==(m=B(P[0]==="overview"?"active":"")+" svelte-i6od6k")&&d(i,"class",m),N&1&&g!==(g=B(P[0]==="problem"?"active":"")+" svelte-i6od6k")&&d(c,"class",g),N&1&&$!==($=B(P[0]==="hypothesis"?"active":"")+" svelte-i6od6k")&&d(v,"class",$),N&1&&q!==(q=B(P[0]==="solution"?"active":"")+" svelte-i6od6k")&&d(_,"class",q),P[0]==="overview"?E||(E=ke(),E.c(),E.m(w,L)):E&&(E.d(1),E=null),P[0]==="problem"?z||(z=$e(),z.c(),z.m(w,b)):z&&(z.d(1),z=null),P[0]==="hypothesis"?S||(S=Te(),S.c(),S.m(w,C)):S&&(S.d(1),S=null),P[0]==="solution"?T||(T=Ae(),T.c(),T.m(w,null)):T&&(T.d(1),T=null)},i:H,o:H,d(P){P&&h(e),E&&E.d(),z&&z.d(),S&&S.d(),T&&T.d(),M=!1,te(U)}}}function lt(t,e,s){let n="overview";function a(c){s(0,n=c)}return[n,a,()=>a("overview"),()=>a("problem"),()=>a("hypothesis"),()=>a("solution")]}class at extends X{constructor(e){super(),J(this,e,lt,it,G,{})}}function Le(t){let e,s,n,a,i,u,m,o,c,k,g,A,v,y,$;return{c(){e=r("h2"),e.textContent="Posts per Year",s=f(),n=r("p"),n.textContent=`Our team has first explored the number of reddit posts per year that\r
          mentions gender-based violence keywords.`,a=f(),i=r("div"),i.innerHTML='<img src="image/post_per_year.webp" alt="A chart" class="rounded-lg mx-auto w-8/12"/>',u=f(),m=r("p"),m.textContent=`The chart shows a general increase in the number of posts from 2013 to\r
          2024. There is a noticeable spike in posts starting from 2020, with\r
          the highest number of posts recorded in 2023.`,o=f(),c=r("p"),c.textContent=`Based on the chart, we can infer the following detailed answer to the\r
          key question regarding temporal patterns:`,k=f(),g=r("ol"),g.innerHTML=`<li class="svelte-1qe7b07"><strong>Gradual Increase Over Time</strong> — From 2013 to 2019, the
            number of posts regarding gender-based violence remains relatively low
            and stable, indicating that these discussions were not as prominent or
            not as frequently shared on Filipino Reddit communities during these
            years.</li> <li class="svelte-1qe7b07"><strong>Significant Spike Starting 2020</strong> — Beginning in 2020,
            there is a marked increase in the number of posts. This could be attributed
            to various factors such as increased awareness, more active community
            engagement, or external societal events prompting more discussions on
            this topic. The year 2020 itself might have seen more discussions due
            to the global COVID-19 pandemic, which had significant social impacts,
            including increased domestic stress and potential increases in gender-based
            violence incidents.</li> <li class="svelte-1qe7b07"><strong>Peak in 2023</strong> — The year 2023 records the highest number
            of posts. This peak suggests a continued and growing awareness and willingness
            to discuss gender-based violence on these platforms. It could also indicate
            that the community engagement has become stronger, or there might have
            been significant events or movements related to gender-based violence
            that prompted more discussions.</li>`,A=f(),v=r("p"),v.textContent=`The increasing trend of posts over the years, especially the spike\r
          starting in 2020, indicates that:`,y=f(),$=r("ol"),$.innerHTML=`<li class="svelte-1qe7b07"><strong>Growing Awareness</strong> — There is increasing awareness and
            discussion about gender-based violence in Filipino Reddit communities.</li> <li class="svelte-1qe7b07"><strong>Community Engagement</strong> — Community engagement on this
            issue has likely improved, as more people are willing to share their
            experiences and discuss this topic.</li> <li class="svelte-1qe7b07"><strong>External Factors</strong> — External factors, such as the COVID-19
            pandemic or significant social movements, could have influenced the increase
            in posts.</li>`,d(e,"class","text-center text-6xl pt-12 pb-8"),d(i,"class","py-6"),d(g,"class","svelte-1qe7b07"),d($,"class","svelte-1qe7b07")},m(x,_){p(x,e,_),p(x,s,_),p(x,n,_),p(x,a,_),p(x,i,_),p(x,u,_),p(x,m,_),p(x,o,_),p(x,c,_),p(x,k,_),p(x,g,_),p(x,A,_),p(x,v,_),p(x,y,_),p(x,$,_)},d(x){x&&(h(e),h(s),h(n),h(a),h(i),h(u),h(m),h(o),h(c),h(k),h(g),h(A),h(v),h(y),h($))}}}function Se(t){let e,s,n,a,i,u,m;return{c(){e=r("h2"),e.textContent="Monthly Analysis of Posts",s=f(),n=r("div"),n.innerHTML='<img src="image/post_per_month.webp" alt="A chart" class="rounded-lg mx-auto w-8/12"/>',a=f(),i=r("p"),i.textContent="Based on the chart,",u=f(),m=r("ol"),m.innerHTML=`<li class="svelte-1qe7b07"><strong>March and April</strong> — These months show a significant spike
            in the number of posts, indicating a higher level of discussion or reporting
            of gender-based violence during these periods.</li> <li class="svelte-1qe7b07"><strong>June</strong> — This month has the lowest number of posts. The
            decrease in posts during June might be due to various factors such as
            less online activity during summer months, fewer awareness campaigns,
            or simply a lower incidence of discussions around this topic during this
            time.</li>`,d(e,"class","text-center text-6xl pt-12 pb-8"),d(n,"class","py-6"),d(m,"class","svelte-1qe7b07")},m(o,c){p(o,e,c),p(o,s,c),p(o,n,c),p(o,a,c),p(o,i,c),p(o,u,c),p(o,m,c)},d(o){o&&(h(e),h(s),h(n),h(a),h(i),h(u),h(m))}}}function Ce(t){let e,s,n,a,i,u,m;return{c(){e=r("h2"),e.textContent="Daily Analysis of Posts",s=f(),n=r("div"),n.innerHTML='<img src="image/post_per_day.webp" alt="A chart" class="rounded-lg mx-auto w-8/12"/>',a=f(),i=r("p"),i.textContent="Based on the chart,",u=f(),m=r("ol"),m.innerHTML=`<li class="svelte-1qe7b07"><strong>First Few Days</strong> — The first few days of the month (1st,
            2nd, and 3rd) show a higher number of posts, with the 2nd day having
            the highest number. This indicates that users are more likely to share
            their experiences or report incidents at the beginning of the month.</li> <li class="svelte-1qe7b07"><strong>End of the Month</strong> — The 31st day shows the lowest number
            of posts. This might be due to fewer days in some months, leading to
            lower overall activity on the 31st.</li> <li class="svelte-1qe7b07"><strong>Mid-Month Consistency</strong> — The middle of the month (days
            10 to 20) shows relatively consistent activity, though not as high as
            the beginning of the month.</li>`,d(e,"class","text-center text-6xl pt-12 pb-8"),d(n,"class","py-6"),d(m,"class","svelte-1qe7b07")},m(o,c){p(o,e,c),p(o,s,c),p(o,n,c),p(o,a,c),p(o,i,c),p(o,u,c),p(o,m,c)},d(o){o&&(h(e),h(s),h(n),h(a),h(i),h(u),h(m))}}}function Me(t){let e,s,n,a,i,u,m;return{c(){e=r("h2"),e.textContent="Weekly Analysis of Posts",s=f(),n=r("div"),n.innerHTML='<img src="image/post_per_week.webp" alt="A chart" class="rounded-lg mx-auto w-8/12"/>',a=f(),i=r("p"),i.textContent="Based on the chart,",u=f(),m=r("ul"),m.innerHTML=`<li class="svelte-1qe7b07"><strong>High Activity Days on Monday and Tuesday</strong> — These days
            have the highest number of posts. This suggests that users are more active
            in sharing their experiences or discussing gender-based violence at the
            beginning of the workweek.</li> <li class="svelte-1qe7b07"><strong>Moderate Activity on Wednesday to Thursday</strong> — The number
            of posts on these days is relatively stable and slightly lower than Monday
            and Tuesday, indicating consistent but moderate engagement.</li> <li class="svelte-1qe7b07"><strong>Low Activity Days on Friday and Sunday</strong> — These days
            have the lowest number of posts. The slight drop on these days could
            be due to various factors such as end-of-week fatigue or fewer people
            engaging online during weekends.</li>`,d(e,"class","text-center text-6xl pt-12 pb-8"),d(n,"class","py-6")},m(o,c){p(o,e,c),p(o,s,c),p(o,n,c),p(o,a,c),p(o,i,c),p(o,u,c),p(o,m,c)},d(o){o&&(h(e),h(s),h(n),h(a),h(i),h(u),h(m))}}}function rt(t){let e,s,n,a,i,u,m,o,c,k,g,A,v,y,$,x,_,O,q,F,w,L,b,C,M,U,E,z,S=t[0]==="Number of Posts per Year"&&Le(),T=t[0]==="MONTHLY ANALYSIS OF POSTS"&&Se(),P=t[0]==="Number of Posts per Day"&&Ce(),N=t[0]==="Weekly Analysis"&&Me();return{c(){e=r("div"),s=r("div"),n=r("h2"),n.textContent="EXPLORATORY DATA ANALYSIS",a=f(),i=r("div"),u=r("a"),m=V("POST PER YEAR"),c=f(),k=r("a"),g=V("POST PER DAY"),v=f(),y=r("a"),$=V("MONTHLY ANALYSIS"),_=f(),O=r("a"),q=V("WEEKLY ANALYSIS"),w=f(),L=r("div"),b=r("div"),S&&S.c(),C=f(),T&&T.c(),M=f(),P&&P.c(),U=f(),N&&N.c(),d(n,"class","text-center text-3xl"),d(u,"class",o=B(t[0]==="Number of Posts per Year"?"active":"")+" svelte-1qe7b07"),d(k,"class",A=B(t[0]==="Number of Posts per Day"?"active":"")+" svelte-1qe7b07"),d(y,"class",x=B(t[0]==="MONTHLY ANALYSIS OF POSTS"?"active":"")+" svelte-1qe7b07"),d(O,"class",F=B(t[0]==="Weekly Analysis"?"active":"")+" svelte-1qe7b07"),d(i,"class","nav-links text-center space-x-2 svelte-1qe7b07"),d(s,"class","flex justify-between items-baseline pb-3"),d(b,"class","pt-20 px-20 space-y-4"),d(L,"class","pt-8 text-xl"),d(e,"class","flex flex-col align-center mx-6 bg-white rounded-2xl px-12 space-y-2 py-12")},m(Y,Z){p(Y,e,Z),l(e,s),l(s,n),l(s,a),l(s,i),l(i,u),l(u,m),l(i,c),l(i,k),l(k,g),l(i,v),l(i,y),l(y,$),l(i,_),l(i,O),l(O,q),l(e,w),l(e,L),l(L,b),S&&S.m(b,null),l(b,C),T&&T.m(b,null),l(b,M),P&&P.m(b,null),l(b,U),N&&N.m(b,null),E||(z=[Q(u,"click",t[2]),Q(k,"click",t[3]),Q(y,"click",t[4]),Q(O,"click",t[5])],E=!0)},p(Y,[Z]){Z&1&&o!==(o=B(Y[0]==="Number of Posts per Year"?"active":"")+" svelte-1qe7b07")&&d(u,"class",o),Z&1&&A!==(A=B(Y[0]==="Number of Posts per Day"?"active":"")+" svelte-1qe7b07")&&d(k,"class",A),Z&1&&x!==(x=B(Y[0]==="MONTHLY ANALYSIS OF POSTS"?"active":"")+" svelte-1qe7b07")&&d(y,"class",x),Z&1&&F!==(F=B(Y[0]==="Weekly Analysis"?"active":"")+" svelte-1qe7b07")&&d(O,"class",F),Y[0]==="Number of Posts per Year"?S||(S=Le(),S.c(),S.m(b,C)):S&&(S.d(1),S=null),Y[0]==="MONTHLY ANALYSIS OF POSTS"?T||(T=Se(),T.c(),T.m(b,M)):T&&(T.d(1),T=null),Y[0]==="Number of Posts per Day"?P||(P=Ce(),P.c(),P.m(b,U)):P&&(P.d(1),P=null),Y[0]==="Weekly Analysis"?N||(N=Me(),N.c(),N.m(b,null)):N&&(N.d(1),N=null)},i:H,o:H,d(Y){Y&&h(e),S&&S.d(),T&&T.d(),P&&P.d(),N&&N.d(),E=!1,te(z)}}}function ot(t,e,s){let n="Number of Posts per Year";function a(c){s(0,n=c)}return[n,a,()=>a("Number of Posts per Year"),()=>a("Number of Posts per Day"),()=>a("MONTHLY ANALYSIS OF POSTS"),()=>a("Weekly Analysis")]}class ct extends X{constructor(e){super(),J(this,e,ot,rt,G,{})}}function dt(t){let e;return{c(){e=r("div"),e.innerHTML=`<h2 class="text-4xl">Data Collection Process</h2> <p>The posts were filtered based on specific search inputs related to different
    forms of gender-based violence. The search inputs used are as follows:</p> <div class="flex flex-wrap text-xs gap-2 font"><a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">abused</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">sexual harassment</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">Cyberbullying</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">domestic violence</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">emotional abuse</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">physical abuse</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">unsolicited pics</a> <a href="/" class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100">stalking</a></div> <p class="mb-4">The originally scraped dataset contains:</p> <ul class="list-disc list-inside space-y-1"><li><strong>title</strong>: The title of the post.</li> <li><strong>body</strong>: The main content of the post.</li> <li><strong>link</strong>: The link URL that directs to the post.</li> <li><strong>author</strong>: Author of the post</li> <li><strong>created</strong>: Date when the post was created.</li> <li><strong>subreddit</strong>: The subreddit from which the post originated.</li> <li><strong>searchinput</strong>: The keyword used for the search input.</li></ul>`,d(e,"class","bg-white px-12 py-14 rounded-lg shadow-lg mt-16 space-y-4")},m(s,n){p(s,e,n)},p:H,i:H,o:H,d(s){s&&h(e)}}}class ut extends X{constructor(e){super(),J(this,e,null,dt,G,{})}}const ft={a:{viewBox:"0 0 512 512"},c:'<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>'},ht={a:{viewBox:"0 0 512 512"},c:'<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>'};function Pe(t){let e,s,n,a,i,u,m,o,c,k,g,A,v;return{c(){e=r("h3"),e.textContent="2. Handling Missing Values:",s=f(),n=r("ul"),n.innerHTML=`<li>We first identify columns with missing values. In our dataset, the
        &#39;body&#39; field sometimes lacks data due to deleted or removed posts.</li> <li>For fields essential to our analysis like &#39;body&#39;, we remove entries
        where this data is missing to maintain the integrity of our analysis.</li>`,a=f(),i=r("h3"),i.textContent="3. Tokenization and Removal of Stop Words",u=f(),m=r("ul"),m.innerHTML=`<li>We break down the text into individual words or tokens to analyze the
        frequency and presence of certain terms related to gender-based
        violence.</li> <li>Common English words that do not contribute to our specific analysis
        (such as &#39;the&#39;, &#39;is&#39;, &#39;at&#39;) are removed using a predefined list from the
        NLTK library.</li>`,o=f(),c=r("h3"),c.textContent="4. Feature Engineering",k=f(),g=r("ul"),g.innerHTML=`<li>Where available, we extract age and gender information mentioned within
        the post to analyze demographic patterns.</li> <li>We derive several time-related features from the &#39;created&#39; timestamp,
        including year, month, day, and time of day, to explore trends over
        time.</li> <li>We calculate the length of each post after cleaning to quantify the
        amount of content and analyze its relation to user engagement.</li>`,A=f(),v=r("div"),v.innerHTML=`<h3 class="font-normal tracking-wide">5. Categorization of Data</h3> <p>Using the initial search inputs used to scrape data, each post is tagged
        with keywords that represent the type of violence discussed, aiding in
        categorical analysis.</p> <h3 class="font-normal tracking-wide">6. Engagement Metrics</h3> <ul><li>We normalize upvotes by the average upvotes per month to identify
          posts that have unusually high engagement relative to typical
          subreddit activity.</li> <li>Considering the size of each subreddit, we calculate upvotes per
          capita to determine engagement efficiency relative to the community
          size.</li></ul> <h3 class="font-normal tracking-wide">7. Outlier Detection</h3> <p>While we recognize that outliers can skew data analysis, they often
        contain valuable insights about extreme cases or highly impactful posts.
        We examine these outliers to understand their context and decide on a
        case-by-case basis whether to include them in the final analysis.</p>`,d(e,"class","font-normal tracking-wide"),d(i,"class","font-normal tracking-wide"),d(c,"class","font-normal tracking-wide"),d(v,"id","more-content"),We(v,"display","none")},m(y,$){p(y,e,$),p(y,s,$),p(y,n,$),p(y,a,$),p(y,i,$),p(y,u,$),p(y,m,$),p(y,o,$),p(y,c,$),p(y,k,$),p(y,g,$),p(y,A,$),p(y,v,$)},d(y){y&&(h(e),h(s),h(n),h(a),h(i),h(u),h(m),h(o),h(c),h(k),h(g),h(A),h(v))}}}function Oe(t){let e,s;return e=new re({props:{src:ft}}),{c(){K(e.$$.fragment)},m(n,a){j(e,n,a),s=!0},i(n){s||(D(e.$$.fragment,n),s=!0)},o(n){R(e.$$.fragment,n),s=!1},d(n){W(e,n)}}}function Ne(t){let e,s;return e=new re({props:{src:ht}}),{c(){K(e.$$.fragment)},m(n,a){j(e,n,a),s=!0},i(n){s||(D(e.$$.fragment,n),s=!0)},o(n){R(e.$$.fragment,n),s=!1},d(n){W(e,n)}}}function pt(t){let e,s,n,a,i,u,m,o,c,k,g,A,v,y,$,x=t[0]?"Read Less":"Read More",_,O,q,F,w=t[0]===!0&&Pe(),L=t[0]===!1&&Oe(),b=t[0]===!0&&Ne();return{c(){e=r("div"),s=r("h2"),s.textContent="Preprocessing",n=f(),a=r("p"),a.textContent=`Our preprocessing efforts aim to refine the raw dataset into a clean,\r
    analyzable format that supports reliable data analysis and insight\r
    generation. This process ensures data quality and facilitates effective data\r
    exploration.`,i=f(),u=r("h2"),u.textContent="Steps in Preprocessing",m=f(),o=r("h3"),o.textContent="1. Cleaning Text Data",c=f(),k=r("ul"),k.innerHTML=`<li>We strip out irrelevant characters, such as URLs, special characters, and
      formatting elements from the posts&#39; titles and bodies to focus purely on
      textual content.</li> <li>Text data is converted to a uniform case (all lower case) to ensure
      consistency across all text entries.</li>`,g=f(),w&&w.c(),A=f(),v=r("button"),L&&L.c(),y=f(),b&&b.c(),$=f(),_=V(x),d(s,"class","text-4xl"),d(u,"class","text-2xl"),d(o,"class","font-normal tracking-wide"),d(v,"class","hover:text-primary text-lg text-slate-700 downicon flex items-center justify-center svelte-1twrjfq"),d(e,"class","bg-white px-12 py-14 rounded-lg shadow-lg mt-16 space-y-4")},m(C,M){p(C,e,M),l(e,s),l(e,n),l(e,a),l(e,i),l(e,u),l(e,m),l(e,o),l(e,c),l(e,k),l(e,g),w&&w.m(e,null),l(e,A),l(e,v),L&&L.m(v,null),l(v,y),b&&b.m(v,null),l(v,$),l(v,_),O=!0,q||(F=Q(v,"click",t[1]),q=!0)},p(C,[M]){C[0]===!0?w||(w=Pe(),w.c(),w.m(e,A)):w&&(w.d(1),w=null),C[0]===!1?L?M&1&&D(L,1):(L=Oe(),L.c(),D(L,1),L.m(v,y)):L&&(we(),R(L,1,1,()=>{L=null}),xe()),C[0]===!0?b?M&1&&D(b,1):(b=Ne(),b.c(),D(b,1),b.m(v,$)):b&&(we(),R(b,1,1,()=>{b=null}),xe()),(!O||M&1)&&x!==(x=C[0]?"Read Less":"Read More")&&je(_,x)},i(C){O||(D(L),D(b),O=!0)},o(C){R(L),R(b),O=!1},d(C){C&&h(e),w&&w.d(),L&&L.d(),b&&b.d(),q=!1,F()}}}function mt(t,e,s){let n=!1;return[n,()=>s(0,n=!n)]}class gt extends X{constructor(e){super(),J(this,e,mt,pt,G,{})}}function vt(t){let e,s,n,a,i,u,m,o,c,k,g,A,v,y,$,x,_,O,q,F,w,L,b,C;return c=new re({props:{src:_e}}),y=new re({props:{src:_e}}),w=new ut({}),b=new gt({}),{c(){e=r("div"),s=r("div"),n=r("h1"),n.textContent="About Our Dataset",a=f(),i=r("p"),i.textContent=`The dataset was collected by scraping posts from Philippine subreddits and\r
      using keywords related to various forms of gender-based violence for the\r
      search inputs. The scraped data had 1,900+ rows in total.`,u=f(),m=r("div"),o=r("a"),K(c.$$.fragment),k=f(),g=r("span"),g.textContent="preprocessed_dataset.csv",A=f(),v=r("a"),K(y.$$.fragment),$=f(),x=r("span"),x.textContent="ph_holidays.csv",_=f(),O=r("div"),q=r("div"),q.innerHTML='<a href="https://docs.google.com/spreadsheets/d/1xt632YneUFUZrn8Lc8KlxfnWZYtL25YuKSansk992tc/edit?usp=sharing" class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300 rounded-md"><p class="mx-auto underline text-primary">EXPLORE DATASET</p></a> <a href="/" class="relative"><div class="flex flex-wrap content-center"><img src="image/DatasetTable.png" alt="A dataset containing different data" class="shadow-lg transition-opacity duration-300 hover:opacity-80 rounded-md"/></div></a>',F=f(),K(w.$$.fragment),L=f(),K(b.$$.fragment),d(n,"class","text-4xl mb-4 pt-16"),d(i,"class","text-xl mb-8"),d(o,"href","/"),d(o,"class","rounded-full bg-gdark px-4 py-2 text-white ease-in-out duration-100 flex items-center justify-center space-x-2 hover:bg-slate-600 hover:shadow-lg"),d(v,"href","/"),d(v,"class","rounded-full bg-gdark px-4 py-2 text-white ease-in-out duration-100 flex items-center justify-center space-x-2 hover:bg-slate-600 hover:shadow-lg"),d(m,"class","flex flex-wrap gap-4 mb-32"),d(s,"class","w-5/12 text-xs sidebar rounded-2xl sticky top-0 svelte-p8850e"),d(q,"class","relative mb-8"),d(O,"class","w-7/12"),d(e,"class","flex flex-row items-start mx-6 rounded-2xl py-16 px-12 space-x-10 relative z-20 justify-between")},m(M,U){p(M,e,U),l(e,s),l(s,n),l(s,a),l(s,i),l(s,u),l(s,m),l(m,o),j(c,o,null),l(o,k),l(o,g),l(m,A),l(m,v),j(y,v,null),l(v,$),l(v,x),l(e,_),l(e,O),l(O,q),l(O,F),j(w,O,null),l(O,L),j(b,O,null),C=!0},p:H,i(M){C||(D(c.$$.fragment,M),D(y.$$.fragment,M),D(w.$$.fragment,M),D(b.$$.fragment,M),C=!0)},o(M){R(c.$$.fragment,M),R(y.$$.fragment,M),R(w.$$.fragment,M),R(b.$$.fragment,M),C=!1},d(M){M&&h(e),W(c),W(y),W(w),W(b)}}}class bt extends X{constructor(e){super(),J(this,e,null,vt,G,{})}}function yt(t){let e;return{c(){e=r("div"),e.innerHTML=`<h1>MEET THE TEAM</h1> <div class="flex bg-gdark flex-row items-start mx-6 pb-4 w-100vw justify-around"><div class="w-3/12"><h2 class="mb-4 pt-16 w">Arian Rey</h2> <p>Hi there! I&#39;m Arian Rey. 👋 I am a 4th-year Computer Science student at
        the University of the Philippines - Diliman, specializing in UI/UX
        design and software development. Currently, I am passionate about
        developing Keller, a browser extension that helps low-vision and blind
        people generate alternative text for images. With this project, I aim to
        raise awareness and increase efforts to make technology more accessible
        in the Philippines. I&#39;ve also worked on other cool projects. If you&#39;re
        interested, please visit my website to check them out:
        https://www.arianrey.com/</p></div> <div class="w-3/12"><h2 class="mb-4 pt-16">Cess Ventures</h2> <p>Just a simple girl and a CS132 Student</p></div> <div class="w-3/12"><h2 class="mb-4 pt-16">Christian Quinzon</h2> <p>Just a simple girl? and a CS132 Student</p></div></div> <div class="w-7/12"></div>`,d(e,"class","text-white text-center pt-12")},m(s,n){p(s,e,n)},p:H,i:H,o:H,d(s){s&&h(e)}}}class wt extends X{constructor(e){super(),J(this,e,null,yt,G,{})}}function xt(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="justify-between items-baseline pb-3"><h2 class="text-center text-3xl">IN A NUTSHELL</h2> <div class="py-6"><img src="image/confusion_matrix.webp" alt="A chart" class="rounded-lg mx-auto w-8/12"/></div> <h2 class="high-accuracy">High Accuracy</h2> <p>“Stalking” and “Unsolicited Pics” categories have the highest number of
      correct classifications (80 and 12, respectively), indicating the model is
      highly accurate in predicting these categories.</p> <h2 class="moderate-accuracy">Moderate Accuracy</h2> <p>“Cyberbullying,” “Sexual Harassment,” and “Physical Abuse” categories have
      moderate accuracy, with significant correct classifications but also
      notable misclassifications.</p> <h2 class="low-accuracy">Low Accuracy</h2> <p>“Abused,” “Domestic Violence,” and “Emotional Abuse” categories have lower
      accuracy, with many instances misclassified as other types of violence.
      For example, “Abused” is frequently misclassified as “Physical Abuse,” and
      “Emotional Abuse” is often misclassified as “Physical Abuse.”</p></div>`,d(e,"class","flex flex-col align-center mx-6 bg-slate-100 rounded-2xl px-12 space-y-2 py-12")},m(s,n){p(s,e,n)},p:H,i:H,o:H,d(s){s&&h(e)}}}class _t extends X{constructor(e){super(),J(this,e,null,xt,G,{})}}function kt(t){let e,s,n,a,i,u,m,o,c,k,g,A,v,y,$,x,_,O,q,F,w,L,b,C,M,U,E,z,S,T,P,N,Y,Z,oe,se,ce;return n=new et({}),_=new re({props:{src:nt,size:"2em"}}),C=new at({}),E=new bt({}),T=new ct({}),Y=new _t({}),se=new wt({}),{c(){e=r("main"),s=r("section"),K(n.$$.fragment),a=f(),i=r("div"),u=r("h2"),u.textContent="SPEAK OUT AND BE HEARD",m=f(),o=r("h1"),o.textContent="Uncovering the Shadows of Gender-Based Violence Among Filipino Redditors",c=f(),k=r("div"),g=r("div"),A=r("div"),v=r("p"),v.textContent=`This initiative seeks to explore and expose the experiences of\r
              gender-based violence as shared by individuals in Filipino Reddit\r
              communities. Our project analyzes the nature of these experiences,\r
              investigates patterns based on demographics, geography, and\r
              special dates, and examines the impact of community engagement on\r
              these critical issues.`,y=f(),$=r("div"),x=r("a"),K(_.$$.fragment),O=f(),q=r("span"),q.textContent="Explore Our Study",F=f(),w=r("div"),w.innerHTML='<img src="image/womenrights.jpeg" alt="A Filipino protestor holding a placard reading &#39;Condemn violence - protect women&#39;" class="rounded-lg object-contain"/>',L=f(),b=r("div"),K(C.$$.fragment),M=f(),U=r("section"),K(E.$$.fragment),z=f(),S=r("section"),K(T.$$.fragment),P=f(),N=r("section"),K(Y.$$.fragment),Z=f(),oe=r("section"),K(se.$$.fragment),d(u,"class","text-4xl text-zinc-800"),d(o,"class","text-8xl"),d(v,"class","w-10/12 text-lg"),d(q,"class","text-xl ml-2"),d(x,"href","/"),d(x,"class","downicon flex align-center gap-2"),d(A,"class","w-7/12 pt-6 space-y-8"),d(w,"class","rounded-lg object-contain mt-[-20px]"),d(g,"class","flex flex-row space-x-8"),d(i,"class","m-20 mt-18"),d(s,"class","bg-slate-100 py-6"),d(b,"class","bg-slate-100"),d(U,"class","bg-slate-100"),d(S,"class","bg-slate-100 pb-20"),d(N,"class","bg-slate-100"),d(oe,"class","bg-gdark")},m(I,De){p(I,e,De),l(e,s),j(n,s,null),l(s,a),l(s,i),l(i,u),l(i,m),l(i,o),l(i,c),l(i,k),l(k,g),l(g,A),l(A,v),l(A,y),l(A,$),l($,x),j(_,x,null),l(x,O),l(x,q),l(g,F),l(g,w),l(e,L),l(e,b),j(C,b,null),l(e,M),l(e,U),j(E,U,null),l(e,z),l(e,S),j(T,S,null),l(e,P),l(e,N),j(Y,N,null),l(e,Z),l(e,oe),j(se,oe,null),ce=!0},p:H,i(I){ce||(D(n.$$.fragment,I),D(_.$$.fragment,I),D(C.$$.fragment,I),D(E.$$.fragment,I),D(T.$$.fragment,I),D(Y.$$.fragment,I),D(se.$$.fragment,I),ce=!0)},o(I){R(n.$$.fragment,I),R(_.$$.fragment,I),R(C.$$.fragment,I),R(E.$$.fragment,I),R(T.$$.fragment,I),R(Y.$$.fragment,I),R(se.$$.fragment,I),ce=!1},d(I){I&&h(e),W(n),W(_),W(C),W(E),W(T),W(Y),W(se)}}}class $t extends X{constructor(e){super(),J(this,e,null,kt,G,{})}}new $t({target:document.getElementById("app")});
