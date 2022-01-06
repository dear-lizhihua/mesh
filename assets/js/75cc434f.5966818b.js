"use strict";(self.webpackChunkmesh=self.webpackChunkmesh||[]).push([[9598],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6428:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:100},l={unversionedId:"support-tool/mesh_api_to_code",id:"support-tool/mesh_api_to_code",isDocsHomePage:!1,title:"@mesh/api-to-code",description:"\u6574\u4f53\u76ee\u6807\uff1a\u63a5\u53e3\u8f6c\u6362\u4e3a\u8c03\u7528\u4ee3\u7801",source:"@site/docs/support-tool/mesh_api_to_code.md",sourceDirName:"support-tool",slug:"/support-tool/mesh_api_to_code",permalink:"/mesh/docs/support-tool/mesh_api_to_code",editUrl:"https://github.com/dear-lizhihua/mesh/edit/main/docs/support-tool/mesh_api_to_code.md",version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u8109\u65f6\u4e91\u524d\u7aef\u535a\u5ba2",permalink:"/mesh/docs/index"},next:{title:"@mesh/api-to-code \u5b9e\u73b0\u601d\u8def",permalink:"/mesh/docs/support-tool/mesh_api_to_code_design"}},s=[{value:"\u6574\u4f53\u76ee\u6807\uff1a\u63a5\u53e3\u8f6c\u6362\u4e3a\u8c03\u7528\u4ee3\u7801",id:"\u6574\u4f53\u76ee\u6807\u63a5\u53e3\u8f6c\u6362\u4e3a\u8c03\u7528\u4ee3\u7801",children:[]},{value:"\u76ee\u68071\uff1a\u63a5\u53e3\u8f6c\u6362",id:"\u76ee\u68071\u63a5\u53e3\u8f6c\u6362",children:[]},{value:"\u76ee\u68072\uff1a\u4f7f\u7528 prettier \u7f8e\u5316 JavaScript \u4ee3\u7801",id:"\u76ee\u68072\u4f7f\u7528-prettier-\u7f8e\u5316-javascript-\u4ee3\u7801",children:[]},{value:"\u76ee\u68073\uff1a\u5c06\u62fc\u63a5\u597d\u7684\u63a5\u53e3\u5b57\u7b26\u4e32\uff0c\u5199\u5165\u5230\u6587\u4ef6",id:"\u76ee\u68073\u5c06\u62fc\u63a5\u597d\u7684\u63a5\u53e3\u5b57\u7b26\u4e32\u5199\u5165\u5230\u6587\u4ef6",children:[]},{value:"\u76ee\u68074\uff1a\u6279\u91cf\u5b9e\u73b0\u63a5\u53e3\u8f6c\u6362",id:"\u76ee\u68074\u6279\u91cf\u5b9e\u73b0\u63a5\u53e3\u8f6c\u6362",children:[]},{value:"\u76ee\u68075\uff1a\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",id:"\u76ee\u68075\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6574\u4f53\u76ee\u6807\u63a5\u53e3\u8f6c\u6362\u4e3a\u8c03\u7528\u4ee3\u7801"},"\u6574\u4f53\u76ee\u6807\uff1a\u63a5\u53e3\u8f6c\u6362\u4e3a\u8c03\u7528\u4ee3\u7801"),(0,o.kt)("h2",{id:"\u76ee\u68071\u63a5\u53e3\u8f6c\u6362"},"\u76ee\u68071\uff1a\u63a5\u53e3\u8f6c\u6362"),(0,o.kt)("p",null,"\u76ee\u6807\u63cf\u8ff0\uff1a\u5c06\u5982\u4e0b JSON Schema\uff0c\u8f6c\u6362\u4e3a JavaScript \u8c03\u7528\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "/domains": {\n    "post": {}\n  }, \n  "/domains/:domainId": {\n    "put": {}\n  },\n  "/certs": {\n    "get": {}\n  },\n  "/certs/:certId": {\n    "delete": {}\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u4f7f\u7528 Vite \u63d0\u4f9b\u7684\u73af\u5883\u53d8\u91cf import.meta.env\nconst prefixUrl = path => import.meta.env.VITE_PREFIX + import.meta.env.VITE_VERSION + import.meta.env.VITE_DOMAIN + path\n// \u6839\u636e\u4e1a\u52a1\u9700\u6c42\u81ea\u5df1\u5b9a\u4e49\nconst prefixUrl = path => path\n\nclass ApiService {\n  constructor (httpClient) {\n    this.httpClient = httpClient\n  }\n  async postDomains (data) {\n    const pathname = prefixUrl("/domains");\n    return this.httpClient.post(pathname, data);\n  } \n  async putDomainsByDomainId (data) {\n    const pathname = prefixUrl("/domains/:domainId");\n    return this.httpClient.put(pathname, data);\n  }\n  async getCerts (params) {\n    const pathname = prefixUrl("/certs");\n    return this.httpClient.get(pathname, {params});\n  } \n  async deleteCertsByCertId (params) {\n    const pathname = prefixUrl("/certs/:certId");\n    return this.httpClient.delete(pathname, {params});\n  }\n}\n')),(0,o.kt)("h2",{id:"\u76ee\u68072\u4f7f\u7528-prettier-\u7f8e\u5316-javascript-\u4ee3\u7801"},"\u76ee\u68072\uff1a\u4f7f\u7528 prettier \u7f8e\u5316 JavaScript \u4ee3\u7801"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prettier.io/"},"https://prettier.io/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prettier.io/docs/en/api.html"},"https://prettier.io/docs/en/api.html"))),(0,o.kt)("h2",{id:"\u76ee\u68073\u5c06\u62fc\u63a5\u597d\u7684\u63a5\u53e3\u5b57\u7b26\u4e32\u5199\u5165\u5230\u6587\u4ef6"},"\u76ee\u68073\uff1a\u5c06\u62fc\u63a5\u597d\u7684\u63a5\u53e3\u5b57\u7b26\u4e32\uff0c\u5199\u5165\u5230\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"const fs = require('fs')\nfs.writeFileSync(...)\n")),(0,o.kt)("h2",{id:"\u76ee\u68074\u6279\u91cf\u5b9e\u73b0\u63a5\u53e3\u8f6c\u6362"},"\u76ee\u68074\uff1a\u6279\u91cf\u5b9e\u73b0\u63a5\u53e3\u8f6c\u6362"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 glob library \u8bfb\u53d6 src \u76ee\u5f55\u4e0b\u7684\u6240\u6709 JSON \u6587\u4ef6\u3002\u4f8b\u5982\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/globby"},"https://www.npmjs.com/package/globby")),(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167\u76f8\u5e94\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u5199\u5165\u5230 dist \u76ee\u5f55\u4e0b")),(0,o.kt)("h2",{id:"\u76ee\u68075\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"},"\u76ee\u68075\uff1a\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"),(0,o.kt)("p",null,"\u5728 /tests \u76ee\u5f55\u4e0b\uff0c\u7b80\u5355\u5b9e\u73b0\uff1a\u793a\u4f8b JSON \u8f6c\u6362\u4e3a JavaScript \u4ee3\u7801"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"get \u7528\u4f8b"),(0,o.kt)("li",{parentName:"ul"},"post \u7528\u4f8b"),(0,o.kt)("li",{parentName:"ul"},"put \u7528\u4f8b"),(0,o.kt)("li",{parentName:"ul"},"delete \u7528\u4f8b")))}u.isMDXComponent=!0}}]);