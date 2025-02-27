document.addEventListener("DOMContentLoaded", function () {
    const boostBtn = document.getElementById("boostBtn");
    const unboostBtn = document.getElementById("unboostBtn");

    boostBtn.addEventListener("click", function () {
        alert("🚀 Boosting Chrome Performance...");

        // 🛠️ Step 1: Clear Cache to Free Up Memory
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => caches.delete(name));
            });
        }

        // 🛠️ Step 2: Discard Inactive Tabs (Free RAM)
        if (chrome && chrome.tabs) {
            chrome.tabs.query({}, (tabs) => {
                tabs.forEach(tab => {
                    if (!tab.active) {
                        chrome.tabs.discard(tab.id);
                    }
                });
            });
        }

        // 🛠️ Step 3: Apply GPU Rendering Optimization
        document.body.style.willChange = 'transform, opacity';
        document.body.style.transform = 'translateZ(0)';

        // 🏁 Done!
        alert("✅ Performance Boosted!");
    });

    unboostBtn.addEventListener("click", function () {
        alert("🔄 Reverting Changes...");

        // 🔄 Step 1: Reset GPU Rendering
        document.body.style.willChange = 'auto';
        document.body.style.transform = 'none';

        // 🔄 Step 2: Refresh Page to Restore Cache Usage
        setTimeout(() => {
            location.reload();
        }, 1000);

        alert("🚫 Boost Reverted!");
    });
});
