// StatQuest Video Tracker
// Video data organized by category (based on statquest.org structure)

const videoData = {
    categories: [
        {
            name: "Statistics Fundamentals",
            videos: [
                { id: "qBigTkBLU6g", title: "Histograms, Clearly Explained" },
                { id: "rzFX5NWojp0", title: "The Normal Distribution, Clearly Explained" },
                { id: "Dn6b9fCIUpM", title: "Population and Sample Standard Deviation" },
                { id: "SzZ6GpcfoQY", title: "The Standard Error" },
                { id: "A82brFpdr9g", title: "Confidence Intervals" },
                { id: "0oc49DyA3hU", title: "P-Values, Clearly Explained" },
                { id: "vemZtEM63GY", title: "Hypothesis Testing and The Null Hypothesis" },
                { id: "JQc3yx0-Q9E", title: "Statistical Power, Clearly Explained" },
                { id: "YAlJCEDH2uY", title: "Covariance and Correlation" },
                { id: "nk2CQITm_eo", title: "The Central Limit Theorem" },
                { id: "qtaqvPAeEJY", title: "The Mean, Variance and Standard Deviation" },
                { id: "Exk0OoRG0PQ", title: "Standard Deviation vs Standard Error" },
                { id: "ZA4JkwzZrnc", title: "Probability is not Likelihood" },
                { id: "pYxNSUDSFH4", title: "Maximum Likelihood" },
                { id: "Ql6vjhHxEOs", title: "Odds and Log(Odds)" },
                { id: "ARfXDSkQf1Y", title: "Odds Ratios and Log(Odds Ratios)" }
            ]
        },
        {
            name: "Statistical Tests",
            videos: [
                { id: "0Pd3dc1GcHc", title: "t-Tests, Clearly Explained" },
                { id: "NF5_btOaCig", title: "One or Two Tailed P-Values" },
                { id: "VK-rnA3-41c", title: "Calculating P-Values" },
                { id: "HZGCoVF3YvM", title: "Chi-Square Tests" },
                { id: "N5BjNn6g-qU", title: "Chi-Square for Independence" },
                { id: "WXPBoFDqNVk", title: "ANOVA, Clearly Explained" },
                { id: "oOuu8IBd-yo", title: "F-tests and ANOVA" },
                { id: "nUg_RaNOjdU", title: "Fishers Exact Test" },
                { id: "J8jNoF-K8E8", title: "Quantile-Quantile Plots (QQ plots)" },
                { id: "IFKQLDmRK0Y", title: "Using Linear Models for t-tests and ANOVA" },
                { id: "jWuZE6B16dk", title: "Wilcoxon Rank Sum Test" },
                { id: "TJveOYsK6MY", title: "Shapiro-Wilk Normality Test" }
            ]
        },
        {
            name: "Linear Regression",
            videos: [
                { id: "PaFPbb66DxQ", title: "Linear Regression, Clearly Explained" },
                { id: "zITIFTsivN8", title: "Fitting a Line to Data (Least Squares)" },
                { id: "aq8VU5KLmkY", title: "Multiple Regression" },
                { id: "bMccdk8EdGo", title: "R-Squared, Clearly Explained" },
                { id: "Q81RR3yKn30", title: "Gradient Descent, Step-by-Step" },
                { id: "sDv4f4s2SB8", title: "Stochastic Gradient Descent" },
                { id: "XNhaLbYmAX0", title: "Regularization: Ridge (L2) Regression" },
                { id: "NGf0voTMlcs", title: "Regularization: Lasso (L1) Regression" },
                { id: "1dKRdX9bfIo", title: "Elastic-Net Regression" },
                { id: "EuBBz3bI-aA", title: "Cross Validation" }
            ]
        },
        {
            name: "Logistic Regression",
            videos: [
                { id: "yIYKR4sgzI8", title: "Logistic Regression, Clearly Explained" },
                { id: "BfKanl1aSG0", title: "Logistic Regression Details Pt 1: Coefficients" },
                { id: "xxFYro8QuXA", title: "Logistic Regression Details Pt 2: MLE" },
                { id: "JC56jS2gVUE", title: "Logistic Regression Details Pt 3: R-squared" },
                { id: "C4N3_XJJ-jU", title: "Saturated Models and Deviance" }
            ]
        },
        {
            name: "Machine Learning Fundamentals",
            videos: [
                { id: "Gv9_4yMHFhI", title: "Machine Learning Fundamentals: Bias and Variance" },
                { id: "EuBBz3bI-aA", title: "Machine Learning Fundamentals: Cross Validation" },
                { id: "fSytzGwwBVw", title: "Machine Learning Fundamentals: Sensitivity and Specificity" },
                { id: "vP06aMoz4v8", title: "ROC and AUC, Clearly Explained" },
                { id: "4jRBRDbJemM", title: "Confusion Matrix" },
                { id: "J4Wdy0Wc_xQ", title: "Precision, Recall, F1, Accuracy" }
            ]
        },
        {
            name: "Decision Trees and Random Forests",
            videos: [
                { id: "_L39rN6gz7Y", title: "Decision Trees, Clearly Explained" },
                { id: "g9c66TUylZ4", title: "Decision Trees Part 2: Feature Selection and Missing Data" },
                { id: "D0efHEJsfHo", title: "Regression Trees, Clearly Explained" },
                { id: "J4Wdy0Wc_xQ", title: "Random Forests Part 1: Building, Using, and Evaluating" },
                { id: "sQ870ber7IM", title: "Random Forests Part 2: Missing Data and Clustering" },
                { id: "nyxpZhKgiso", title: "AdaBoost, Clearly Explained" },
                { id: "3CC4N4z3GJc", title: "Gradient Boost Part 1: Regression Main Ideas" },
                { id: "jxuNLH5dXCs", title: "Gradient Boost Part 2: Regression Details" },
                { id: "StWY5QWMXCw", title: "Gradient Boost Part 3: Classification Main Ideas" },
                { id: "LsK-xG1cLYA", title: "Gradient Boost Part 4: Classification Details" },
                { id: "OtD8wVaFm6E", title: "XGBoost Part 1: Regression" },
                { id: "8b1JEDvenQU", title: "XGBoost Part 2: Classification" },
                { id: "ZVFeW798-2I", title: "XGBoost Part 3: Mathematical Details" },
                { id: "oRrKeUCEbq8", title: "XGBoost Part 4: Crazy Cool Optimizations" }
            ]
        },
        {
            name: "Support Vector Machines",
            videos: [
                { id: "efR1C6CvhmE", title: "Support Vector Machines, Clearly Explained" },
                { id: "Toet3EiSFcM", title: "SVM Part 2: The Polynomial Kernel" },
                { id: "Qc5IyLW_hns", title: "SVM Part 3: The Radial Kernel" }
            ]
        },
        {
            name: "Neural Networks and Deep Learning",
            videos: [
                { id: "CqOfi41LfDw", title: "Neural Networks Pt. 1: Inside the Black Box" },
                { id: "IN2XmBhILt4", title: "Neural Networks Pt. 2: Backpropagation Main Ideas" },
                { id: "iyn2zdALii8", title: "Neural Networks Pt. 3: ReLU in Action" },
                { id: "68BZ5f7P94E", title: "Neural Networks Pt. 4: Multiple Inputs" },
                { id: "GKZoOHXGcLo", title: "The Chain Rule" },
                { id: "sDv4f4s2SB8", title: "Gradient Descent" },
                { id: "Ilg3gGewQ5U", title: "Backpropagation Details Pt. 1" },
                { id: "kbGu60QBx2o", title: "Backpropagation Details Pt. 2" },
                { id: "GvQwE2OhL8I", title: "Image Classification with Convolutional Neural Networks" },
                { id: "YRhxdVk_sIs", title: "Recurrent Neural Networks (RNNs)" },
                { id: "8HyCNIVRbSU", title: "Long Short-Term Memory (LSTM)" },
                { id: "PSs6nxngL6k", title: "Word Embedding and Word2Vec" },
                { id: "HGOBQPFzWKo", title: "Sequence-to-Sequence (seq2seq)" }
            ]
        },
        {
            name: "Transformer and Attention",
            videos: [
                { id: "zxQyTK8quyY", title: "Attention for Neural Networks" },
                { id: "PSs6nxngL6k", title: "Transformer Neural Networks" },
                { id: "bQ5BoolX9Ag", title: "Decoder-Only Transformers" },
                { id: "HGOBQPFzWKo", title: "Encoder-Decoder Transformers" }
            ]
        },
        {
            name: "Clustering",
            videos: [
                { id: "4b5d3muPQmA", title: "K-means Clustering" },
                { id: "FgakZw6K1QQ", title: "Hierarchical Clustering" },
                { id: "T-B8muDvzu0", title: "DBSCAN, Clearly Explained" },
                { id: "NGf0voTMlcs", title: "K-nearest Neighbors, Clearly Explained" }
            ]
        },
        {
            name: "Dimensionality Reduction",
            videos: [
                { id: "HMOI_lkzW08", title: "Principal Component Analysis (PCA), Step-by-Step" },
                { id: "oMTTZyRqffM", title: "PCA main ideas in 5 minutes" },
                { id: "FgakZw6K1QQ", title: "Linear Discriminant Analysis (LDA)" },
                { id: "NEaUSP4YerM", title: "t-SNE, Clearly Explained" },
                { id: "eN0wFzBA4Sc", title: "UMAP, Clearly Explained" },
                { id: "9iol3Lk6kyU", title: "MDS and PCoA" }
            ]
        },
        {
            name: "Bayesian Statistics",
            videos: [
                { id: "XQoLVl31ZfQ", title: "Bayes Theorem, Clearly Explained" },
                { id: "9wCnvr7Xw4E", title: "Naive Bayes, Clearly Explained" },
                { id: "4WVelCswXo4", title: "Gaussian Naive Bayes, Clearly Explained" },
                { id: "HZGCoVF3YvM", title: "Multinomial Naive Bayes" }
            ]
        },
        {
            name: "High Throughput Sequencing",
            videos: [
                { id: "tlf6wYJrwKY", title: "RNA-seq: The Basics" },
                { id: "UFB993xufUU", title: "RPKM, FPKM and TPM, Clearly Explained" },
                { id: "Kdsp6soqA7o", title: "DESeq2, Part 1" },
                { id: "UFB993xufUU", title: "DESeq2, Part 2" },
                { id: "FhIsfnhjJHs", title: "A Gentle Introduction to ChIP-Seq" },
                { id: "nkWGmaYqp7s", title: "ATAC-seq" }
            ]
        },
        {
            name: "Miscellaneous",
            videos: [
                { id: "TNQsmPf24go", title: "Entropy, Clearly Explained" },
                { id: "9GgeBtQSPCs", title: "Expected Values" },
                { id: "2HMT6Fb_Y5w", title: "Bootstrapping" },
                { id: "YiGBiilQlOA", title: "Kernel Density Estimation" },
                { id: "IHZwWFHWa-w", title: "Hidden Markov Models" },
                { id: "Xjtu1L7RwVM", title: "Information Gain and Entropy" },
                { id: "S9Ci6Z5VvRU", title: "Cosine Similarity" },
                { id: "LvgcfMOyREE", title: "Pearson Correlation" }
            ]
        }
    ]
};

