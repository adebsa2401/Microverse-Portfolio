export default (data) => {
  let tags = '';

  data.tags.forEach((tag) => {
    tags += `<li class="tag">${tag}</li>`;
  });

  let style = '';
  style += `background-image: linear-gradient(179.35deg, #26262600 0.85%, #262626e6 84%), url(assets/images/${data.featuredImage});`;

  return `
        <div class="project-card" style="${style}">
          <div class="card-body">
            <h1 class="card-title">${data.name}</h1>
            <p class="card-content">
              ${data.description}
            </p>
            <ul class="tags-list">
              ${tags}
            </ul>
          </div>                    
          <button id="button-${data.id}" type="button" class="project-detail-button">See Project</button>
        </div>
      `;
};
