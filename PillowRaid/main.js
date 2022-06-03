let tab_menu_num = 0; // 전역변수
function tab_menu(num) {
    const tab_menu_list = document.getElementsByClassName("tab_menu")
    const menu_list = document.getElementsByClassName("menu");
    tab_menu_list[tab_menu_num].className = "tab_menu not_active";
    menu_list[tab_menu_num].style.display = "none";
    tab_menu_list[num].className = "tab_menu active";
    menu_list[num].style.display = "block";
    tab_menu_num = num;
}