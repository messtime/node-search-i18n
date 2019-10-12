var fs = require("fs");
var path = require("path");
var chalk = require('chalk')
var config = require('./config.js');

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
    // ...labelsCodeEn,
    ...labelsMEn,
  },
  zh_cn: {
    ...labelsCn,
    // ...labelsCodeCn,
    ...labelsMCn,
  },
  zh_tw: {
    ...labelsZh,
    // ...labelsCodeZh,
    ...labelsMZh,
  },
};

module.exports = {
  en: messages.en,
  zh_cn: messages.zh_cn,
  zh_tw: messages.zh_tw,
}
