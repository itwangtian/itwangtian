const n=JSON.parse('{"key":"v-62aa24bd","path":"/docs/kcb12zwkginqus50.html","title":"React通信","lang":"zh-CN","frontmatter":{"title":"React通信","urlname":"kcb12zwkginqus50","date":"2023-08-09 16:01:05","updated":"2023-08-18 13:48:55","description":"组件通信 父子 props 父组件标签内的 jsx 内容，通过 children 作为插槽传入子组件 子向父-回调函数 父组件中通过 props 向子组件传参函数，子组件触发函数参数，实现子父通信 父子-子父组件通信示例 子组件 import React from \\"react\\"; interface ChildrenProps { title: string; dbClick?: () =&gt; void; children?: any; } const Children: React.FC&lt;ChildrenProps&gt; = ({ dbClick, title, children, }: ChildrenProps) =&gt; { return ( &lt;&gt; &lt;h1 onDoubleClick={dbClick}&gt; {title}&lt;/h1&gt; {children} &lt;/&gt; ); }; export default Children;","head":[["meta",{"property":"og:url","content":"http://www.itwangtian.com/docs/kcb12zwkginqus50.html"}],["meta",{"property":"og:site_name","content":"王天的web进阶之路"}],["meta",{"property":"og:title","content":"React通信"}],["meta",{"property":"og:description","content":"组件通信 父子 props 父组件标签内的 jsx 内容，通过 children 作为插槽传入子组件 子向父-回调函数 父组件中通过 props 向子组件传参函数，子组件触发函数参数，实现子父通信 父子-子父组件通信示例 子组件 import React from \\"react\\"; interface ChildrenProps { title: string; dbClick?: () =&gt; void; children?: any; } const Children: React.FC&lt;ChildrenProps&gt; = ({ dbClick, title, children, }: ChildrenProps) =&gt; { return ( &lt;&gt; &lt;h1 onDoubleClick={dbClick}&gt; {title}&lt;/h1&gt; {children} &lt;/&gt; ); }; export default Children;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-30T13:53:52.000Z"}],["meta",{"property":"article:author","content":"程序员王天"}],["meta",{"property":"article:published_time","content":"2023-08-09T16:01:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-30T13:53:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React通信\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-09T16:01:05.000Z\\",\\"dateModified\\":\\"2023-09-30T13:53:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员王天\\",\\"url\\":\\"http://www.itwangtian.com\\"}]}"]]},"headers":[{"level":2,"title":"父子 props","slug":"父子-props","link":"#父子-props","children":[]},{"level":2,"title":"子向父-回调函数","slug":"子向父-回调函数","link":"#子向父-回调函数","children":[{"level":3,"title":"父子-子父组件通信示例","slug":"父子-子父组件通信示例","link":"#父子-子父组件通信示例","children":[]}]},{"level":2,"title":"跨组件","slug":"跨组件","link":"#跨组件","children":[]}],"git":{"createdTime":1696082032000,"updatedTime":1696082032000,"contributors":[{"name":"1970652600@qq.com~","email":"1970652600@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"docs/kcb12zwkginqus50.md","localizedDate":"2023年8月9日","excerpt":"<h1> 组件通信</h1>\\n<h2> 父子 props</h2>\\n<p>父组件标签内的 jsx 内容，通过 children 作为插槽传入子组件</p>\\n<h2> 子向父-回调函数</h2>\\n<p>父组件中通过 props 向子组件传参函数，子组件触发函数参数，实现子父通信</p>\\n<h3> 父子-子父组件通信示例</h3>\\n<p>子组件</p>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">import</span> React <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">ChildrenProps</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> string<span class=\\"token punctuation\\">;</span>\\n  dbClick<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">;</span>\\n  children<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> any<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token literal-property property\\">Children</span><span class=\\"token operator\\">:</span> React<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">FC</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">ChildrenProps</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\"> = ({\\n  dbClick,\\n  title,\\n  children,\\n}: ChildrenProps) =&gt; </span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h1</span> <span class=\\"token attr-name\\">onDoubleClick</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>dbClick<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\"> </span><span class=\\"token punctuation\\">{</span>title<span class=\\"token punctuation\\">}</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h1</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token punctuation\\">{</span>children<span class=\\"token punctuation\\">}</span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token plain-text\\">;\\n\\nexport default Children;\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
