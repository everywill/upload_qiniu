var cdn = require('./lib/cdn');

// 上传后保存的文件名
key = '/images/wechat.jpeg';

// 生成上传Token
token = cdn.getToken(key);

filePath = './WechatIMG7.jpeg';

cdn.uploadFile(token, key, filePath, function(err, ret) {
    if (!err) {
        // 上传成功，处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);
    } else {
        // 上传失败
        console.log(err);
    }
});