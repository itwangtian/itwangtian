import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c,a as e,b as n,d as a,e as r}from"./app-1bdccc93.js";const t={},o=e("h2",{id:"环境配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境配置","aria-hidden":"true"},"#"),n(" 环境配置")],-1),v=e("h3",{id:"账号开通",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#账号开通","aria-hidden":"true"},"#"),n(" 账号开通")],-1),u={href:"https://oss.console.aliyun.com/bucket",target:"_blank",rel:"noopener noreferrer"},m={href:"https://ram.console.aliyun.com/manage/ak?spm=a2c8b.12215393.top-nav.dak.6c12336aYGPYmv",target:"_blank",rel:"noopener noreferrer"},b=r(`<h3 id="node-安装包" tabindex="-1"><a class="header-anchor" href="#node-安装包" aria-hidden="true">#</a> node 安装包</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 下载 Koa 模块</span>
npm install koa
<span class="token comment">// 下载 Koa Router 模块 https://www.npmjs.com/package/koa-Router[包含示例代码]</span>
npm install koa<span class="token operator">-</span>router
<span class="token comment">// 下载 @koa/cors 模块</span>
npm install <span class="token decorator"><span class="token at operator">@</span><span class="token function">koa</span></span><span class="token operator">/</span>cors
<span class="token comment">// 下载 ali-oss 模块</span>
npm install ali<span class="token operator">-</span>oss
<span class="token comment">// 下载 koa-body 模块</span>
npm install koa<span class="token operator">-</span>body
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alioss-核心操作接口" tabindex="-1"><a class="header-anchor" href="#alioss-核心操作接口" aria-hidden="true">#</a> alioss 核心操作接口</h2><h3 id="上传本地文件" tabindex="-1"><a class="header-anchor" href="#上传本地文件" aria-hidden="true">#</a> 上传本地文件</h3><p>过 put 接口将本地文件上传到 OSS</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const OSS = require(&#39;ali-oss&#39;)
const path = require(&quot;path&quot;)

const client = new OSS({
  // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: &#39;yourregion&#39;,
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: &#39;yourAccessKeyId&#39;,
  accessKeySecret: &#39;yourAccessKeySecret&#39;,
  // 填写Bucket名称。
  bucket: &#39;examplebucket&#39;,
});

const headers = {
  // 指定Object的存储类型。
  &#39;x-oss-storage-class&#39;: &#39;Standard&#39;,
  // 指定Object的访问权限。
  &#39;x-oss-object-acl&#39;: &#39;private&#39;,
  // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.jpg。
  // &#39;Content-Disposition&#39;: &#39;attachment; filename=&quot;example.jpg&quot;&#39;
  // 设置Object的标签，可同时设置多个标签。
  &#39;x-oss-tagging&#39;: &#39;Tag1=1&amp;Tag2=2&#39;,
  // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  &#39;x-oss-forbid-overwrite&#39;: &#39;true&#39;,
};

async function put () {
  try {
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
    const result = await client.put(&#39;exampleobject.txt&#39;, path.normalize(&#39;D:\\\\localpath\\\\examplefile.txt&#39;)
    // 自定义headers
    //,{headers}
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

put();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分片上传" tabindex="-1"><a class="header-anchor" href="#分片上传" aria-hidden="true">#</a> 分片上传</h3>`,7);function p(h,k){const s=l("ExternalLinkIcon");return d(),c("div",null,[o,v,e("ul",null,[e("li",null,[n("开通阿里云 oss "),e("a",u,[n("阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台"),a(s)])]),e("li",null,[n("生成 accessKey 和 secret 用于初始 oss "),e("a",m,[n("阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台"),a(s)])])]),b])}const _=i(t,[["render",p],["__file","dcdb8p31qp8y4zes.html.vue"]]);export{_ as default};
