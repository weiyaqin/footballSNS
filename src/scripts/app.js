// 引入spa
require("./libs/spa.min");
require("./libs/swiper-3.3.1.min");

// 引入视图文件
require("./views/index");
require("./views/guide");
require("./views/home");
require("./views/search");
require("./views/my");
require("./views/login");
require("./views/logins");

SPA.config({
	indexView:"guide"    // 设置默认视图
})