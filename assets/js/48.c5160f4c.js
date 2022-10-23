(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{543:function(e,a,s){"use strict";s.r(a);var t=s(4),_=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("ol",[s("li",[e._v("强缓存")]),e._v(" "),s("li",[e._v("协商缓存")]),e._v(" "),s("li",[e._v("两者共同点与不同点")])])]),e._v(" "),s("h2",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[e._v("#")]),e._v(" 强缓存")]),e._v(" "),s("p",[e._v("当浏览器请求一份资源时，根据 "),s("code",[e._v("Expires")]),e._v(" 或者 "),s("code",[e._v("Cache-Control")]),e._v(" 来判断是否从本地缓存中读取资源，这就是强缓存。")]),e._v(" "),s("p",[e._v("强缓存主要是通过指定 header 里的两个参数来使用，一个是 HTTP/1.0 版本的 "),s("code",[e._v("Expires")]),e._v(" ，另一个就是HTTP/1.1版本的 "),s("code",[e._v("Cache-Control")]),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"_1、expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、expires"}},[e._v("#")]),e._v(" 1、"),s("code",[e._v("Expires")])]),e._v(" "),s("p",[e._v("这个 header 字段是 HTTP/1.0 时候所使用的，用于描述一个绝对时间，由服务器返回，但是该字段受限于本地时间，假如本地时间被修改，那么缓存就会失效。所以才有了下面的 "),s("code",[e._v("Cache-Control")]),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"_2、cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、cache-control"}},[e._v("#")]),e._v(" 2、"),s("code",[e._v("Cache-Control")])]),e._v(" "),s("p",[s("code",[e._v("Cache-Control")]),e._v(" 是 HTTP/1.1 出现的，在 HTTP/1.1 版本的服务器中优先级要高于 "),s("code",[e._v("Expires")]),e._v("，反之亦然。用来描述的是一个相对时间。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("Cache-Control: max-age"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("604800")]),e._v("\n// 表示能缓存的最大时间，max-age是距离请求发起的时间的秒数\n\nCache-Control: no-cache\n// 表示强制确认缓存，即我们请求资源的时候每次都需要向服务器确认是否能使用缓存，**这个并不是完全不能使用缓存的含义**\n\nCache-Control: no-store\n// 表示禁止进行缓存，这个表示客户端不能使用缓存，每次都需要向服务器请求资源，**这个是真正意义上的不能使用缓存**\n\nCache-Control: public\n// 表示所有用户都能使用缓存，包括缓存服务器，CDN等\n\nCache-Control: private\n// 表示只有指定用户才能使用缓存\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("h2",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[e._v("#")]),e._v(" 协商缓存")]),e._v(" "),s("p",[e._v("当浏览器请求一份资源时，当没有命中强缓存的时候，浏览器就会发一个请求去服务器，这时候浏览器根据 "),s("code",[e._v("if-Modified-Since")]),e._v(" 和 "),s("code",[e._v("last-Modified")]),e._v(" 或者 "),s("code",[e._v("if-None-Match")]),e._v(" 和 "),s("code",[e._v("ETag")]),e._v(" 这两对 header 指令来确定是否使用缓存，这种方式就是协商缓存。")]),e._v(" "),s("h3",{attrs:{id:"_1、if-modified-since-和-last-modified"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、if-modified-since-和-last-modified"}},[e._v("#")]),e._v(" 1、"),s("code",[e._v("if-Modified-Since")]),e._v(" 和 "),s("code",[e._v("last-Modified")])]),e._v(" "),s("p",[e._v("客户端请求资源时会带上 "),s("code",[e._v("if-Modified-Since")]),e._v(", 假如该时间小于 "),s("code",[e._v("last-Modified")]),e._v("，则说明资源已经更新，此时服务器就会返回更新后的资源，并且更新 "),s("code",[e._v("if-Modified-Since")]),e._v("，如果等于 "),s("code",[e._v("last-Modified")]),e._v("，则说明未更新，状态码返回 304。")]),e._v(" "),s("p",[e._v("但是由于该指令只能精确到秒，所以当短时间内频繁更新的时候就会出现问题，此时就需要借助 "),s("code",[e._v("ETag")]),e._v("。")]),e._v(" "),s("p",[e._v("2、"),s("code",[e._v("if-None-Match")]),e._v(" 和 "),s("code",[e._v("ETag")])]),e._v(" "),s("p",[s("code",[e._v("ETag")]),e._v("是用来标示文件更改状态的一串随机值，跟文件修改时间无关，只跟文件本身有关，所以是唯一的。\n"),s("code",[e._v("if-None-Match")]),e._v(" 会将上次返回的 "),s("code",[e._v("ETag")]),e._v(" 作为值发送给服务器。服务器会将资源当前的 "),s("code",[e._v("ETag")]),e._v(" 与其比对，如果相同，则返回 304 状态码，否则就返回更新后的资源，并同时将"),s("code",[e._v("ETag")]),e._v("发送给客户端。")]),e._v(" "),s("h2",{attrs:{id:"强缓存与协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存与协商缓存"}},[e._v("#")]),e._v(" 强缓存与协商缓存")]),e._v(" "),s("h3",{attrs:{id:"共同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共同点"}},[e._v("#")]),e._v(" 共同点")]),e._v(" "),s("p",[e._v("当命中缓存之后，均是从本地缓存中读取资源。")]),e._v(" "),s("h3",{attrs:{id:"不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[e._v("#")]),e._v(" 不同点")]),e._v(" "),s("p",[e._v("强缓存不会发起浏览器请求。协商缓存则会发起一次请求，以确定是否命中缓存，如果命中则返回 304 Not Modified。")])])}),[],!1,null,null,null);a.default=_.exports}}]);