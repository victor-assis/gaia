import './load-components.js';

import { render } from './render.js';
import { onLoadThemeToggle } from './theme-toggle.js';
import { onLoadAside } from './aside.js';

window.addEventListener('hashchange', render());
render();

window.onload = () => {
  onLoadAside();
  onLoadThemeToggle();
}
