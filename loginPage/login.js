var menuList2 = document.getElementById("menuList2");
menuList2.style.maxHeight = "0px";

function togglemenu()
{
    if(menuList2.style.maxHeight == "0px")
    {
        menuList2.style.maxHeight = "125px";
    }

    else
    {
        menuList2.style.maxHeight = "0px";
    }


}

const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('#btnLogin');
const iconClose=document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})



