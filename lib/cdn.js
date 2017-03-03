var qiniu = require('qiniu');

var config = require('../config');

// Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;

var bucket = config.bucket;

// 上传策略
function uptoken(key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
}

// 文件上传函数
function uploadFile(uptoken, key, localFile, callback) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, callback);
}

module.exports = {
    getToken: uptoken,
    uploadFile: uploadFile
}