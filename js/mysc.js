back = ['linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/section-1/1.jpg)',
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/section-1/2.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/section-1/3.jpg)"
]
i = 0;
document.getElementById('first').style.backgroundImage = back[0];
document.getElementById('bg-1').style.backgroundColor = 'orange';



function bg1() {
    document.getElementById('first').style.backgroundImage = back[0];
    i = 0;
    if (i == 0) {
        document.getElementById('bg-1').style.backgroundColor = 'orange';
        document.getElementById('bg-2').style.backgroundColor = 'transparent';
        document.getElementById('bg-3').style.backgroundColor = 'transparent';
        document.getElementById('main-tag-price').innerText = '$1000';
        document.getElementById('car-name').innerText = 'Bugatti Mistral';
    }
}

function bg2() {
    document.getElementById('first').style.backgroundImage = back[1];
    i = 1;
    if (i == 1) {
        document.getElementById('bg-1').style.backgroundColor = 'transparent';
        document.getElementById('bg-2').style.backgroundColor = 'orange';
        document.getElementById('bg-3').style.backgroundColor = 'transparent';
        document.getElementById('main-tag-price').innerText = '$450';
        document.getElementById('car-name').innerText = 'Audi RS7 SportBack';
    }
}

function bg3() {
    document.getElementById('first').style.backgroundImage = back[2];
    i = 2;
    if (i == 2) {
        document.getElementById('bg-1').style.backgroundColor = 'transparent';
        document.getElementById('bg-2').style.backgroundColor = 'transparent';
        document.getElementById('bg-3').style.backgroundColor = 'orange';
        document.getElementById('main-tag-price').innerText = '$650';
        document.getElementById('car-name').innerText = 'Bentley Bentayga';

    }
}



window.onload = function() {

    function changeImage() {
        i = (i + 1) % 3
        document.getElementById('first').style.backgroundImage = back[i];
        if (i == 0) {
            document.getElementById('bg-1').style.backgroundColor = 'orange';
            document.getElementById('bg-2').style.backgroundColor = 'transparent';
            document.getElementById('bg-3').style.backgroundColor = 'transparent';
            document.getElementById('main-tag-price').innerText = '$1000';
            document.getElementById('car-name').innerText = 'Bugatti Mistral';
        }
        if (i == 1) {
            document.getElementById('bg-1').style.backgroundColor = 'transparent';
            document.getElementById('bg-2').style.backgroundColor = 'orange';
            document.getElementById('bg-3').style.backgroundColor = 'transparent';
            document.getElementById('main-tag-price').innerText = '$450';
            document.getElementById('car-name').innerText = 'Audi RS7 SportBack';
        }
        if (i == 2) {
            document.getElementById('bg-1').style.backgroundColor = 'transparent';
            document.getElementById('bg-2').style.backgroundColor = 'transparent';
            document.getElementById('bg-3').style.backgroundColor = 'orange';
            document.getElementById('main-tag-price').innerText = '$650';
            document.getElementById('car-name').innerText = 'Bentley Bentayga';

        }
    }
    window.setInterval(changeImage, 5000);
}

/*services*/
function services1() {
    document.getElementById('not-active0').style.visibility = 'hidden';
    document.getElementById('not-active0').style.display = 'none';
    document.getElementById('not-active0').style.maxWidth = '0';
    document.getElementById('not-active0').style.opacity = '0';

    document.getElementById('not-active1').style.visibility = 'hidden';
    document.getElementById('not-active1').style.display = 'none';
    document.getElementById('not-active1').style.maxWidth = '0';
    document.getElementById('not-active1').style.opacity = '0';

    document.getElementById('not-active2').style.visibility = 'hidden';
    document.getElementById('not-active2').style.display = 'none';
    document.getElementById('not-active2').style.maxWidth = '0';
    document.getElementById('not-active2').style.opacity = '0';



    document.getElementById('active0').style.display = 'block';
    document.getElementById('active0').style.visibility = 'visible';
    document.getElementById('active0').style.maxWidth = '100%';
    document.getElementById('active0').style.opacity = '1';

    document.getElementById('active1').style.visibility = 'visible';
    document.getElementById('active1').style.display = 'block';
    document.getElementById('active1').style.maxWidth = '100%';
    document.getElementById('active1').style.opacity = '1';

    document.getElementById('active2').style.visibility = 'visible';
    document.getElementById('active2').style.display = 'block';
    document.getElementById('active2').style.maxWidth = '100%';
    document.getElementById('active2').style.opacity = '1';

}

function services2() {
    document.getElementById('not-active0').style.visibility = 'visible';
    document.getElementById('not-active0').style.display = 'block';
    document.getElementById('not-active0').style.maxWidth = '100%';
    document.getElementById('not-active0').style.opacity = '1';

    document.getElementById('not-active1').style.visibility = 'visible';
    document.getElementById('not-active1').style.display = 'block';
    document.getElementById('not-active1').style.maxWidth = '100%';
    document.getElementById('not-active1').style.opacity = '1';

    document.getElementById('not-active2').style.visibility = 'visible';
    document.getElementById('not-active2').style.display = 'block';
    document.getElementById('not-active2').style.maxWidth = '100%';
    document.getElementById('not-active2').style.opacity = '1';



    document.getElementById('active0').style.display = 'none';
    document.getElementById('active0').style.visibility = 'hidden';
    document.getElementById('active0').style.maxWidth = '0';
    document.getElementById('active0').style.opacity = '0';

    document.getElementById('active1').style.visibility = 'hidden';
    document.getElementById('active1').style.display = 'none';
    document.getElementById('active1').style.maxWidth = '0';
    document.getElementById('active1').style.opacity = '0';

    document.getElementById('active2').style.visibility = 'hidden';
    document.getElementById('active2').style.display = 'none';
    document.getElementById('active2').style.maxWidth = '0';
    document.getElementById('active2').style.opacity = '0';

}

k = 0;

function navbtn() {
    if (k == 0) {
        document.getElementById('mobile-nav-bar').style.visibility = 'visible';
        document.getElementById('mobile-nav-bar').style.opacity = '1';
        document.getElementById('mobile-nav-bar').style.maxHeight = '600px';
        k = 1;
    } else {
        k = 0;
        document.getElementById('mobile-nav-bar').style.visibility = 'hidden';
        document.getElementById('mobile-nav-bar').style.opacity = '0';

        document.getElementById('mobile-nav-bar').style.maxHeight = '0px';
    }
}