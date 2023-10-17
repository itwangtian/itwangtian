import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-1bdccc93.js";const e={},i=t(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/3f3b667674708d02c7a0cc83390a84ac.png" alt="image.png" loading="lazy"></h1><h1 id="es7-react-redux-react-native-snippets" tabindex="-1"><a class="header-anchor" href="#es7-react-redux-react-native-snippets" aria-hidden="true">#</a> ES7+ React/Redux/React-Native snippets</h1><p>提供了一组代码片段和快捷方式，用于快速开发 React、Redux 和 React Native 应用。可以快速导入 React、Redux 相关的模块，自动生成组件的 PropTypes 类型检查等等。这些功能可以节省你在编辑器中的时间和精力，帮助你更专注于实际的开发任务。</p><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESlint</h1><p>校验代码语法，自动修复</p><h1 id="react-redux-toolkit-rtk-query-snippets" tabindex="-1"><a class="header-anchor" href="#react-redux-toolkit-rtk-query-snippets" aria-hidden="true">#</a> <strong>React Redux Toolkit RTK Query Snippets</strong></h1><p>redux-toolkit 代码片段合集</p><h2 id="无法安装怎么办" tabindex="-1"><a class="header-anchor" href="#无法安装怎么办" aria-hidden="true">#</a> 无法安装怎么办？</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意！如 vscode 版本太低，会导致无法安装，需要自定义新建代码片段</p></div><ul><li>【推荐】升级 vscode 版本</li><li>【无法升级版本】自定义 vscode 代码片段</li></ul><p>1、打开 vscode 快捷键 <code>ctrl+shift+p</code><br><img src="http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/bd6b4590e282a40daca19db975ef71fb.png" alt="image.png" loading="lazy"><br> 2、新建代码片段<br><img src="http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/c27a83a46e12380ab0c9266375a41def.png" alt="image.png" loading="lazy"><br> 3、输入代码片段的文件名，名称自定义<br><img src="http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/7fc180b37f62ce23b60d260e8c7fe987.png" alt="image.png" loading="lazy"><br> 4、输入名称后回车，自动生成一个<code>.code-sinppets</code>后缀名的文件，我们在此文件定义代码片段<br><img src="http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/230944ac8f3e437012046fc6eb267aa9.png" alt="image.png" loading="lazy"><br> 如下是 redux-slice 代码片段，复制，粘贴替换到<code>.code-sinppets</code>后缀名的文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Redux Toolkit Slice&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;srtslice&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import { createSlice } from \\&quot;@reduxjs/toolkit\\&quot;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const \${1:sliceName} = createSlice({&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    name: \\&quot;\${1:sliceName}\\&quot;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    initialState: {},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    reducers: {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        invalidate: (state, { payload }) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;            payload.forEach(item =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;                state[item] = false;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;            });&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        },&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    extraReducers: builder =&gt; builder&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        .addCase(\${2:actionName.pending}, (state, { payload }) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;            state.loading = true;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        })&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        .addCase(\${2:actionName.fulfilled}, (state, { payload }) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;            state.loading = false;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        })&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        .addCase(\${2:actionName.rejected}, (state, { payload }) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;            state.loading = false;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;            state.error = payload;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        })&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;});&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export const { invalidate } = \${1:sliceName}.actions;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:sliceName}.reducer;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Redux Toolkit slice template&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="eslint-chinese-rules" tabindex="-1"><a class="header-anchor" href="#eslint-chinese-rules" aria-hidden="true">#</a> ESLint Chinese Rules</h1><p>eslint 中文规则提示插件</p>`,14),o=[i];function c(p,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","clggvok4l4xn2ftt.html.vue"]]);export{d as default};