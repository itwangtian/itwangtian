const e=JSON.parse('{"key":"v-3c977db8","path":"/docs/rh3dq3cwdm2g1cg4.html","title":"reactRouter 实现页面级按钮权限","lang":"zh-CN","frontmatter":{"title":"reactRouter 实现页面级按钮权限","urlname":"rh3dq3cwdm2g1cg4","updated":"2023-09-28 21:31:41","description":"大家好，我是王天，这篇文章以页面按钮权限为主题、讲解了实现思路，reactRouter vs vueRouter 区别、踩坑记录，代码实现。嫌啰嗦的朋友，直接拖到最后一章节看代码哦。 前言 通常情况下，咱们为用户添加权限时，除了页面权限，还会细化到按钮级别，比如、新增、删除、查看等权限。 如下效果，切换用户登录后，操作权限除了左侧菜单，还有页面按钮。","head":[["meta",{"property":"og:url","content":"http://www.itwangtian.com/docs/rh3dq3cwdm2g1cg4.html"}],["meta",{"property":"og:site_name","content":"王天的web进阶之路"}],["meta",{"property":"og:title","content":"reactRouter 实现页面级按钮权限"}],["meta",{"property":"og:description","content":"大家好，我是王天，这篇文章以页面按钮权限为主题、讲解了实现思路，reactRouter vs vueRouter 区别、踩坑记录，代码实现。嫌啰嗦的朋友，直接拖到最后一章节看代码哦。 前言 通常情况下，咱们为用户添加权限时，除了页面权限，还会细化到按钮级别，比如、新增、删除、查看等权限。 如下效果，切换用户登录后，操作权限除了左侧菜单，还有页面按钮。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-01T13:33:25.000Z"}],["meta",{"property":"article:author","content":"程序员王天"}],["meta",{"property":"article:modified_time","content":"2023-10-01T13:33:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"reactRouter 实现页面级按钮权限\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-01T13:33:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"程序员王天\\",\\"url\\":\\"http://www.itwangtian.com\\"}]}"]]},"headers":[{"level":2,"title":"使用路由实现页面按钮权限","slug":"使用路由实现页面按钮权限","link":"#使用路由实现页面按钮权限","children":[]},{"level":2,"title":"vueRouter vs ReactRouter","slug":"vuerouter-vs-reactrouter","link":"#vuerouter-vs-reactrouter","children":[{"level":3,"title":"vueRouter","slug":"vuerouter","link":"#vuerouter","children":[]},{"level":3,"title":"ReactRouter","slug":"reactrouter","link":"#reactrouter","children":[]}]},{"level":2,"title":"踩坑记录","slug":"踩坑记录","link":"#踩坑记录","children":[]},{"level":2,"title":"定义路由配置数据","slug":"定义路由配置数据","link":"#定义路由配置数据","children":[]},{"level":2,"title":"存储路由和按钮权限映射关系","slug":"存储路由和按钮权限映射关系","link":"#存储路由和按钮权限映射关系","children":[]},{"level":2,"title":"按钮权限组件","slug":"按钮权限组件","link":"#按钮权限组件","children":[]},{"level":2,"title":"使用按钮权限组件","slug":"使用按钮权限组件","link":"#使用按钮权限组件","children":[]},{"level":2,"title":"页面效果如下：","slug":"页面效果如下","link":"#页面效果如下","children":[]}],"git":{"createdTime":1696082032000,"updatedTime":1696167205000,"contributors":[{"name":"1970652600@qq.com~","email":"1970652600@qq.com","commits":2}]},"readingTime":{"minutes":3.64,"words":1091},"filePathRelative":"docs/rh3dq3cwdm2g1cg4.md","localizedDate":"2023年9月30日","excerpt":"<p>大家好，我是王天，这篇文章以页面按钮权限为主题、讲解了实现思路，reactRouter vs vueRouter 区别、踩坑记录，代码实现。嫌啰嗦的朋友，直接拖到最后一章节看代码哦。</p>\\n<h1> 前言</h1>\\n<p>通常情况下，咱们为用户添加权限时，除了页面权限，还会细化到按钮级别，比如、新增、删除、查看等权限。</p>\\n<p>如下效果，切换用户登录后，操作权限除了左侧菜单，还有页面按钮。<br>\\n<img src=\\"https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/1938e736e560aeba31c4a86a544d4f59.gif\\" alt=\\"按钮权限演示效果.gif\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};