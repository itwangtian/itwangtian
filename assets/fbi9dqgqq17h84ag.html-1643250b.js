import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-18d3a592.js";const t={},i=e(`<h2 id="一-项目目录规范" tabindex="-1"><a class="header-anchor" href="#一-项目目录规范" aria-hidden="true">#</a> 一. 项目目录规范</h2><p>文件目录组织现在常用的有两种方式，后面公司采用的第二种，更方便一些。两种方式没有最好的，只有更适合自己公司的，只要公司内部达成一致了，用哪一种都会很方便。<br><strong>1.1 按功能类型来划分</strong><br> 按文件的功能类型来分，<strong>比如 api</strong>，<strong>组件</strong>，<strong>页面</strong>，<strong>路由</strong>，<strong>hooks</strong>，<strong>store</strong>，不管是全局使用到的，还是单独页面局部使用到的，都按照功能类型放在<strong>src</strong>下面对应的目录里面统一管理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─src               #  项目目录
│  ├─api                #  数据请求
│  │  └─Home            #  首页页面api
│  │  └─Kind            #  分类页面api
│  ├─assets             #  资源
│  │  ├─css             #  css资源
│  │  └─images          #  图片资源
│  ├─config             #  配置
│  ├─components         #  组件
│  │  ├─common            #  公共组件
│  │  └─Home              #  首页页面组件
│  │  └─Kind              #  分类页面组件
│  ├─layout             #  布局
│  ├─hooks              #  自定义hooks组件
│  ├─routes             #  路由
│  ├─store              #  状态管理
│  │  └─Home              #  首页页面公共的状态
│  │  └─Kind              #  分类页面公共的状态
│  ├─pages              #  页面
│  │  └─Home              #  首页页面
│  │  └─Kind              #  分类页面
│  ├─utils              #  工具
│  └─main.ts            #  入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1.2 按领域模型划分</strong><br> 按照页面功能划分，全局会用到的<strong>组件</strong>，<strong>api</strong>等还是放到<strong>src</strong>下面全局管理，页面内部单独使用的<strong>api</strong>和<strong>组件</strong>放到对应页面的文件夹里面，使用的时候不用上下查找文件，在当前页面文件夹下就能找到，比较方便，功能也内聚一些。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─src               #  项目目录
│  ├─assets             #  资源
│  │  ├─css             #  css资源
│  │  └─images          #  图片资源
│  ├─config             #  配置
│  ├─components         #  公共组件
│  ├─layout             #  布局
│  ├─hooks              #  自定义hooks组件
│  ├─routes             #  路由
│  ├─store              #  全局状态管理
│  ├─pages              #  页面
│  │  └─Home              #  首页页面
│  │    └─components      #  Home页面组件文件夹
│  │    ├─api             #  Home页面api文件夹
│  │    ├─store           #  Home页面状态
│  │    ├─index.tsx       #  Home页面
│  │  └─Kind              #  分类页面
│  ├─utils              #  工具
│  └─main.ts            #  入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-代码书写规范" tabindex="-1"><a class="header-anchor" href="#二-代码书写规范" aria-hidden="true">#</a> 二. 代码书写规范</h2><p>规范比较多，这里只简单列举一下基本的规范约束和使用工具来自动化规范代码。<br><strong>2.1 组件结构</strong><br><strong>react 组件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { memo, useMemo } from &#39;react&#39;

interface ITitleProps {
  title: string
}

const Title: React.FC&lt;ITitleProps&gt; = props =&gt; {
  const { title } = props

  return (
    &lt;h2&gt;{title}&lt;/h2&gt;
  )
}

