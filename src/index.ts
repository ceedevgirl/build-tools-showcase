import './style.scss';
import toolsData from './data/tools.json';
import { Tool } from './model/types';
import '@ionic/core';
import 'ionicons/icons';

import {
  toggleBookmark,
  showToolInfo,
  tryTool,
  loadBookmarks,
} from './utils/toolUtils';
import { addIcons } from 'ionicons';
import {
  constructOutline,
  cubeOutline,
  logoJavascript,
  logoSass,
  checkmarkCircleOutline,
  desktopOutline,
  phonePortraitOutline,
  refreshOutline,
  contrastOutline,
  sunnyOutline,
  arrowForwardOutline,
  bookmarkOutline,
  informationCircleOutline,
  playOutline,
} from 'ionicons/icons';

// Register Ionicons
addIcons({
  'construct-outline': constructOutline,
  'cube-outline': cubeOutline,
  'document-text-outline': logoJavascript,
  'logo-sass': logoSass,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'desktop-outline': desktopOutline,
  'phone-portrait-outline': phonePortraitOutline,
  'refresh-outline': refreshOutline,
  'contrast-outline': contrastOutline,
  'sunny-outline': sunnyOutline,
  'arrow-forward-outline': arrowForwardOutline,
  'bookmark-outline': bookmarkOutline,
  'information-circle-outline': informationCircleOutline,
  'play-outline': playOutline,
});

function loadTools(): Tool[] {
  return toolsData as Tool[];
}

function renderTools(tools: Tool[]): void {
  const toolGrid: HTMLElement | null = document.getElementById('tool-grid');
  if (!toolGrid) {
    console.error('Tool grid container not found');
    return;
  }

  toolGrid.innerHTML = ''; // Clear existing content

  tools.forEach((tool: Tool) => {
    const toolCard: HTMLDivElement = document.createElement('div');
    toolCard.className = 'tool-card';

    toolCard.innerHTML = `
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
    
      <a href="${tool.link}" class="learn-more">
        Learn more
        <ion-icon name="arrow-forward-outline"><span class="icon-fallback">➡️</span></ion-icon>
      </a>
    `;

    toolGrid.appendChild(toolCard);
  });

  // Attach event listeners for action buttons
  document.querySelectorAll('.bookmark-btn').forEach((btn: Element) => {
    btn.addEventListener('click', () => toggleBookmark(btn.getAttribute('data-tool') || ''));
  });
  document.querySelectorAll('.info-btn').forEach((btn: Element) => {
    btn.addEventListener('click', () => showToolInfo(btn.getAttribute('data-tool') || ''));
  });
  document.querySelectorAll('.try-btn').forEach((btn: Element) => {
    btn.addEventListener('click', () => tryTool(btn.getAttribute('data-tool') || ''));
  });
}

function initializeThemeToggle(): void {
  const themeToggle: HTMLButtonElement | null = document.getElementById('theme-toggle') as HTMLButtonElement;
  const themeIcon: HTMLElement | null = themeToggle?.querySelector('ion-icon');
  const themeText: HTMLSpanElement | null = themeToggle?.querySelector('span');
  let isDark: boolean = false;

  if (themeToggle && themeIcon && themeText) {
    themeToggle.addEventListener('click', () => {
      isDark = !isDark;
      if (isDark) {
        document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
        themeIcon.setAttribute('name', 'sunny-outline');
        themeText.textContent = 'Dark Mode';
      } else {
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        themeIcon.setAttribute('name', 'contrast-outline');
        themeText.textContent = 'Light Mode';
      }
    });
  }
}

function initializeCardAnimations(): void {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.tool-card');
  cards.forEach((card: HTMLElement) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

function initializePreviewControls(): void {
  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.control-btn');
  buttons.forEach((btn: HTMLElement) => {
    btn.addEventListener('click', () => {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 150);
    });
  });
}

async function initialize(): Promise<void> {
  loadBookmarks(); // Load bookmarks from localStorage or other storage
  const tools: Tool[] = loadTools();
  renderTools(tools);
  initializeThemeToggle();
  initializeCardAnimations();
  initializePreviewControls();
}

// Run initialization
document.addEventListener('DOMContentLoaded', initialize);