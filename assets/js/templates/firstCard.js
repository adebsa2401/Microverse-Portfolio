export default (data) => {
  let tags = '';

  data.tags.forEach((tag) => {
    tags += `<li class="tag tag-1">${tag}</li>`;
  });

  return `
        <div class="project-card-1">
          <img src="assets/images/${data.featuredImage}" alt="Project Image"/>
          <h1 class="card-title card-title-1">${data.name}</h1>
          <p class="card-content card-content-1">
            ${data.description}
          </p>
          <ul class="tags-list">
            ${tags}
          </ul>
          <button id="button-${data.id}" type="button" class="project-detail-button">See Project</button>
        </div>
      `;
};
