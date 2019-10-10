var fs = require("fs");
var path = require("path");
var chalk = require('chalk')
require("babel-register")({
  presets: ["env"]
});

// 多语言源文件
var i18nDir = "./i18n";
// 多语言输出文件
var outputDir = "./output/";

import labelsCn from './i18n/zh_cn';
import labelsEn from './i18n/en';
import labelsZh from './i18n/zh_tw';

import labelsCodeCn from './i18n/code_zh_cn';
import labelsCodeEn from './i18n/code_en';
import labelsCodeZh from './i18n/code_zh_tw';

import labelsMCn from './i18n/m_zh-hans';
import labelsMEn from './i18n/m_en';
import labelsMZh from './i18n/m_zh-hant';
setTimeout(()=>{
  const messages = {
  en: {
    ...labelsEn,
    ...labelsCodeEn,
    ...labelsMEn,
  },
  zh_cn: {
    ...labelsCn,
    ...labelsCodeCn,
    ...labelsMCn,
  },
  zh_tw: {
    ...labelsZh,
    ...labelsCodeZh,
    ...labelsMZh,
  },
};

var en = messages.en;
var zh_cn = messages.zh_cn;
var zh_tw = messages.zh_tw;
writeFile(en,'en')
writeFile(zh_cn,'zh_cn')
writeFile(zh_tw,'zh_tw')
function writeFile(data, filename) {
  fs.writeFileSync(outputDir + 'filename', extraData, { flag: "w", encoding: "utf-8" });
  console.log(chalk.yellow('有额外需要处理的文件:', outputDir + 'extra' + filename));

}
}, 2000)

