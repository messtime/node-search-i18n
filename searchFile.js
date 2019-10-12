
var fs = require("fs");
var path = require("path");
var chalk = require('chalk')
var config = require('./config.js');
const MAX_FILE_NUMBER = 1000000;  // 测试时可以用，设置为1,可以看单文件效果
var rm = require('rimraf')

var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(babelConfig);
var mapI18n = require('./mapI18n.js');
var i18nData = require('./i18nData.js');
// 打包后js目录
var jsDir = config.jsDir;

// 多语言输出文件
var outputDir = config.outputDir;

console.log(chalk.cyan(process.env.BUILD));
if (process.env.BUILD === "webpack") {}
if (process.env.BUILD === "gulp") {}


rm(path.join(outputDir), err => {
  if (err) {
    console.log(chalk.yellow("删除失败" + outputDir, err));
  } else {
    fs.mkdir(outputDir, function(err) {
      if (err) {
        return console.log(chalk.yellow("创建失败" + outputDir, err));
      }
      console.log(chalk.cyan("已成功清空" + outputDir));
      fileDisplay(filePath);
    });

  }
})

var filePath = jsDir;

var dirFileNumber = 0;
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function(err, files) {
    if (err) {
      console.log(chalk.yellow(err))
    } else {
      dirFileNumber = files.length;
      //遍历读取到的文件列表
      files.forEach(function(filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function(err, stats) {
          if (err) {
            console.log(chalk.yellow('获取文件stats失败'));
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              searchFile(filedir, filename);
            }
            if (isDir) {
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      });
    }
  });
}


var regCommon = /\$t\([\s\S]{20}/gi; // 只匹配$t( ,避免漏掉多语言，是总数
var regKey = /\$t\(['"](.*?)['"\)]/gi;
var regBracket = /\$t\((.*?\))/gi;

var searchCounter = 0;

function searchFile(filePath, filename) {
  searchCounter++;
  if (searchCounter <= MAX_FILE_NUMBER) {
    var fileData = fs.readFileSync(filePath, "utf-8");
    var outputDataCommon = [];
    var outputDataKey = [];
    var outputDataBracket = [];
    var extraData = []; //记录人工需要处理的key
    fileData = deleteCodeComments(fileData); //清理注释
    fileData = fileData.replace(/[\r\n]/g,''); //清理回车换行
    var outputDataCommon = fileData.match(regCommon);
    fileData.replace(regBracket, function(s, s1, s2) {
      outputDataBracket.push(s1);
    });

    fileData.replace(regKey, function(s, s1, s2) {
      outputDataKey.push(s1);
    });
    outputDataKey.forEach((item, index) => {
      if (!item) {
        extraData.push(outputDataBracket[index]);
      }
    })
    if (extraData.length > 0) {
      writeExtraFile(extraData, filename);
    }
    if (outputDataCommon) {

      if (outputDataCommon.length != outputDataBracket.length) {
        console.log(chalk.yellow(filename, '漏掉了一些匹配,具体数量为： ', outputDataCommon.length - outputDataBracket.length))
        writeFile(outputDataCommon, 'common_' + filename);
      }
      if (outputDataBracket.length != outputDataKey.length) {
        console.log(chalk.yellow(filename, '漏掉了一些key,具体数量为： ', outputDataBracket.length - outputDataKey.length))
        writeFile(outputDataBracket, 'bracket_' + filename);
      }
      writeFile(outputDataKey, filename);
    }
    // 所有文件写完了，在写allkey
    if(dirFileNumber == searchCounter) {
      writeAllKey();
    }
  }
}

var totalKey = [];
var dataCouter = 0;

function writeFile(outputData, filename) {
  if (outputData) {
    totalKey = [...totalKey, ...outputData];
    dataCouter += outputData.length;
    // fs.writeFileSync(outputDir + filename, outputData, { flag: "w", encoding: "utf-8" });
  }

}

function distinct(arr) {
    let result = []
    let obj = {}
    for (let i of arr) {
        if (!obj[i]) {
            result.push(i)
            obj[i] = 1
        }
    }
    return result
}

function deleteCodeComments(code) {
  // 另一种思路更简便的办法
  // 将'://'全部替换为特殊字符，删除注释代码后再将其恢复回来
  var tmp1 = ':\/\/';
  var regTmp1 = /:\/\//g;
  var tmp2 = '@:@/@/@';
  var regTmp2 = /@:@\/@\/@/g;
  code = code.replace(regTmp1, tmp2);
  var reg = /(\/\/.*)?|(\/\*[\s\S]*?\*\/)/g;
  code = code.replace(reg, '');
  result = code.replace(regTmp2, tmp1);
  return result;
}


function writeAllKey() {
 var totalKeyData = distinct(totalKey);
  console.log(chalk.cyan('整合key文件:', outputDir + 'all_key.js'));
  fs.writeFileSync(outputDir + 'all_key.js', totalKeyData, { flag: "w", encoding: "utf-8" });

    mapI18n(totalKeyData,i18nData.en, 'en.js')
    // mapI18n(totalKeyData,i18nData.zh_cn, 'zh_cn.js')
    // mapI18n(totalKeyData,i18nData.zh_tw, 'zh_tw.js')
}
function writeExtraFile(extraData, filename) {
  fs.writeFileSync(outputDir + 'extra' + filename, extraData, { flag: "w", encoding: "utf-8" });
  console.log(chalk.yellow('有额外需要处理的文件:', outputDir + 'extra_' + filename));

}