// Storage key for localStorage
const STORAGE_KEY = 'statquest-watched';

// Global state
let watchedVideos = {};

// Initialize the app
function init() {
    loadWatchedVideos();
    renderCategories();
    updateOverallProgress();
}

// Load watched videos from localStorage
function loadWatchedVideos() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            watchedVideos = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Error loading watched videos:', e);
        watchedVideos = {};
    }
}

// Save watched videos to localStorage
function saveWatchedVideos() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(watchedVideos));
    } catch (e) {
        console.error('Error saving watched videos:', e);
    }
}

// Check if a video is watched
function isWatched(videoId) {
    return watchedVideos[videoId] === true;
}

// Toggle watched status
function toggleWatched(videoId, event) {
    if (event) {
        event.stopPropagation();
    }
    watchedVideos[videoId] = !isWatched(videoId);
    saveWatchedVideos();
    updateVideoUI(videoId);
    updateCategoryProgress(findCategoryForVideo(videoId));
    updateOverallProgress();
}

// Mark video as watched
function markAsWatched(videoId) {
    if (!isWatched(videoId)) {
        watchedVideos[videoId] = true;
        saveWatchedVideos();
        updateVideoUI(videoId);
        updateCategoryProgress(findCategoryForVideo(videoId));
        updateOverallProgress();
    }
}

