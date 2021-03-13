//最常用的饿处理异步的方式，stream
const {src, dest} = require('gulp')
const cleanCss = require('gulp-clean-css')
const reName = require('gulp-rename') 
exports.default = ()=>{
    //src转换流，dest写入流    
    return src('src/*.css')
    .pipe(cleanCss())
    .pipe(reName({
        extname:'.min.css'
    }))
    .pipe(dest('dist'))
}
