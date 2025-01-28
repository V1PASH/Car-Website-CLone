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