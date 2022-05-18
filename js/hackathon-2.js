document.addEventListener("DOMContentLoaded", () => {

    const UTC_C_D = Date.UTC(2022, 5, 16, 15)


    // Attach Collpsable lists
    {
        document.querySelectorAll('.collapse-container').forEach((elm, idx) => {

            if (idx === 0)
                elm.classList.toggle('collapse-open');

            elm.querySelector('.open-collapse-btn').addEventListener('click', () => {
                elm.classList.toggle('collapse-open');
            })

            const setCollapseMenuHeight = () => {
                const contentWrapperElm = elm.querySelector('.collapse-content-wrapper');
                contentWrapperElm.style.setProperty('--max-content-height', contentWrapperElm.scrollHeight)
            }
            setCollapseMenuHeight();

            window.addEventListener('resize', setCollapseMenuHeight)
        })

    }

    // Countdown timer
    {

        var countDownDate = UTC_C_D;
        // Update the count down every 1 second

        const counters = document.querySelectorAll('#register-counter .counters-list > div')
        const daysCounter = counters[0];
        const hrsCounter = counters[1];
        const minutesCounter = counters[2];

        function setTime() {

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
            minutesCounter.textContent = minutes + 'm'

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("register-counter").style.display = "none";
            }
        }
        setTime();
        var x = setInterval(setTime, 1000);
    }

})