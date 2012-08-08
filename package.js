Package.describe({
  summary: "mrt test package 1 v1.6.0"
});

Package.on_use(function (api) {
  api.add_files('server.js', 'server');
});
