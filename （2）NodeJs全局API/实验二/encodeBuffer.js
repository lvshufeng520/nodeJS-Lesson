var userName = process.argv[2];
var password = process.argv[3];

console.log("用户名：" + userName + "密码：" + password);
var loginStr = userName + ":" + password;
console.log(loginStr);
var buf1 = Buffer.from(loginStr,"utf-8");
var base64Str = buf1.toString("base64");
console.log("base64加密：" + base64Str);