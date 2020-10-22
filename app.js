var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var minify = require('express-minify');
var expressAMP = require('express-amp');

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var tvRouter = require('./routes/tv');

var app = express();

app.use(expressAMP({
  override: false,
  staticsPath: `${process.cwd()}/public`
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(minify({
  cache: false,
  uglifyJsModule: null,
  errorHandler: null,
  jsMatch: /javascript/,
  cssMatch: /css/,
}));

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/tv', tvRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(1101, console.log("THAT ON! D:"))
