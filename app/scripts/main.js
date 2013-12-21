(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';
        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));

var modal = '<div id="overlay"></div><div id="modal"><h3>Welcome</h3><p>This is a static prototype of a dasboard UI for an applicant management and tracking app</p><a href="#" id="close" class="pure-button">Continue</a></div>'

$('a:not(#menuLink, #close)').on('click', noLink );

function noLink(e) {
    e.preventDefault();
    alert("Sorry, not a real link!")
}

function modalOn() {
    $("body").append(modal);
}

function modalOff(e) {
    e.preventDefault();
    $('#overlay, #modal').remove();
}

$('document').ready(function(){
    modalOn();
    $('#close').on('click', modalOff );
});