import { getAuthors } from '../../api/authorData';
import renderToDOM from '../../utils/renderToDom';

const selectAuthor = (authorId) => {
  let domString = `<label for="author">Select an Developer</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Developer</option>`;

  getAuthors().then((authorsArray) => {
    authorsArray.forEach((author) => {
      domString += `
          <option 
            value="${author.firebaseKey}" 
            ${authorId === author.firebaseKey ? 'selected' : ''}>
              ${author.studio_name} ${author.publisher_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectAuthor;
