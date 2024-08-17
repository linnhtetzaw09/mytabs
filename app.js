
//UI

let gettablinks = document.getElementsByClassName('tablinks'),
    gettabpanel = document.getElementsByClassName('tab-panel'),
    getbtnclose = document.querySelectorAll('.btn-close');

let tabpanels = Array.from(gettabpanel);

// console.log(tabpanels);

function gettab(evn,link){

    // console.log(link);

    // Remove active class from all tab links
    for (let x = 0; x < gettablinks.length; x++) {

        gettablinks[x].className = gettablinks[x].className.replace(' active', '');

        // Hide tab panel by close button
        getbtnclose[x].addEventListener('click', function () {
            this.parentElement.style.display = "none";
        });

    }

    // add single active
    evn.target.classList.add("active");

    // Hide all tab panels
    tabpanels.forEach(function (tabpanel) {
        tabpanel.style.display = "none";
    });

    // Show the selected tab panel
    document.getElementById(link).style.display = "block";

}

// Simulate a click on the first tab to show it by default
document.getElementById('autoclick').click();