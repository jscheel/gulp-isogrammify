'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var isogrammify = require('isogrammify');

module.exports = function (isogram) {
  return through.obj(function (file, enc, cb) {
    if (typeof isogram !== 'string') {
      cb(new gutil.PluginError('gulp-isogrammify', 'isogram string required'));
      return;
    }

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-isogrammify', 'Streaming not supported'));
      return;
    }

    try {
      file.contents = new Buffer(isogrammify(file.contents.toString(), isogram));
      this.push(file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-isogrammify', err));
    }

    cb();
  });
};
