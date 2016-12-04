/**
 * Created by Administrator on 2016/12/4.
 */
/*
node r.js -o baseUrl=public/js name=home out=build.js optimize=none
*/
{
    baseUrl: "public/js",
        dir: "public/dist",
    optimize: "uglify",
    removeCombined: true,
    modules: [
    {
        name: "home"
    }
]
}