import{_ as s,r as a,o as l,c as d,a as e,b as i,d as n,e as r}from"./app-00d07f3a.js";const o={},c=r(`<p>eslint 检测代码规范、pretter 修复代码格式，他们功能有一些重叠，配置不当情况下、比如 eslint 设置单引号、prettier 双引号，会导致编译执行错误，导致冲突，如何解决呢？</p><p>冲突本质原因是 eslint 和 prettier 并行导致，解决冲突的方法好几种：</p><ol><li>关闭冲突规则</li><li>调整执行顺序</li><li>手动调整-统一配置</li></ol><h2 id="关闭冲突规则" tabindex="-1"><a class="header-anchor" href="#关闭冲突规则" aria-hidden="true">#</a> 关闭冲突规则</h2><p>使用 eslint-config-prettier 插件来禁用 ESLint 中与 Prettier 冲突的规则。<br> 该插件会将 Prettier 的规则应用到 ESLint 中，并自动禁用冲突的规则。您可以在 ESLint 配置文件中添加以下配置：</p><ol><li>安装 eslint-config-prettier：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save-dev eslint-config-prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),u={start:"2"},p={href:"https://eslint.org/docs/latest/use/configure/configuration-files",target:"_blank",rel:"noopener noreferrer"},v={href:"https://eslint.org/docs/latest/use/configure/configuration-files-new",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;extends&quot;: [&quot;eslint:recommended&quot;, &quot;plugin:prettier/recommended&quot;],
  // 其他配置项
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 ESLint 将使用 Prettier 的规则，并且禁用与其冲突的规则。</p><h2 id="调整执行顺序" tabindex="-1"><a class="header-anchor" href="#调整执行顺序" aria-hidden="true">#</a> 调整执行顺序</h2><p>可以使用 eslint-plugin-prettier 插件将 Prettier 集成到 ESLint 中。该插件将在检查代码的同时自动应用 Prettier 的格式化规则，确保代码风格一致。<br> 1、安装 eslint-plugin-prettier</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、将 prettier 放在最后，因为后面的配置项会覆盖前面的；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;plugins&quot;: [&quot;prettier&quot;],

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、修改 rules，将 prettier 的规则配置写入 eslint，这样 eslint 会一同校验 prettier 规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
{
  &quot;plugins&quot;: [&quot;prettier&quot;],
  &quot;rules&quot;: {
      &quot;prettier/prettier&quot;: &quot;error&quot;,
      // 其他规则
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动调整-统一配置" tabindex="-1"><a class="header-anchor" href="#手动调整-统一配置" aria-hidden="true">#</a> 手动调整-统一配置</h2><p>用手撸吧！将 prettier 和 eslint 配置设置一致即可</p>`,11);function b(g,h){const t=a("ExternalLinkIcon");return l(),d("div",null,[c,e("ol",u,[e("li",null,[i("将 eslint-config-prettier 添加到您的 ESLint 配置中 – "),e("a",p,[i("eslintrc"),n(t)]),i("或"),e("a",v,[i("eslint.config.js"),n(t)])])]),m])}const x=s(o,[["render",b],["__file","bp437kq13uf9ch6d.html.vue"]]);export{x as default};
