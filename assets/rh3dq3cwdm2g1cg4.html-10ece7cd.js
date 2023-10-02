import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-510708ee.js";const p={},e=t(`<p>大家好，我是王天，这篇文章以页面按钮权限为主题、讲解了实现思路，reactRouter vs vueRouter 区别、踩坑记录，代码实现。嫌啰嗦的朋友，直接拖到最后一章节看代码哦。</p><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>通常情况下，咱们为用户添加权限时，除了页面权限，还会细化到按钮级别，比如、新增、删除、查看等权限。</p><p>如下效果，切换用户登录后，操作权限除了左侧菜单，还有页面按钮。<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/1938e736e560aeba31c4a86a544d4f59.gif" alt="按钮权限演示效果.gif" loading="lazy"></p><h1 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h1><p>按钮控制本质是条件判断，满足条件显示按钮，否则禁用/消失。<br> 假如每个页面的按钮权限都不同，简单的条件判断，肯定无法满足，那如何实现呢 ？<br> 王天觉得重点是权限数据结构，如何获取当前页面的按钮权限数据，这需要和后端沟通好，定义页面路径和权限数据的映射关系</p><h2 id="使用路由实现页面按钮权限" tabindex="-1"><a class="header-anchor" href="#使用路由实现页面按钮权限" aria-hidden="true">#</a> 使用路由实现页面按钮权限</h2><p>步骤：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><ol><li>在路由配置中添加页面权限参数</li><li>通过路由实例，获取当前页的权限</li><li>封装按钮权限组件，动态显隐按钮</li></ol></div><h2 id="vuerouter-vs-reactrouter" tabindex="-1"><a class="header-anchor" href="#vuerouter-vs-reactrouter" aria-hidden="true">#</a> vueRouter vs ReactRouter</h2><h3 id="vuerouter" tabindex="-1"><a class="header-anchor" href="#vuerouter" aria-hidden="true">#</a> vueRouter</h3><p>此方案，在 vue 中实现比较方便，使用 vueRouter 配置路由元信息、添加权限校验的参数，在页面路由实例中读取 meta 数据，进行页面级别的按钮权限控制。</p><h3 id="reactrouter" tabindex="-1"><a class="header-anchor" href="#reactrouter" aria-hidden="true">#</a> ReactRouter</h3><p>但是，在 react-Router6 版本中没有路由元信息配置，就算自定义路由属性，也无法获取，如下是踩坑代码，大家看看就行，可不要尝试了</p><h2 id="踩坑记录" tabindex="-1"><a class="header-anchor" href="#踩坑记录" aria-hidden="true">#</a> 踩坑记录</h2><p>踩坑代码-添加路由自定义属性，获取权限数据首先，在路由配置中设置自定义属性，例如 title 和 requiresAuth：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span>
  <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dashboard<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dashboard</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dashboard<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">requiresAuth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在 Dashboard 组件中可以通过 useRoutes() 钩子获取路由传递的属性，如下所示：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoutes<span class="token punctuation">,</span> useParams<span class="token punctuation">,</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 访问路由传递的属性</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> requiresAuth <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>

  <span class="token comment">// 在这里使用元信息进行逻辑处理</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 组件的其余部分 */</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果不用说了，报错啊啊啊啊啊啊啊<br> 在 react-route6 中 无法自定义路由属性，报错日志如下<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/f5c142f803ef7eac3c6b4f1539b52c2c.png" alt="image.png" loading="lazy"></p><h1 id="实战代码" tabindex="-1"><a class="header-anchor" href="#实战代码" aria-hidden="true">#</a> 实战代码</h1><h2 id="定义路由配置数据" tabindex="-1"><a class="header-anchor" href="#定义路由配置数据" aria-hidden="true">#</a> 定义路由配置数据</h2><p>需和后端配合将按钮权限和页面路由一同返回<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/aaac19c165fafb381f4bc58a223b5ec3.png" alt="image.png" loading="lazy"></p><h2 id="存储路由和按钮权限映射关系" tabindex="-1"><a class="header-anchor" href="#存储路由和按钮权限映射关系" aria-hidden="true">#</a> 存储路由和按钮权限映射关系</h2><p>既然无法通过路由实例获取权限数据，那么我们手动创建一个对象，来存储路由和按钮权限映射关系，在用户登录后，执行如下代码<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/88b5a799ab591a1a7ccb1dca1161653c.png" alt="image.png" loading="lazy"></p><h2 id="按钮权限组件" tabindex="-1"><a class="header-anchor" href="#按钮权限组件" aria-hidden="true">#</a> 按钮权限组件</h2><p>封装按钮权限组件，读取本地权限数据、控制按钮的显隐、禁用状态，代码如下：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLocation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IndexProps</span> <span class="token punctuation">{</span>
  scopeTtype<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 权限码</span>
  children<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// 子组件</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Index<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IndexProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取当前页面的位置信息、</span>
  <span class="token keyword">const</span> routeDom <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 从本地缓存读取 页面路径和权限数据</span>
  <span class="token keyword">const</span> strPersstion <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;pagePersstion&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> pagePersstion <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>strPersstion <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 找到当前页的按钮权限数据</span>
  <span class="token keyword">const</span> currentPerssion <span class="token operator">=</span> pagePersstion<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token punctuation">{</span> page<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>page <span class="token operator">==</span> routeDom<span class="token punctuation">.</span>pathname
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;当前页面的按钮权限&quot;</span><span class="token punctuation">,</span> currentPerssion<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//  有权限返回按钮</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentPerssion<span class="token punctuation">.</span>permissions<span class="token punctuation">[</span>props<span class="token punctuation">.</span>scopeTtype<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 没有则禁用、或者隐藏按钮</span>
    <span class="token comment">// 要实现按钮禁用，需要设置组件的disabled</span>
    <span class="token comment">// 可是react 中的props是只读无法修改，如何修改props中子组件呢？</span>
    <span class="token comment">// 通过React API React.cloneElement 克隆出新的元素进行修改如下</span>
    <span class="token keyword">const</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>暂无权限<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token punctuation">{</span>Button<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用按钮权限组件" tabindex="-1"><a class="header-anchor" href="#使用按钮权限组件" aria-hidden="true">#</a> 使用按钮权限组件</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AuthButton</span></span> <span class="token attr-name">scopeTtype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDelete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>start<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>hasSelected<span class="token punctuation">}</span></span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    批量删除
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AuthButton</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AuthButton</span></span> <span class="token attr-name">scopeTtype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isAdd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showModal<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">新增员工</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AuthButton</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模拟的路由数据：员工管理页面的路由、按钮配置<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/4bc4fbc81d7961f40627e284885c52f6.png" alt="image.png" loading="lazy"></p><h2 id="页面效果如下" tabindex="-1"><a class="header-anchor" href="#页面效果如下" aria-hidden="true">#</a> 页面效果如下：</h2><figure><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/1938e736e560aeba31c4a86a544d4f59.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,33),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","rh3dq3cwdm2g1cg4.html.vue"]]);export{k as default};
