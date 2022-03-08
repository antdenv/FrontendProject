import gulp from 'gulp';
import eslint from 'gulp-eslint';
 
/**
 * Указываем пути к файлам для проверки
 * @type {{js: string}}
 */
const paths = {
    dev: './public/**/*.js',
};
 
/**
 *   * Test JS lint
 * @return {*}
 */
function testJsLint() {
    return gulp.src(paths.dev).
           pipe(eslint()).
           pipe(eslint.format()).
           pipe(eslint.failAfterError());
}
 
const tests = gulp.parallel(testJsLint);
exports.tests = tests;
 
export default tests;

