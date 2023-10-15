import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as n}from"./app-040cbdf8.js";const r={},i=n(`<h1 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h1><p>执行后 git add . 、git commit 也设置了远端仓库地址，最后推送远端仓库报错，如下：<br><img src="https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/64b2e090821f312adf175fceb8e1f9c7.png" alt="image.png" loading="lazy"></p><h1 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因：</h1><p>云端仓库已存在内容，当前分支的最新提交落后于远程仓库的提交历史。</p><h1 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决" aria-hidden="true">#</a> 如何解决？</h1><p>强制推送，使用 <code>--force</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git push <span class="token operator">-</span>force <span class="token operator">-</span>u origin <span class="token string">&quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),t=[i];function c(o,d){return a(),s("div",null,t)}const h=e(r,[["render",c],["__file","veagx91gr9qnb585.html.vue"]]);export{h as default};