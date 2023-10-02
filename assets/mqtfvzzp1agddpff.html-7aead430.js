const n=JSON.parse('{"key":"v-d072d156","path":"/docs/mqtfvzzp1agddpff.html","title":"函数","lang":"zh-CN","frontmatter":{"title":"函数","urlname":"mqtfvzzp1agddpff","updated":"2023-08-15 21:49:34","description":"在 TypeScript 中，可选参数和默认参数、剩余参数以及函数重载可以帮助我们更灵活地定义和使用函数。 1、可选参数和默认参数： 可选参数允许我们在调用函数时省略一些参数，而默认参数为函数的参数提供了默认值。 举个例子，假设我们有一个函数greet用于问候，接受一个名称参数和一个可选的消息参数： function greet(name: string, message?: string) { if (message) { console.log(`Hello, ${name}! ${message}`); } else { console.log(`Hello, ${name}!`); } }","head":[["meta",{"property":"og:url","content":"http://www.itwangtian.com/docs/mqtfvzzp1agddpff.html"}],["meta",{"property":"og:site_name","content":"王天的web进阶之路"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:description","content":"在 TypeScript 中，可选参数和默认参数、剩余参数以及函数重载可以帮助我们更灵活地定义和使用函数。 1、可选参数和默认参数： 可选参数允许我们在调用函数时省略一些参数，而默认参数为函数的参数提供了默认值。 举个例子，假设我们有一个函数greet用于问候，接受一个名称参数和一个可选的消息参数： function greet(name: string, message?: string) { if (message) { console.log(`Hello, ${name}! ${message}`); } else { console.log(`Hello, ${name}!`); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-30T13:53:52.000Z"}],["meta",{"property":"article:author","content":"程序员王天"}],["meta",{"property":"article:modified_time","content":"2023-09-30T13:53:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-30T13:53:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员王天\\",\\"url\\":\\"http://www.itwangtian.com\\"}]}"]]},"headers":[{"level":2,"title":"1、可选参数和默认参数：","slug":"_1、可选参数和默认参数","link":"#_1、可选参数和默认参数","children":[]},{"level":2,"title":"2、剩余参数：","slug":"_2、剩余参数","link":"#_2、剩余参数","children":[]},{"level":2,"title":"3、重载：","slug":"_3、重载","link":"#_3、重载","children":[]}],"git":{"createdTime":1696082032000,"updatedTime":1696082032000,"contributors":[{"name":"1970652600@qq.com~","email":"1970652600@qq.com","commits":1}]},"readingTime":{"minutes":2.83,"words":850},"filePathRelative":"docs/mqtfvzzp1agddpff.md","localizedDate":"2023年9月30日","excerpt":"<p>在 TypeScript 中，可选参数和默认参数、剩余参数以及函数重载可以帮助我们更灵活地定义和使用函数。</p>\\n<h2> 1、可选参数和默认参数：</h2>\\n<p>可选参数允许我们在调用函数时省略一些参数，而默认参数为函数的参数提供了默认值。</p>\\n<p>举个例子，假设我们有一个函数<code>greet</code>用于问候，接受一个名称参数和一个可选的消息参数：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">greet</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> message<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">Hello, </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>name<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">! </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>message<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">Hello, </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>name<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">!</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
