// https://github.com/planet-training/meteor-angular-material

Package.describe({
  name: 'mystec:angular-nvd3',
  version: '1.0.5',
  // Brief, one-line summary of the package.
  summary: 'AngularJS directives for the NVD3 reusable charting library (based on D3). [official]',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/krispo/angular-nvd3',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use([ "angular", "d3js:d3", "nvd3:nvd3" ], "client");

  api.addFiles([
    /* nvd3 base packages */
    'bower_components/angular-nvd3/dist/angular-nvd3.min.js',

    // NOT NEEDED with api.use("d3js", etc)
      //'client/bower_components/angular/angular.min.js',
      //'client/bower_components/d3/d3.min.js',
      //'client/bower_components/nvd3/build/nv.d3.js',
      //'client/bower_components/nvd3/build/nv.d3.css',
  ], "client");
});

// COMMAND: meteor test-packages ./
Package.onTest(function(api) {
  api.use(['mystec:angular-nvd3', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('package-test.js', ['client', 'server']);
});
