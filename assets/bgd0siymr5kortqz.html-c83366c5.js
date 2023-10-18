const t=JSON.parse(`{"key":"v-13da41de","path":"/docs/bgd0siymr5kortqz.html","title":"react 编码规范","lang":"zh-CN","frontmatter":{"title":"react 编码规范","urlname":"bgd0siymr5kortqz","date":"2023-07-25 19:49:51","updated":"2023-07-25 20:08:59","description":"函数名称 按照惯例，通常将事件处理程序命名为 handle，后接事件名。你会经常看到 onClick={handleClick}，onMouseEnter={handleMouseEnter} 等。 传递一个函数（正确） 调用一个函数（错误） &lt;button onClick={() =&gt; alert('...')}&gt; &lt;button onClick={alert('...')}&gt;","head":[["meta",{"property":"og:url","content":"http://www.itwangtian.com/docs/bgd0siymr5kortqz.html"}],["meta",{"property":"og:site_name","content":"王天的web进阶之路"}],["meta",{"property":"og:title","content":"react 编码规范"}],["meta",{"property":"og:description","content":"函数名称 按照惯例，通常将事件处理程序命名为 handle，后接事件名。你会经常看到 onClick={handleClick}，onMouseEnter={handleMouseEnter} 等。 传递一个函数（正确） 调用一个函数（错误） &lt;button onClick={() =&gt; alert('...')}&gt; &lt;button onClick={alert('...')}&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-30T13:53:52.000Z"}],["meta",{"property":"article:author","content":"程序员王天"}],["meta",{"property":"article:published_time","content":"2023-07-25T19:49:51.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-30T13:53:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"react 编码规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-25T19:49:51.000Z\\",\\"dateModified\\":\\"2023-09-30T13:53:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员王天\\",\\"url\\":\\"http://www.itwangtian.com\\"}]}"]]},"headers":[{"level":2,"title":"参数传参：","slug":"参数传参","link":"#参数传参","children":[{"level":3,"title":"1、箭头函数中执行","slug":"_1、箭头函数中执行","link":"#_1、箭头函数中执行","children":[]},{"level":3,"title":"2、推荐写法：bind方法","slug":"_2、推荐写法-bind方法","link":"#_2、推荐写法-bind方法","children":[]},{"level":3,"title":"3、错误写法","slug":"_3、错误写法","link":"#_3、错误写法","children":[]}]}],"git":{"createdTime":1696082032000,"updatedTime":1696082032000,"contributors":[{"name":"1970652600@qq.com~","email":"1970652600@qq.com","commits":1}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"docs/bgd0siymr5kortqz.md","localizedDate":"2023年7月25日","excerpt":"<h1> 函数名称</h1>\\n<p>按照惯例，通常将事件处理程序命名为 handle，后接事件名。你会经常看到 onClick={handleClick}，onMouseEnter={handleMouseEnter} 等。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>传递一个函数（正确）</th>\\n<th>调用一个函数（错误）</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>&lt;button onClick={() =&gt; alert('...')}&gt;</td>\\n<td>&lt;button onClick={alert('...')}&gt;</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};
