var fs = require("fs");
var path = require("path");
var chalk = require('chalk')
var config = require('./config.js');
var outputDir = config.outputDir;

function mapI18n(keyArr, i18n, filename) {
  let falseKeyCount = 0;
  let result = {};
  let resultExtra = [];
  let errorKeyCount = 0
  keyArr.forEach((item, index) => {
    if (!item) {
      falseKeyCount++;
      if(falseKeyCount>2) {
        console.log(chalk.magenta(falseKeyCount,"key为false次数超过一次，值为(", item, '),index是(',index,')'));
      }
      return true;
    }
    var reg = /(codeMsg\.)|(codeMsg\[)|(hstMsg\.)|(hstMsg\[)/ig;
    if(item && reg.test(item)){
      // console.log(chalk.cyan('移除code msg:', item ));
      return true;
    }
    let itemArr = item.split('.');
    if(!itemArr[1] || !i18n[itemArr[0]] ) {
      errorKeyCount++;
      // console.log(chalk.magentaBright(errorKeyCount,"key非标准形式 或 多语言无一级key值，key值为(", item, ')'));
    }
    if (i18n[itemArr[0]] && i18n[itemArr[0]][itemArr[1]]) {
      result[itemArr[0]] = result[itemArr[0]] || {};
      result[itemArr[0]][itemArr[1]] = i18n[itemArr[0]][itemArr[1]];
    } else {
      // console.log(chalk.magentaBright("未map到的key,值为(", item, ')'));
      resultExtra.push(item);
      console.log(chalk.magentaBright(resultExtra.length,"未找到map的key，key值为(", item, ')'));
    }
  })
  writeFile(JSON.stringify(result), filename)
  writeFile(resultExtra, 'extra_' + filename)
  // console.log(chalk.magentaBright("key 为false,个数为(", falseKeyCount,')'));
  // console.log(chalk.magentaBright("key非标准形式 或 多语言无一级key值,个数为(", errorKeyCount,')'));
  // console.log(chalk.magentaBright("未找到map的key,个数为(", resultExtra.length,')'));

}

function writeFile(data, filename) {
  fs.writeFileSync(outputDir + filename, data, { flag: "w", encoding: "utf-8" });
  console.log(chalk.yellow('result的文件:', outputDir + filename));
}

module.exports = mapI18n;
