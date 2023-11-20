const body = document.querySelector('body');
//Header - Menu
const menu = document.querySelector('#menu-toggle');
const menuMobile = document.querySelector('.mob-menu-block');
const toRewardBlock = document.querySelector('#reward-link');


const removeOverlay = () => {
    const overlay = document.querySelector('.menu-overlay');
    if (overlay)
        overlay.remove();
}
if(menu)
    menu.addEventListener('click', () => {
        body.classList.toggle('nav-open');
        if (!menu.classList.contains('open')) {
            menu.classList.add('open');
            menuMobile.classList.add('active');
            let overlay = document.createElement('div');
            overlay.classList.add('menu-overlay');
            overlay.addEventListener('click', (e) => {
                menu.classList.remove('open');
                menuMobile.classList.remove('active');
                body.classList.toggle('nav-open');
                removeOverlay();
            })
            document.querySelector('body').prepend(overlay);
        } else {
            menu.classList.remove('open');
            menuMobile.classList.remove('active');
            removeOverlay()
        }

    });

//Footer - Button Go to the top of the page
const buttonUp = document.querySelector('#button-up');
buttonUp.addEventListener('click', function () {
    window.scrollTo({top: 0});
});

const attachedNameOutput = document.querySelector('.attached-name');

const fileInput = document.getElementById('fileAttachment');
if (fileInput)
    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            attachedNameOutput.innerHTML = fileInput.files[0].name;
        }
    })

const dropdown = document.querySelector('.select-dropdown');
const contactFormIssueCode = document.querySelector('.pseudo-select.select-code');
const contactFormIssueName = document.querySelector('.pseudo-select.select-name');
const sendButton = document.querySelector('#send-form-buttton');
const listOfOptions = document.querySelectorAll('.option');

const toggleDropdown = (event) => {
    if (event) event.stopPropagation();
    listOfOptions.forEach((option) => {
        option.classList.remove('list-active');
        if (option.getAttribute('data-id') === contactFormIssueCode.value)
            option.classList.add('list-active');
    });
    dropdown.classList.toggle('opened');
    if (document.querySelectorAll('.bg-reset').length > 0) {
        document.querySelector('.bg-reset').remove();
    } else {
        const bgReset = document.createElement('div');
        bgReset.classList.add('bg-reset')
        document.querySelector('.select-options').parentNode.prepend(bgReset);
    }
};

const selectOption = (event) => {
    contactFormIssueCode.value = event.currentTarget.getAttribute('data-id');
    contactFormIssueName.value = event.currentTarget.innerHTML;
};

listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
});

if (dropdown)
    dropdown.addEventListener('click', toggleDropdown);

if (sendButton)
    sendButton.addEventListener('click', (e) => {
        let form = new ContactForm(document.querySelector('#contactUsForm'))
        if (!form.validate()) e.preventDefault();

    });
