

/// //// projects ///////
const projContainer = document.getElementById('projects');

function createProject(project) {
  const projDiv = document.createElement('div');
  const projDeco = document.createElement('div');
  const projDeco1 = document.createElement('div');
  const img = document.createElement('img');
  const pWrp = document.createElement('div');
  const name = document.createElement('h2');
  const lang = document.createElement('div');
  const langList = document.createElement('ul');
  const pBtn = document.createElement('a');
  const nameProj = document.createTextNode(project.pName);

  projDiv.className = 'project';

  projDeco.className = `deco${project.pId + 2}`;
  projDeco1.className = `deco${project.pId + 3}`;

  img.src = project.pImg;
  img.alt = project.pName;
  img.className = 'projectimg';

  if (project.pId % 3 === 0 || project.pId === 1) {
    pWrp.className = 'projectwrp mproj';
  } else {
    pWrp.className = 'projectwrp';
  }

  name.appendChild(nameProj);
  name.className = 'projtxt';

  pWrp.appendChild(lang);
  lang.appendChild(langList);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    const tagBtn = document.createElement('button');

    tagBtn.className = 'smallbtn';
    tagBtn.textContent = project.tags[index];
    langList.appendChild(tag);
    tag.appendChild(tagBtn);
  });

  lang.className = 'projlang';

  pBtn.textContent = 'See this project';
  pBtn.className = 'projbtn';
  pBtn.setAttribute('id', project.pId);

  projContainer.appendChild(projDiv);
  projContainer.appendChild(projDeco);
  projContainer.appendChild(projDeco1);
  projDiv.appendChild(img);
  projDiv.appendChild(pWrp);
  pWrp.appendChild(name);
  pWrp.appendChild(pBtn);
}
projectsArr.forEach(createProject);

/// /// modal //////////
const overlayModal = document.querySelector('.modal-overlay');
function closeModal() {
  overlayModal.classList.remove('active');
}

function createModal(id) {
  const project = projectsArr.find((project) => Number(project.pId) === Number(id));
  const modCont = document.createElement('div');
  const modName = document.createElement('h2');
  const lang = document.createElement('div');
  const langList = document.createElement('ul');
  const modImg = document.createElement('img');
  const modText = document.createElement('div');
  const modP = document.createElement('p');
  const liveBtn = document.createElement('a');
  const srcBtn = document.createElement('a');
  const modTitle = document.createTextNode(project.pName);
  const modParr = document.createTextNode(project.pText);

  const btnClose = document.createElement('div');
  modCont.appendChild(btnClose);
  btnClose.className = 'modal-menu-close';
  btnClose.addEventListener('click', closeModal);

  for (let i = 0; i < 3; i += 1) {
    const bar = document.createElement('span');
    bar.className = 'bar';
    btnClose.appendChild(bar);
  }

  modCont.className = 'proj-wrp-mod';
  modCont.appendChild(modName);

  modName.className = 'projtxt-mod';
  modName.appendChild(modTitle);

  modCont.appendChild(lang);
  lang.appendChild(langList);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    const tagBtn = document.createElement('button');

    tagBtn.className = 'smallbtn-mod';
    tagBtn.textContent = project.tags[index];
    langList.appendChild(tag);
    tag.appendChild(tagBtn);
  });
  lang.className = 'projlang-mod';

  modImg.src = project.pImg;
  modImg.alt = project.pName;
  modImg.className = 'projectimg-mod';

  modText.appendChild(modP);
  modP.appendChild(modParr);
  modText.className = 'mod-wrpr';
  modP.className = 'mtext-mod';

  liveBtn.textContent = 'See live';
  liveBtn.href = project.btnLive;
  liveBtn.className = 'projbtn-mod';

  srcBtn.textContent = 'See source';
  srcBtn.href = project.btnSrc;
  srcBtn.className = 'projbtn-mod-src';

  overlayModal.appendChild(modCont);
  modCont.appendChild(modImg);
  modCont.appendChild(modText);
  modText.appendChild(liveBtn);
  modText.appendChild(srcBtn);
}

function cleanModal() {
  const div = overlayModal;
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function openModal() {
  overlayModal.classList.toggle('active');
  window.onclick = (event) => {
    if (event.target === overlayModal) {
      overlayModal.classList.remove('active');
    }
  };
}

projContainer.addEventListener('click', (e) => {
  const elementId = e.target.id;
  if (e.target.classList.contains('projbtn')) {
    cleanModal(overlayModal.id);
    createModal(elementId);
    openModal();
  }
});

const mobMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('.navlinks');
const closeB = document.querySelector('.mobile-menu-close');
const contactForm = document.getElementById('contactForm');

mobMenu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

closeB.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('.close').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

function logSubmit(event) {
  const emailAddress = document.getElementById('emailAddress').value;
  const errorMsg = document.getElementById('error_msg');
  const lowerEmail = emailAddress.toLowerCase();

  if (emailAddress !== lowerEmail) {
    errorMsg.textContent = 'The format of the email is not correct.';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
  }
}
contactForm.addEventListener('submit', logSubmit);