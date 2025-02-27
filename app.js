document.addEventListener("DOMContentLoaded", function () {
    const boostBtn = document.getElementById("boostBtn");
    const unboostBtn = document.getElementById("unboostBtn");

    boostBtn.addEventListener("click", function () {
        alert("🚀 Boosting Chrome Performance...");

        // 🔄 Step 1: Reset GPU Rendering
        document.body.style.willChange = 'auto';
        document.body.style.transform = 'none';

        // 🔄 Step 2: Restore Event Listeners
        restoreEventListeners();

        // 🔄 Step 3: Display Alert for Closing Inactive Tabs
        alert("Close inactive tabs for best performance!");

        alert("✅ Performance Boosted!");
    });

    unboostBtn.addEventListener("click", function () {
        alert("🔄 Reverting Changes...");

        // 🛠️ Step 1: Clear Cache to Free Up Memory
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => caches.delete(name));
            });
        }

        // 🛠️ Step 2: Apply GPU Rendering Optimization
        document.body.style.willChange = 'transform, opacity';
        document.body.style.transform = 'translateZ(0)';

        // 🛠️ Step 3: Remove Unnecessary Event Listeners
        removeUnusedEventListeners();

        // 🛠️ Step 4: Minimize Resource-Heavy Elements
        minimizeResourceHeavyElements();

        alert("✅ Performance Reverted!");
    });

    function removeUnusedEventListeners() {
        // Remove event listeners that are no longer needed
        // For demonstration purposes, this function is empty.
        // Add code to remove specific event listeners if necessary.
    }

    function minimizeResourceHeavyElements() {
        // Hide resource-heavy elements (e.g., videos, large images) to free up resources
        const heavyElements = document.querySelectorAll(".resource-heavy");
        heavyElements.forEach(el => el.style.display = 'none');
    }

    function restoreEventListeners() {
        // Restore previously removed event listeners
        // For demonstration purposes, this function is empty.
        // Add code to restore specific event listeners if necessary.
    }
});
