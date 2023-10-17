import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,e as r}from"./app-1bdccc93.js";const d={},h=r('<h1 id="一句话总结" tabindex="-1"><a class="header-anchor" href="#一句话总结" aria-hidden="true">#</a> 一句话总结：</h1><p>要更新视图呀，保组件以最新的状态更新。</p><h1 id="重新渲染步骤" tabindex="-1"><a class="header-anchor" href="#重新渲染步骤" aria-hidden="true">#</a> 重新渲染步骤：</h1><h2 id="重新计算组件的虚拟-dom-树" tabindex="-1"><a class="header-anchor" href="#重新计算组件的虚拟-dom-树" aria-hidden="true">#</a> 重新计算组件的虚拟 DOM 树</h2><p>当状态发生变化时，React 会重新计算组件的虚拟 DOM 树。这个过程是高效的，因为 React 使用了一些算法和优化技术，例如虚拟 DOM 的 diff 算法，来尽可能减少计算量。</p><h2 id="对比新旧虚拟-dom-树的差异" tabindex="-1"><a class="header-anchor" href="#对比新旧虚拟-dom-树的差异" aria-hidden="true">#</a> 对比新旧虚拟 DOM 树的差异</h2><p>React 会对比新旧两棵虚拟 DOM 树，并找出其中的差异。这个过程称为协调（reconciliation）。React 会查找需要添加、更新或移除的 DOM 节点，并生成一组操作指令，以最小的代价来实现新旧状态之间的变化。</p><h2 id="应用差异到-dom-上" tabindex="-1"><a class="header-anchor" href="#应用差异到-dom-上" aria-hidden="true">#</a> 应用差异到 DOM 上</h2><p>根据协调阶段的操作指令，React 会将变化应用到实际的 DOM 上。通过 DOM 操作，更新那些需要改变的元素，使页面显示出最新的状态。</p><p>重新渲染的触发机制确保了 React 的响应性和数据驱动的特性。当组件的状态发生改变时，React 会自动管理和更新组件的渲染结果，以确保 UI 的正确展示。</p>',10),c=[h];function i(o,n){return a(),t("div",null,c)}const m=e(d,[["render",i],["__file","tvze4ptzu906v7mh.html.vue"]]);export{m as default};