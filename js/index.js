import test from './upload';

const enterButton = document.querySelector('.button')

enterButton.addEventListener('click', function() {
    enterButton.style.display = 'none';

});

console.log(` i have made it ${test}`)
    // open a sign in

// if is already a user then open account with data, and option to upload a file

// if not a user, open a registration form and option to upload a file

//after a file is uploaded - connect to sever and show results

Date.prototype.lastYear = () => {
    return new Date().getFullYear() - 1
}

new Date().lastYear()