# gulp-isogrammify [![Build Status](https://travis-ci.org/jscheel/gulp-isogrammify.svg?branch=master)](https://travis-ci.org/jscheel/gulp-isogrammify)

> Gulp Isogrammify

Gulp wrapper for [isogrammify](https://github.com/ThomasR/isogrammify).


## Install

```
$ npm install --save-dev gulp-isogrammify
```


## Usage

```js
const gulp = require('gulp');
const isogrammify = require('gulp-isogrammify');

gulp.task('default', () => {
  gulp.src('src/file.ext')
    .pipe(isogrammify('isogram'))  //change string to your isogram
    .pipe(gulp.dest('dist'))
);
```


## API

### isogrammify(isogram)

#### options

##### isogram (required)

Type: `string`<br>
Default: undefined<br>

This string must have no repeating characters, no special characters, and must be the exact number of characters you are trying to replace.


## License

MIT © [Jared A. Scheel](http://jaredscheel.com)
