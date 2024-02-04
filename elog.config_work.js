module.exports = {
  write: {
    platform: 'yuque-pwd',
    'yuque-pwd': {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      host: '',
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      linebreak: false,
    },
  },
  
  deploy: {
    platform: 'local',
    local: {
      outputDir: './src/work',
      filename: 'urlname',
      format: 'matter-markdown',
      catalog: false,
      formatExt: '',
    },
  },
  image: {
    enable: true,
    platform: 'oss',
    local: {
      outputDir: './src/public/docimgs',
      prefixKey: '/images',
    },
    oss: {
      secretId: process.env.OSS_SECRET_ID,
      secretKey: process.env.OSS_SECRET_KEY,
      bucket: process.env.OSS_BUCKET,
      region: process.env.OSS_REGION,
      host: process.env.OSS_HOST,
      prefixKey: '',
      secretExt: '', // 可选
    },
    cos: {
      secretId: process.env.COS_SECRET_ID,
      secretKey: process.env.COS_SECRET_KEY,
      bucket: process.env.COS_BUCKET,
      region: process.env.COS_REGION,
      host: '',
      prefixKey: '',
      secretExt: '', // 可选
    },
    qiniu: {
      secretId: process.env.QINIU_SECRET_ID,
      secretKey: process.env.QINIU_SECRET_KEY,
      bucket: process.env.QINIU_BUCKET,
      region: process.env.QINIU_REGION,
      host: process.env.QINIU_HOST,
      prefixKey: '',
      secretExt: '', // 可选
    },
    upyun: {
      user: process.env.UPYUN_USER,
      password: process.env.UPYUN_PASSWORD,
      bucket: process.env.UPYUN_BUCKET,
      host: process.env.UPYUN_HOST,
      prefixKey: '',
      secretExt: '', // 可选
    },
    github: {
      user: process.env.GITHUB_USER,
      token: process.env.GITHUB_TOKEN,
      repo: process.env.GITHUB_REPO,
      branch: 'images',
      host: '',
      prefixKey: '',
      secretExt: '', // 可选
    },
  },
}