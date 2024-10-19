const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
const server = require('./output/server/server');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

exports.config = {
  tests: './steps/login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationpratice.com.br/',
      browser: process.env.BROWSER || 'chromium',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    cadastro_page: './pages/cadastro.js',
    create_userPage: './pages/create_user.js',
  },
 


  plugins: {
    mocha: {
      reporterOptions: {}
      },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: false, 
    }
  },
};