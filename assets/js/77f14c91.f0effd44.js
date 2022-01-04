"use strict";(self.webpackChunkmesh=self.webpackChunkmesh||[]).push([[9850],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return s}});var i=a(7294);function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,i,d=function(t,e){if(null==t)return{};var a,i,d={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(d[a]=t[a]);return d}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(d[a]=t[a])}return d}var p=i.createContext({}),o=function(t){var e=i.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=o(t.components);return i.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(t,e){var a=t.components,d=t.mdxType,n=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),y=o(a),s=d,l=y["".concat(p,".").concat(s)]||y[s]||m[s]||n;return a?i.createElement(l,r(r({ref:e},u),{},{components:a})):i.createElement(l,r({ref:e},u))}));function s(t,e){var a=arguments,d=e&&e.mdxType;if("string"==typeof t||d){var n=a.length,r=new Array(n);r[0]=y;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:d,r[1]=c;for(var o=2;o<n;o++)r[o]=a[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}y.displayName="MDXCreateElement"},9960:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return o},default:function(){return m}});var i=a(3117),d=a(102),n=(a(7294),a(3905)),r=["components"],c={sidebar_position:112},p={unversionedId:"articles/tooltip",id:"articles/tooltip",isDocsHomePage:!1,title:"tooltip \u81ea\u5b9a\u4e49\u63d0\u793a\u4fe1\u606f",description:"\u94fe\u63a5",source:"@site/docs/articles/tooltip.md",sourceDirName:"articles",slug:"/articles/tooltip",permalink:"/mesh/docs/articles/tooltip",editUrl:"https://github.com/dear-lizhihua/mesh/edit/main/docs/articles/tooltip.md",version:"current",sidebarPosition:112,frontMatter:{sidebar_position:112},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u53cc Y \u8f74\u6298\u7ebf\u56fe",permalink:"/mesh/docs/articles/double_y_axes"},next:{title:"annotation \u81ea\u5b9a\u4e49\u6807\u6ce8",permalink:"/mesh/docs/articles/annotation"}},o=[{value:"\u94fe\u63a5",id:"\u94fe\u63a5",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[{value:"\u7b2c\u4e00\u79cd\uff1acustomContent \u5c55\u793a\u5355\u4e2a",id:"\u7b2c\u4e00\u79cdcustomcontent-\u5c55\u793a\u5355\u4e2a",children:[]},{value:"\u7b2c\u4e8c\u79cd\uff1a.tooltip(&#39;time*cpu&#39;, (prop, value) =&gt; {}) \u5c55\u793a\u5355\u4e2a",id:"\u7b2c\u4e8c\u79cdtooltiptimecpu-prop-value---\u5c55\u793a\u5355\u4e2a",children:[]},{value:"\u7b2c\u4e09\u79cd\uff1acontainerTpl, itemTpl \u5c55\u793a\u591a\u4e2a",id:"\u7b2c\u4e09\u79cdcontainertpl-itemtpl-\u5c55\u793a\u591a\u4e2a",children:[]}]}],u={toc:o};function m(t){var e=t.components,c=(0,d.Z)(t,r);return(0,n.kt)("wrapper",(0,i.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://g2.antv.vision/zh/docs/manual/tutorial/tooltip"},"AntV G2 - Tooltip \u63d0\u793a\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://g2.antv.vision/zh/examples/case/line#line8"},"CPU \u5360\u7528\u7387\u5b9e\u65f6\u76d1\u63a7"))),(0,n.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,n.kt)("h3",{id:"\u7b2c\u4e00\u79cdcustomcontent-\u5c55\u793a\u5355\u4e2a"},"\u7b2c\u4e00\u79cd\uff1acustomContent \u5c55\u793a\u5355\u4e2a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7697).Z})),(0,n.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Chart } from \'@antv/g2\'\nconst data = [\n  {"date":"yesterday","time":"13.00","cpu":63.93689627294421},{"date":"yesterday","time":"13.05","cpu":65.06585239044342},{"date":"yesterday","time":"13.10","cpu":66.42719381417056},{"date":"yesterday","time":"13.15","cpu":63.060669399125935},{"date":"yesterday","time":"13.20","cpu":64.04639809297761},{"date":"yesterday","time":"13.25","cpu":64.45117682728456},{"date":"yesterday","time":"13.30","cpu":63.35488066344804},{"date":"yesterday","time":"13.35","cpu":65.2969449309885},{"date":"yesterday","time":"13.40","cpu":66.35014444552017},{"date":"yesterday","time":"13.45","cpu":66.198378961063},{"date":"yesterday","time":"13.50","cpu":66.85520134738813},{"date":"yesterday","time":"13.55","cpu":65.05419984325125},{"date":"yesterday","time":"14.00","cpu":66.62243229531435},{"date":"yesterday","time":"14.05","cpu":66.77808066603122},{"date":"yesterday","time":"14.10","cpu":66.9144977524293},{"date":"yesterday","time":"14.15","cpu":65.05499508303669},{"date":"yesterday","time":"14.20","cpu":66.36871158902638},{"date":"yesterday","time":"14.25","cpu":63.973903073723044},{"date":"yesterday","time":"14.30","cpu":64.92585536363889},{"date":"yesterday","time":"14.35","cpu":65.17145801764055},{"date":"yesterday","time":"14.40","cpu":64.42516834555609},{"date":"yesterday","time":"14.45","cpu":63.701363912573775},{"date":"yesterday","time":"14.50","cpu":66.11568649665543},{"date":"yesterday","time":"14.55","cpu":64.0474592964878},{"date":"yesterday","time":"15.00","cpu":64.25676632707459},{"date":"yesterday","time":"15.00","cpu":65},\n  {"time":"13.00","cpu":150,"date":"today"},{"time":"13.05","cpu":100,"date":"today"},{"time":"13.10","cpu":100,"date":"today"},{"time":"13.15","cpu":100,"date":"today"},{"time":"13.20","cpu":120,"date":"today"},{"time":"13.25","cpu":100,"date":"today"},{"time":"13.30","cpu":100,"date":"today"},{"time":"13.35","cpu":100,"date":"today"},{"time":"13.40","cpu":100,"date":"today"},{"time":"13.45","cpu":100,"date":"today"},{"time":"13.50","cpu":100,"date":"today"},{"time":"13.55","cpu":100,"date":"today"},{"time":"14.00","cpu":65,"date":"today"},{"time":"14.05","cpu":72.16886580736812,"date":"today"},{"time":"14.10","cpu":68.57230489482068,"date":"today"},{"time":"14.15","cpu":71.43150028596347,"date":"today"},{"time":"14.20","cpu":78.14636866352923,"date":"today"},{"time":"14.25","cpu":68.36883432160218,"date":"today"},{"time":"14.30","cpu":75.39521675212667,"date":"today"},{"time":"14.35","cpu":75.27433214647408,"date":"today"},{"time":"14.40","cpu":82.10189835378893,"date":"today"},{"time":"14.45","cpu":84.7261454369566,"date":"today"},{"time":"14.50","cpu":78.96269733695286,"date":"today"},{"time":"14.55","cpu":86.43607929073264,"date":"today"},{"time":"15.00","cpu":85,"date":"today"}\n]\nconst chart = new Chart({\n  container: \'container\',\n  autoFit: true,\n  height: 500,\n})\nchart.data(data)\nchart.line().position(\'time*cpu\').color(\'date\', [\'#1890ff\', \'#ced4d9\'])\nchart.tooltip({\n  customContent: (name, items) => {\n    const container = document.createElement(\'div\')\n    container.className = \'g2-tooltip\'\n    let listItem = \'\'\n    items.forEach((item) => {\n      console.log(item)\n      listItem += `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;align-items: center;">\n  <span style="background-color:${item.mappingData.color || item.color};" class="g2-tooltip-marker"></span>\n  <span style="display:inline-flex;flex:1;justify-content:space-between">\n  <span style="margin-right: 16px;">${item.data.date}:</span><span>${item.value}</span></span>\n</li>`\n    })\n    const title = `<div class="g2-tooltip-title" style="margin-top: 12px;margin-bottom: 12px;">${name}</div>`\n    container.innerHTML = title + listItem\n    return container\n  }\n})\nchart.render()\n')),(0,n.kt)("h3",{id:"\u7b2c\u4e8c\u79cdtooltiptimecpu-prop-value---\u5c55\u793a\u5355\u4e2a"},"\u7b2c\u4e8c\u79cd\uff1a.tooltip('time*cpu', (prop, value) => {}) \u5c55\u793a\u5355\u4e2a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5479).Z})),(0,n.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Chart } from \'@antv/g2\'\nconst data = [\n  {"date":"yesterday","time":"13.00","cpu":63.93689627294421},{"date":"yesterday","time":"13.05","cpu":65.06585239044342},{"date":"yesterday","time":"13.10","cpu":66.42719381417056},{"date":"yesterday","time":"13.15","cpu":63.060669399125935},{"date":"yesterday","time":"13.20","cpu":64.04639809297761},{"date":"yesterday","time":"13.25","cpu":64.45117682728456},{"date":"yesterday","time":"13.30","cpu":63.35488066344804},{"date":"yesterday","time":"13.35","cpu":65.2969449309885},{"date":"yesterday","time":"13.40","cpu":66.35014444552017},{"date":"yesterday","time":"13.45","cpu":66.198378961063},{"date":"yesterday","time":"13.50","cpu":66.85520134738813},{"date":"yesterday","time":"13.55","cpu":65.05419984325125},{"date":"yesterday","time":"14.00","cpu":66.62243229531435},{"date":"yesterday","time":"14.05","cpu":66.77808066603122},{"date":"yesterday","time":"14.10","cpu":66.9144977524293},{"date":"yesterday","time":"14.15","cpu":65.05499508303669},{"date":"yesterday","time":"14.20","cpu":66.36871158902638},{"date":"yesterday","time":"14.25","cpu":63.973903073723044},{"date":"yesterday","time":"14.30","cpu":64.92585536363889},{"date":"yesterday","time":"14.35","cpu":65.17145801764055},{"date":"yesterday","time":"14.40","cpu":64.42516834555609},{"date":"yesterday","time":"14.45","cpu":63.701363912573775},{"date":"yesterday","time":"14.50","cpu":66.11568649665543},{"date":"yesterday","time":"14.55","cpu":64.0474592964878},{"date":"yesterday","time":"15.00","cpu":64.25676632707459},{"date":"yesterday","time":"15.00","cpu":65},\n  {"time":"13.00","cpu":150,"date":"today"},{"time":"13.05","cpu":100,"date":"today"},{"time":"13.10","cpu":100,"date":"today"},{"time":"13.15","cpu":100,"date":"today"},{"time":"13.20","cpu":120,"date":"today"},{"time":"13.25","cpu":100,"date":"today"},{"time":"13.30","cpu":100,"date":"today"},{"time":"13.35","cpu":100,"date":"today"},{"time":"13.40","cpu":100,"date":"today"},{"time":"13.45","cpu":100,"date":"today"},{"time":"13.50","cpu":100,"date":"today"},{"time":"13.55","cpu":100,"date":"today"},{"time":"14.00","cpu":65,"date":"today"},{"time":"14.05","cpu":72.16886580736812,"date":"today"},{"time":"14.10","cpu":68.57230489482068,"date":"today"},{"time":"14.15","cpu":71.43150028596347,"date":"today"},{"time":"14.20","cpu":78.14636866352923,"date":"today"},{"time":"14.25","cpu":68.36883432160218,"date":"today"},{"time":"14.30","cpu":75.39521675212667,"date":"today"},{"time":"14.35","cpu":75.27433214647408,"date":"today"},{"time":"14.40","cpu":82.10189835378893,"date":"today"},{"time":"14.45","cpu":84.7261454369566,"date":"today"},{"time":"14.50","cpu":78.96269733695286,"date":"today"},{"time":"14.55","cpu":86.43607929073264,"date":"today"},{"time":"15.00","cpu":85,"date":"today"}\n]\nconst chart = new Chart({\n  container: \'container\',\n  autoFit: true,\n  height: 500,\n})\nchart.data(data)\nchart.line().position(\'time*cpu\').color(\'date\', [\'#1890ff\', \'#ced4d9\']).tooltip(\'time*cpu\', (prop, value) => {\n  return {\n    title: Number(prop),\n    name: \'CPU\',\n    value: value.toLocaleString(),\n  }\n})\nchart.render()\n')),(0,n.kt)("h4",{id:"\u7f3a\u9677"},"\u7f3a\u9677"),(0,n.kt)("p",null,"\u53ea\u80fd\u53d6\u5230 prop \u548c value\u3002"),(0,n.kt)("h4",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("p",null,"\u53ea\u80fd\u8fd9\u4e48\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"chart\n  .line().position('time*cpu').color('date', ['#1890ff', '#ced4d9'])\n  .tooltip('time*cpu', (prop, value) => {})\n")),(0,n.kt)("p",null,"\u4e0d\u80fd\u8fd9\u4e48\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"chart.line().position('time*cpu').color('date', ['#1890ff', '#ced4d9'])\nchart.tooltip('time*cpu', (prop, value) => {})\n")),(0,n.kt)("h3",{id:"\u7b2c\u4e09\u79cdcontainertpl-itemtpl-\u5c55\u793a\u591a\u4e2a"},"\u7b2c\u4e09\u79cd\uff1acontainerTpl, itemTpl \u5c55\u793a\u591a\u4e2a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4674).Z})),(0,n.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Chart } from \'@antv/g2\'\nconst data = [\n  {"date":"yesterday","time":"13.00","cpu":63.93689627294421},{"date":"yesterday","time":"13.05","cpu":65.06585239044342},{"date":"yesterday","time":"13.10","cpu":66.42719381417056},{"date":"yesterday","time":"13.15","cpu":63.060669399125935},{"date":"yesterday","time":"13.20","cpu":64.04639809297761},{"date":"yesterday","time":"13.25","cpu":64.45117682728456},{"date":"yesterday","time":"13.30","cpu":63.35488066344804},{"date":"yesterday","time":"13.35","cpu":65.2969449309885},{"date":"yesterday","time":"13.40","cpu":66.35014444552017},{"date":"yesterday","time":"13.45","cpu":66.198378961063},{"date":"yesterday","time":"13.50","cpu":66.85520134738813},{"date":"yesterday","time":"13.55","cpu":65.05419984325125},{"date":"yesterday","time":"14.00","cpu":66.62243229531435},{"date":"yesterday","time":"14.05","cpu":66.77808066603122},{"date":"yesterday","time":"14.10","cpu":66.9144977524293},{"date":"yesterday","time":"14.15","cpu":65.05499508303669},{"date":"yesterday","time":"14.20","cpu":66.36871158902638},{"date":"yesterday","time":"14.25","cpu":63.973903073723044},{"date":"yesterday","time":"14.30","cpu":64.92585536363889},{"date":"yesterday","time":"14.35","cpu":65.17145801764055},{"date":"yesterday","time":"14.40","cpu":64.42516834555609},{"date":"yesterday","time":"14.45","cpu":63.701363912573775},{"date":"yesterday","time":"14.50","cpu":66.11568649665543},{"date":"yesterday","time":"14.55","cpu":64.0474592964878},{"date":"yesterday","time":"15.00","cpu":64.25676632707459},{"date":"yesterday","time":"15.00","cpu":65},\n  {"time":"13.00","cpu":150,"date":"today"},{"time":"13.05","cpu":100,"date":"today"},{"time":"13.10","cpu":100,"date":"today"},{"time":"13.15","cpu":100,"date":"today"},{"time":"13.20","cpu":120,"date":"today"},{"time":"13.25","cpu":100,"date":"today"},{"time":"13.30","cpu":100,"date":"today"},{"time":"13.35","cpu":100,"date":"today"},{"time":"13.40","cpu":100,"date":"today"},{"time":"13.45","cpu":100,"date":"today"},{"time":"13.50","cpu":100,"date":"today"},{"time":"13.55","cpu":100,"date":"today"},{"time":"14.00","cpu":65,"date":"today"},{"time":"14.05","cpu":72.16886580736812,"date":"today"},{"time":"14.10","cpu":68.57230489482068,"date":"today"},{"time":"14.15","cpu":71.43150028596347,"date":"today"},{"time":"14.20","cpu":78.14636866352923,"date":"today"},{"time":"14.25","cpu":68.36883432160218,"date":"today"},{"time":"14.30","cpu":75.39521675212667,"date":"today"},{"time":"14.35","cpu":75.27433214647408,"date":"today"},{"time":"14.40","cpu":82.10189835378893,"date":"today"},{"time":"14.45","cpu":84.7261454369566,"date":"today"},{"time":"14.50","cpu":78.96269733695286,"date":"today"},{"time":"14.55","cpu":86.43607929073264,"date":"today"},{"time":"15.00","cpu":85,"date":"today"}\n]\nconst chart = new Chart({\n  container: \'container\',\n  autoFit: true,\n  height: 500,\n})\nchart.data(data)\nchart.line().position(\'time*cpu\').color(\'date\', [\'#1890ff\', \'#ced4d9\'])\nchart.tooltip({\n  // tooltip \u5bb9\u5668\u6a21\u677f\n  containerTpl: `<div class="g2-tooltip">\n    <div class="g2-tooltip-title" style="margin:10px 0;"></div>\n    <ul class="g2-tooltip-list"></ul>\n</div>`,\n  // tooltip \u6bcf\u9879\u8bb0\u5f55\u7684\u9ed8\u8ba4\u6a21\u677f\n  itemTpl: `<li data-index={index}>\n  <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}\n</li>`,\n})\nchart.render()\n')))}m.isMDXComponent=!0},7697:function(t,e,a){e.Z=a.p+"assets/images/img_1-bd9cb9c056ee685a4fd97a6cf32b6610.png"},5479:function(t,e,a){e.Z=a.p+"assets/images/img_2-637e287ed1a5004d56eb376b33d9adff.png"},4674:function(t,e,a){e.Z=a.p+"assets/images/img_3-fbb5670bbcf08fd985de701cb9ba1cae.png"}}]);