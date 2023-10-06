const n=JSON.parse('{"key":"v-59fb25f1","path":"/docs/tf47asaynxwhubk1.html","title":"node.js - fs模块原来还能这样用？","lang":"zh-CN","frontmatter":{"title":"node.js - fs模块原来还能这样用？","urlname":"tf47asaynxwhubk1","updated":"2023-07-24 19:19:04","description":"Node.js 的 fs 模块是用于处理文件系统操作的核心模块，它提供了一组功能丰富的方法，可以对文件和目录进行读取、写入、修改、删除等操作。 以下是 fs 模块的一些常见用法和使用场景的详细案例： 使用前，先 npm i fs 下载模块哦 读取文件 const fs = require(\\"fs\\"); fs.readFile(\\"file.txt\\", \\"utf8\\", (err, data) =&gt; { if (err) { console.error(err); return; } console.log(data); });","head":[["meta",{"property":"og:url","content":"http://www.itwangtian.com/docs/tf47asaynxwhubk1.html"}],["meta",{"property":"og:site_name","content":"王天的web进阶之路"}],["meta",{"property":"og:title","content":"node.js - fs模块原来还能这样用？"}],["meta",{"property":"og:description","content":"Node.js 的 fs 模块是用于处理文件系统操作的核心模块，它提供了一组功能丰富的方法，可以对文件和目录进行读取、写入、修改、删除等操作。 以下是 fs 模块的一些常见用法和使用场景的详细案例： 使用前，先 npm i fs 下载模块哦 读取文件 const fs = require(\\"fs\\"); fs.readFile(\\"file.txt\\", \\"utf8\\", (err, data) =&gt; { if (err) { console.error(err); return; } console.log(data); });"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-30T13:53:52.000Z"}],["meta",{"property":"article:author","content":"程序员王天"}],["meta",{"property":"article:modified_time","content":"2023-09-30T13:53:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node.js - fs模块原来还能这样用？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-30T13:53:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员王天\\",\\"url\\":\\"http://www.itwangtian.com\\"}]}"]]},"headers":[],"git":{"createdTime":1696082032000,"updatedTime":1696082032000,"contributors":[{"name":"1970652600@qq.com~","email":"1970652600@qq.com","commits":1}]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"docs/tf47asaynxwhubk1.md","localizedDate":"2023年9月30日","excerpt":"<p>Node.js 的 <code>fs</code> 模块是用于处理文件系统操作的核心模块，它提供了一组功能丰富的方法，可以对文件和目录进行读取、写入、修改、删除等操作。</p>\\n<p>以下是 <code>fs</code> 模块的一些常见用法和使用场景的详细案例：</p>\\n<blockquote>\\n<p>使用前，先 npm i fs 下载模块哦</p>\\n</blockquote>\\n<ol>\\n<li>读取文件</li>\\n</ol>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> fs <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"fs\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nfs<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"file.txt\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"utf8\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">err<span class=\\"token punctuation\\">,</span> data</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};