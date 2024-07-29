//-------function--------
var open = $(".open_menu");
var close = $(".close_menu");
nav_links = $(".navlinks");
open.click(function() {
    open.addClass("menu_icon_hide");
    close.addClass("menu_icon_show");
    nav_links.addClass("nav_animation");
});
close.click(function(){
    close.removeClass("menu_icon_show");
    open.removeClass("menu_icon_hide");
    nav_links.removeClass("nav_animation");
})