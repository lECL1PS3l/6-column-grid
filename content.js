const CLASS = "yt-rows-6";

function apply(on) {
  document.documentElement.classList.toggle(CLASS, on);
}

chrome.storage.local.get({ enabled: true }, (s) => {
  apply(s.enabled);
});

chrome.storage.onChanged.addListener((ch, area) => {
  if (area === "local" && ch.enabled) apply(ch.enabled.newValue);
});
