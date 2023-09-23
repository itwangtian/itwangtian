import { navbar } from "vuepress-theme-hope";
// function genYuqueRoute(arr, pathname) {
//   function loop(parId) {
//     return arr.reduce((acc, cur) => {
//       if (cur.parent_uuid === parId) {
//         // const parent = arr.find(item => item.uuid === parId)
//         // cur.path = (parent?.path || '') + '/' + cur.title
//         cur.path = '/' + cur.slug
//         cur.items = loop(cur.uuid)
//         let route
//         if (cur.items.length) {
//           route = {
//             text: cur.title,
//             collapsed: false,
//             items: cur.items
//           }
//           acc.push(route)
//         } else {
//           if (cur.type === 'DOC') {
//             route = {
//               text: cur.title,
//               link: `${pathname}${cur.path}`,
//             }
//             acc.push(route)
//           }
//         }
//       }
//       return acc
//     }, [])
//   }
//   return loop('')
// }

// /**
//  * 生成语雀导航
//  * @param pathname
//  */
// export const genYuqueSideBar = (pathname: string) => {
//   const cache = require('../elog.cache.yuque-token.json')
//   const { catalog } = cache
//  return genYuqueRoute(catalog, pathname)
//   // console.log('res', res)
// }

// console.log('111111',genYuqueSideBar('/yuque-pwd'))
export default navbar([
'/blog', 
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
