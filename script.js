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
            <div style="animation: typeIn 0.05s ease-out forwards; opacity: 0;">
                Successfully changed directory to ~/projects
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ ls -la</div>
        <div class="response" style="margin-bottom: 30px;">
            <div class="project-item glitch-text" style="animation: slideIn 0.3s ease-out 0.2s forwards; opacity: 0; margin-bottom: 15px;">
                <strong>[1] AI Text Generation Model</strong>
                <div style="margin-left: 20px; color: #00ff00; opacity: 0.8; font-size: 0.9em;">
                    Deep learning project using transformers and NLP<br>
                    Stack: Python, PyTorch, TensorFlow
                </div>
            </div>
            <div class="project-item holographic-text" style="animation: slideIn 0.3s ease-out 0.4s forwards; opacity: 0; margin-bottom: 15px;">
                <strong>[2] Computer Vision Pipeline</strong>
                <div style="margin-left: 20px; color: #00ff00; opacity: 0.8; font-size: 0.9em;">
                    Image processing and object detection system<br>
                    Stack: OpenCV, PyTorch, Python
                </div>
            </div>
            <div class="project-item glitch-text" style="animation: slideIn 0.3s ease-out 0.6s forwards; opacity: 0; margin-bottom: 15px;">
                <strong>[3] Web Applications</strong>
                <div style="margin-left: 20px; color: #00ff00; opacity: 0.8; font-size: 0.9em;">
                    Full-stack web development projects<br>
                    Stack: React, Node.js, MongoDB, PostgreSQL
                </div>
            </div>
        </div>
        <div class="prompt"><span class="prompt-icon">▶</span>$ echo "More projects coming soon..."</div>
        <div class="response">
            <div style="animation: typeIn 0.05s ease-out 0.8s forwards; opacity: 0;">
                More projects coming soon...
            </div>
        </div>
        <div class="ascii-divider">▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</div>
        <div style="margin-top: 30px;">
            <div class="menu-item" id="back-link" style="animation: fadeIn 0.3s ease-out 1s forwards; opacity: 0;">
                <span class="arrow">&gt;</span> <span class="highlight">BACK TO MAIN</span>
            </div>
        </div>
    `;

    mainContent.appendChild(projectsSection);
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
