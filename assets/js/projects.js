import getDefaultCardHTML from './templates/defaultCard.js';
import getFirstCardHTML from './templates/firstCard.js';
import getPopupHTML from './templates/projectDetailPopup.js';

const PROJECTS = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-2.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 2,
    name: 'Professional Art Printing Data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-2.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 3,
    name: 'Professional Art Printing Data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-0.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 4,
    name: 'Professional Art Printing Data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-0.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 5,
    name: 'Professional Art Printing Data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-0.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 6,
    name: 'Professional Art Printing Data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-0.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 7,
    name: 'Professional Art Printing Data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: 'project-background-0.png',
    liveVersionLink: 'https://adebsa2401.github.io',
    sourceLink: 'https://github.com/adebsa2401/adebsa2401.github.io',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  PROJECTS.forEach((project, index) => {
    const cardHTML = index === 0 ? getFirstCardHTML(project) : getDefaultCardHTML(project);
    const card = document.createElement('div');
    card.innerHTML = cardHTML.trim();

    if (index === 0) {
      document.getElementById('projects-list').prepend(card.firstChild);
    } else {
      document.getElementById('projects-grid').append(card.firstChild);
    }

    const popup = document.createElement('div');
    popup.innerHTML = getPopupHTML(project).trim();
    document.body.prepend(popup.firstChild);
  });

  Array.from(document.getElementsByClassName('project-card')).forEach((element) => {
    element.addEventListener('mouseover', () => {
      const id = element.querySelector('.project-detail-button').id.split('-').reverse()[0];
      const project = PROJECTS.find((project) => project.id === parseInt(id, 10));
      element.style.backgroundImage = `url("assets/images/${project.featuredImage}")`;
    });
  });

  Array.from(document.getElementsByClassName('project-card')).forEach((element) => {
    element.addEventListener('mouseout', () => {
      const id = element.querySelector('.project-detail-button').id.split('-').reverse()[0];
      const project = PROJECTS.find((project) => project.id === parseInt(id, 10));
      element.style.backgroundImage = `linear-gradient(179.35deg, #26262600 0.85%, #262626e6 84%), url("assets/images/${project.featuredImage}")`;
    });
  });

  Array.from(document.getElementsByClassName('project-detail-button')).forEach((element) => {
    element.addEventListener('click', (event) => {
      const id = event.target.id.split('-').reverse()[0];
      document.getElementById(`project-popup-${id}`).style.display = 'flex';
    });
  });

  Array.from(document.getElementsByClassName('close-project-popup-icon')).forEach((element) => {
    element.addEventListener('click', (event) => {
      event.target.closest('.project-popup').style.display = 'none';
    });
  });
});
