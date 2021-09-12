const path = require('path');

const getGeneratedFilePath = (fileType, options) => {
  /**
   * 1. --component comment
   *    -> src/comment/comment.vue
   *
   * 2. --component comment-index
   *    ->src/comment/index/comment-index.vue
   *
   * 3. --component comment-list --path comment/index/components
   *    ->src/comment/index/components/comment-list.vue
   */

  const { [fileType]: fileName, path: filePath } = options;

  // 带后缀的文件名
  let fileFullName;

  switch (fileType) {
    case 'component':
      fileFullName = `${fileName}.vue`;
      break;
  }

  const fileNameArray = fileName.split('-');
  const isMultiWordsFile = fileNameArray.length > 1;

  // 文件存放位置
  let fileFulllPath = [];

  if (filePath) {
    // 3
    const filePathArray = filePath.split('/');
    fileFulllPath = ['src', ...filePathArray, fileFullName];
  } else if (isMultiWordsFile) {
    // 2
    fileFulllPath = ['src', ...fileNameArray, fileFullName];
  } else {
    // 1
    fileFulllPath = ['src', fileName, fileFullName];
  }

  return path.join(...fileFulllPath);
};

module.exports = { getGeneratedFilePath };
