const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();
  // modify storybook's file-loader rule to avoid conflicts with your inline svg
  const rules = config.module.rules;
  const fileLoaderRule = rules.find(rule => rule.test.test(".svg"));
  fileLoaderRule.exclude = /\.svg$/;
  rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });

  actions.replaceWebpackConfig(config);
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname), "node_modules"]
    }
  });
};
