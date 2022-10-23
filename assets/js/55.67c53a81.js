(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{551:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("这是我从我的朋友 "),a("a",{attrs:{href:"https://twitter.com/damiandulisz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Damian Dulisz"),a("OutboundLink")],1),t._v(" 那里学到的一个非常有用的技巧，他是 Vue.js 核心团队的成员，他创建了 "),a("a",{attrs:{href:"https://news.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue newsletter"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://vue-multiselect.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-multiselect"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在某些情况下我需要知道组件何时从父组件被 "),a("code",[t._v("created")]),t._v("、"),a("code",[t._v("mounted")]),t._v("、"),a("code",[t._v("updated")]),t._v(" 了，尤其是在为普通 JS 库构建组件时。")]),t._v(" "),a("p",[t._v("你可能已经在自己的组件中拥有了类似的功能，例如，从子组件发出生命周期钩子中的事件，就像这样：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mounted"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("因此，你可以从父组件监听它 "),a("code",[t._v('<Child @mounted="doSomething"/>')]),t._v("。")]),t._v(" "),a("p",[t._v("让我告诉你：这是没有必要的，实际上，你将无法在第三方组件上做到这一点。")]),t._v(" "),a("p",[t._v("相反，解决方案就很简单，监听加上了 "),a("code",[t._v("@hook:")]),t._v(" 前缀的生命周期钩子名称的事件就可以了。")]),t._v(" "),a("p",[t._v("例如，你想在第三方组件 "),a("a",{attrs:{href:"https://github.com/alexjoverm/v-runtime-template",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("v-runtime-template")]),a("OutboundLink")],1),t._v(" 渲染时执行某项操作，则可以监听 "),a("code",[t._v("updated")]),t._v(" 生命周期钩子：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-runtime-template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@hook:")]),t._v("updated")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":template")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"codesandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codesandbox"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://codesandbox.io/s/18r05pkmn7",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeSandbox"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"原文链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原文链接"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://vuedose.tips/tips/listen-to-lifecycle-hooks-on-third-party-vue-js-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);