// Find which category a video belongs to
function findCategoryForVideo(videoId) {
    for (const category of videoData.categories) {
        if (category.videos.some(v => v.id === videoId)) {
            return category.name;
        }
    }
    return null;
}

// Render all categories
function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    videoData.categories.forEach((category, index) => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'category';
        categoryEl.id = `category-${index}`;

        const watchedCount = category.videos.filter(v => isWatched(v.id)).length;
        const totalCount = category.videos.length;
        const progressPercent = totalCount > 0 ? (watchedCount / totalCount) * 100 : 0;

        categoryEl.innerHTML = `
            <button class="category-header" onclick="toggleCategory(${index})">
                <span class="category-toggle">▶</span>
                <span class="category-name">${category.name}</span>
                <span class="category-progress">${watchedCount}/${totalCount}</span>
                <div class="category-progress-bar">
                    <div class="category-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            </button>
            <div class="video-list">
                ${category.videos.map(video => `
                    <div class="video-item ${isWatched(video.id) ? 'watched' : ''}" data-video-id="${video.id}">
                        <div class="watch-toggle" onclick="toggleWatched('${video.id}', event)"></div>
                        <span class="video-title" onclick="openVideo('${video.id}')">${video.title}</span>
                    </div>
                `).join('')}
            </div>
        `;

        container.appendChild(categoryEl);
    });
}

