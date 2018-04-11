/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

//function openNav() {
//    document.getElementById("mySidenav").style.width = "250px";
//}
//
///* Set the width of the side navigation to 0 */
//function closeNav() {
//    document.getElementById("mySidenav").style.width = "0";
//}

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 10) {
        $('#nav').addClass('nav-bg');
    } else {
        $('#nav').removeClass('nav-bg');
    }
});