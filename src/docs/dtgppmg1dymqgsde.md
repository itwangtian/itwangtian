---
title: antd 实现批量上传
urlname: dtgppmg1dymqgsde
date: "2023-08-30 23:21:56"
updated: "2023-09-09 17:12:15"
---

# 前言

多文件上传本质是循环存储的过程，只是在实现方式有所区别，
实现方式：

- 前端批量上传：前端轮询调用后端单文件上传接口
- 后端批量存储：一次性接收前端多文件，循环存储

# 组件 vs 定制化

antd 中的 upload 组件功能强大，支持文件夹、拖拽、自动上传、ui 美观，文档完善，通过简单配置即可开发完功能，以功能为主的开发，建议使用组件完成

如果定制化功能，业务交互复杂，建议手写上传功能，其本质将 file 类型的数据，以 fomdata 的格式发送给后端。

如实现多文件上传，建议搭配 promise 使用，promise.all() 可等待多个异步操性、结合此特性实现批量上传的效果。

# 示例代码

## antd-upload 自动上传

```tsx
// 初始化 上传组件的列表数据
const [fileList, setFileList] = useState<UploadFile[]>([]);
// uoload 组件配置项
const props = {
  beforeUpload: (file: File) => {
    if (file.size > maxFileSize) {
      message.warning("文件最多上传1m");
      return Upload.LIST_IGNORE;
    }
    // console.log(file, 'file')
    // const isPNG = file.type === 'image/png';
    // if (!isPNG) {
    //   message.error(`${file.name} is not a png file`);
    // }
    // return isPNG || Upload.LIST_IGNORE;
    // return true
  },
  action: "http:///localhost:9981/upload_oss", /// 接口地址 oss or 本地
  onChange: handleChange,
  multiple: true,
};
// upload 组件change事件
const handleChange: UploadProps["onChange"] = (info) => {
  console.log("oonchang", info);
  let newFileList = [...info.fileList];

  newFileList = newFileList.map((file) => {
    if (file.response) {
      // Component will show file.url as link
      file.url = file.response.url;
    }
    return file;
  });

  setFileList(newFileList);
};
// 支持拖拽的上传组件
<Dragger height={70} {...props} fileList={fileList} listType="picture">
  <p>支持拖拽上传</p>
</Dragger>;
```

## antd-upload +promise.all 批量上传

```tsx
  // 封装上传函数
  const uploadFiles = (file: any) => {
    console.log('file', file)
    const formData = new FormData()
    formData.append('file', file.originFileObj)
    return new Promise((resolve, rejects) => {
      request.post('/upload_oss', formData).then((response) => {
        resolve(response.data.imgUrl)
        message.success(`${file.name} 以上传成功`)
        console.log('startFileList', startFileList)
      }).catch((err) => {
        rejects(err)
      })
    })
  }

  // 提交上传
  const multipleUpload = async () => {
    const uploadPromiess = startFileList.map((file) => uploadFiles(file))
    let imgs = await Promise.all(uploadPromiess)
    console.log('全部上传成功', imgs)
  }
	// 上传组件chang事件
  const handleChange1: UploadProps['onChange'] = (info) => {

    let newFileList = [...info.fileList];
    console.log('触发了')
    newFileList = newFileList.map((file) => {

        // Component will show file.url as link
        try {
          // file 生成临时的url
          file.url = URL.createObjectURL(file.originFileObj as RcFile);

        } catch (error) {

        }

      return file;
    });
    console.log('oonchang', newFileList)
    // 更新
    setStrartFileList(newFileList);
  };

<Upload  {
  ...{
    multiple: true,
    maxCount: 10,
    fileList: startFileList,
    onRemove: (file) => {
      const index = startFileList.indexOf(file);
      const newFileList = startFileList.slice();
      newFileList.splice(index, 1);
      // setStrartFileList([]);
    },
    beforeUpload: (file: any) => {
      console.log('filelist', startFileList);
      // return Upload.LIST_IGNORE - 文件不进行回显
      // return false 关闭上传请求
      return false
    },
    listType: 'picture',
    onChange: handleChange1
  }
}>
</Upload>
  <Button >  选择文件</Button><br></br>  <div> <p> 以选中{startFileList.length}个文件，已上传</p></div>
    <Button onClick={multipleUpload}>提交</Button>
```
