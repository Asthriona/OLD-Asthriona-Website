const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const minify = require('express-minify');
const compression = require('compression')
const expressAMP = require('express-amp');
const Config = require('./config.json')

const indexRouter = require('./routes/index');

var app = express();

app.use(expressAMP({
  override: false,
  staticsPath: `${process.cwd()}/public`
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(minify());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));


if(Config.maintenance == true){
  app.get('*', (req,res)=>{
    res.render('maintenance')
  })
}else{
  app.use('/', indexRouter);
}

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
  res.render('error', {err});
});

app.listen(Config.port, console.log(`THAT ON! D: asthriona.com:${Config.port}`))
