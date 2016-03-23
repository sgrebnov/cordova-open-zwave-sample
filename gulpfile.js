/// <binding BeforeBuild='copy.htmlfiles.to.www' />
// 
// Inspiration from https://github.com/ghpabs/angular2-seed-project

'use strict';

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var browserSync = require('browser-sync');
var del = require('del');
var plugins = require('gulp-load-plugins')();
var gulptypescript = require('gulp-typescript');
var sourceMaps = require('gulp-sourcemaps');
var fs = require('fs');
var history = require('connect-history-api-fallback');
var connect = require('gulp-connect');

gulp.task('NPM+NODE.version', function (done) {
    // adding require here so it doesn't run every time the gulpfile.js is loaded and run.
    var checkEnvironment = require('./tools/check-environment.js');
    checkEnvironment({ requiredNpmVersion: '>=2.14.7 <3.0.0', requiredNodeVersion: '>=4.2.1 <5.0.0' }, done);
});

gulp.task('lint.typescript', function () {
    // Rules can be found here
    // https://github.com/palantir/tslint#supported-rules
    // Microsoft Rules = https://github.com/Microsoft/tslint-microsoft-contrib/blob/master/tslint.json
    var tslintConfig = require('./tools/tslint.json');
    return gulp.src(['scripts/**/*.ts', '!scripts/typings/**'])
        //Custom rules can be added to configuration.  rulesDirectory: 'folder/folder'
      .pipe(tslint({
          configuration: tslintConfig
      }))
      .pipe(tslint.report('verbose', { emitError: true, reportLimit: 0 }));

});

/**
 * Used before build to copy all the html file from ./scripts to ./www
 */
gulp.task('copy.htmlfiles.to.www', gulp.series(
    copyHTMLToWWW
));

//gulp.task('browser.sync.js-watch', ['js'], browserSync.reload);

/**
 * Start a small webserver.
 */
gulp.task('browser.sync.start.webserver', function () {
    browserSync.init({
        server: {
            baseDir: "./www/"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("./www/scripts/*.js", ['browser.sync.js-watch']);
});


function ts(filesRoot, filesGlob, filesDest, project) {
    var results = gulp.src(filesGlob)
        .pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(project))

    return results.js
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(filesDest))
}

function convertTSJS() {
    var tsconfigPath = './scripts/tsconfig.json';
    return gulp.src(['./scripts/**/*.ts', '!./scripts/typings/*'])
        .pipe(gulptypescript(gulptypescript.createProject(tsconfigPath)))
        .pipe(gulp.dest("www/scripts"));
}

function copyHTMLToWWW() {
    return gulp.src(['./scripts/**/*.html'])
    .pipe(gulp.dest('./www/scripts/'));
}

/**
 * This is used by the travis.yml file to compile the .ts files into .js before running the unit test.
 */
gulp.task("build.appfiles.typescript", gulp.series(
    convertTSJS,
    copyHTMLToWWW
));


gulp.task('post.build.cleanup', gulp.series(

));


/**
 * copy all www files to .protractor
 */
function copyWWWToProtractor() {
    return gulp.src(['./www/**', '!./www/scripts/tests/**'])
    .pipe(gulp.dest(".protractor/"));
}


function watch() {
    // add ability to watch
    // gulp.watch()
}