
const COUNTDOWN_DATA = "Feb 25, 2022 12:00:00"


// Attach Collpsable lists
{
    document.querySelectorAll('.collapse-container').forEach(elm => {
        elm.querySelector('.open-collapse-btn').addEventListener('click', () => {
            elm.classList.toggle('collapse-open');
        })

        const setCollapseMenuHeight = () => {
            const contentWrapperElm = elm.querySelector('.collapse-content-wrapper');
            contentWrapperElm.style.setProperty('--max-content-height', contentWrapperElm.scrollHeight + 3)
        }
        setCollapseMenuHeight();

        window.addEventListener('resize', setCollapseMenuHeight)
    })

}

// Countdown timer
{

    var countDownDate = new Date(COUNTDOWN_DATA).getTime();
    // Update the count down every 1 second

    const counters = document.querySelectorAll('#register-counter .counters-list > div')
    const daysCounter = counters[0];
    const hrsCounter = counters[1];
    const secsCounter = counters[2];
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysCounter.textContent = days + 'd'
        hrsCounter.textContent = hours + 'h'
        secsCounter.textContent = seconds + 's'

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("register-counter").style.display = "none";
        }
    }, 1000);
}