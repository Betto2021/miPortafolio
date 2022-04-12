/*Código para toggle del menu principal */

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-invisible');


//funciones
//función para activación del toggle

const menus = () => {
    menu.classList.toggle('menu');
    hamburguesa.classList.toggle('hamburguesa-rot');

}


//función para cerrar los divs de contacto
const cierreDivs = () => {
    while (socCont.firstChild) {
        socCont.removeChild(socCont.firstChild);
    }
    socCont.appendChild(whatsapp);
    socCont.appendChild(telegram);
    socCont.appendChild(linkedin);
    socCont.appendChild(gitHub);


}

//llamado a eventos de la pagina

//menu principal (toggle)

hamburguesa.addEventListener('click', menus);

//llamados a las secciones de la página
const perfil = document.querySelector('#menu1');
perfil.addEventListener('click', menus);

const experiencia = document.querySelector('#menu2');
experiencia.addEventListener('click', menus);

const habilidades = document.querySelector('#menu3');
habilidades.addEventListener('click', menus);

const contacto = document.querySelector('#menu4');
contacto.addEventListener('click', menus);


//Prtogramación para ver los contactos de

// Declaración de elementos del DOM

const whatsapp = document.querySelector('#wapp');
const telegram = document.querySelector('#telegram');
const linkedin = document.querySelector('#linkedin');
const gitHub = document.querySelector('#git-hub');
const socCont = document.querySelector('.social-container')
const btn = document.createElement('button');
const divWapp = document.createElement('div');
const linkWapp = document.createElement('a');
const divTelegram = document.createElement('div');
const linkTelegram = document.createElement('a');
const divLinkedin = document.createElement('div');
const linkLinkedin = document.createElement('a');
const divGitHub = document.createElement('div');
const linkGitHub = document.createElement('a');


//Llamado al contacto por WApp
whatsapp.addEventListener('click', () => {
    while (socCont.firstChild) {
        socCont.removeChild(socCont.firstChild);
    }

    btn.textContent = 'X';
    linkWapp.innerHTML = 'Click para chat por WhatsApp';
    linkWapp.href = 'https://wa.me/573163217230';
    linkWapp.target = '_blank';
    linkWapp.alt = 'click whatsapp';
    linkWapp.style.color = 'var(--colortxtinv)';
    divWapp.style.display = 'flex';
    divWapp.style.flexDirection = 'row-reverse';
    divWapp.style.justifyContent = 'space-between';
    divWapp.style.alignItems = 'center';
    divWapp.style.textAlign = 'center';
    divWapp.className = 'div-wapp';
    divWapp.style.width = '250px';
    divWapp.style.height = '70px';
    divWapp.style.border = '5px solid var(--colortxtinv)';
    divWapp.style.backgroundColor = 'var(--color-wapp)';
    divWapp.style.borderRadius = '15px';
    divWapp.style.lineHeight = '35px';
    divWapp.style.boxShadow = '0 5px 8px';
    btn.style.alignSelf = 'start';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.backgroundColor = 'var(--colortxtinv)';
    btn.style.color = 'var(--color-wapp)';
    btn.style.cursor = 'pointer';

    divWapp.appendChild(btn);
    divWapp.appendChild(linkWapp);
    socCont.appendChild(divWapp);
})


//Llamado al contacto por telegram

telegram.addEventListener('click', () => {
    while (socCont.firstChild) {
        socCont.removeChild(socCont.firstChild);
    }

    btn.textContent = 'X';

    linkTelegram.innerHTML = 'Click para chat por Telegram';
    linkTelegram.href = 'https://t.me/BettodelaOssa';
    linkTelegram.target = '_blank';
    linkTelegram.alt = 'click telegram';
    linkTelegram.style.color = 'var(--colortxtinv)';
    divTelegram.style.display = 'flex';
    divTelegram.style.flexDirection = 'row-reverse';
    divTelegram.style.justifyContent = 'space-between';
    divTelegram.style.alignItems = 'center';
    divTelegram.style.textAlign = 'center';
    divTelegram.className = 'div-wapp';
    divTelegram.style.width = '250px';
    divTelegram.style.height = '70px';
    divTelegram.style.border = '5px solid var(--colortxtinv)';
    divTelegram.style.backgroundColor = 'var(--color-telegram)';
    divTelegram.style.borderRadius = '15px';
    divTelegram.style.lineHeight = '35px';
    divTelegram.style.boxShadow = '0 5px 8px';
    btn.style.alignSelf = 'start';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.backgroundColor = 'var(--colortxtinv)';
    btn.style.color = 'var(--color-telegram)';
    btn.style.cursor = 'pointer';

    divTelegram.appendChild(btn);
    divTelegram.appendChild(linkTelegram);
    socCont.appendChild(divTelegram);
})


