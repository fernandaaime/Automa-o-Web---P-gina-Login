/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type cadastro_page = typeof import('./pages/cadastro.js');
type home_pagePage = typeof import('./pages/home_page.js');
type cadastro_Page = typeof import('./pages/cadastro.js');
type create_userPage = typeof import('./pages/create_user.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, cadastro_page: cadastro_page, home_pagePage: home_pagePage, cadastro_Page: cadastro_Page, create_userPage: create_userPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
