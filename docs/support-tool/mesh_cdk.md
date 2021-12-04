---
sidebar_position: 301
---

# @mesh/cdk - MeshCloud 组件开发套件

## 什么是 CDK？

[Angluar 对于 CDK 的解释](https://material.angular.io/cdk/categories)：

> The Component Dev Kit (CDK) is a set of behavior primitives for building UI components. (组件开发套件(CDK)是一组用于构建 UI 组件的行为基元)
> 
> If the component library is a rocket ship, the cdk is the box of engine parts. (如果组件库是火箭飞船，那么 CDK 就是发动机零件盒)

## CDK 起源

在 [Angular CDK 基础介绍](https://ithelp.ithome.com.tw/articles/10196968) 这篇文章中提到。

Angular Material 团队在开发组件库时。发现一个事实：**许多组件，都有一部分公用的功能。而抽取出来的部分，就是 Angular CDK**。

![](/img/support-tool/mesh_cdk/cdk.png)


## 为什么需要 CDK？

CDK 的目标是为开发人员提供更多工具来为 web 构建优质组件。

这对于**想要利用 Angular Material 的特性，而不采用 Material Design 视觉语言**的项目特别有用。—— Angular 团队

CDK 由一堆服务、指令、组件、类、模块等组成，使我们在开发 Angular 组件时的生活更轻松。在当前的第一个版本中，它们包括 accessibility(可访问性)、text directionality(文本方向性)、platform detection(平台检测) 和 dynamic component instantiation(动态组件实例化) 等功能。

总结：有时开发者需要的不是一组 UI 组件，而是一些构建 UI 组件的通用能力，可以自定义自己的 UI 组件。

## Angular CDK 基本元件

参考 [CDK 文档 (v9)](https://v9.material.angular.io/cdk/categories)

组件开发工具包 (CDK) 是一组工具，用于实现常见的交互模式，同时对它们的表示没有意见。它代表了 Angular Material 库中核心功能的抽象，没有任何特定于 Material Design 的样式。将 CDK 视为经过充分测试的功能的空白状态，您可以在此基础上开发自己的定制组件。

![](/img/support-tool/mesh_cdk/cdk_mind.png)

### Common Behaviors

用于实现通用功能的工具，如滚动、粘贴板等；

### Components

具有实用功能的无样式组件，类似于组件的 model 层；

### Testing

用于测试组件的工具；

## CDK 可以做什么

### 以 Angular CDK 的 Overlay 为例

![](/img/support-tool/mesh_cdk/cdk_overlay_option.png)

```javascript
// 相对位置策略（相对于某个元素）
const strategy = this.overlay
  .position()
  .flexibleConnectedTo(this.createMenuBtn)
  .withPositions([{
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top'
  }]
);
this.overlayRef = this.overlay.create({
  positionStrategy: strategy
});
this.overlayRef.attach(new TemplatePortal(this.menuTpl, this.viewContainerRef));

// 全局位置策略（相对于浏览器视口）
const strategy = this.overlay.position().global().centerHorizontally().centerVertically();
const config = new OverlayConfig({
  hasBackdrop: true,
  positionStrategy: strategy
});
this.overlayRef = this.overlay.create(config);
this.overlayRef.attach(new TemplatePortal(this.dialogTpl, this.viewContainerRef));
this.overlayRef.backdropClick().subscribe(() => {
  this.overlayRef.detach();
});
```

## 参考链接

- [Angular CDK 文档](https://material.angular.io/cdk/categories)
- [Angular CDK 介绍视频](https://www.youtube.com/watch?v=kYDLlfpTLEA)
- [A first look into the Angular CDK](https://hackernoon.com/a-first-look-into-the-angular-cdk-67e68807ed9b)
- [Angular CDK - 基础介绍](https://ithelp.ithome.com.tw/articles/10196968)
- [Angular CDK - Accessibility](https://ithelp.ithome.com.tw/articles/10197071)
- [Angular CDK - Bidirectionality、Layout](https://ithelp.ithome.com.tw/articles/10197159)
- [Angular CDK - Observables、Scrolling](https://ithelp.ithome.com.tw/articles/10197285)
- [Angular CDK - Portal](https://ithelp.ithome.com.tw/articles/10197393)
- [Angular CDK - Bidirectionality、Layout](https://ithelp.ithome.com.tw/articles/10197159)
- [Angular CDK - Overlay](https://ithelp.ithome.com.tw/articles/10197492)
- [Angular CDK - Coercion、Platform](https://ithelp.ithome.com.tw/articles/10197609)
