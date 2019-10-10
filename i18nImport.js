var fs = require("fs");
var path = require("path");
require("babel-register")({
  presets: ["env"]
});
// 多语言源文件
var i18nDir = "./i18n";

import labelsCn from './i18n/zh_cn';
import labelsEn from './i18n/en';
import labelsZh from './i18n/zh_tw';

import labelsCodeCn from './i18n/code_zh_cn';
import labelsCodeEn from './i18n/code_en';
import labelsCodeZh from './i18n/code_zh_tw';

import labelsMCn from './i18n/m_zh-hans';
import labelsMEn from './i18n/m_en';
import labelsMZh from './i18n/m_zh-hant';

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
