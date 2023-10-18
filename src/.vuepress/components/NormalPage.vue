

<template>
  <NormalPage>
    <!-- 使用 bottom 插槽引入评论组件 -->
    <template #contentAfter>
      <div class="theme-hope-content ">
        <div class="hint-container tip">
          <p class="hint-container-title"> 读者朋友好呀，我是王天~ 😊</p>

          <p> 尝试做过很多事情，半路出道的野生程序员、前端讲师、新手作者，最终还是喜欢写代码、乐于用文字记录热衷分享~</p>

          <p> 如文章有错误或者不严谨的地方，期待给于指正，万分感谢。🙇‍</p>

          <p> 如果喜欢或者 有所启发，欢迎 star，对作者也是一种鼓励👏</p>

          <p> 微信：「wangtian3111」，加我进王天唯一的读者群。</p>

          <p> 个人博客：<a href="https://itwangtian.com">https://itwangtian.com</a></p>
        </div>
        <hr>

      </div>
    </template>
  </NormalPage>
</template>

<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage";
</script>