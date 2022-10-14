export default (data) => {
  let tags = '';

  data.tags.forEach((tag) => {
    tags += `<li class="tag tag-1">${tag}</li>`;
  });

  return `
    <div id="project-popup-${data.id}" class="project-popup" hidden>
      <div class="popup-content">
          <div class="row space-between title-div">
              <h1>${data.name}</h1>
              <a class="close-project-popup-icon" href="javascript:void()" class="menu-item">
                  <img src="assets/images/close.svg" alt="close" class="icon"/>
              </a>
          </div>

          <ul class="tags-list tags-list-1">
              ${tags}
          </ul>

          <img class="featured-image" src="assets/images/${data.featuredImage}" alt="featured image"/>

          <p class="card-content card-content-1">
            ${data.description}
          </p>

          <div class="buttons-div">
              <div>
                  <a href="${data.liveVersionLink}" target="_blank" rel="noopener">See Live</a>
                  <img class="icon" src="assets/images/box-arrow-up-right.svg" alt="live"/>
              </div>

              <div>
                  <a href="${data.sourceLink}" target="_blank" rel="noopener">See Source</a>
                  <img class="icon" src="assets/images/github.svg" alt="github"/>
              </div>
          </div>
      </div>
    </div>
  `;
};
