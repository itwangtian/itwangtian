import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as a}from"./app-510708ee.js";const t={},i=a(`<blockquote><p>执行 git add .的时候出现的警告</p></blockquote><p>这个警告是由于 Git 在处理 .husky/pre-commit 文件时注意到了行尾标识符（end-of-line）的差异导致的。警告的意思是 Git 将会替换行尾的 LF（Line Feed）标识符为 CRLF（Carriage Return Line Feed）标识符。</p><p>这个警告通常在跨平台开发中出现，因为不同操作系统对于换行符的表示方式不同。Unix 和 Linux 系统使用 LF 作为行尾标识符，而 Windows 系统使用 CRLF。</p><p>虽然这个警告不会导致脚本无法运行，但建议按以下方式修改</p><p>在当前项目目录下，打开命令行，输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Linux/macOS系统下在提交代码时自动将CRLF转换为LF</span>
git config <span class="token operator">--</span>global core<span class="token punctuation">.</span>autocrlf input

<span class="token comment">// Windows系统下在提交代码时自动将LF转换为CRLF</span>
git config <span class="token operator">--</span>global core<span class="token punctuation">.</span>autocrlf <span class="token boolean">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function c(l,r){return e(),s("div",null,o)}const u=n(t,[["render",c],["__file","fer2ogyut4tmc926.html.vue"]]);export{u as default};
