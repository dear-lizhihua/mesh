"use strict";(self.webpackChunkmesh=self.webpackChunkmesh||[]).push([[1506],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(v,s(s({ref:n},p),{},{components:t})):r.createElement(v,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},237:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),s=["components"],a={sidebar_position:105},l={unversionedId:"optimization/arco_design_vue_analysis_resize_observer",id:"optimization/arco_design_vue_analysis_resize_observer",isDocsHomePage:!1,title:"arco-design-vue \u5206\u6790 ResizeObserver \u7ec4\u4ef6",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/docs/optimization/arco_design_vue_analysis_resize_observer.md",sourceDirName:"optimization",slug:"/optimization/arco_design_vue_analysis_resize_observer",permalink:"/mesh/docs/optimization/arco_design_vue_analysis_resize_observer",editUrl:"https://github.com/dear-lizhihua/mesh/edit/main/docs/optimization/arco_design_vue_analysis_resize_observer.md",version:"current",sidebarPosition:105,frontMatter:{sidebar_position:105},sidebar:"tutorialSidebar",previous:{title:"arco-design-vue \u5206\u6790 CompositionEvent",permalink:"/mesh/docs/optimization/arco_design_vue_analysis_composition_event"},next:{title:"arco-design-vue \u521d\u6b65\u4f18\u5316\u65b9\u6848\uff1a\u6837\u5f0f\u4f18\u5316",permalink:"/mesh/docs/optimization/arco_design_vue_optimization_style"}},c=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u7ec4\u4ef6\u5c01\u88c5",id:"\u7ec4\u4ef6\u5c01\u88c5",children:[{value:"JavaScript \u91cd\u5199\u7248\u672c (JSX \u5f62\u5f0f)",id:"javascript-\u91cd\u5199\u7248\u672c-jsx-\u5f62\u5f0f",children:[]}]},{value:"\u5206\u6790\u4ee3\u7801",id:"\u5206\u6790\u4ee3\u7801",children:[{value:"\u5206\u6790\u4ee3\u7801\uff1agetCurrentInstance",id:"\u5206\u6790\u4ee3\u7801getcurrentinstance",children:[]},{value:"\u5206\u6790\u4ee3\u7801\uff1afindElement \u548c findDomNode",id:"\u5206\u6790\u4ee3\u7801findelement-\u548c-finddomnode",children:[]},{value:"\u5206\u6790\u4ee3\u7801\uff1acreateResizeObserver",id:"\u5206\u6790\u4ee3\u7801createresizeobserver",children:[]}]}],p={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/que-etc/resize-observer-polyfill"},"ResizeObserver Polyfill"))),(0,o.kt)("p",null,"\u901a\u8fc7 ResizeObserver \u63a5\u53e3\uff0c\u53ef\u4ee5\u62a5\u544a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a Element \u7684 content box \u6216 border box")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a SVGElement \u7684 bounding box")," \u65b9\u9762\u7684\u53d8\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>ResizeObserver</title>\n</head>\n<body>\n<script>\n  const ro = new ResizeObserver((entries, observer) => {\n    for (const entry of entries) {\n      const {left, top, width, height} = entry.contentRect\n      console.log('Element:', entry.target)\n      console.log(`Element's size: ${width}px x ${height}px`)\n      console.log(`Element's paddings: ${top}px ; ${left}px`)\n    }\n  })\n  ro.observe(document.body)\n<\/script>\n</body>\n</html>\n")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c01\u88c5"},"\u7ec4\u4ef6\u5c01\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/arco-design/arco-design-vue/blob/main/packages/web-vue/components/_components/resize-observer.tsx"},"Arco Design - resize-observer.tsx"))),(0,o.kt)("h3",{id:"javascript-\u91cd\u5199\u7248\u672c-jsx-\u5f62\u5f0f"},"JavaScript \u91cd\u5199\u7248\u672c (JSX \u5f62\u5f0f)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  defineComponent,\n  onMounted,\n  getCurrentInstance,\n} from 'vue'\nimport ResizeObserver from 'resize-observer-polyfill'\nconst findDomNode = (vnode) => {\n  let node = vnode.el\n  while (node && !node.tagName) {\n    node = node.nextSibling\n  }\n  return node\n}\n\nexport default defineComponent({\n  name: 'ResizeObserver',\n  emits: [\n    'resize',\n  ],\n  setup (props, {emit, slots}) {\n    let resizeObserver\n    const findElement = (instance) => {\n      return findDomNode(instance.vnode)\n    }\n\n    const createResizeObserver = (target) => {\n      if (!target) return\n      resizeObserver = new ResizeObserver((entries) => {\n        const entry = entries[0]\n        emit('resize', entry)\n      })\n      resizeObserver.observe(target)\n    }\n    onMounted(() => {\n      const instance = getCurrentInstance()\n      if (instance) {\n        const element = findElement(instance)\n        createResizeObserver(element)\n      }\n    })\n    return () => {\n      const children = slots.default && slots.default()\n      return children && children.length ? children[0] : null\n    }\n  },\n})\n")),(0,o.kt)("h2",{id:"\u5206\u6790\u4ee3\u7801"},"\u5206\u6790\u4ee3\u7801"),(0,o.kt)("h3",{id:"\u5206\u6790\u4ee3\u7801getcurrentinstance"},"\u5206\u6790\u4ee3\u7801\uff1agetCurrentInstance"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance"},"Composition API - getCurrentInstance")," \u652f\u6301\u8bbf\u95ee\u5185\u90e8\u7ec4\u4ef6\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const instance = getCurrentInstance()\n")),(0,o.kt)("h3",{id:"\u5206\u6790\u4ee3\u7801findelement-\u548c-finddomnode"},"\u5206\u6790\u4ee3\u7801\uff1afindElement \u548c findDomNode"),(0,o.kt)("p",null,"\u4ece Vue \u7684 VNode \u4e2d\u627e\u51fa\u662f\u5143\u7d20\u7c7b\u578b\u7684 DOM \u8282\u70b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (instance) {\n  const element = findElement(instance)\n}\n")),(0,o.kt)("h3",{id:"\u5206\u6790\u4ee3\u7801createresizeobserver"},"\u5206\u6790\u4ee3\u7801\uff1acreateResizeObserver"),(0,o.kt)("p",null,"\u7528\u4e8e\u89c2\u5bdf element \u5143\u7d20\uff0c\u5728 element \u5143\u7d20\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"(entries) => {}")," \u56de\u8c03\uff0c\u7136\u540e\u5411\u4e0a\u5c42\u7ec4\u4ef6\u53d1\u9001 resize \u4e8b\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const createResizeObserver = (target) => {\n  if (!target) return\n  resizeObserver = new ResizeObserver((entries) => {\n    const entry = entries[0]\n    emit('resize', entry)\n  })\n  resizeObserver.observe(target)\n}\n\nif (instance) {\n  const element = findElement(instance)\n  createResizeObserver(element)\n}\n")))}u.isMDXComponent=!0}}]);