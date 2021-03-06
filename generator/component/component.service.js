const path = require('path');
const { camelCase, startCase } = require('lodash');
const { getGeneratedFileImportPath } = require('../app/app.service');

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
 * 获取组件名称
 */
const getComponentName = (options) => {
  // 解构数据
  const { component: componentName } = options;

  // 获得组件名称
  const componentNamePascalCase = startCase(camelCase(componentName)).replace(
    / /g,
    '',
  );

  return { componentName, componentNamePascalCase };
};

/**
 * 获取组件导入声明
 */
const getComponentImportStatement = (options) => {
  const { componentNamePascalCase } = getComponentName(options);
  const componentImportPath = getGeneratedFileImportPath('component', options);

  return `import ${componentNamePascalCase} from '${componentImportPath};'`;
};

/**
 * 导出方法
 */
module.exports = {
  getTemplatePath,
  getComponentName,
  getComponentImportStatement,
};
