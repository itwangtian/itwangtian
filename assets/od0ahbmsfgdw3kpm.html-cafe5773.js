import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as e,d as c,e as u}from"./app-4ec51699.js";const l={},i=u(`<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>这两天在尝试用语雀＋ vuepress ＋ github 搭建个人博客。<br> 语雀作为编辑器，发布文档推送 github，再自动构建 vuepress，部署个人站点、或者 gitpage，大概流程如下。<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/51fdf06c7ce3a1f91976e2528b2bd954.jpeg" alt="" loading="lazy"></p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>我使用的<code>elog</code>插件批量导出语雀文档。<code>elog</code>采用的配置是所有文章平铺导出，没有按照语雀知识库目录生成<code>markdown</code>，这导致 vuepress 侧边栏无法和语雀一致，如下图。</p><p><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/6dbd6d8b65e17693770347edb53eb0db.png" alt="image.png" loading="lazy"><br> 上图，左侧是语雀知识库，右侧是导出到 vuepress 展示的效果，很明显没有目录这很影响阅读体验呀</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>在查阅 vuepress 文档后，发现配置<code>silderbar.ts</code>可以自定义侧边栏目录，配置参数如下：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 可折叠的侧边栏</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/web/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&quot;王天的web进阶手册&quot;</span><span class="token punctuation">,</span>
          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 目录是否折叠</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/reference/cli.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/reference/config.md&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 文档目录</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&quot;王天的魔法工具箱&quot;</span><span class="token punctuation">,</span>
          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;/reference/bundler/vite.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/reference/bundler/webpack.md&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归生成菜单" tabindex="-1"><a class="header-anchor" href="#递归生成菜单" aria-hidden="true">#</a> 递归生成菜单</h2><p>配置<code>sidebar.ts</code> 可以修改左侧菜单，但是一个个手动修改这忒麻烦了啊啊啊啊。那如何批量生产菜单配置项呢？</p><p><strong>递归函数呀呀呀呀呀呀 🔥🔥🔥🔥</strong></p><blockquote><p>elog 在同步语雀文档时，会自动创建<code>elog.cache.json</code>缓存文件，在 vueprss 项目根目录中查看。</p></blockquote><p>打开<code>elog.cache.json</code>文件，我们能看到语雀文档知识库的数据结构</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;catalog&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DOC&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;前言&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17Os-_V_hcS37KOD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wqbpyf5083qc7ho8&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prev_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sibling_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dmQSRn6AXUBSg96x&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;child_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parent_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc_id&quot;</span><span class="token operator">:</span> <span class="token number">141216125</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">141216125</span><span class="token punctuation">,</span>
      <span class="token property">&quot;open_window&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TITLE&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;项目&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dmQSRn6AXUBSg96x&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prev_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17Os-_V_hcS37KOD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sibling_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PUQZiYfEh8WLE0S5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;child_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p8CdcJ3Wge274g-C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parent_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;open_window&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TITLE&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小天省钱宝&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p8CdcJ3Wge274g-C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prev_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dmQSRn6AXUBSg96x&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sibling_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nwy1XwBVCauDEVT3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;child_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B_g_9VbzBNLx6MBi&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parent_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dmQSRn6AXUBSg96x&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;open_window&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DOC&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;猎人&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B_g_9VbzBNLx6MBi&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;buh3gviq8r2v4kxe&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prev_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p8CdcJ3Wge274g-C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sibling_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;child_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parent_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p8CdcJ3Wge274g-C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc_id&quot;</span><span class="token operator">:</span> <span class="token number">141216121</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">141216121</span><span class="token punctuation">,</span>
      <span class="token property">&quot;open_window&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>catlog 属性是文档缓存数据，关键字段：</p><ul><li>type：值为&#39;DOC&#39; 是文章、值为 TITLE 则为目录</li><li>uuid：文章 id</li><li>prent_uuid:父节点的 uuid</li></ul><p>咱们根据以上参数，编写递归函数， 将<code>elog.cache.json</code>的一维数组，递归生成 vuepress 侧边栏配置数据<br> 代码如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">genYuqueRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 参数1:遍历数组</span>
  <span class="token comment">// 参数2:父菜单id</span>
  <span class="token keyword">const</span> <span class="token function-variable function">deep</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arrlist<span class="token punctuation">,</span> parantId<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> forList<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arrlist<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 菜单id不一致，跳出循环调用</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>parent_uuid <span class="token operator">!==</span> parantId<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token comment">// 如果是TITLE类型新增配置项</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;TITLE&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        forList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          text<span class="token operator">:</span> element<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token function">deep</span><span class="token punctuation">(</span>arrlist<span class="token punctuation">,</span> element<span class="token punctuation">.</span>uuid<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果是DOC 类型追加文件地址</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        forList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> forList<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">deep</span><span class="token punctuation">(</span>catalog<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归函数本质上是一个在回调自身的函数，用于改造数据结构，<br> 重点在于跳出循环的机制，否则陷入死循环啦</p>`,19),r={href:"https://wintc.top/article/20",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",r,[e("JS 树结构操作:查找、遍历、筛选、树和列表相互转换 - 沐码小站"),c(s)])])])}const m=a(l,[["render",k],["__file","od0ahbmsfgdw3kpm.html.vue"]]);export{m as default};