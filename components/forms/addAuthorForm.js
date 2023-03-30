import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addAuthorForm = () => {
  clearDom();
  const domString = `
    <form id="submit-author" class="mb-4">
      <div class="form-group">
        <label for="image">Studio Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="Studio Name" required>
      </div>
      <div class="form-group">
        <label for="image">Publisher Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Publisher Name" required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Developer</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addAuthorForm;
