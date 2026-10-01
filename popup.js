const cb = document.getElementById("enabled");

chrome.storage.local.get({ enabled: true }, (s) => {
  cb.checked = s.enabled;
});

cb.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: cb.checked });
});
