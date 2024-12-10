import './load-components.js';

import { render } from './render.js';
import { onLoadThemeToggle } from './theme-toggle.js';
import { onLoadAside } from './aside.js';

import '../../../../dist/tokens/core/tokens.css';
import '../../../../packages/styles/src/styles.scss';

window.addEventListener('hashchange', render());
render();

window.onload = () => {
  onLoadAside();
  onLoadThemeToggle();
}
