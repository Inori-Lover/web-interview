import type { DefaultTheme } from 'vitepress'

export const sidebar = [
  {
    "text": "Vue系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对vue的理解?",
        "link": "/vue/vue.html"
      },
      {
        "text": "说说你对SPA（单页应用）的理解?",
        "link": "/vue/spa.html"
      },
      {
        "text": "Vue中的v-show和v-if怎么理解？",
        "link": "/vue/show_if.html"
      },
      {
        "text": "Vue实例挂载的过程中发生了什么?",
        "link": "/vue/new_vue.html"
      },
      {
        "text": "说说你对Vue生命周期的理解?",
        "link": "/vue/lifecycle.html"
      },
      {
        "text": "为什么Vue中的v-if和v-for不建议一起用?",
        "link": "/vue/if_for.html"
      },
      {
        "text": "SPA（单页应用）首屏加载速度慢怎么解决？",
        "link": "/vue/first_page_time.html"
      },
      {
        "text": "为什么data属性是一个函数而不是一个对象？",
        "link": "/vue/data.html"
      },
      {
        "text": "Vue中给对象添加新属性界面不刷新?",
        "link": "/vue/data_object_add_attrs.html"
      },
      {
        "text": "Vue中组件和插件有什么区别？",
        "link": "/vue/components_plugin.html"
      },
      {
        "text": "Vue组件间通信方式都有哪些?",
        "link": "/vue/communication.html"
      },
      {
        "text": "说说你对双向绑定的理解?",
        "link": "/vue/bind.html"
      },
      {
        "text": "说说你对nexttick的理解?",
        "link": "/vue/nexttick.html"
      },
      {
        "text": "说说你对vue的mixin的理解，有什么应用场景？",
        "link": "/vue/mixin.html"
      },
      {
        "text": "说说你对slot的理解？slot使用场景有哪些？",
        "link": "/vue/slot.html"
      },
      {
        "text": "Vue.observable你有了解过吗？说说看",
        "link": "/vue/observable.html"
      },
      {
        "text": "你知道vue中key的原理吗？说说你对它的理解？",
        "link": "/vue/key.html"
      },
      {
        "text": "怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？",
        "link": "/vue/keepalive.html"
      },
      {
        "text": "Vue常用的修饰符有哪些？有什么应用场景？",
        "link": "/vue/modifier.html"
      },
      {
        "text": "你有写过自定义指令吗？自定义指令的应用场景有哪些？",
        "link": "/vue/directive.html"
      },
      {
        "text": "Vue中的过滤器了解吗？过滤器的应用场景有哪些？",
        "link": "/vue/filter.html"
      },
      {
        "text": "什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路",
        "link": "/vue/vnode.html"
      },
      {
        "text": "你了解vue的diff算法吗？说说看",
        "link": "/vue/diff.html"
      },
      {
        "text": "Vue项目中有封装过axios吗？主要是封装哪方面的？",
        "link": "/vue/axios.html"
      },
      {
        "text": "你了解axios的原理吗？有看过它的源码吗？",
        "link": "/vue/axiosCode.html"
      },
      {
        "text": "SSR解决了什么问题？有做过SSR吗？你是怎么做的？",
        "link": "/vue/ssr.html"
      },
      {
        "text": "说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？",
        "link": "/vue/structure.html"
      },
      {
        "text": "vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？",
        "link": "/vue/permission.html"
      },
      {
        "text": "Vue项目中你是如何解决跨域的呢？",
        "link": "/vue/cors.html"
      },
      {
        "text": "vue项目本地开发完成后部署到服务器后报404是什么原因呢？",
        "link": "/vue/404.html"
      },
      {
        "text": "你是怎么处理vue项目中的错误的？",
        "link": "/vue/error.html"
      },
      {
        "text": "Vue3有了解过吗？能说说跟Vue2的区别吗？",
        "link": "/vue/vue3_vue2.html"
      }
    ]
  },
  {
    "text": "Vue3系列",
    "collapsed": true,
    "items": [
      {
        "text": "Vue3.0的设计目标是什么？做了哪些优化?",
        "link": "/vue3/goal.html"
      },
      {
        "text": "Vue3.0 性能提升主要是通过哪几方面体现的？",
        "link": "/vue3/performance.html"
      },
      {
        "text": "Vue3.0里为什么要用 Proxy API 替代 defineProperty API ？",
        "link": "/vue3/proxy.html"
      },
      {
        "text": "Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？",
        "link": "/vue3/composition.html"
      },
      {
        "text": "说说Vue 3.0中Treeshaking特性？举例说明一下？",
        "link": "/vue3/treeshaking.html"
      },
      {
        "text": "用Vue3.0 写过组件吗？如果想实现一个 Modal你会怎么设计？",
        "link": "/vue3/modal_component.html"
      }
    ]
  },
  {
    "text": "ES6系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说var、let、const之间的区别",
        "link": "/es6/var_let_const.html"
      },
      {
        "text": "ES6中数组新增了哪些扩展?",
        "link": "/es6/array.html"
      },
      {
        "text": "ES6中对象新增了哪些扩展?",
        "link": "/es6/object.html"
      },
      {
        "text": "ES6中函数新增了哪些扩展?",
        "link": "/es6/function.html"
      },
      {
        "text": "ES6中新增的Set、Map两种数据结构怎么理解?",
        "link": "/es6/set_map.html"
      },
      {
        "text": "你是怎么理解ES6中 Promise的？使用场景？",
        "link": "/es6/promise.html"
      },
      {
        "text": "怎么理解ES6中 Generator的？使用场景？",
        "link": "/es6/generator.html"
      },
      {
        "text": "你是怎么理解ES6中Proxy的？使用场景?",
        "link": "/es6/proxy.html"
      },
      {
        "text": "你是怎么理解ES6中Module的？使用场景？",
        "link": "/es6/module.html"
      },
      {
        "text": "你是怎么理解ES6中 Decorator 的？使用场景？",
        "link": "/es6/decorator.html"
      }
    ]
  },
  {
    "text": "JavaScript系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说JavaScript中的数据类型？存储上的差别？",
        "link": "/JavaScript/data_type.html"
      },
      {
        "text": "说说你了解的 JavaScript 数据结构",
        "link": "/JavaScript/js_data_structure.html"
      },
      {
        "text": "数组的常用方法有哪些？",
        "link": "/JavaScript/array_api.html"
      },
      {
        "text": "JavaScript字符串的常用方法有哪些？",
        "link": "/JavaScript/string_api.html"
      },
      {
        "text": "谈谈 JavaScript 中的类型转换机制",
        "link": "/JavaScript/type_conversion.html"
      },
      {
        "text": "== 和 ===区别，分别在什么情况使用",
        "link": "/JavaScript/==%20_===.html"
      },
      {
        "text": "深拷贝浅拷贝的区别？如何实现一个深拷贝？",
        "link": "/JavaScript/copy.html"
      },
      {
        "text": "说说你对闭包的理解？闭包使用场景",
        "link": "/JavaScript/closure.html"
      },
      {
        "text": "说说你对作用域链的理解",
        "link": "/JavaScript/scope.html"
      },
      {
        "text": "JavaScript原型，原型链 ? 有什么特点？",
        "link": "/JavaScript/prototype.html"
      },
      {
        "text": "Javascript如何实现继承？",
        "link": "/JavaScript/inherit.html"
      },
      {
        "text": "谈谈this对象的理解",
        "link": "/JavaScript/this.html"
      },
      {
        "text": "JavaScript中执行上下文和执行栈是什么？",
        "link": "/JavaScript/context_stack.html"
      },
      {
        "text": "说说JavaScript中的事件模型",
        "link": "/JavaScript/event_Model.html"
      },
      {
        "text": "typeof 与 instanceof 区别",
        "link": "/JavaScript/typeof_instanceof.html"
      },
      {
        "text": "解释下什么是事件代理？应用场景？",
        "link": "/JavaScript/event_agent.html"
      },
      {
        "text": "说说new操作符具体干了什么？",
        "link": "/JavaScript/new.html"
      },
      {
        "text": "ajax原理是什么？如何实现？",
        "link": "/JavaScript/ajax.html"
      },
      {
        "text": "bind、call、apply 区别？如何实现一个bind?",
        "link": "/JavaScript/bind_call_apply.html"
      },
      {
        "text": "说说你对正则表达式的理解？应用场景？",
        "link": "/JavaScript/regexp.html"
      },
      {
        "text": "说说你对事件循环的理解",
        "link": "/JavaScript/event_loop.html"
      },
      {
        "text": "DOM常见的操作有哪些？",
        "link": "/JavaScript/Dom.html"
      },
      {
        "text": "说说你对BOM的理解，常见的BOM对象你了解哪些？",
        "link": "/JavaScript/BOM.html"
      },
      {
        "text": "举例说明你对尾递归的理解，有哪些应用场景",
        "link": "/JavaScript/tail_recursion.html"
      },
      {
        "text": "说说 JavaScript 中内存泄漏的几种情况？",
        "link": "/JavaScript/memory_leak.html"
      },
      {
        "text": "Javascript本地存储的方式有哪些？区别及应用场景？",
        "link": "/JavaScript/cache.html"
      },
      {
        "text": "说说你对函数式编程的理解？优缺点？",
        "link": "/JavaScript/functional_programming.html"
      },
      {
        "text": "Javascript中如何实现函数缓存？函数缓存有哪些应用场景？",
        "link": "/JavaScript/function_cache.html"
      },
      {
        "text": "说说 Javascript 数字精度丢失的问题，如何解决？",
        "link": "/JavaScript/loss_accuracy.html"
      },
      {
        "text": "什么是防抖和节流？有什么区别？如何实现？",
        "link": "/JavaScript/debounce_throttle.html"
      },
      {
        "text": "如何判断一个元素是否在可视区域中？",
        "link": "/JavaScript/visible.html"
      },
      {
        "text": "大文件上传如何做断点续传？",
        "link": "/JavaScript/continue_to_upload.html"
      },
      {
        "text": "如何实现上拉加载，下拉刷新？",
        "link": "/JavaScript/pull_up_loading_pull_down_refresh.html"
      },
      {
        "text": "什么是单点登录？如何实现？",
        "link": "/JavaScript/single_sign.html"
      },
      {
        "text": "web常见的攻击方式有哪些？如何防御？",
        "link": "/JavaScript/security.html"
      }
    ]
  },
  {
    "text": "CSS系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对盒子模型的理解?",
        "link": "/css/box.html"
      },
      {
        "text": "css选择器有哪些？优先级？哪些属性可以继承？",
        "link": "/css/selector.html"
      },
      {
        "text": "说说em/px/rem/vh/vw区别?",
        "link": "/css/em_px_rem_vh_vw.html"
      },
      {
        "text": "说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？",
        "link": "/css/dp_px_dpr_ppi.html"
      },
      {
        "text": "css中，有哪些方式可以隐藏页面元素？区别?",
        "link": "/css/hide_attributes.html"
      },
      {
        "text": "谈谈你对BFC的理解？",
        "link": "/css/BFC.html"
      },
      {
        "text": "元素水平垂直居中的方法有哪些？如果元素不定宽高呢？",
        "link": "/css/center.html"
      },
      {
        "text": "如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？",
        "link": "/css/column_layout.html"
      },
      {
        "text": "说说flexbox（弹性盒布局模型）,以及适用场景？",
        "link": "/css/flexbox.html"
      },
      {
        "text": "介绍一下grid网格布局",
        "link": "/css/grid.html"
      },
      {
        "text": "CSS3新增了哪些新特性？",
        "link": "/css/css3_features.html"
      },
      {
        "text": "css3动画有哪些？",
        "link": "/css/animation.html"
      },
      {
        "text": "怎么理解回流跟重绘？什么场景下会触发？",
        "link": "/css/layout_painting.html"
      },
      {
        "text": "什么是响应式设计？响应式设计的基本原理是什么？如何做？",
        "link": "/css/responsive_layout.html"
      },
      {
        "text": "如果要做优化，CSS提高性能的方法有哪些？",
        "link": "/css/css_performance.html"
      },
      {
        "text": "如何实现单行／多行文本溢出的省略样式？",
        "link": "/css/single_multi_line.html"
      },
      {
        "text": "如何使用css完成视差滚动效果?",
        "link": "/css/visual_scrolling.html"
      },
      {
        "text": "CSS如何画一个三角形？原理是什么？",
        "link": "/css/triangle.html"
      },
      {
        "text": "让Chrome支持小于12px 的文字方式有哪些？区别？",
        "link": "/css/less_12px.html"
      },
      {
        "text": "说说对Css预编语言的理解？有哪些区别?",
        "link": "/css/sass_less_stylus.html"
      }
    ]
  },
  {
    "text": "Webpack系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对webpack的理解？解决了什么问题？",
        "link": "/webpack/webpack.html"
      },
      {
        "text": "说说webpack的构建流程?",
        "link": "/webpack/build_process.html"
      },
      {
        "text": "说说webpack中常见的Loader？解决了什么问题？",
        "link": "/webpack/Loader.html"
      },
      {
        "text": "说说webpack中常见的Plugin？解决了什么问题？",
        "link": "/webpack/Plugin.html"
      },
      {
        "text": "说说Loader和Plugin的区别？编写Loader，Plugin的思路？",
        "link": "/webpack/Loader_Plugin.html"
      },
      {
        "text": "说说webpack的热更新是如何做到的？原理是什么？",
        "link": "/webpack/HMR.html"
      },
      {
        "text": "说说webpack proxy工作原理？为什么能解决跨域?",
        "link": "/webpack/proxy.html"
      },
      {
        "text": "说说如何借助webpack来优化前端性能？",
        "link": "/webpack/performance.html"
      },
      {
        "text": "如何提高webpack的构建速度？",
        "link": "/webpack/improve_build.html"
      },
      {
        "text": "与webpack类似的工具还有哪些？区别？",
        "link": "/webpack/Rollup_Parcel_snowpack_Vite.html"
      }
    ]
  },
  {
    "text": "HTTP系列",
    "collapsed": true,
    "items": [
      {
        "text": "什么是HTTP? HTTP 和 HTTPS 的区别?",
        "link": "/http/HTTP_HTTPS.html"
      },
      {
        "text": "为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？",
        "link": "/http/HTTPS.html"
      },
      {
        "text": "如何理解UDP 和 TCP? 区别? 应用场景?",
        "link": "/http/UDP_TCP.html"
      },
      {
        "text": "如何理解OSI七层模型?",
        "link": "/http/OSI.html"
      },
      {
        "text": "如何理解TCP/IP协议?",
        "link": "/http/TCP_IP.html"
      },
      {
        "text": "DNS协议 是什么？说说DNS 完整的查询过程?",
        "link": "/http/DNS.html"
      },
      {
        "text": "如何理解CDN？说说实现原理？",
        "link": "/http/CDN.html"
      },
      {
        "text": "说说 HTTP1.0/1.1/2.0 的区别?",
        "link": "/http/1.0_1.1_2.0.html"
      },
      {
        "text": "说说 HTTP 常见的状态码有哪些，适用场景？",
        "link": "/http/status.html"
      },
      {
        "text": "说一下 GET 和 POST 的区别？",
        "link": "/http/GET_POST.html"
      },
      {
        "text": "说说 HTTP 常见的请求头有哪些? 作用？",
        "link": "/http/headers.html"
      },
      {
        "text": "说说地址栏输入 URL 敲下回车后发生了什么？",
        "link": "/http/after_url.html"
      },
      {
        "text": "说说TCP为什么需要三次握手和四次挥手？",
        "link": "/http/handshakes_waves.html"
      },
      {
        "text": "说说对WebSocket的理解？应用场景？",
        "link": "/http/WebSocket.html"
      }
    ]
  },
  {
    "text": "NodeJS系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对 Node.js 的理解？优缺点？应用场景？",
        "link": "/NodeJS/nodejs.html"
      },
      {
        "text": "说说 Node.js 有哪些全局对象？",
        "link": "/NodeJS/global.html"
      },
      {
        "text": "说说对 Node 中的 process 的理解？有哪些常用方法？",
        "link": "/NodeJS/process.html"
      },
      {
        "text": "说说对 Node 中的 fs模块的理解? 有哪些常用方法",
        "link": "/NodeJS/fs.html"
      },
      {
        "text": "说说对 Node 中的 Buffer 的理解？应用场景？",
        "link": "/NodeJS/Buffer.html"
      },
      {
        "text": "说说对 Node 中的 Stream 的理解？应用场景？",
        "link": "/NodeJS/Stream.html"
      },
      {
        "text": "说说Node中的EventEmitter? 如何实现一个EventEmitter?",
        "link": "/NodeJS/EventEmitter.html"
      },
      {
        "text": "说说对 Nodejs 中的事件循环机制理解?",
        "link": "/NodeJS/event_loop.html"
      },
      {
        "text": "说说 Node 文件查找的优先级以及 Require 方法的文件查找策略?",
        "link": "/NodeJS/require_order.html"
      },
      {
        "text": "说说对中间件概念的理解，如何封装 node 中间件？",
        "link": "/NodeJS/middleware.html"
      },
      {
        "text": "如何实现jwt鉴权机制？说说你的思路",
        "link": "/NodeJS/jwt.html"
      },
      {
        "text": "如何实现文件上传？说说你的思路",
        "link": "/NodeJS/file_upload.html"
      },
      {
        "text": "如果让你来设计一个分页功能, 你会怎么设计? 前后端如何交互?",
        "link": "/NodeJS/paging.html"
      },
      {
        "text": "Node性能如何进行监控以及优化？",
        "link": "/NodeJS/performance.html"
      }
    ]
  },
  {
    "text": "React系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说对React的理解？有哪些特性？",
        "link": "/React/React.html"
      },
      {
        "text": "说说 Real DOM和 Virtual DOM 的区别？优缺点？",
        "link": "/React/Real%20DOM_Virtual%20DOM.html"
      },
      {
        "text": "说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？",
        "link": "/React/life%20cycle.html"
      },
      {
        "text": "state 和 props有什么区别？",
        "link": "/React/state_props.html"
      },
      {
        "text": "super()和super(props)有什么区别？",
        "link": "/React/super()_super(props).html"
      },
      {
        "text": "说说 React中的setState执行机制",
        "link": "/React/setState.html"
      },
      {
        "text": "说说React的事件机制？",
        "link": "/React/SyntheticEvent.html"
      },
      {
        "text": "React事件绑定的方式有哪些？区别？",
        "link": "/React/Binding%20events.html"
      },
      {
        "text": "React构建组件的方式有哪些？区别？",
        "link": "/React/Building%20components.html"
      },
      {
        "text": "React中组件之间如何通信？",
        "link": "/React/communication.html"
      },
      {
        "text": "React中的key有什么作用？",
        "link": "/React/key.html"
      },
      {
        "text": "说说对React refs 的理解？应用场景？",
        "link": "/React/React%20refs.html"
      },
      {
        "text": "说说对React中类组件和函数组件的理解？有什么区别？",
        "link": "/React/class_function%20component.html"
      },
      {
        "text": "说说对受控组件和非受控组件的理解？应用场景？",
        "link": "/React/controlled_Uncontrolled.html"
      },
      {
        "text": "说说对高阶组件的理解？应用场景?",
        "link": "/React/High%20order%20components.html"
      },
      {
        "text": "说说对React Hooks的理解？解决了什么问题？",
        "link": "/React/React%20Hooks.html"
      },
      {
        "text": "说说react中引入css的方式有哪几种？区别？",
        "link": "/React/import%20css.html"
      },
      {
        "text": "在react中组件间过渡动画如何实现？",
        "link": "/React/animation.html"
      },
      {
        "text": "说说你对Redux的理解？其工作原理？",
        "link": "/React/redux.html"
      },
      {
        "text": "说说对Redux中间件的理解？常用的中间件有哪些？实现原理？",
        "link": "/React/Redux%20Middleware.html"
      },
      {
        "text": "你在React项目中是如何使用Redux的? 项目结构是如何划分的？",
        "link": "/React/how%20to%20use%20redux.html"
      },
      {
        "text": "说说你对React Router的理解？常用的Router组件有哪些？",
        "link": "/React/React%20Router.html"
      },
      {
        "text": "说说React Router有几种模式？实现原理？？",
        "link": "/React/React%20Router%20model.html"
      },
      {
        "text": "说说你对immutable的理解？如何应用在react项目中？",
        "link": "/React/immutable.html"
      },
      {
        "text": "说说React render方法的原理？在什么时候会被触发？",
        "link": "/React/render.html"
      },
      {
        "text": "说说你是如何提高组件的渲染效率的？在React中如何避免不必要的render？",
        "link": "/React/improve_render.html"
      },
      {
        "text": "说说React diff的原理是什么？",
        "link": "/React/diff.html"
      },
      {
        "text": "说说对Fiber架构的理解？解决了什么问题？",
        "link": "/React/Fiber.html"
      },
      {
        "text": "说说React Jsx转换成真实DOM过程？",
        "link": "/React/JSX%20to%20DOM.html"
      },
      {
        "text": "说说 React 性能优化的手段有哪些？",
        "link": "/React/Improve%20performance.html"
      },
      {
        "text": "说说你在React项目是如何捕获错误的？",
        "link": "/React/capture%20error.html"
      },
      {
        "text": "说说React服务端渲染怎么做？原理是什么？",
        "link": "/React/server%20side%20rendering.html"
      },
      {
        "text": "说说你在使用React 过程中遇到的常见问题？如何解决?",
        "link": "/React/summary.html"
      }
    ]
  },
  {
    "text": "版本控制系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对版本管理的理解？常用的版本管理工具有哪些？",
        "link": "/git/Version%20control.html"
      },
      {
        "text": "说说你对Git的理解？",
        "link": "/git/Git.html"
      },
      {
        "text": "说说Git中 fork, clone,branch这三个概念，有什么区别?",
        "link": "/git/fork_clone_branch.html"
      },
      {
        "text": "说说Git常用的命令有哪些？",
        "link": "/git/command.html"
      },
      {
        "text": "说说Git 中 HEAD、工作树和索引之间的区别？",
        "link": "/git/HEAD_tree_index.html"
      },
      {
        "text": "说说对git pull 和 git fetch 的理解？有什么区别？",
        "link": "/git/git%20pull%20_git%20fetch.html"
      },
      {
        "text": "说说你对git stash 的理解？应用场景？",
        "link": "/git/git%20stash.html"
      },
      {
        "text": "说说你对git rebase 和 git merge的理解？区别？",
        "link": "/git/git%20rebase_%20git%20merge.html"
      },
      {
        "text": "说说 git 发生冲突的场景？如何解决？",
        "link": "/git/conflict.html"
      },
      {
        "text": "说说你对git reset 和 git revert 的理解？区别？",
        "link": "/git/git%20reset_%20git%20revert.html"
      }
    ]
  },
  {
    "text": "操作系统系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对操作系统的理解？核心概念有哪些？",
        "link": "/linux/linux.html"
      },
      {
        "text": "说说什么是进程？什么是线程？区别？",
        "link": "/linux/thread_process.html"
      },
      {
        "text": "说说 linux系统下 文件操作常用的命令有哪些？",
        "link": "/linux/file.html"
      },
      {
        "text": "说说 linux 系统下 文本编辑常用的命令有哪些？",
        "link": "/linux/vim.html"
      },
      {
        "text": "说说你对 linux 用户管理的理解？相关的命令有哪些？",
        "link": "/linux/linux%20users.html"
      },
      {
        "text": "说说你对输入输出重定向和管道的理解？应用场景？",
        "link": "/linux/redirect_pipe.html"
      },
      {
        "text": "说说你对 shell 的理解？常见的命令？",
        "link": "/linux/shell.html"
      }
    ]
  },
  {
    "text": "TypeScript 系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对 TypeScript 的理解？与 JavaScript 的区别？",
        "link": "/typescript/typescript_javascript.html"
      },
      {
        "text": "说说 typescript 的数据类型有哪些？",
        "link": "/typescript/data_type.html"
      },
      {
        "text": "说说你对 TypeScript 中枚举类型的理解？应用场景？",
        "link": "/typescript/enum.html"
      },
      {
        "text": "说说你对 TypeScript 中接口的理解？应用场景？",
        "link": "/typescript/interface.html"
      },
      {
        "text": "说说你对 TypeScript 中类的理解？应用场景？",
        "link": "/typescript/class.html"
      },
      {
        "text": "说说你对 TypeScript 中函数的理解？与 JavaScript 函数的区别？",
        "link": "/typescript/function.html"
      },
      {
        "text": "说说你对 TypeScript 中泛型的理解？应用场景？",
        "link": "/typescript/generic.html"
      },
      {
        "text": "说说你对 TypeScript 中高级类型的理解？有哪些？",
        "link": "/typescript/high%20type.html"
      },
      {
        "text": "说说你对 TypeScript 装饰器的理解？应用场景？",
        "link": "/typescript/decorator.html"
      },
      {
        "text": "说说对 TypeScript 中命名空间与模块的理解？区别？",
        "link": "/typescript/namespace_module.html"
      },
      {
        "text": "说说如何在 React 项目中应用 TypeScript？",
        "link": "/typescript/react.html"
      },
      {
        "text": "说说如何在Vue项目中应用TypeScript？",
        "link": "/typescript/vue.html"
      }
    ]
  },
  {
    "text": "算法与数据结构系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对算法的理解？应用场景？",
        "link": "/algorithm/Algorithm.html"
      },
      {
        "text": "说说你对算法中时间复杂度，空间复杂度的理解？如何计算？",
        "link": "/algorithm/time_space.html"
      },
      {
        "text": "说说你对数据结构的理解？有哪些？区别？",
        "link": "/algorithm/structure.html"
      },
      {
        "text": "说说你对栈、队列的理解？应用场景？",
        "link": "/algorithm/stack_queue.html"
      },
      {
        "text": "说说你对链表的理解？常见的操作有哪些？",
        "link": "/algorithm/Linked%20List.html"
      },
      {
        "text": "说说你对集合的理解？常见的操作有哪些？",
        "link": "/algorithm/set.html"
      },
      {
        "text": "说说你对树的理解？相关的操作有哪些？",
        "link": "/algorithm/tree.html"
      },
      {
        "text": "说说你对堆的理解？如何实现？应用场景？",
        "link": "/algorithm/Heap.html"
      },
      {
        "text": "说说你对图的理解？相关操作有哪些？",
        "link": "/algorithm/graph.html"
      },
      {
        "text": "说说常见的排序算法有哪些？区别？",
        "link": "/algorithm/sort.html"
      },
      {
        "text": "说说你对冒泡排序的理解？如何实现？应用场景？",
        "link": "/algorithm/bubbleSort.html"
      },
      {
        "text": "说说你对选择排序的理解？如何实现？应用场景？",
        "link": "/algorithm/selectionSort.html"
      },
      {
        "text": "说说你对插入排序的理解？如何实现？应用场景？",
        "link": "/algorithm/insertionSort.html"
      },
      {
        "text": "说说你对归并排序的理解？如何实现？应用场景？",
        "link": "/algorithm/mergeSort.html"
      },
      {
        "text": "说说你对快速排序的理解？如何实现？应用场景？",
        "link": "/algorithm/quickSort.html"
      },
      {
        "text": "说说你对二分查找的理解？如何实现？应用场景？",
        "link": "/algorithm/BinarySearch.html"
      },
      {
        "text": "说说说你对分而治之、动态规划的理解？区别？",
        "link": "/algorithm/design1.html"
      },
      {
        "text": "说说你对贪心算法、回溯算法的理解？应用场景？",
        "link": "/algorithm/design2.html"
      }
    ]
  },
  {
    "text": "小程序系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说你对微信小程序的理解？优缺点？",
        "link": "/applet/applet.html"
      },
      {
        "text": "说说微信小程序的生命周期函数有哪些？",
        "link": "/applet/lifecycle.html"
      },
      {
        "text": "说说微信小程序中路由跳转的方式有哪些？区别？",
        "link": "/applet/navigate.html"
      },
      {
        "text": "说说提高微信小程序的应用速度的手段有哪些？",
        "link": "/applet/optimization.html"
      },
      {
        "text": "说说微信小程序的登录流程？",
        "link": "/applet/login.html"
      },
      {
        "text": "说说微信小程序的发布流程？",
        "link": "/applet/publish.html"
      },
      {
        "text": "说说微信小程序的支付流程？",
        "link": "/applet/requestPayment.html"
      },
      {
        "text": "说说微信小程序的实现原理？",
        "link": "/applet/WebView_jscore.html"
      }
    ]
  },
  {
    "text": "设计模式系列",
    "collapsed": true,
    "items": [
      {
        "text": "说说对设计模式的理解？常见的设计模式有哪些？",
        "link": "/design/design.html"
      },
      {
        "text": "说说你对单例模式的理解？如何实现？",
        "link": "/design/Singleton%20Pattern.html"
      },
      {
        "text": "说说你对工厂模式的理解？应用场景？",
        "link": "/design/Factory%20%20Pattern.html"
      },
      {
        "text": "说说你对策略模式的理解？应用场景？",
        "link": "/design/Strategy%20Pattern.html"
      },
      {
        "text": "说说你对代理模式的理解？应用场景？",
        "link": "/design/Proxy%20Pattern.html"
      },
      {
        "text": "说说你对发布订阅、观察者模式的理解？区别？",
        "link": "/design/Observer%20%20Pattern.html"
      }
    ]
  }
] satisfies DefaultTheme.SidebarItem[]
