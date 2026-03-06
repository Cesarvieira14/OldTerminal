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
                <span style="opacity: 0.5;">drwxr-xr-x</span> &nbsp; <span style="opacity: 0.5;">May 2024</span> &nbsp; <span class="highlight">pcs-booking-app/</span>
            </div>
            <div style="animation: slideIn 0.3s ease-out 0.55s forwards; opacity: 0; line-height: 1.8;">
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

        <div class="prompt" style="animation: slideIn 0.3s ease-out 0.75s forwards; opacity: 0;"><span class="prompt-icon">▶</span>$ cat pcs-booking-app/README.md</div>
        <div class="response" style="margin-bottom: 10px;">
            <div style="animation: slideIn 0.3s ease-out 0.85s forwards; opacity: 0;">
                <span style="opacity: 0.6;"># Click to expand project details</span>
            </div>
        </div>

        <div class="menu-item project-entry" id="project-pcsbooking" style="animation: slideIn 0.3s ease-out 0.9s forwards; opacity: 0; margin-top: 4px; margin-bottom: 8px; padding: 10px 16px; border: 1px solid rgba(0,255,0,0.3);">
            <span class="arrow">▶</span>
            <span class="highlight"> [BSc FINAL YEAR PROJECT] &nbsp; Pc'sBooking — Mobile Booking App for Shared Computing Resources</span>
            <span style="opacity: 0.5; font-size: 0.85em; margin-left: 10px;">— tap to read</span>
        </div>

        <div id="project-pcsbooking-details" style="display: none; margin-left: 20px; margin-bottom: 20px; border-left: 2px solid rgba(0,255,0,0.4); padding-left: 16px;">

            <div class="prompt" style="margin-top: 12px;"><span class="prompt-icon">▶</span>$ cat README.md</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.95em;">
                    <p style="margin-bottom: 8px;">
                        An <span class="highlight">Android application</span> designed to dynamically allocate shared computing resources —
                        built for environments such as offices, libraries, and co-working spaces where multiple users
                        need access to shared PCs or remote desktops.
                    </p>
                    <p style="opacity: 0.75; font-size: 0.9em;">
                        BSc Computer Science (Hons) &nbsp;|&nbsp; De Montfort University &nbsp;|&nbsp; May 2024
                    </p>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ cat stack.txt</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div>● <span class="highlight">Language:</span> &nbsp; Kotlin (primary) + Java</div>
                    <div>● <span class="highlight">Architecture:</span> MVVM (Model-View-ViewModel)</div>
                    <div>● <span class="highlight">Backend:</span> &nbsp;&nbsp; Firebase Realtime Database + Firebase Authentication</div>
                    <div>● <span class="highlight">UI:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Android XML layouts · RecyclerView · ViewBinding · TabLayout</div>
                    <div>● <span class="highlight">Tooling:</span> &nbsp;&nbsp; Android Studio · Git · Gradle · Agile (personal Scrum)</div>
                    <div>● <span class="highlight">Repo:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Cesarvieira14/PcsBooking.git" target="_blank" style="color: #00ff88;">github.com/Cesarvieira14/PcsBooking</a></div>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ cat features.md</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div style="margin-bottom: 6px; opacity: 0.7;">── User Features ───────────────────────────────</div>
                    <div>● Register / Login / Forgot Password (Firebase Auth)</div>
                    <div>● Browse available PCs with real-time slot availability</div>
                    <div>● Book a PC within a 7-day window — time slots (08:00–20:00)</div>
                    <div>● View, cancel, and review past bookings</div>
                    <div style="margin-top: 8px; margin-bottom: 6px; opacity: 0.7;">── Admin Features ──────────────────────────────</div>
                    <div>● Manage all user bookings with today / this week / all filters</div>
                    <div>● View detailed booking info and cancel any reservation</div>
                    <div>● Full user management — update roles, delete accounts</div>
                    <div>● Machine CRUD — create, update, delete PC entries</div>
                </div>
            </div>

            <div class="prompt"><span class="prompt-icon">▶</span>$ echo "status"</div>
            <div class="response">
                <div style="line-height: 1.9; font-size: 0.92em;">
                    <div><span style="color: #00ff88;">✓</span> &nbsp;Submitted — May 2024</div>
                    <div><span style="color: #00ff88;">✓</span> &nbsp;Full report &amp; codebase available on request</div>
                    <div><span style="color: #00ff88;">✓</span> &nbsp;<a href="https://github.com/Cesarvieira14/PcsBooking.git" target="_blank" style="color: #00ff88;">GitHub Repository</a></div>
                </div>
            </div>

            <div style="margin-top: 12px; margin-bottom: 6px;">
                <div class="menu-item" id="collapse-pcsbooking" style="display: inline-block; font-size: 0.9em; padding: 4px 12px; border: 1px solid rgba(0,255,0,0.25);">
                    <span class="arrow">▼</span> <span class="highlight">COLLAPSE</span>
                </div>
            </div>
        </div>

        <div class="ascii-divider" style="animation: fadeIn 0.3s ease-out 1.1s forwards; opacity: 0; margin-top: 20px;">▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</div>
        <div style="margin-top: 20px; animation: fadeIn 0.3s ease-out 1.2s forwards; opacity: 0;">
            <div class="menu-item" id="back-link" style="animation: fadeIn 0.3s ease-out 0.7s forwards; opacity: 0;">
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

    // Expand / collapse bachelor project card
    const entryBsc = document.getElementById('project-pcsbooking');
    const detailsBsc = document.getElementById('project-pcsbooking-details');
    const collapseBsc = document.getElementById('collapse-pcsbooking');

    entryBsc.addEventListener('click', () => {
        const isOpen = detailsBsc.style.display !== 'none';
        detailsBsc.style.display = isOpen ? 'none' : 'block';
        entryBsc.querySelector('.arrow').textContent = isOpen ? '▶' : '▼';
    });

    collapseBsc.addEventListener('click', () => {
        detailsBsc.style.display = 'none';
        entryBsc.querySelector('.arrow').textContent = '▶';
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
                <p>I'm César Vieira — a Portuguese developer based in the UK, BSc Computer</p>
                <p>Science (Hons) and MSc Artificial Intelligence, both from De Montfort</p>
                <p>University Leicester. I like building things that actually work: mobile</p>
                <p>apps, ML pipelines, and the occasional over-engineered portfolio site.</p>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ whoami --verbose</div>
        <div class="response" style="margin-bottom: 20px;">
            <div style="animation: slideIn 0.3s ease-out 0.3s forwards; opacity: 0; line-height: 1.8;">
                <div style="margin-bottom: 6px; opacity: 0.7;">── Languages & Frameworks ──────────────────────</div>
                <div>● <span class="highlight">Mobile:</span> &nbsp;&nbsp; Kotlin · Java · Android SDK · MVVM · Firebase</div>
                <div>● <span class="highlight">ML/AI:</span> &nbsp;&nbsp;&nbsp; Python · PyTorch · scikit-learn · Hugging Face · NLTK</div>
                <div>● <span class="highlight">XAI:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LIME · SHAP</div>
                <div>● <span class="highlight">Tools:</span> &nbsp;&nbsp;&nbsp; Git · Android Studio · Google Colab · Agile / Scrum</div>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ cat background.log</div>
        <div class="response" style="margin-bottom: 20px;">
            <div style="animation: slideIn 0.3s ease-out 0.5s forwards; opacity: 0; line-height: 1.9;">
                <div style="margin-bottom: 6px; opacity: 0.7;">── Education ───────────────────────────────────</div>
                <div><span style="opacity: 0.5;">2024–2025</span> &nbsp; MSc Artificial Intelligence &nbsp;·&nbsp; De Montfort University</div>
                <div><span style="opacity: 0.5;">2021–2024</span> &nbsp; BSc Computer Science (Hons) &nbsp;·&nbsp; De Montfort University</div>
                <div><span style="opacity: 0.5;">2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp; Foundation Degree in Computing &nbsp;·&nbsp; De Montfort University</div>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ ls interests/</div>
        <div class="response" style="margin-bottom: 30px;">
            <div style="animation: slideIn 0.3s ease-out 0.65s forwards; opacity: 0; line-height: 1.8;">
                <p>Explainable AI &nbsp;•&nbsp; NLP &nbsp;•&nbsp; Android Development</p>
                <p>Building useful tools &nbsp;•&nbsp; Making ML interpretable</p>
            </div>
        </div>
        <div class="ascii-divider">▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</div>
        <div style="margin-top: 30px;">
            <div class="menu-item" id="back-link" style="animation: fadeIn 0.3s ease-out 0.8s forwards; opacity: 0;">
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
                📧 <span style="text-decoration: underline;">cesarcamachovieira@gmail.com</span>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ ls socials/</div>
        <div class="response" style="margin-bottom: 30px;">
            <div style="animation: slideIn 0.3s ease-out 0.5s forwards; opacity: 0; line-height: 2;">
                <div style="cursor: pointer; padding: 4px; margin: 4px 0;" onclick="openLink('https://github.com/Cesarvieira14')">
                    → GitHub (github.com/Cesarvieira14)
                </div>
                <div style="cursor: pointer; padding: 4px; margin: 4px 0;" onclick="openLink('https://www.linkedin.com/in/cesar--vieira')">
                    → LinkedIn (linkedin.com/in/www.linkedin.com/in/cesar--vieira)
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