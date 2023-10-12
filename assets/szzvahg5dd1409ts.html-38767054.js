import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-21789e9f.js";const e={},p=t(`<p>JSX 本质上是 React.createElement 的语法糖，返回 VDOM。在运行的时候，需要通过 babel 编译</p><p>在 react17 之前，jsx 转换都会转换为 React.createElement 调用， 所以我们必须在第一行加上：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js
复制代码import React from &quot;react&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>本质上，react 中的 jsx 会转化为 createElement 或者 jsx 函数调用。<br> 看几个栗子<br><strong>1. 单一元素</strong><br> jsx:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html
复制代码&lt;div data-id=&#39;test-id&#39;&gt;
  hello world
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：<br><strong>2. 嵌套标签</strong><br> jsx:<br> 结果：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;data-id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test-id&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
    <span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hello span&quot;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React17 之后的版本 React 已经不需要引入 createElement ，这种模式来源于 <strong>Automatic Runtime</strong>，看一下是如何编译的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>hello<span class="token punctuation">,</span>world<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsx <span class="token keyword">as</span> _jsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react/jsx-runtime&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> jsxs <span class="token keyword">as</span> _jsxs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react/jsx-runtime&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">_jsxs</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">_jsx</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&quot;hello,world&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","szzvahg5dd1409ts.html.vue"]]);export{d as default};
