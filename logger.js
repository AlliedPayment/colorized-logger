const chalk = require("chalk");

class Logger {
  debug(any, ...optionalParams) {
    const msg = typeof any == "string" ? chalk.blue(any) : any;
    if (!!optionalParams && optionalParams.length > 0) {
      console.debug(msg, ...optionalParams);
      return;
    }
    console.debug(msg);
  }

  info(any, ...optionalParams) {
    const msg = typeof any == "string" ? chalk.cyan(any) : any;
    if (!!optionalParams && optionalParams.length > 0) {
      console.info(msg, ...optionalParams);
      return;
    }
    console.info(msg);
  }

  warn(any, ...optionalParams) {
    const msg = typeof any == "string" ? chalk.yellow(any) : any;
    if (!!optionalParams && optionalParams.length > 0) {
      console.warn(msg, ...optionalParams);
      return;
    }
    console.warn(msg);
  }

  success(any, ...optionalParams) {
    const msg = typeof any == "string" ? chalk.green(any) : any;
    if (!!optionalParams && optionalParams.length > 0) {
      console.log(msg, ...optionalParams);
      return;
    }
    console.log(msg);
  }

  fail(any, ...optionalParams) {
    const msg = typeof any == "string" ? chalk.red(any) : any;
    if (!!optionalParams && optionalParams.length > 0) {
      console.log(msg, ...optionalParams);
      return;
    }
    console.log(msg);
  }

  error(err, ...optionalParams) {
    const msg = typeof any == "string" ? chalk.red(err) : err;
    if (!!optionalParams && optionalParams.length > 0) {
      console.error(msg, ...optionalParams);
      return;
    }
    console.error(msg);
  }
}

module.exports = new Logger();
