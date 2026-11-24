const installButton = document.querySelector('#install-app');
let installPrompt;

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener('click', async () => {
  const prompt = installPrompt;
  installPrompt = undefined;
  installButton.hidden = true;
  if (prompt) {
    try {
      await prompt.prompt();
    } catch (error) {
      console.warn('Could not open the app installation prompt.', error);
    }
  }
});

window.addEventListener('appinstalled', () => {
  installPrompt = undefined;
  installButton.hidden = true;
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(error => {
    console.warn('Could not enable offline reading.', error);
  });
}
