const path = require('path');
const { last } = require('lodash');

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

  let typeOption = fileType;

  if (fileType === 'style') {
    typeOption = 'component';
  }

  const { [typeOption]: fileName, path: filePath } = options;

  // 带后缀的文件名
  let fileFullName;

  switch (fileType) {
    case 'component':
      fileFullName = `${fileName}.vue`;
      break;
    case 'style':
      fileFullName = path.join('styles', `${fileName}.css`);
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

/**
 * 获取父辈文件路径
 */
const getParentFilePath = (fileType, options) => {
  // --parent comment/index/comment-index
  const { parent } = options;
  let fileExtention = '';

  switch (fileType) {
    case 'component':
      fileExtention = '.vue';
      break;
  }

  let parentFilePath = [];

  const parentArray = parent.split('/');
  const parentFileName = last(parentArray) + fileExtention;

  if (parentArray.length > 1) {
    parentArray.pop();
    parentFilePath = ['src', ...parentArray, parentFileName];
  } else {
    parentFilePath = ['src', parent, parentFileName];
  }

  return path.join(parentFilePath);
};

module.exports = { getGeneratedFilePath, getParentFilePath };