//Llamado al contacto por ln
linkedin.addEventListener('click', () => {

    while (socCont.firstChild) {
        socCont.removeChild(socCont.firstChild);
    }

    btn.textContent = 'X';

    linkLinkedin.innerHTML = 'Click para contacto por Linkedin';
    linkLinkedin.href = 'https://www.linkedin.com/in/jairo-alberto-rodríguez-de-la-ossa-951092202';
    linkLinkedin.target = '_blank';
    linkLinkedin.alt = 'click telegram';
    linkLinkedin.style.color = 'var(--colortxtinv)';
    divLinkedin.style.display = 'flex';
    divLinkedin.style.flexDirection = 'row-reverse';
    divLinkedin.style.justifyContent = 'space-between';
    divLinkedin.style.alignItems = 'center';
    divLinkedin.style.textAlign = 'center';
    divLinkedin.className = 'div-wapp';
    divLinkedin.style.width = '250px';
    divLinkedin.style.height = '70px';
    divLinkedin.style.border = '5px solid var(--colortxtinv)';
    divLinkedin.style.backgroundColor = 'var(--color-linkedin)';
    divLinkedin.style.borderRadius = '15px';
    divLinkedin.style.lineHeight = '35px';
    divLinkedin.style.boxShadow = '0 5px 8px';
    btn.style.alignSelf = 'start';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.backgroundColor = 'var(--colortxtinv)';
    btn.style.color = 'var(--color-linkedin)';
    btn.style.cursor = 'pointer';

    divLinkedin.appendChild(btn);
    divLinkedin.appendChild(linkLinkedin);
    socCont.appendChild(divLinkedin);
})


//Llamado al perfil GitHub
gitHub.addEventListener('click', () => {
    while (socCont.firstChild) {
        socCont.removeChild(socCont.firstChild);
    }

    btn.textContent = 'X';

    linkGitHub.innerHTML = 'Click para ver mi perfil de GitHub';
    linkGitHub.href = 'https://github.com/Betto2021';
    linkGitHub.target = '_blank';
    linkGitHub.alt = 'click git hub';
    linkGitHub.style.color = 'var(--colortxtinv)';
    divGitHub.style.display = 'flex';
    divGitHub.style.flexDirection = 'row-reverse';
    divGitHub.style.justifyContent = 'space-between';
    divGitHub.style.alignItems = 'center';
    divGitHub.style.textAlign = 'center';
    divGitHub.className = 'div-wapp';
    divGitHub.style.width = '250px';
    divGitHub.style.height = '70px';
    divGitHub.style.border = '5px solid var(--colortxtinv)';
    divGitHub.style.backgroundColor = 'var(--color-github)';
    divGitHub.style.borderRadius = '15px';
    divGitHub.style.lineHeight = '35px';
    divGitHub.style.boxShadow = '0 5px 8px';
    btn.style.alignSelf = 'start';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.backgroundColor = 'var(--colortxtinv)';
    btn.style.color = 'var(--color-github)';
    btn.style.cursor = 'pointer';

    divGitHub.appendChild(btn);
    divGitHub.appendChild(linkGitHub);
    socCont.appendChild(divGitHub);
})


//Lamado a los cierres de los divs de contacto
btn.addEventListener('click', cierreDivs);
linkWapp.addEventListener('click', cierreDivs);
linkTelegram.addEventListener('click', cierreDivs);
linkLinkedin.addEventListener('click', cierreDivs);
linkGitHub.addEventListener('click', cierreDivs);