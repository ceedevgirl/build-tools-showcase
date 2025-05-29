export function loadBookmarks(): string[] {
  console.log('Loading bookmarks');
  const data = localStorage.getItem('bookmarks');
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function toggleBookmark(toolName: string): void {
  console.log(`Toggling bookmark for ${toolName}`);
  const bookmarks = loadBookmarks();
  const index = bookmarks.indexOf(toolName);
  if (index === -1) {
    bookmarks.push(toolName);
  } else {
    bookmarks.splice(index, 1);
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

const toolUrls: Record<string, string> = {
  Webpack: 'https://webpack.js.org',
  // add other known tool URLs as needed
};

export function tryTool(toolName: string): void {
  console.log(`Trying ${toolName}`);
  const url = toolUrls[toolName] || '#';
  window.open(url, '_blank');
}

export function showToolInfo(toolName: string): void {
  console.log(`Showing info for ${toolName}`);
  window.alert(`Showing info for ${toolName}`);
}
