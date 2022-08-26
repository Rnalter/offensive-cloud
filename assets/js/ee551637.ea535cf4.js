"use strict";(self.webpackChunkoffensive_cloud=self.webpackChunkoffensive_cloud||[]).push([[70],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,c={unversionedId:"AWS/Cognito",id:"AWS/Cognito",title:"Cognito",description:"Identity pools allow authenticated or unauthenticated users to access S3 or Dyanmodb. If you have the cognito endpoint and the region it belongs to you could try extracting credentials by using the following",source:"@site/docs/AWS/Cognito.md",sourceDirName:"AWS",slug:"/AWS/Cognito",permalink:"/offensive-cloud/docs/AWS/Cognito",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AWS/Cognito.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS_SSO",permalink:"/offensive-cloud/docs/AWS/AWS_SSO"},next:{title:"IAM_ROLES",permalink:"/offensive-cloud/docs/AWS/IAM_ROLES"}},s={},l=[{value:"Credits",id:"credits",level:2},{value:"References",id:"references",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Identity pools allow authenticated or unauthenticated users to access S3 or Dyanmodb. If you have the cognito endpoint and the region it belongs to you could try extracting credentials by using the following"),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"Great analysis done by ",(0,o.kt)("a",{parentName:"p",href:"https://andresriancho.com/"},"https://andresriancho.com/")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://speakerdeck.com/andresriancho/internet-scale-analysis-of-aws-cognito-security"},"https://speakerdeck.com/andresriancho/internet-scale-analysis-of-aws-cognito-security")))}p.isMDXComponent=!0}}]);