export default memo(Title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ITitleProps</strong> 以<strong>I</strong>为开头代表<strong>类型</strong>，中间为语义化<strong>Title</strong>，后面<strong>Props</strong>为类型，代表是组件参数。<br><strong>2.2 定义接口</strong><br> 例 1: 登录接口，定义好参数类型和响应数据类型，参数类型直接定义<strong>params</strong>的类型，响应数据放在<strong>范型</strong>里面，需要在封装的时候就处理好这个范型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { request } from &#39;@/utils/request&#39;

/** 公共的接口响应范型 */
export interface HttpSuccessResponse&lt;T&gt; {
  code: number
  message: string
  data: T
}

/** 登录接口参数 */
export interface ILoginParams {
  username: string
  password: string
}

/** 登录接口响应 */
export interface ILoginData {
  token: string
}

/* 用户登录接口 */
export const loginApi = (params: ILoginApi) =&gt; {
  return request.post&lt;ILoginData&gt;(&#39;/xxx&#39;, params)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.3 事件</strong><br> 以<strong>on</strong>开头代表事件，这个只是规范，<strong>on</strong>要比<strong>handle</strong>短一点，哈哈。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const onChange = () =&gt; {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.4 工具约束代码规范</strong><br> 除了约定俗称的规范，我们也需要借助一些工具和插件来协助我们更好的完成规范这件事情。<br><strong>代码规范</strong></p><ol><li>?vscode：统一前端编辑器。</li><li>?editorconfig: 统一团队<strong>vscode</strong>编辑器默认配置。</li><li>?prettier: 保存文件自动格式化代码。</li><li>?eslint: 检测代码语法规范和错误。</li><li>?stylelint: 检测和格式化样式文件语法</li></ol><p>可以看我这篇文章：?【前端工程化】配置 React+ts 企业级代码规范及样式格式和 git 提交规范<br><strong>git 提交规范</strong></p><ol><li>?husky:可以监听?githooks 执行，在对应<strong>hook</strong>执行阶段做一些处理的操作。</li><li>?lint-staged: 只检测暂存区文件代码，优化<strong>eslint</strong>检测速度。</li><li>?pre-commit：<strong>githooks</strong>之一， 在<strong>commit</strong>提交前使用<strong>tsc</strong>和<strong>eslint</strong>对语法进行检测。</li><li>?commit-msg：<strong>githooks</strong>之一，在<strong>commit</strong>提交前对<strong>commit</strong>备注信息进行检测。</li><li>?commitlint：在<strong>githooks</strong>的<strong>pre-commit</strong>阶段对<strong>commit</strong>备注信息进行检测。</li><li>?commitizen：<strong>git</strong>的规范化提交工具，辅助填写<strong>commit</strong>信息。</li></ol><p>可以看我这篇文章：?【前端工程化】配置 React+ts 企业级代码规范及样式格式和 git 提交规范</p><h2 id="三-状态管理器优化和统一" tabindex="-1"><a class="header-anchor" href="#三-状态管理器优化和统一" aria-hidden="true">#</a> 三. 状态管理器优化和统一</h2><h3 id="_3-1-优化状态管理" tabindex="-1"><a class="header-anchor" href="#_3-1-优化状态管理" aria-hidden="true">#</a> 3.1 优化状态管理</h3><p>用<strong>react</strong>的<strong>context</strong>封装了一个简单的状态管理器，有完整的类型提升，支持在组件内和外部使用，也发布到?npm 了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span>  useContext<span class="token punctuation">,</span> ComponentType<span class="token punctuation">,</span> ComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token doc-comment comment">/** 创建context组合useState状态Store */</span>
<span class="token keyword">function</span> createStore<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token function-variable function">store</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line</span>
  <span class="token keyword">const</span> <span class="token literal-property property">ModelContext</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** 使用model */</span>
  <span class="token keyword">function</span> useModel<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ModelContext<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 当前的状态 */</span>
  <span class="token keyword">let</span> <span class="token literal-property property">currentStore</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 上一次的状态 */</span>
  <span class="token keyword">let</span> <span class="token literal-property property">prevStore</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/** 创建状态注入组件 */</span>
  <span class="token keyword">function</span> <span class="token function">StoreProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentStore <span class="token operator">=</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 如果有上次的context状态，做一下浅对比，
     * 如果状态没变，就复用上一次context的value指针，避免context重新渲染
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevStore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> prevStore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// @ts-ignore</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shallow</span><span class="token punctuation">(</span>prevStore<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> currentStore<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// @ts-ignore</span>
          currentStore<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> prevStore<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    prevStore <span class="token operator">=</span> currentStore<span class="token punctuation">;</span>
    <span class="token comment">// @ts-ignore</span>
    <span class="token keyword">let</span> <span class="token literal-property property">keys</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>currentStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 遍历状态，递归形成多层级嵌套Context */</span>
    <span class="token keyword">function</span> getContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Context <span class="token operator">=</span>
        ModelContext<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>ModelContext<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span>val<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> currentIndex <span class="token operator">=</span> <span class="token operator">++</span>i<span class="token punctuation">;</span>
      <span class="token doc-comment comment">/** 返回嵌套的Context */</span>
      <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
        Context<span class="token punctuation">.</span>Provider<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        currentIndex <span class="token operator">&lt;</span> length
        <span class="token operator">?</span> <span class="token function">getContext</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
        <span class="token operator">:</span> children<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">getContext</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> currentStore<span class="token punctuation">,</span> props<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取当前状态, 方便在组件外部使用,也不会引起页面更新 */</span>
  <span class="token keyword">function</span> getModel<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentStore<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 连接Model注入到组件中 */</span>
  <span class="token keyword">function</span> connectModel<span class="token operator">&lt;</span>Selected<span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span>
    <span class="token function-variable function">selector</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Selected<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint-disable-next-line func-names</span>
    <span class="token comment">// @ts-ignore</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">C</span> <span class="token keyword">extends</span> <span class="token class-name">ComponentType</span><span class="token operator">&lt;</span>any<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>
      <span class="token literal-property property">WarpComponent</span><span class="token operator">:</span> <span class="token constant">C</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> ComponentType<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>ComponentProps<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> keyof Selected<span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">Connect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token constant">P</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">useModel</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// @ts-ignore</span>
        <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>WarpComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>props<span class="token punctuation">,</span>
          <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Connect <span class="token keyword">as</span> unknown <span class="token keyword">as</span> ComponentType<span class="token operator">&lt;</span>
      Omit<span class="token operator">&lt;</span>ComponentProps<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> keyof Selected<span class="token operator">&gt;</span>
      <span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
  useModel<span class="token punctuation">,</span>
  connectModel<span class="token punctuation">,</span>
  StoreProvider<span class="token punctuation">,</span>
  getModel<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> createStore

<span class="token doc-comment comment">/** 浅对比对象 */</span>
<span class="token keyword">function</span> Shallow<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>obj1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">obj2</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-store-目录结构" tabindex="-1"><a class="header-anchor" href="#_3-2-store-目录结构" aria-hidden="true">#</a> 3.2 store 目录结构</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├─src               #  项目目录
│  ├─store              #  全局状态管理
│  │  └─modules           #  状态modules
│  │    └─user<span class="token punctuation">.</span>ts           #  用户信息状态
│  │    ├─other<span class="token punctuation">.</span>ts          #  其他全局状态
│  │  ├─createStore<span class="token punctuation">.</span>ts          #  封装的状态管理器
│  │  └─index<span class="token punctuation">.</span>ts          #  store入口页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-定义状态管理器" tabindex="-1"><a class="header-anchor" href="#_3-3-定义状态管理器" aria-hidden="true">#</a> 3.3 定义状态管理器</h3><p><strong>1. 在 store/index.ts 中引入</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 1. 引入createStore.ts */</span>
<span class="token keyword">import</span> createStore <span class="token keyword">from</span> <span class="token string">&quot;./createStore&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 2. 定义各个状态 */</span>
<span class="token comment">// user</span>
<span class="token keyword">const</span> <span class="token function-variable function">userModel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>userInfo<span class="token punctuation">,</span> setUserInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> userInfo<span class="token punctuation">,</span> setUserInfo <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// other</span>
<span class="token keyword">const</span> <span class="token function-variable function">otherModel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>other<span class="token punctuation">,</span> setOther<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> other<span class="token punctuation">,</span> setOther <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 3. 组合所有状态 */</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  user<span class="token operator">:</span> <span class="token function">userModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  other<span class="token operator">:</span> <span class="token function">otherModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 向外暴露useModel, StoreProvider, getModel, connectModel */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> useModel<span class="token punctuation">,</span> StoreProvider<span class="token punctuation">,</span> getModel<span class="token punctuation">,</span> connectModel <span class="token punctuation">}</span> <span class="token operator">=</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 在顶层通过 StoreProvider 注入状态</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;@/App&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 1. 引入StoreProvider</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StoreProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 使用StoreProvider包裹App组件</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>StoreProvider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>StoreProvider<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-使用状态管理器" tabindex="-1"><a class="header-anchor" href="#_3-4-使用状态管理器" aria-hidden="true">#</a> 3.4 使用状态管理器</h3><p><strong>1. 在函数组件中使用，借助 useModel</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;
import { useModel } from &#39;@/store&#39;

function FunctionDemo() {

  /** 通过useModel取出user状态 */
  const { userInfo, setUserInfo } = useModel(&#39;user&#39;)

  /** 在点击事件中调用setUserInfo改变状态 */
  const onChangeUser = () =&gt; {
    setUserInfo({
      name: userInfo.name + &#39;1&#39;,
    })
  }

  // 展示userInfo.name
  return (
    &lt;button onClick={onChangeUser}&gt;{userInfo.name}--改变user中的状态&lt;/button&gt;
  )
}

export default FunctionDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 在 class 组件中使用,借助 connectModel</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;
import { connectModel } from &#39;@/store&#39;

// 定义class组件props
interface IClassDemoProps {
  setOther: React.Dispatch&lt;React.SetStateAction&lt;string&gt;&gt;
  other: number
}

class ClassDemo extends Component&lt;IClassDemoProps&gt; {
  // 通过this.props获取到方法修改状态
  onChange = () =&gt; {
    this.props.setOther(this.props.other + 1)
  }
  render() {
    // 通过this.props获取到状态进行展示
    return &lt;button onClick={this.onChange}&gt;{this.props.other}&lt;/button&gt;
  }
}

// 通过高阶组件connectModel把other状态中的属性和方法注入到类组件中
export default connectModel(&#39;other&#39;,state =&gt; ({
  other: state.other,
  setOther: state.setOther
}))(ClassDemo)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 在组件外使用, 借助 getModel</strong><br> 也可以在组件内读取修改状态方法，不回引起更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { getModel } from &#39;@/store&#39;

export const onChangeUser = () =&gt; {
  // 通过getModel读取usel状态，进行操作
  const user = getModel(&#39;user&#39;)
  user.setUserInfo({
    name: user.userInfo.name + &#39;1&#39;
  })
}

// 1秒后执行onChangeUser方法
setTimeout(onChangeUser, 1000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-本地存储统一管理" tabindex="-1"><a class="header-anchor" href="#四-本地存储统一管理" aria-hidden="true">#</a> 四. 本地存储统一管理</h2><p>可以对<strong>localStorage</strong>和<strong>sessionStorage</strong>还有<strong>cookie</strong>简单封装一下，封装后使用的好处：</p><ol><li>自动序列化，存储的时候转字符串，取得时候再转回来。</li><li>类型自动推断，在实例化的时候传入类型，在设置和获取值的时候都会自动类型推断。</li><li>可以统一管理，把本地存储都放在一个文件里面，避免后期本地存储混乱不好维护问题。</li><li>抹平平台差异，这个思路<strong>web</strong>，小程序，移动端，桌面端都适合。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// src/utils/storage.ts
const prefix = &#39;xxx.&#39;

interface IStorage&lt;T&gt; {
  key: string
  defaultValue: T
}
export class LocalStorage&lt;T&gt; implements IStorage&lt;T&gt; {
  key: string
  defaultValue: T
  constructor(key, defaultValue) {
    this.key = prefix + key
    this.defaultValue = defaultValue
  }
  /** 设置值 */
  setItem(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value))
  }
  /** 获取值 */
  getItem(): T {
    const value = localStorage[this.key] &amp;&amp; localStorage.getItem(this.key)
    if (value === undefined) return this.defaultValue
    try {
      return value &amp;&amp; value !== &#39;null&#39; &amp;&amp; value !== &#39;undefined&#39;
        ? (JSON.parse(value) as T)
        : this.defaultValue
    } catch (error) {
      return value &amp;&amp; value !== &#39;null&#39; &amp;&amp; value !== &#39;undefined&#39;
        ? (value as unknown as T)
        : this.defaultValue
    }
  }
  /** 删除值 */
  removeItem() {
    localStorage.removeItem(this.key)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例化封装的本地存储</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// src/common/storage.ts
import { LocalStorage } from &#39;@/utils/storage&#39;

/** 管理token */
export const tokenStorage = new LocalStorage&lt;string&gt;(&#39;token&#39;, &#39;&#39;)

/** 用户信息类型 */
export interface IUser {
    name?: string
    age?: num
}

/** 管理用户信息 */
export const userStorage = new Storage&lt;IUser&gt;(&#39;user&#39;, {})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面内使用</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { memo, useMemo } from &#39;react&#39;
import { userStorage } from &#39;@/common/storage&#39;

interface ITitleProps {
  title: string
}

const Title: React.FC&lt;ITitleProps&gt; = props =&gt; {
  const { title } = props

  useEffect(() =&gt; {
    userStorage.setItem({ name: &#39;姓名&#39;, age: 18 })
    const user = userStorage.getItem()
    console.log(user) // { name: &#39;姓名&#39;, age: 18 }
  }, [])

  return (
    &lt;h2&gt;{title}&lt;/h2&gt;
  )
}

export default memo(Title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-封装请求统一和项目解耦" tabindex="-1"><a class="header-anchor" href="#五-封装请求统一和项目解耦" aria-hidden="true">#</a> 五. 封装请求统一和项目解耦</h2><p><strong>5.1 现有的封装</strong><br> 项目现用的请求封装和项目业务逻辑耦合在一块，不方便直接复用，使用上比较麻烦，每次需要传<strong>GET</strong>和<strong>POST</strong>类型，<strong>GET</strong>参数要每次单独做处理，参数类型限制弱。<br><strong>5.2 推荐使用</strong><br> 推荐直接使用<strong>fetch</strong>封装或<strong>axios</strong>，项目中基于次做二次封装，只关注和项目有关的逻辑，不关注请求的实现逻辑。在请求异常的时候不返回<strong>Promise.reject()，而是返回一个对象，只是 code</strong>改为异常状态的<strong>code</strong>，这样在页面中使用时，不用用<strong>try/catch</strong>包裹，只用<strong>if</strong>判断<strong>code</strong>是否正确就可以。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios, { AxiosInstance, AxiosRequestConfig } from &#39;axios&#39;
import { tokenStorage } from &#39;@/common/storage&#39;
/** 封装axios的实例，方便多个url时的封装 */
export const createAxiosIntance = (baseURL: string): AxiosInstance =&gt; {
  const request = axios.create({ baseURL })
  // 请求拦截器器
  request.interceptors.request.use((config: AxiosRequestConfig) =&gt; {
    config.headers[&#39;Authorization&#39;] = tokenStorage.getItem()
    return config
  })
  // 响应拦截器
  request.interceptors.response.use(
    response =&gt; {
      const code = response.data.code
      switch (code) {
        case 0:
          return response.data
        case 401:
          // 登录失效逻辑
          return response.data || {}
        default:
          return response.data || {}
      }
    },
    error =&gt; {
      // 接口请求报错时，也返回对象，这样使用async/await就不需要加try/catch
      // code为0为请求正常，不为0为请求异常,使用message提示
      return { message: onErrorReason(error.message) }
    }
  )
  return request
}

/** 解析http层面请求异常原因 */
function onErrorReason(message: string): string {
  if (message.includes(&#39;Network Error&#39;)) {
    return &#39;网络异常，请检查网络情况!&#39;
  }
  if (message.includes(&#39;timeout&#39;)) {
    return &#39;请求超时，请重试!&#39;
  }
  return &#39;服务异常,请重试!&#39;
}

export const request = createAxiosIntance(&#39;https://xxx&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.3 使用</strong><br> 使用上面代码命名定义接口类型的<strong>loginApi</strong>例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/** 登录 */
const onLogin = async () =&gt; {
  const res = await loginApi(params)
  if(res.code === 0) {
    // 处理登录正常逻辑
  } else {
    message.error(res.message) // 错误提示也可以在封装时统一添加
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-api-接口管理统一" tabindex="-1"><a class="header-anchor" href="#六-api-接口管理统一" aria-hidden="true">#</a> 六. api 接口管理统一</h2><p><strong>文件夹路径</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─pages                 #  页面
│  ├─Login              #  登录页面
│  │  └─api             #  api文件夹
│  │    └─index.ts      #  api函数封装
│  │    ├─types.ts      #  api的参数和响应类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义类型</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// api/types.ts

/** 登录接口参数 */
export interface ILoginParams {
  username: string
  password: string
}

/** 登录接口响应 */
export interface ILoginData {
  token: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义请求接口</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { request } from &#39;@/utils/request&#39;
import { ILoginParams, ILoginData } from &#39;./types&#39;

/* 用户登录接口 */
export const loginApi = (params: ILoginParams) =&gt; {
  return request.post&lt;ILoginData&gt;(&#39;/distribute/school/login&#39;, params)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用请求接口</strong><br> 使用上面代码命名定义接口类型的<strong>loginApi</strong>例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/** 登录 */
const onLogin = async () =&gt; {
  const res = await loginApi(params)
  if(res.code === 0) {
    // 处理登录正常逻辑
  } else {
    message.error(res.message) // 错误提示也可以在封装时统一添加
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-函数库-通用方法抽离复用" tabindex="-1"><a class="header-anchor" href="#七-函数库-通用方法抽离复用" aria-hidden="true">#</a> 七. 函数库-通用方法抽离复用</h2><p>把公司项目中常用的<strong>方法</strong>和<strong>hooks</strong>抽离出来组成<strong>函数库</strong>，方便在各个项目中使用，通过编写函数方法，写 jest 单元测试，也可以提升组内成员的整体水平。当时组内前端不管是实习生还是正式成员都在参与函数库的建设，很多就有了 <strong>30+</strong> 的函数和 hooks，还在不断的增加。<br> 是用了<strong>dumi2</strong>来开发的函数库，可以看我的这篇文章?【前端工程化】使用 dumi2 搭建 React 组件库和函数库详细教程</p><h2 id="八-组件库-通用组件抽离复用" tabindex="-1"><a class="header-anchor" href="#八-组件库-通用组件抽离复用" aria-hidden="true">#</a> 八. 组件库-通用组件抽离复用</h2><p>公司项目多了会有很多公共的组件，可以抽离出来，方便其他项目复用，一般可以分为以下几种组件：</p><ol><li>UI 组件</li><li>业务组件</li><li>功能组件：上拉刷新，滚动到底部加载更多，虚拟滚动，拖拽排序，图片懒加载..</li></ol><p>由于公司技术栈主要是<strong>react</strong>，组件库也是采用了<strong>dumi2</strong>的方案，可以看我的这篇文章?【前端工程化】使用 dumi2 搭建 React 组件库和函数库详细教程</p><h2 id="九-css-超集和-css-模块化方案统一" tabindex="-1"><a class="header-anchor" href="#九-css-超集和-css-模块化方案统一" aria-hidden="true">#</a> 九. css 超集和 css 模块化方案统一</h2><p><strong>css 超集</strong><br> 使用<strong>less</strong>或者<strong>scss</strong>，看项目具体情况，能全项目统一就统一。<br><strong>css 模块化</strong><br><strong>vue</strong>使用自带的<strong>style scoped</strong>, <strong>react</strong>使用<strong>css-module</strong>方案。<br> 开启也简单，以<strong>vite</strong>为例，默认支持，可以修改<strong>vite.config.ts</strong>配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// vite.config.ts
export default defineConfig({
  css: {
    // 配置 css-module
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: &#39;camelCase&#39;,
      // 类名格式，[local]是自己原本的类名，[hash:base64:5]是5位的hash值
      generateScopedName: &#39;[local]-[hash:base64:5]&#39;,
    }
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用的时候，样式文件命名后缀需要加上 <strong>.module</strong>，例如 index.module.less：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.module.less
.title {
	font-size: 18px;
  color: yellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件里面使用:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { memo, useMemo } from &#39;react&#39;
import styles from &#39;./index.module.less&#39;

interface ITitleProps {
  title: string
}

const Title: React.FC&lt;ITitleProps&gt; = props =&gt; {
  const { title } = props

  return (
    &lt;h2 className={styles.title}&gt;{title}&lt;/h2&gt;
  )
}

export default memo(Title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后类名会变成<strong>title-[hash:5]</strong>，可以有效避免样式冲突，减少起类名的痛苦。</p><h2 id="十-引入-immer-来优化性能和简化写法" tabindex="-1"><a class="header-anchor" href="#十-引入-immer-来优化性能和简化写法" aria-hidden="true">#</a> 十. 引入 immer 来优化性能和简化写法</h2><p>?Immer 是 <strong>mobx</strong> 的作者写的一个 <strong>immutable</strong> 库，核心实现是利用 <strong>ES6</strong> 的 <strong>Proxy</strong>(不支持<strong>Proxy</strong>的环境会自动使用<strong>Object.defineProperty</strong>来实现)，几乎以最小的成本实现了 <strong>js</strong> 的不可变数据结构，简单易用、体量小巧、设计巧妙，满足了我们对<strong>js</strong>不可变数据结构的需求。<br><strong>1. 优化性能</strong><br> 修改用户信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const [ userInfo, setUserInfo ] = useState({ name: &#39;immer&#39;, info: { age: 6 } })
const onChange = (age: number) =&gt; {
  setUserInfo({...userInfo, info: {
    ...userinfo.info,
    age: age
  }})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面某次修改<strong>age</strong>没有变，但<strong>setUserInfo</strong>时每次都生成了一个新对象，更新前后引用变化了，组件就会刷新。<br> 使用<strong>immer</strong>后,<strong>age</strong>没变时不会生成新的引用，同时语法也更简洁，可以优化性能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import produce from &#39;immer&#39;

const [ userInfo, setUserInfo ] = useState({ name: &#39;immer&#39;, age: 5 })
const onChange = (age: number) =&gt; {
  setUserInfo(darft =&gt; {
    darft.age = age
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.简化写法</strong><br><strong>react</strong>遵循不可变数据流的理念，每次修改状态都要新生成一个引用，不能在原先的引用上进行修改，所以在对引用类型对象或者数组做操作时，总要浅拷贝一下，再来做处理，当修改的状态层级比较深的时候，写法会更复杂。<br> 以数组为例，修改购物车某个商品的数量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import produce from &#39;immer&#39;

const [ list, setList ] = useState([{ price: 100, num: 1 }, { price: 200, num: 1 }])

// 不使用用immer
const onAdd = (index: number) =&gt; {
  /** 不使用immer */
  // const item = { ...list[index] }
  // item.num++
  // list[index] = item
  // setList([...list])

  /** 使用immer */
  setList(
    produce(darft =&gt; {
      darft[index].num++
    }),
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 可以用?use-immer 简化写法</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import useImmer from &#39;use-immer&#39;

const [ list, setList ] = useImmer([{ price: 100, num: 1 }, { price: 200, num: 1 }])

const onAdd = (index: number) =&gt; {
  setList(darft =&gt; {
      darft[index].num++
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一-搭建-npm-私服" tabindex="-1"><a class="header-anchor" href="#十一-搭建-npm-私服" aria-hidden="true">#</a> 十一. 搭建 npm 私服</h2><p>公司前端项目不推荐使用太多第三方包，可以自己搭建公司<strong>npm</strong>私服，来托管公司自己封装的状态管理库，请求库，组件库，以及脚手架<strong>cli</strong>，<strong>sdk</strong>等<strong>npm</strong>包，方便复用和管理。<br> 可以看我这两篇文章，都可以搭建<strong>npm</strong>私服：<br> ?【前端工程化】巧用阿里云 oss 服务打造前端 npm 私有仓库<br> ?【前端工程化】使用 verdaccio 搭建公司 npm 私有库完整流程和踩坑记录</p><h2 id="十二-各类型项目通用模版封装" tabindex="-1"><a class="header-anchor" href="#十二-各类型项目通用模版封装" aria-hidden="true">#</a> 十二. 各类型项目通用模版封装</h2><p>可以提前根据公司的业务需求，封装出各个端对应通用开发模版，封装好项目目录结构，接口请求，状态管理，代码规范，git 规范钩子，页面适配，权限，本地存储管理等等，来减少开发新项目时前期准备工作时间，也能更好的统一公司整体的代码规范。</p><ol><li>通用后台管理系统基础模版封装</li><li>通用小程序基础模版封装</li><li>通用<strong>h5</strong>端基础模版封装</li><li>通用<strong>node</strong>端基础模版封装</li><li>其他类型的项目默认模版封装，减少重复工作。</li></ol><h2 id="十三-搭建-cli-脚手架下载模版。" tabindex="-1"><a class="header-anchor" href="#十三-搭建-cli-脚手架下载模版。" aria-hidden="true">#</a> 十三. 搭建 cli 脚手架下载模版。</h2><p>搭建类似<strong>vue-cli</strong>, <strong>vite</strong>, <strong>create-react-app</strong>类的<strong>cli 命令行</strong>脚手架来快速选择和下载封装好的模版，比<strong>git</strong>拉代码要方便。<br> 具体<strong>cli</strong>脚手架的实现可以看我这篇文章：?【前端工程化】从入门到精通，100 行代码构建你的前端 CLI 脚手架之路</p><h2 id="十四-git-操作规范" tabindex="-1"><a class="header-anchor" href="#十四-git-操作规范" aria-hidden="true">#</a> 十四. git 操作规范</h2><p><strong>git</strong>操作规范也很重要，流程不规范很容易出现比较复杂的问题，要根据公司现有情况和业界比较好的实践方案制定一套适合自己公司的<strong>git flow</strong>开发规范，用各种限制方案来避免出现问题，这个具体流规范后面会总结一篇文章出来。</p><h2 id="十五-规范和使用文档输出文档站点" tabindex="-1"><a class="header-anchor" href="#十五-规范和使用文档输出文档站点" aria-hidden="true">#</a> 十五. 规范和使用文档输出文档站点</h2><p>代码规范和 git 提交规范以及各个封装的库使用说明要输出成文档部署到线上，方便新同事快速熟悉和使用。<br> 这个是很重要的，做了再多的基建和规范，如果没有一个公共的文文档来查阅，就没办法快速熟悉，所以要一个线上的规范文档，把所有的规范都写进去，可以用语雀</p>`,91),o=[i];function l(r,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","fbi9dqgqq17h84ag.html.vue"]]);export{u as default};
