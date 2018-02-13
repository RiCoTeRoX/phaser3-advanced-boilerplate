import colors from 'colors'; // eslint-disable-line
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

console.log(
  'Generating minified bundle for production via Webpack. This will take a moment...'.blue
);
webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // so a fatal error occurred. Stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production'.green);

  return 0;
});
