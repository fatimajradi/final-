document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const draggableElement = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');

    draggableElement.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', 'CSLC- Lebanese University');
    });

    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        dropzone.innerText = data;
    });


    const scrollButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    function displayCurrentTime() {
        const currentTimeElement = document.getElementById('currentTime');
        const currentTime = new Date().toLocaleTimeString();
        currentTimeElement.textContent = currentTime;
    }

  
    displayCurrentTime();


    setInterval(displayCurrentTime, 1000);
    
    function setCustomTime() {
        const customDateInput = document.getElementById('customDate').value;
        const currentTimeElement = document.getElementById('currentTime');
        
        if (customDateInput) {
            currentTimeElement.textContent = customDateInput;
        } else {
            currentTimeElement.textContent = "Please enter a valid date and time.";
        }
    }
    
   
});
