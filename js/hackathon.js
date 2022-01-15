


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