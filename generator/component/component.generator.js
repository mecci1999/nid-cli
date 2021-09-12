const { getGeneratedFilePath } = require('../app/app.service');

const componentGenerator = (api, options) => {
  if (!options.component) return;

  // 组件存放的位置
  const generatedComponentPath = getGeneratedFilePath('component', options);

  // 组件样式表存放的位置
  const generatedStylePath = getGeneratedFilePath('style', options);
  console.log(generatedStylePath);

  // api.render({
  //   'src/components/demo.vue': './templates/component.ejs',
  // });
};

module.exports = componentGenerator;
