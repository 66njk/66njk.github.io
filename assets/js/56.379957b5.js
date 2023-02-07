(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{433:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见的-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的-api"}},[t._v("#")]),t._v(" 常见的 API")]),t._v(" "),s("h2",{attrs:{id:"dom-元素的距离相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-元素的距离相关"}},[t._v("#")]),t._v(" dom 元素的距离相关")]),t._v(" "),s("h3",{attrs:{id:"box-sizing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing"}},[t._v("#")]),t._v(" box-sizing")]),t._v(" "),s("p",[t._v("语法: "),s("code",[t._v("box-sizing: content-box|border-box|inherit:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("content-box")]),t._v(" "),s("blockquote",[s("p",[t._v("默认值。一个元素的 width 为 100px，那么这个元素的内容区(content)会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中")])])]),t._v(" "),s("li",[s("p",[t._v("border-box")]),t._v(" "),s("blockquote",[s("p",[t._v("设置的 border 和 padding 的值是包含在 width 内的。")]),t._v(" "),s("p",[t._v("将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width - border - padding")])])])]),t._v(" "),s("p",[s("font",{attrs:{size:"6"}},[t._v("下面介绍元素的距离，宽高相关的 api")])],1),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.runoob.com/jsref/prop-element-offsetheight.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/jsref/prop-element-offsetheight.html")])]),t._v(" "),s("h3",{attrs:{id:"clientheight-和-clientwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientheight-和-clientwidth"}},[t._v("#")]),t._v(" clientHeight 和 clientWidth")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("clientHeight: "),s("strong",[t._v("padding(上下) + 内容")])]),t._v(" "),s("p",[t._v("clientWidth: "),s("strong",[t._v("padding(左右) + 内容")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果设置 box-sizing: border-box")]),t._v(" "),s("p",[t._v("clientHeight = height - border(上下) - padding(上下)")]),t._v(" "),s("p",[t._v("clientWidth = width - border(左右) - padding(左右)")])]),t._v(" "),s("h3",{attrs:{id:"offsetheight-和-offsetwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetheight-和-offsetwidth"}},[t._v("#")]),t._v(" offsetHeight 和 offsetWidth")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("offsetHeight: "),s("strong",[t._v("内容 + padding(上下) + 水平滚动条")]),t._v(" (不包括 margin)")]),t._v(" "),s("p",[t._v("offsetWidth: "),s("strong",[t._v("内容 + padding(左右) + 垂直滚动条")]),t._v(" (不包括 margin)")]),t._v(" "),s("blockquote",[s("p",[t._v("如果设置 box-sizing: border-box")]),t._v(" "),s("p",[t._v("offsetHeight = height (class 或者 style 设置的 height)")]),t._v(" "),s("p",[t._v("offsetWidth = width (class 或者 style 设置的 width)")])]),t._v(" "),s("p",[t._v("clientHeight 、offsetHeight、clientWidth、offsetWidth 和元素的滚动、位置没有关系")]),t._v(" "),s("h3",{attrs:{id:"scrollheight-和-scrollwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollheight-和-scrollwidth"}},[t._v("#")]),t._v(" scrollHeight 和 scrollWidth")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("scrollHeight 和 scrollWidth = 可见区域宽高 + 隐藏区域的宽高 (其实就是实际宽高)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果出现滚动条:")]),t._v(" "),s("ul",[s("li",[t._v("scrollHeight = clientHeight + 隐藏区域高度")]),t._v(" "),s("li",[t._v("scrollWidth = clientWidth + 隐藏区域高度")])])]),t._v(" "),s("li",[s("p",[t._v("如果没有滚动条:")]),t._v(" "),s("ul",[s("li",[t._v("scrollHeight = clientHeight")]),t._v(" "),s("li",[t._v("scrollWidth = clientWidth")])])])]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("注意: scrollHeight 不包括 border 和 滚动条")])],1),t._v(" "),s("h3",{attrs:{id:"scrolltop-和-scrollleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrolltop-和-scrollleft"}},[t._v("#")]),t._v(" scrollTop 和 scrollLeft")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("scrollTop: 有滚动条时，元素顶部被遮住部分的高度。没有滚动条时 scrollTop = 0。单位 px，可读可设置。同理，scrollLeft: 有滚动条时，元素左侧被遮住部分的高度。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：没有 scrollBottom 和 scrollRight")])]),t._v(" "),s("h3",{attrs:{id:"offsettop-和-offsetleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsettop-和-offsetleft"}},[t._v("#")]),t._v(" offsetTop 和 offsetLeft")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("offsetTop: 当前元素距离上一级定位元素的上边的偏移量")]),t._v(" "),s("p",[t._v("offsetLeft: 当前元素距离上一级定位元素的左边的偏移量")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("offsetTop 和 offsetLeft 的值跟父级元素没关系；\n跟其上一级的定位元素 （除 "),s("code",[t._v("position:static")]),t._v(" 外的所有定位如 "),s("code",[t._v("fixed")]),t._v(","),s("code",[t._v("relative")]),t._v(","),s("code",[t._v("absolute")]),t._v("）有关系")])]),t._v(" "),s("h3",{attrs:{id:"clienttop-和-clientleft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clienttop-和-clientleft"}},[t._v("#")]),t._v(" clientTop 和 clientLeft")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("clientLeft")]),t._v(" "),s("code",[t._v("clientTop")]),t._v(" 返回的是元素周围边框的厚度, 也就是"),s("code",[t._v("border")]),t._v(", 没有边框就是 0")]),t._v(" "),s("h3",{attrs:{id:"innerwidth-和-innerheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innerwidth-和-innerheight"}},[t._v("#")]),t._v(" innerWidth 和 innerHeight")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("window.innerWidth")]),t._v(" 和 "),s("code",[t._v("window.innerHeight")]),t._v(" 理解为浏览器内容区域的宽高，不包括菜单栏")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如果设置下面的样式, 那么 window.innerHeight === document.body.offsetHeight */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body,\nhtml")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("备注：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器缩放,这 2 个值也会随着变化")]),t._v(" "),s("li",[t._v("浏览器窗口变化,这 2 个值也会随着变化")])])]),t._v(" "),s("h3",{attrs:{id:"outerheight-和-outerwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outerheight-和-outerwidth"}},[t._v("#")]),t._v(" outerHeight 和 outerWidth")]),t._v(" "),s("p",[t._v("window.outerHeight 和 window.outerWidth 理解为浏览器窗口的宽高，包括菜单栏、地址栏。只和浏览器客户端有关，和浏览器地址栏，侧边栏，浏览器显示区域内容无关")]),t._v(" "),s("blockquote",[s("p",[t._v("备注:")]),t._v(" "),s("ul",[s("li",[t._v("浏览器缩放,这 2 个值 "),s("font",{attrs:{color:"red"}},[t._v("不会")]),t._v(" 随着变化")],1),t._v(" "),s("li",[t._v("浏览器窗口变化,这 2 个值也会随着变化")])])]),t._v(" "),s("h3",{attrs:{id:"screen-height-和-screen-width"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-height-和-screen-width"}},[t._v("#")]),t._v(" screen.height 和 screen.width")]),t._v(" "),s("p",[t._v("是指的屏幕，表示当前整个显示器显示的屏幕部分，不限于当前的窗口。height 是屏幕的宽度，例如屏幕分辨率 1920*1080 的话，一般情况下 screen.heigth 即为 1080。")]),t._v(" "),s("blockquote",[s("p",[t._v("备注:")]),t._v(" "),s("ul",[s("li",[t._v("只和电脑分辨率有关，和浏览器无关")])])]),t._v(" "),s("h3",{attrs:{id:"screen-availheight-和-screen-availwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-availheight-和-screen-availwidth"}},[t._v("#")]),t._v(" screen.availHeight 和 screen.availWidth")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("availHeight")]),t._v(" 只读属性，返回屏幕上可用于浏览器的区域的高度")])]),t._v(" "),s("li",[s("p",[t._v("浏览器的区域是除任务栏以外的整个屏幕")])])]),t._v(" "),s("h2",{attrs:{id:"浏览器常用的-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器常用的-api"}},[t._v("#")]),t._v(" 浏览器常用的 api")]),t._v(" "),s("h3",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),s("p",[t._v("构造、解析、规范化和编码 URL")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n  {\n    hash: ""\n    host: "blog.csdn.net"\n    hostname: "blog.csdn.net"\n    href: "https://blog.csdn.net/hello?id=kasd&name=skhf"\n    origin: "https://blog.csdn.net"\n    password: ""\n    pathname: "/hello"\n    port: ""\n    protocol: "https:"\n    search: "?id=kasd&name=skhf"\n    searchParams: URLSearchParams {}\n    username: ""\n  }\n*/')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://blog.csdn.net/hello?name=xxx&age=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("searchParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 hash")]),t._v("\nurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hee"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置参数")]),t._v("\nurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa=xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url.href = https://blog.csdn.net/hello?aaa=xxx#hee")]),t._v("\n")])])]),s("h3",{attrs:{id:"urlsearchparams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlsearchparams"}},[t._v("#")]),t._v(" URLSearchParams")]),t._v(" "),s("p",[t._v("处理 url 的查询字符串")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("append(name,value)")]),t._v(" : 添加一个数据")]),t._v(" "),s("li",[s("code",[t._v("delete(name)")]),t._v(" : 删除指定参数名的数据")]),t._v(" "),s("li",[s("code",[t._v("entries()")]),t._v(" : 迭代遍历键/值对的对象.")]),t._v(" "),s("li",[s("code",[t._v("get(name)")]),t._v(" : 获取到指定参数名的第一个值.")]),t._v(" "),s("li",[s("code",[t._v("getAll(name)")]),t._v(" : 返回指定参数名的所有值,数组")]),t._v(" "),s("li",[s("code",[t._v("has(name)")]),t._v(" : 判断是否存在某个参数.")]),t._v(" "),s("li",[s("code",[t._v("keys()")]),t._v(" : 所有参数的键的迭代对象.")]),t._v(" "),s("li",[s("code",[t._v("set(name,value)")]),t._v(" : 设置某个参数的值.")]),t._v(" "),s("li",[s("code",[t._v("sort()")]),t._v(" : 按键名排序.")]),t._v(" "),s("li",[s("code",[t._v("toString()")]),t._v(" : 返回查询字符串.")]),t._v(" "),s("li",[s("code",[t._v("values()")]),t._v(" : 包含所有值的迭代对象.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  params1.toString() = name=xx1&age=1\n  params2.toString() = name=xx2&age=2\n  params3.toString() = name=xx3&age=3\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?name=xx1&age=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"编码解码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码解码"}},[t._v("#")]),t._v(" 编码解码")]),t._v(" "),s("h3",{attrs:{id:"编码-encodeuricomponent-和-encodeuri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码-encodeuricomponent-和-encodeuri"}},[t._v("#")]),t._v(" 编码 encodeURIComponent 和 encodeURI")]),t._v(" "),s("p",[t._v("encodeURIComponent 和 encodeURI 用来编码和解码 URI 的,URI 叫统一资源标识符，是用来标识互联网上的资源（例如，网页或文件）和怎样访问这些资源的传输协议（例如，HTTP 或 FTP）的字符串")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("encodeURI(url)\nencodeURIComponent(url)\n")])])]),s("h3",{attrs:{id:"解码-decodeuricomponent-和-decodeuri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解码-decodeuricomponent-和-decodeuri"}},[t._v("#")]),t._v(" 解码 decodeURIComponent 和 decodeURI")]),t._v(" "),s("p",[t._v("就是对 encodeURIComponent 和 encodeURI 解码的函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/hello?name=搜索"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.w3.org/hello?name=搜索")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.w3.org/hello?name=搜索")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"encodeuricomponent-和-encodeuri-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encodeuricomponent-和-encodeuri-区别"}},[t._v("#")]),t._v(" encodeURIComponent 和 encodeURI 区别")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.w3.org/hello?name=搜索&age=123#abc!*().\'"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.w3.org/hello?name=%E6%90%9C%E7%B4%A2&age=123#abc!*().'")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https%3A%2F%2Fwww.w3.org%2Fhello%3Fname%3D%E6%90%9C%E7%B4%A2%26age%3D123%23abc!*().'")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("相同点:")]),t._v(" "),s("ol",[s("li",[t._v("都不会对[a-zA-Z0-9]的字符以及!*()'.进行编码")]),t._v(" "),s("li",[t._v("如果遇到中文的话，两者的解析结果是一样的")])]),t._v(" "),s("p",[t._v("不同点:")]),t._v(" "),s("p",[t._v("encodeURIComponent 会对特殊字符编码")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v('encodeURI 不会对一些特殊字符进行编码，例如: ":"、"/"、";" 、"?" ')])],1),t._v(" "),s("p",[t._v("所以一般处理浏览器链接，例如将地址作为参数放进地址栏，设置参数等，都使用 encodeURIComponent")]),t._v(" "),s("h2",{attrs:{id:"event-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-对象"}},[t._v("#")]),t._v(" event 对象")]),t._v(" "),s("h3",{attrs:{id:"event-pagex、event-pagey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-pagex、event-pagey"}},[t._v("#")]),t._v(" event.pageX、event.pageY")]),t._v(" "),s("p",[t._v("鼠标相对于文档区域的 X，Y 坐标, 这 2 个属性不是标准属性，但得到了广泛支持。在页面没有滚动的情况下， pageX 和 pageY 的值与 clientX 和 clientY 的值相等。")]),t._v(" "),s("h3",{attrs:{id:"event-clientx、event-clienty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-clientx、event-clienty"}},[t._v("#")]),t._v(" event.clientX、event.clientY")]),t._v(" "),s("p",[t._v("鼠标相对于浏览器窗口可视区域的 X，Y 坐标（窗口坐标），可视区域不包括工具栏和滚动条。当有滚动条时 clientX 小于 pageX。")]),t._v(" "),s("h3",{attrs:{id:"event-offsetx、event-offsety"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-offsetx、event-offsety"}},[t._v("#")]),t._v(" event.offsetX、event.offsetY")]),t._v(" "),s("p",[t._v("鼠标相对于事件源元素（srcElement）的 X,Y 坐标，只有 IE 事件有这 2 个属性，标准事件没有对应的属性。")]),t._v(" "),s("h3",{attrs:{id:"event-screenx、event-screeny"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-screenx、event-screeny"}},[t._v("#")]),t._v(" event.screenX、event.screenY")]),t._v(" "),s("p",[t._v("鼠标相对于用户显示器屏幕左上角的 X,Y 坐标。screenX 指的是鼠标到电脑屏幕左侧的距离。例如：当网页缩小，拖动到屏幕中间时，screnX 大于 clientX .")])])}),[],!1,null,null,null);s.default=n.exports}}]);