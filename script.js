// Terminal Boot Animation
document.addEventListener('DOMContentLoaded', function () {
    const bootSequence = document.getElementById('bootSequence');
    const mainContent = document.getElementById('mainContent');

    // Hide boot sequence after animation completes and show main content
    setTimeout(() => {
        bootSequence.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2800);

    // Add click handlers to menu items
    setupMenuItems();
});

function setupMenuItems() {
    const projectsLink = document.getElementById('projects-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');

    projectsLink.addEventListener('click', showProjects);
    aboutLink.addEventListener('click', showAbout);
    contactLink.addEventListener('click', showContact);
}

function clearContent() {
    const mainContent = document.getElementById('mainContent');
    // Keep header, remove everything else except navigation prompts
    const allPrompts = mainContent.querySelectorAll('.prompt');
    const allResponses = mainContent.querySelectorAll('.response');
    allPrompts.forEach(p => p.style.display = 'none');
    allResponses.forEach(r => r.style.display = 'none');
}

function showProjects() {
    clearContent();
    const mainContent = document.getElementById('mainContent');

    const projectsSection = document.createElement('div');
    projectsSection.innerHTML = `
        <div class="prompt"><span class="prompt-icon">▶</span>$ cd projects/</div>
        <div class="response">
            <div style="animation: slideIn 0.3s ease-out 0.1s forwards; opacity: 0;">
                Successfully changed directory to ~/projects
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ ls -la</div>
        <div class="response" style="margin-bottom: 10px;">
            <div style="animation: slideIn 0.3s ease-out 0.3s forwards; opacity: 0; line-height: 1.8;">
                <span style="opacity: 0.5;">drwxr-xr-x</span> &nbsp; <span style="opacity: 0.5;">Sep 2025</span> &nbsp; <span class="highlight">fake-news-detection-xai/</span>
            </div>
            <div style="animation: slideIn 0.3s ease-out 0.45s forwards; opacity: 0; line-height: 1.8;">
                <span style="opacity: 0.5;">drwxr-xr-x</span> &nbsp; <span style="opacity: 0.5;">...........</span> &nbsp; <span style="opacity: 0.6;">[ more coming soon ]</span>
            </div>
        </div>

        <div class="prompt"><span class="prompt-icon">▶</span>$ cat fake-news-detection-xai/README.md</div>
        <div class="response" style="margin-bottom: 10px;">
            <div style="animation: slideIn 0.3s ease-out 0.6s forwards; opacity: 0;">
                <span style="opacity: 0.6;"># Click to expand project details</span>
            </div>
        </div>

        <div class="menu-item project-entry" id="project-fakenews" style="animation: slideIn 0.3s ease-out 0.75s forwards; opacity: 0; margin-bottom: 8px; padding: 10px 16px; border: 1px solid rgba(0,255,0,0.3);">
            <span class="arrow">▶</span>
            <span class="highlight"> [MSc DISSERTATION] &nbsp; Fake News Detection Using NLP & Explainable AI</span>
            <span style="opacity: 0.5; font-size: 0.85em; margin-left: 10px;">— tap to read</span>
        </div>

        <div id="project-fakenews-details" style="display: none; margin-left: 20px; margin-bottom: 20px; border-left: 2px solid rgba(0,255,0,0.4); padding-left: 16px;">

            <div class="prompt" style="margin-top: 12px;"><span class="prompt-icon">▶</span>$ cat README.md</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.95em;">
                    <p style="margin-bottom: 8px;">
                        A comparative study evaluating a <span class="highlight">classical NLP pipeline</span> against
                        a <span class="highlight">transformer-based model</span> for detecting fake news —
                        with a dual focus on predictive performance <em>and</em> explainability.
                    </p>
                    <p style="opacity: 0.75; font-size: 0.9em;">
                        MSc Artificial Intelligence &nbsp;|&nbsp; De Montfort University &nbsp;|&nbsp; September 2025
                    </p>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ cat stack.txt</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div>● <span class="highlight">Models:</span> &nbsp; TF-IDF + Logistic Regression &nbsp;|&nbsp; DistilBERT (Hugging Face)</div>
                    <div>● <span class="highlight">XAI:</span> &nbsp;&nbsp;&nbsp;&nbsp; LIME (classical pipeline) &nbsp;|&nbsp; SHAP (transformer)</div>
                    <div>● <span class="highlight">Dataset:</span> &nbsp;LIAR benchmark (12,836 political statements, binary-mapped)</div>
                    <div>● <span class="highlight">Stack:</span> &nbsp;&nbsp;&nbsp;Python · PyTorch · scikit-learn · NLTK · Transformers · Google Colab</div>
                    <div>● <span class="highlight">Eval:</span> &nbsp;&nbsp;&nbsp;&nbsp;Accuracy · F1 · ROC-AUC · MCC · McNemar's test · 5-fold CV</div>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ cat results.log</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div style="margin-bottom: 6px; opacity: 0.7;">── Test Set Performance ──────────────────────</div>
                    <div style="font-family: 'Courier New', monospace;">
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accuracy &nbsp; F1 &nbsp;&nbsp;&nbsp; ROC-AUC &nbsp; MCC</div>
                        <div>TF-IDF + LR &nbsp;&nbsp;&nbsp; 0.597 &nbsp;&nbsp;&nbsp; 0.509 &nbsp; 0.623 &nbsp;&nbsp;&nbsp; 0.170</div>
                        <div style="color: #00ff88;">DistilBERT &nbsp;&nbsp;&nbsp;&nbsp; 0.656 &nbsp;&nbsp;&nbsp; 0.588 &nbsp; 0.690 &nbsp;&nbsp;&nbsp; 0.295</div>
                    </div>
                    <div style="margin-top: 8px; opacity: 0.7;">── Statistical Significance ──────────────────</div>
                    <div>McNemar's test: χ² = 14.35 &nbsp;|&nbsp; p = 1.52×10⁻⁴ &nbsp;✓ significant</div>
                    <div style="margin-top: 8px; opacity: 0.7;">── Cross-Validation (5-fold mean ± SD) ───────</div>
                    <div>DistilBERT F1: 0.581 ± 0.018 &nbsp;|&nbsp; AUC: 0.672 ± 0.004</div>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ cat explainability.md</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div>● <span class="highlight">LIME</span> revealed that LR decisions often hinge on a single lexical trigger
                        (e.g. the word <em>"trafficking"</em> overriding all context), exposing
                        bag-of-words fragility.</div>
                    <div style="margin-top: 6px;">● <span class="highlight">SHAP</span> showed DistilBERT distributing weight across multiple contextual
                        tokens — moderating charged words through neighbouring entities,
                        negation, and discourse markers.</div>
                    <div style="margin-top: 6px;">● Key finding: better performance and better explanations are complementary,
                        not competing — but come at a computational cost.</div>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ echo "status"</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div><span style="color: #00ff88;">✓</span> &nbsp;Submitted — September 2025</div>
                    <div><span style="color: #00ff88;">✓</span> &nbsp;Full paper &amp; artefacts available on request</div>
                    <div><span style="opacity: 0.5;">○</span> &nbsp;GitHub — <span style="opacity: 0.5;">[ link coming soon ]</span></div>
                </div>
            </div>

            <div style="margin-top: 12px; margin-bottom: 6px;">
                <div class="menu-item" id="collapse-fakenews" style="display: inline-block; font-size: 0.9em; padding: 4px 12px; border: 1px solid rgba(0,255,0,0.25);">
                    <span class="arrow">▼</span> <span class="highlight">COLLAPSE</span>
                </div>
            </div>
        </div>

        <div class="ascii-divider" style="animation: fadeIn 0.3s ease-out 1s forwards; opacity: 0; margin-top: 20px;">▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</div>
        <div style="margin-top: 20px; animation: fadeIn 0.3s ease-out 1.1s forwards; opacity: 0;">
            <div class="menu-item" id="back-link" style="display: inline-block;">
                <span class="arrow">&gt;</span> <span class="highlight">BACK TO MAIN</span>
            </div>
        </div>
    `;

    mainContent.appendChild(projectsSection);

    // Expand / collapse project card
    const entry = document.getElementById('project-fakenews');
    const details = document.getElementById('project-fakenews-details');
    const collapse = document.getElementById('collapse-fakenews');

    entry.addEventListener('click', () => {
        const isOpen = details.style.display !== 'none';
        details.style.display = isOpen ? 'none' : 'block';
        entry.querySelector('.arrow').textContent = isOpen ? '▶' : '▼';
    });

    collapse.addEventListener('click', () => {
        details.style.display = 'none';
        entry.querySelector('.arrow').textContent = '▶';
    });

    document.getElementById('back-link').addEventListener('click', backToMain);
}

function showAbout() {
    clearContent();
    const mainContent = document.getElementById('mainContent');

    const aboutSection = document.createElement('div');
    aboutSection.innerHTML = `
        <div class="prompt"><span class="prompt-icon">▶</span>$ cat about.txt</div>
        <div class="response" style="margin-bottom: 20px;">
            <div style="animation: slideIn 0.3s ease-out 0.1s forwards; opacity: 0; line-height: 1.8;">
                <p>I'm César Vieira, a Computer Science graduate with a Master's degree</p>
                <p>in Artificial Intelligence. My passion lies in building intelligent</p>
                <p>systems, machine learning models, and elegant solutions to complex</p>
                <p>computational problems.</p>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ whoami --verbose</div>
        <div class="response" style="margin-bottom: 20px;">
            <div style="animation: slideIn 0.3s ease-out 0.3s forwards; opacity: 0; line-height: 1.8;">
                <p><strong>Core Competencies:</strong></p>
                <p>• Machine Learning & Deep Learning (TensorFlow, PyTorch)</p>
                <p>• Natural Language Processing & Computer Vision</p>
                <p>• Full-Stack Web Development (Node.js, React, Python)</p>
                <p>• Software Architecture & System Design</p>
                <p>• Data Analysis & Statistical Modeling</p>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ ls interests/</div>
        <div class="response" style="margin-bottom: 30px;">
            <div style="animation: slideIn 0.3s ease-out 0.5s forwards; opacity: 0; line-height: 1.8;">
                <p>AI Ethics • Generative Models • Computational Efficiency</p>
                <p>Open Source Development • Knowledge Sharing</p>
            </div>
        </div>
        <div class="ascii-divider">▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</div>
        <div style="margin-top: 30px;">
            <div class="menu-item" id="back-link" style="animation: fadeIn 0.3s ease-out 0.7s forwards; opacity: 0;">
                <span class="arrow">&gt;</span> <span class="highlight">BACK TO MAIN</span>
            </div>
        </div>
    `;

    mainContent.appendChild(aboutSection);
    document.getElementById('back-link').addEventListener('click', backToMain);
}

function showContact() {
    clearContent();
    const mainContent = document.getElementById('mainContent');

    const contactSection = document.createElement('div');
    contactSection.innerHTML = `
        <div class="prompt"><span class="prompt-icon">▶</span>$ find . -name "contact*" -type f</div>
        <div class="response" style="margin-bottom: 20px;">
            <div style="animation: slideIn 0.3s ease-out 0.1s forwards; opacity: 0;">
                ./contact.email
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ cat contact.email</div>
        <div class="response" style="margin-bottom: 20px;">
            <div style="animation: slideIn 0.3s ease-out 0.3s forwards; opacity: 0; cursor: pointer;" 
                 onclick="openEmail()">
                📧 <span style="text-decoration: underline;">your.email@example.com</span>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ ls socials/</div>
        <div class="response" style="margin-bottom: 30px;">
            <div style="animation: slideIn 0.3s ease-out 0.5s forwards; opacity: 0; line-height: 2;">
                <div style="cursor: pointer; padding: 4px; margin: 4px 0;" onclick="openLink('https://github.com')">
                    → GitHub (github.com/yourprofile)
                </div>
                <div style="cursor: pointer; padding: 4px; margin: 4px 0;" onclick="openLink('https://linkedin.com')">
                    → LinkedIn (linkedin.com/in/yourprofile)
                </div>
                <div style="cursor: pointer; padding: 4px; margin: 4px 0;" onclick="openLink('https://twitter.com')">
                    → Twitter (twitter.com/yourprofile)
                </div>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ echo "Let's connect!"</div>
        <div class="response" style="margin-bottom: 30px;">
            <div style="animation: typeIn 0.05s ease-out 0.7s forwards; opacity: 0;">
                Let's connect!
            </div>
        </div>
        <div class="ascii-divider">▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</div>
        <div style="margin-top: 30px;">
            <div class="menu-item" id="back-link" style="animation: fadeIn 0.3s ease-out 0.9s forwards; opacity: 0;">
                <span class="arrow">&gt;</span> <span class="highlight">BACK TO MAIN</span>
            </div>
        </div>
    `;

    mainContent.appendChild(contactSection);
    document.getElementById('back-link').addEventListener('click', backToMain);
}

function backToMain() {
    location.reload();
}

function openEmail() {
    window.location.href = 'mailto:your.email@example.com';
}

function openLink(url) {
    window.open(url, '_blank');
}