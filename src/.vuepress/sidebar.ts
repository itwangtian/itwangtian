import { sidebar } from "vuepress-theme-hope";

// react
const cacheReact = require('../../elog.cache.json')
const  catalogReact = cacheReact.catalog
// 建站
const cacheWork = require('../../elog.cache_work.json')
const  catalogWork = cacheWork.catalog
 
// 递归函数本质上是一个在回调自身的函数，用于改造数据结构，
// 重点在于跳出循环的机制，否则陷入死循环啦
function genYuqueRoute(catalog) {
  // 将语雀配置中的一维数组，递归生产菜单树结构
  // 参数1:遍历数组
  // 参数2:父菜单id
  const deep = (arrlist,parantId) => {
    let forList:any[] = []
    arrlist.forEach(element => {
      // 菜单id不一致，跳出循环调用
      console.log('项目')
      if(element.parent_uuid !== parantId) return
      // 如果是TITLE类型新增配置项
      if(element.type === 'TITLE'){
          forList.push({
            text:element.title,
            collapsible:true,
            children:deep(arrlist,element.uuid)
          })
        // 如果是DOC 类型追加文件地址 
      }else{
          forList.push(element.url+'.md')    
        }
      
    }); 
    return forList 
  }
   return deep(catalog,'')
} 

export default sidebar({
  "/": [
    '',
    {
      text: "TS+React开发",
      icon: "laptop-code",
      prefix: "docs/", 
      collapsible: false,
      // children: "structure"
      children: genYuqueRoute(catalogReact),

    },
    {
      text: "建站攻略",
      icon: "computer",
      collapsible: false,
      prefix: "work/",
        // children: "structure"
      children: genYuqueRoute(catalogWork),
    },
    // {
    //   text: "程序人生",
    //   icon: "book",
    //   collapsible: true,
    //   prefix: "life/",
    //   children: "structure",
    // }
   
  ],
});



