const path = require('path');

/**
 * 定义组件模板文件路径
 */
const getTemplatePath = () => {
  const componentTemplatePath = path.join('.', 'templates', 'component.ejs');
  const styleTemplatePath = path.join('.', 'templates', 'component.style.ejs');

  return {
    componentTemplatePath,
    styleTemplatePath,
  };
};

/**
 * 导出方法
 */
module.exports = {
  getTemplatePath,
};
