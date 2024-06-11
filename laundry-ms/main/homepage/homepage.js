//BURGER MENU
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = navLinks.querySelectorAll('a'); // Select all the links inside navLinks

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Add event listeners to each nav link to close the navigation container when clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const btnLogin = document.getElementById('form_open');
    const btnLaundryService = document.getElementById('openService');
    const login_form = document.getElementById('form_container');
    const laundry_service_form = document.getElementById('service_form');

    //open the login form
    btnLogin.onclick = function() {
        login_form.style.display = 'block';
        laundry_service_form.style.display = 'none';
    }

    //open the service request
    btnLaundryService.addEventListener('click', () => {
            laundry_service_form.style.display = 'block';
            login_form.style.display = 'none';
    });

});

//scrolling effect
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    const scaleValue = 0.5 + (scroll * 0.5); // Scale from 0.5 to 1 based on scroll position
    document.body.style.setProperty('--scale', scaleValue);
}, false);

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

//POP-UP LOGIN FORM
document.addEventListener('DOMContentLoaded', (event) => {
    const login_form = document.getElementById("form_container");
    const openLogin = document.getElementById("form_open");
    const closeBtn = document.getElementsByClassName("btnClose")[0];

    //open the service form
    openLogin.onclick = function() {
        login_form.style.display = "block";
    }

    //close the service form
    closeBtn.onclick = function() {
        login_form.style.display = "none";
    }

});

document.addEventListener('DOMContentLoaded', (event) => {
    const service_form = document.getElementById("service_form");
    const login_form = document.getElementById("form_container");
    const openLogin = document.getElementById("form_open");
    const openService = document.getElementById("openService");

    //open the login form
    openLogin.onclick = function() {
        login_form.style.display = "block";
        service_form.style.display = 'none';
    }

    //open the service form
    openService.onclick = function() {
        service_form.style.display = "block";
        login_form.style.display = 'none';
    }

});

//pop up for laundry service form
document.addEventListener('DOMContentLoaded', (event) => {
    const service_form = document.getElementById("service_form");
    const openBtn = document.getElementById("openService");
    const closeBtn = document.getElementsByClassName("btnClose")[1];

    //open the service form
    openBtn.onclick = function() {
        service_form.style.display = "block";
    }

    //close the service form
    closeBtn.onclick = function() {
        service_form.style.display = "none";
    }

});

//SERVICE REQUEST
//event listener for button cancel in first modal of the service request
document.getElementById('btnCancel').addEventListener('click', function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Are sure you want to cancel your service request?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            const service_form = document.getElementById('form_id');
            const service_form_con = document.getElementById('service_form');

            service_form.reset();
            service_form_con.style.display = 'none';  
        }
    });
});

document.getElementById('doneButton').addEventListener('click', function(event) {
    event.preventDefault();

    const service_overview = document.getElementById('service_overview');
    const service_form = document.getElementById('service_form');

    service_form.style.display = 'none';
    service_overview.style.display = 'block';
});


//OVERVIEW PANEL
document.addEventListener('DOMContentLoaded', (event) => {
    const service_overview = document.getElementById("service_overview");
    const service_form = document.getElementById('service_form');
    const closeBtn = document.getElementsByClassName("btnClose")[2];
    const btnBack = document.getElementById('btnBack');

    //close the service overview
    closeBtn.onclick = function() {
        service_overview.style.display = "none";
    }

    //back in the first modal
    btnBack.onclick = function() {
        service_overview.style.display = "none";
        service_form.style.display = "block";
    }

});

document.getElementById('btnCancel_service').addEventListener('click', function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Are sure you want to cancel your service request?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            //service overview
            const service_overview = document.getElementById('overview');
            const overview_container = document.getElementById('overview_container');
            
            service_overview.reset();
            overview_container.style.display = 'none';
        }
    });
});

document.getElementById('btnProceed').addEventListener('click', function(event) {
    event.preventDefault();

    const service_overview = document.getElementById('service_overview');
    const service_details = document.getElementById('service_details');

    service_overview.style.display = 'none';
    service_details.style.display = 'block';
});

//LAUNNDRY SERVICE DETAILS
document.addEventListener('DOMContentLoaded', (event) => {
    const service_details = document.getElementById('service_details');
    const closeBtn = document.getElementsByClassName("btnClose")[3];

    //close the service overview
    closeBtn.onclick = function() {
        service_details.style.display = "none";
    }

});

document.getElementById('btnCancel_service_details').addEventListener('click', function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Are sure you want to cancel your service request?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            //service details 
            const service_form_details = document.getElementById('service_req_container');
            const service_details = document.getElementById('service_details');

            service_form_details.reset();
            service_details.style.display = 'none'; 
           
        }
    });
});