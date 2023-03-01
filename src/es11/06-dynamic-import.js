const button = document.getElementById('btn');
button.addEventListener('click', async function () {
  const module = await import('./06-dynamic-import-module.js')
  module.hello();
});