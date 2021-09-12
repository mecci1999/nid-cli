const { getGeneratedFilePath } = require('../app/app.service');
const { getTemplatePath, getComponentName } = require('./component.service');

const componentGenerator = (api, options) => {
  if (!options.component) return;

  // 组件存放的位置
  const generatedComponentPath = getGeneratedFilePath('component', options);

  // 组件样式表存放的位置
  const generatedStylePath = getGeneratedFilePath('style', options);

  // 模板路径
  const { componentTemplatePath, styleTemplatePath } = getTemplatePath();

  // 组件名称
  const { componentName, componentNamePascalCase } = getComponentName(options);

  api.render(
    {
      [generatedComponentPath]: componentTemplatePath,
      [generatedStylePath]: styleTemplatePath,
    },
    {
      componentName,
      componentNamePascalCase,
    },
  );
};

module.exports = componentGenerator;
