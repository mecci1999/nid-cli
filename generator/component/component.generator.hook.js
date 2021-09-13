const componentGeneratorHook = (api, options) => {
  api.afterInvoke(() => {
    console.log('cc');
  });
};

module.exports = componentGeneratorHook;