// Toggle category expansion
function toggleCategory(index) {
    const categoryEl = document.getElementById(`category-${index}`);
    categoryEl.classList.toggle('expanded');
}

// Open video in YouTube (fullscreen on mobile)
function openVideo(videoId) {
    // Open YouTube video - will open in YouTube app on mobile or new tab on desktop
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// Update UI for a specific video
function updateVideoUI(videoId) {
    const videoEl = document.querySelector(`[data-video-id="${videoId}"]`);
    if (videoEl) {
        if (isWatched(videoId)) {
            videoEl.classList.add('watched');
        } else {
            videoEl.classList.remove('watched');
        }
    }
}

// Update category progress display
function updateCategoryProgress(categoryName) {
    if (!categoryName) return;

    const categoryIndex = videoData.categories.findIndex(c => c.name === categoryName);
    if (categoryIndex === -1) return;

    const category = videoData.categories[categoryIndex];
    const categoryEl = document.getElementById(`category-${categoryIndex}`);
    if (!categoryEl) return;

    const watchedCount = category.videos.filter(v => isWatched(v.id)).length;
    const totalCount = category.videos.length;
    const progressPercent = totalCount > 0 ? (watchedCount / totalCount) * 100 : 0;

    const progressText = categoryEl.querySelector('.category-progress');
    const progressFill = categoryEl.querySelector('.category-progress-fill');

    if (progressText) progressText.textContent = `${watchedCount}/${totalCount}`;
    if (progressFill) progressFill.style.width = `${progressPercent}%`;
}

// Update overall progress
function updateOverallProgress() {
    let totalVideos = 0;
    let watchedCount = 0;

    videoData.categories.forEach(category => {
        totalVideos += category.videos.length;
        watchedCount += category.videos.filter(v => isWatched(v.id)).length;
    });

    const progressPercent = totalVideos > 0 ? (watchedCount / totalVideos) * 100 : 0;

    const progressFill = document.getElementById('overall-progress');
    const progressText = document.getElementById('progress-text');

    if (progressFill) progressFill.style.width = `${progressPercent}%`;
    if (progressText) progressText.textContent = `${Math.round(progressPercent)}% Complete (${watchedCount}/${totalVideos})`;
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
