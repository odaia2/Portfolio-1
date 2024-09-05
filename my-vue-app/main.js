import './style.css'
import projects from '../prosjekt'


const darkModeButton = document.getElementById('dark-mode')

console.log(darkModeButton)

function toggleDarkMode(){
  document.body.classList.toggle('dark-mode')
}

darkModeButton.addEventListener('click', toggleDarkMode)



document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('projects');
  const projectForm = document.getElementById('project-form');

  // Function to display projects
  function displayProjects(projects) {
    console.log('Prosjekter:', projects); 
    projectList.innerHTML = projects.map(project => `
      <li>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p>Status: ${project.status}</p>
      </li>
    `).join('');
  }

  // Function to handle form submission
  function addProject(event) {
    event.preventDefault();

    const formData = new FormData(projectForm);
    const newProject = {
      id: Date.now(), // Generate a unique ID using timestamp
      name: formData.get('name'),
      description: formData.get('description'),
      status: formData.get('status')
    };
    console.log('New Project:', newProject);
    // Display the new project immediately for simplicity
    projectList.innerHTML += `
      <li>
        <h3>${newProject.name}</h3>
        <p>${newProject.description}</p>
        <p>Status: ${newProject.status}</p>
      </li>
    `;
    projectForm.reset();
  }

  projectForm.addEventListener('submit', addProject);

  displayProjects(projects); // Initial display of projects
});


