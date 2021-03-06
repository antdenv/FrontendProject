import editProfileComponent from './editProfile.pug.js';

const root = document.getElementById('root');

/**
 * Edit profile class
 */
export class EditProfile {
  constructor(root) {
    this.root = root;
  }

  /**
    * Render page
    */
  render() {
    this.root.innerHTML = editProfileComponent();
  }
}
