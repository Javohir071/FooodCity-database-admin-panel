
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const container = document.querySelector('.container');
const form = document.querySelector('.input_container');
const msg_h2 = document.querySelector('.msg_h2');

btn1.addEventListener("click", () => {
    container.classList.remove('hide');
});

btn2.addEventListener("click", () => {
    container.classList.add('hide');
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        container.classList.add('hide');
    }
});

container.addEventListener("click", (e) => {
    if (e.target === container) {
        container.classList.add('hide');
    }
});



const User = JSON.parse(localStorage.getItem("User"))


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const user = form.user.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm_password.value;

    if (password === confirm) {
        const newEvent = {
            user: user,
            email: email,
            password: password,
            confirm: confirm,
        }
        User.push(newEvent)
        localStorage.setItem("User",JSON.stringify(User))

        msg_h2.textContent = "Muvaffaqiyatli qabul qilindi✅";
        msg_h2.style.backgroundColor = 'green';
        msg_h2.style.padding = '15px';
        msg_h2.style.color = 'white';
        msg_h2.style.borderRadius = '7px';
        form.reset();
        container.classList.add('hide');


        setTimeout(() => {
            msg_h2.style.display="none";
        }, 3000);
    } else {
        msg_h2.textContent = "Xatolik ❌";
        msg_h2.style.backgroundColor = 'red';
        msg_h2.style.color = 'white';
        msg_h2.style.padding = '15px';
        msg_h2.style.borderRadius = '7px';


        setTimeout(() => {
            msg_h2.style.display="none"; 
        }, 3000);
    }
});