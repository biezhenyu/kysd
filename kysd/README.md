# Jkgj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# 这是一个angular4的项目
项目分了三个模块：健康速递咨询，健康加油站，健康管家，用父路由来管理这些模块，这些模块使用了懒加载

每个模块里面又有自己的子路由，组件这些，还是使用了一个中间模块，使用了resolve守卫

http请求使用HTTPClient模块








# 外网访问（端口转发）时需加disable-host-check参数，如下
ng serve --prod --proxy-config proxy.conf.json --serve-path hyglsd8309 --base-href . --disable-host-check true

# 端口转发
ssh -v -R 8309:localhost:4200 -p 22 dev@www.jkjsf.net

# 菜单配置
http://www.jkjsf.net/hyglsd/?url=CCVC 心脑血管咨询 
http://www.jkjsf.net/wis/wx/wx01a7882c0a7666d6/menu?redirect_uri=http://www.jkjsf.net/hyglsd/?url%3DCCVC

http://www.jkjsf.net/hyglsd/?url=HEC 健康速递咨询 
http://www.jkjsf.net/wis/wx/wx01a7882c0a7666d6/menu?redirect_uri=http://www.jkjsf.net/hyglsd/?url%3DHEC

http://www.jkjsf.net/hyglsd/?url=HGS 健康加油站 
http://www.jkjsf.net/wis/wx/wx01a7882c0a7666d6/menu?redirect_uri=http://www.jkjsf.net/hyglsd/?url%3DHGS

http://www.jkjsf.net/hyglsd/?url=HHM 健康管家
http://www.jkjsf.net/wis/wx/wx01a7882c0a7666d6/menu?redirect_uri=http://www.jkjsf.net/hyglsd/?url%3DHHM
