import './style.scss';
import toolsData from './data/tools.json';
import { Tool } from './model/types';
import '@ionic/core';
import { addIcons } from 'ionicons';
import {
  cubeOutline,
  documentTextOutline,
  logoSass,
  alertCircleOutline,
  flashOutline,
  bugOutline,
  gitBranchOutline,
  sparklesOutline,
  constructOutline,
  logoReact,
  logoCss3,
  contrastOutline,
  sunnyOutline,
  arrowForwardOutline,
  logoNodejs,
} from 'ionicons/icons';

// Register Ionicons
addIcons({
  'cube-outline': cubeOutline,
  'document-text-outline': documentTextOutline,
  'logo-sass': logoSass,
  'alert-circle-outline': alertCircleOutline,
  'flash-outline': flashOutline,
  'bug-outline': bugOutline,
  'git-branch-outline': gitBranchOutline,
  'sparkles-outline': sparklesOutline,
  'construct-outline': constructOutline,
  'logo-react': logoReact,
  'logo-css3': logoCss3,
  'contrast-outline': contrastOutline,
  'sunny-outline': sunnyOutline,
  'arrow-forward-outline': arrowForwardOutline,
  'logo-nodejs': logoNodejs,
});

// Load tools
function loadTools(): Tool[] {
  return toolsData as Tool[];
}

// Render tools into the DOM
function renderTools(tools: Tool[]): void {
  const toolGrid = document.getElementById('tool-grid');
  if (!toolGrid) return;

  toolGrid.innerHTML = '';

  tools.forEach((tool: Tool) => {
    const card = document.createElement('div');
    card.className = 'tool-card';

    card.innerHTML = `
      <div class="tool-header">
        <div class="tool-icon ${tool.name.toLowerCase()}">
          <ion-icon name="${tool.icon}"><span class="icon-fallback">⚙️</span></ion-icon>
        </div>
        <div class="tool-details">
          <h3>${tool.name}</h3>
        </div>
      </div>
      <div class="tool-badge">${tool.category}</div>
      <p class="tool-description">${tool.description}</p>
      <a href="${tool.link}" class="learn-more" target="_blank" rel="noopener noreferrer">
        Learn more <ion-icon name="arrow-forward-outline"><span class="icon-fallback">➡️</span></ion-icon>
      </a>
    `;

    toolGrid.appendChild(card);
  });
}

// Theme toggle button logic
function initializeThemeToggle(): void {
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle?.querySelector('ion-icon');
  const text = themeToggle?.querySelector('span');
  let isDark = false;

  if (themeToggle && icon && text) {
    themeToggle.addEventListener('click', () => {
      isDark = !isDark;
      if (isDark) {
        document.body.style.background =
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
        icon.setAttribute('name', 'sunny-outline');
        text.textContent = 'Dark Mode';
      } else {
        document.body.style.background =
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        icon.setAttribute('name', 'contrast-outline');
        text.textContent = 'Light Mode';
      }
    });
  }
}

// Subtle animation on hover
function initializeCardAnimations(): void {
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      (card as HTMLElement).style.transform = 'translateY(-5px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Initialize app
function initialize(): void {
  const tools = loadTools();
  renderTools(tools);
  initializeThemeToggle();
  initializeCardAnimations();
}

document.addEventListener('DOMContentLoaded', initialize);
