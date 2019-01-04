const routes = (module.exports = require("next-routes")());

routes.add("webtoonView", "/webtoon/view/:nickname", "/webtoon/view");
routes.add("webtoonViewer", "/webtoon/viewer/:episodeId", "/webtoon/viewer");
