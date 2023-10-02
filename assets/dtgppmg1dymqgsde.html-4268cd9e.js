import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-510708ee.js";const p={},e=t(`<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>多文件上传本质是循环存储的过程，只是在实现方式有所区别，<br> 实现方式：</p><ul><li>前端批量上传：前端轮询调用后端单文件上传接口</li><li>后端批量存储：一次性接收前端多文件，循环存储</li></ul><h1 id="组件-vs-定制化" tabindex="-1"><a class="header-anchor" href="#组件-vs-定制化" aria-hidden="true">#</a> 组件 vs 定制化</h1><p>antd 中的 upload 组件功能强大，支持文件夹、拖拽、自动上传、ui 美观，文档完善，通过简单配置即可开发完功能，以功能为主的开发，建议使用组件完成</p><p>如果定制化功能，业务交互复杂，建议手写上传功能，其本质将 file 类型的数据，以 fomdata 的格式发送给后端。</p><p>如实现多文件上传，建议搭配 promise 使用，promise.all() 可等待多个异步操性、结合此特性实现批量上传的效果。</p><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h1><h2 id="antd-upload-自动上传" tabindex="-1"><a class="header-anchor" href="#antd-upload-自动上传" aria-hidden="true">#</a> antd-upload 自动上传</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 初始化 上传组件的列表数据</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>fileList<span class="token punctuation">,</span> setFileList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>UploadFile<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// uoload 组件配置项</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">beforeUpload</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> File<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> maxFileSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&quot;文件最多上传1m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Upload<span class="token punctuation">.</span><span class="token constant">LIST_IGNORE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// console.log(file, &#39;file&#39;)</span>
    <span class="token comment">// const isPNG = file.type === &#39;image/png&#39;;</span>
    <span class="token comment">// if (!isPNG) {</span>
    <span class="token comment">//   message.error(\`\${file.name} is not a png file\`);</span>
    <span class="token comment">// }</span>
    <span class="token comment">// return isPNG || Upload.LIST_IGNORE;</span>
    <span class="token comment">// return true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  action<span class="token operator">:</span> <span class="token string">&quot;http:///localhost:9981/upload_oss&quot;</span><span class="token punctuation">,</span> <span class="token comment">/// 接口地址 oss or 本地</span>
  onChange<span class="token operator">:</span> handleChange<span class="token punctuation">,</span>
  multiple<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// upload 组件change事件</span>
<span class="token keyword">const</span> handleChange<span class="token operator">:</span> UploadProps<span class="token punctuation">[</span><span class="token string">&quot;onChange&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;oonchang&quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> newFileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>info<span class="token punctuation">.</span>fileList<span class="token punctuation">]</span><span class="token punctuation">;</span>

  newFileList <span class="token operator">=</span> newFileList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Component will show file.url as link</span>
      file<span class="token punctuation">.</span>url <span class="token operator">=</span> file<span class="token punctuation">.</span>response<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> file<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setFileList</span><span class="token punctuation">(</span>newFileList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 支持拖拽的上传组件</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dragger</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">70</span><span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">fileList</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fileList<span class="token punctuation">}</span></span> <span class="token attr-name">listType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">支持拖拽上传</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dragger</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antd-upload-promise-all-批量上传" tabindex="-1"><a class="header-anchor" href="#antd-upload-promise-all-批量上传" aria-hidden="true">#</a> antd-upload +promise.all 批量上传</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>  <span class="token comment">// 封装上传函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">uploadFiles</span> <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>
    <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>originFileObj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> rejects<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upload_oss&#39;</span><span class="token punctuation">,</span> formData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>imgUrl<span class="token punctuation">)</span>
        message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 以上传成功</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;startFileList&#39;</span><span class="token punctuation">,</span> startFileList<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">rejects</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 提交上传</span>
  <span class="token keyword">const</span> <span class="token function-variable function">multipleUpload</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> uploadPromiess <span class="token operator">=</span> startFileList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">uploadFiles</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> imgs <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>uploadPromiess<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;全部上传成功&#39;</span><span class="token punctuation">,</span> imgs<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
	<span class="token comment">// 上传组件chang事件</span>
  <span class="token keyword">const</span> handleChange1<span class="token operator">:</span> UploadProps<span class="token punctuation">[</span><span class="token string">&#39;onChange&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> newFileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>info<span class="token punctuation">.</span>fileList<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发了&#39;</span><span class="token punctuation">)</span>
    newFileList <span class="token operator">=</span> newFileList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token comment">// Component will show file.url as link</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// file 生成临时的url</span>
          file<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>originFileObj <span class="token keyword">as</span> RcFile<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>

      <span class="token keyword">return</span> file<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;oonchang&#39;</span><span class="token punctuation">,</span> newFileList<span class="token punctuation">)</span>
    <span class="token comment">// 更新</span>
    <span class="token function">setStrartFileList</span><span class="token punctuation">(</span>newFileList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Upload</span></span>  <span class="token attr-name">{</span>
  <span class="token attr-name">...{</span>
    <span class="token attr-name"><span class="token namespace">multiple:</span></span> <span class="token attr-name">true,</span>
    <span class="token attr-name"><span class="token namespace">maxCount:</span></span> <span class="token attr-name">10,</span>
    <span class="token attr-name"><span class="token namespace">fileList:</span></span> <span class="token attr-name">startFileList,</span>
    <span class="token attr-name"><span class="token namespace">onRemove:</span></span> <span class="token attr-name">(file)</span> <span class="token attr-name">=</span><span class="token punctuation">&gt;</span> <span class="token attr-name">{</span>
      <span class="token attr-name">const</span> <span class="token attr-name">index</span> <span class="token attr-name">=</span> <span class="token attr-name">startFileList.indexOf(file);</span>
      <span class="token attr-name">const</span> <span class="token attr-name">newFileList</span> <span class="token attr-name">=</span> <span class="token attr-name">startFileList.slice();</span>
      <span class="token attr-name">newFileList.splice(index,</span> <span class="token attr-name">1);</span>
      <span class="token comment">// setStrartFileList([]);</span>
    <span class="token attr-name">},</span>
    <span class="token attr-name"><span class="token namespace">beforeUpload:</span></span> <span class="token attr-name"><span class="token namespace">(file:</span></span> <span class="token attr-name">any)</span> <span class="token attr-name">=</span><span class="token punctuation">&gt;</span> <span class="token attr-name">{</span>
      <span class="token attr-name">console.log(&#39;filelist&#39;,</span> <span class="token attr-name">startFileList);</span>
      <span class="token comment">// return Upload.LIST_IGNORE - 文件不进行回显</span>
      <span class="token comment">// return false 关闭上传请求</span>
      <span class="token attr-name">return</span> <span class="token attr-name">false</span>
    <span class="token attr-name">},</span>
    <span class="token attr-name"><span class="token namespace">listType:</span></span> <span class="token attr-name">&#39;picture&#39;,</span>
    <span class="token attr-name"><span class="token namespace">onChange:</span></span> <span class="token attr-name">handleChange1</span>
  <span class="token attr-name">}</span>
<span class="token attr-name">}</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Upload</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">  选择文件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">&gt;</span></span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> 以选中</span><span class="token punctuation">{</span>startFileList<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token plain-text">个文件，已上传</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>multipleUpload<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","dtgppmg1dymqgsde.html.vue"]]);export{r as default};
