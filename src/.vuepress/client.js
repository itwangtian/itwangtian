// export default ({ router }) => {
//     /**
//      * 路由切换事件处理
//      */
//     console.log('触发了',11111)
//     router.beforeEach((to, from, next) => {
//       console.log("切换路由", to.fullPath, from.fullPath);
  
//       //触发百度的pv统计
//       if (typeof _hmt != "undefined") {
//         if (to.path) {
//           _hmt.push(["_trackPageview", to.fullPath]);
//           console.log("上报百度统计", to.fullPath);
//         }
//       }
  
//       // continue
//       next();
//     });
//   };

import { defineClientConfig } from "@vuepress/client";
console.log('路由守卫了')
export default defineClientConfig({
  enhance({ router }) {
      router.beforeEach((to, from, next) => {
      console.log("切换路由", to.fullPath, from.fullPath);
  
      //触发百度的pv统计
      if (typeof _hmt != "undefined") {
        if (to.path) {
          _hmt.push(["_trackPageview", to.fullPath]);
          console.log("上报百度统计", to.fullPath);
        }
      }
      // continue
      next();
    });
  },
});
