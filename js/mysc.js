back = ['linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/section-1/1.jpg)',
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/section-1/2.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/section-1/3.jpg)"
]

let i = 0;

function change() {
    document.getElementById('first').style.backgroundImage = back[i];

    i = (i + 1) % 3
}