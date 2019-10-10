var fs = require("fs");
var path = require("path");
var chalk = require('chalk')

var rm = require('rimraf')

require("babel-register")({
  presets: ["env"]
});

// 打包后js目录
var jsDir = "./dist/static/js";

// 多语言输出文件
var outputDir = "./output/";



console.log(chalk.cyan(process.env.BUILD));
if (process.env.BUILD === "webpack") {}
if (process.env.BUILD === "gulp") {}
// try {
//   fs.unlinkSync(outputDir);
//   chalk.cyan("已成功删除" + outputDir);
// } catch (err) {
//   chalk.cyan("删除失败" + outputDir, err);
//   // 处理错误
// }


rm(path.join(outputDir), err => {
  if (err) {
    console.log(chalk.yellow("删除失败" + outputDir, err));
  } else {
    console.log(chalk.cyan("已成功删除" + outputDir));
    fs.mkdir(outputDir, function(err) {
      if (err) {
        return console.error(err);
      }
      fileDisplay(filePath);
    });

  }
})


// var filePath = path.resolve(jsDir);
var filePath = jsDir;

// 遍历多语言源文件
// fileDirImport(i18nDir);

//调用文件遍历方法

// console.log(chalk.cyan(i18nTemp);

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
              console.log(chalk.cyan(filename));
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

function fileDirImport(filePath) {
  //根据文件路径读取文件，返回文件列表
  var files = fs.readdirSync(filePath);
  //遍历读取到的文件列表
  files.forEach(function(filename) {
    //获取当前文件的绝对路径
    var filedir = path.join(filePath, filename);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    var stats = fs.statSync(filedir);

    var isFile = stats.isFile(); //是文件
    var isDir = stats.isDirectory(); //是文件夹
    if (isFile) {
      console.log(chalk.cyan(filename));
      i18nTemp.push(require(filePath + "/" + filename));
      // searchFile(filedir, filename);
    }
    if (isDir) {
      fileDirImport(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}

var regCommon = /\$t\([\s\S]{20}/gi; // 只匹配$t( ,避免漏掉多语言
var regKey = /\$t\(['"](.*?)['"\)]/gi;

var searchCounter = 1;

function searchFile(filePath, filename) {
  if (searchCounter <= 1000) {
    var fileData = fs.readFileSync(filePath, "utf-8");
    var outputDataCommon = [];
    var outputDataKey = [];

    var outputDataCommon = fileData.match(regCommon);

    fileData.replace(regKey, function(s, s1) {
      outputDataKey.push(s1);
    });
    if (outputDataCommon) {
      if (outputDataCommon.length != outputDataKey.length) {
        console.log(chalk.yellow(filename, '漏掉了一些key,具体数量为： ', outputDataCommon.length - outputDataKey.length))
        writeFile(outputDataCommon, 'common_' + filename);

      }
      writeFile(outputDataKey, filename);
      searchCounter++;
    }

  }

  // console.log(chalk.cyan(outputData.length)

  // fileData.replace(reg, function(s, s1) {
  //   console.log(chalk.cyan(s1)
  // })
}
var writeCounter = 1;

function writeFile(outputData, filename) {
  writeCounter++;
  console.log(chalk.cyan("writeCounter:  ", writeCounter));
  // var writeData = filename +'\r\n\r\n'+ outputData + '\r\n\r\n';
  console.log(chalk.cyan(typeof outputData));
  if (outputData) {
    var writeData = JSON.stringify(outputData).replace(/,/g, "\r\n");
    fs.writeFileSync(outputDir + filename, outputData, { flag: "w", encoding: "utf-8" });
  }
}
