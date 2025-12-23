// ===== CONFIGURATION =====
        const herName = "Angel"; // ⬅️ CHANGE THIS TO HER NAME
        // =========================

        // Elegant Cursor System
        const cursor = document.querySelector('.cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorGlow = document.querySelector('.cursor-glow');
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            dotX += (mouseX - dotX) * 0.25;
            dotY += (mouseY - dotY) * 0.25;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';
            cursorGlow.style.left = dotX + 'px';
            cursorGlow.style.top = dotY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Create Magical Particles
        function createParticles() {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (6 + Math.random() * 4) + 's';
                document.body.appendChild(particle);
            }
        }

        // Create Elegant Balloons
        function createBalloons() {
            const colors = [
                'linear-gradient(135deg, rgba(255, 182, 193, 0.4), rgba(255, 218, 224, 0.4))',
                'linear-gradient(135deg, rgba(255, 215, 230, 0.4), rgba(255, 240, 245, 0.4))',
                'linear-gradient(135deg, rgba(221, 160, 221, 0.3), rgba(238, 130, 238, 0.3))'
            ];
            
            for (let i = 0; i < 20; i++) {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = Math.random() * 100 + '%';
                balloon.style.top = Math.random() * 120 + '%';
                balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
                balloon.style.animationDelay = Math.random() * 4 + 's';
                balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
                document.getElementById('openingScene').appendChild(balloon);
            }
        }

        // Create Rose Petals
        function createPetals() {
            for (let i = 0; i < 40; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.left = Math.random() * 100 + '%';
                petal.style.animationDelay = Math.random() * 8 + 's';
                petal.style.animationDuration = (6 + Math.random() * 4) + 's';
                document.getElementById('openingScene').appendChild(petal);
            }
        }

        // Create Golden Sparkles
        function createSparkles() {
            for (let i = 0; i < 30; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 3 + 's';
                document.getElementById('openingScene').appendChild(sparkle);
            }
        }

        // Elegant Typing Effect
        function typeText(text, element, callback) {
            let i = 0;
            const cursor = '<span class="cursor-blink">|</span>';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML = text.substring(0, i + 1) + cursor;
                    i++;
                    setTimeout(type, 120);
                } else {
                    element.innerHTML = text;
                    if (callback) callback();
                }
            }
            type();
        }

        // Create Memory Stars
        function createStars() {
            const messages = [
                "This smile deserves all the happiness today ✨",
                "May your day be filled with beautiful surprises 💫",
                "Your presence lights up every room you enter 🌟",
                "Wishing you endless joy and laughter today 💖",
                "May this year bring you everything you dream of ✨",
                "You deserve all the magic in the world 🌠",
                "Here's to another year of amazing memories 💝",
                "Your kindness makes the world brighter 🌟"
            ];

            for (let i = 0; i < 40; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 4 + 's';
                
                star.addEventListener('click', function(e) {
                    const messageEl = document.getElementById('starMessage');
                    messageEl.textContent = messages[Math.floor(Math.random() * messages.length)];
                    messageEl.style.left = e.clientX + 'px';
                    messageEl.style.top = e.clientY + 'px';
                    messageEl.style.display = 'block';
                    setTimeout(() => messageEl.style.display = 'none', 4000);
                });
                
                document.getElementById('starsContainer').appendChild(star);
            }
        }

        // Time Lock System
        function updateTimeLock() {
            const now = new Date();
            const target = new Date();
            target.setHours(24, 0, 0, 0);
            
            const diff = target - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const timeDisplay = document.getElementById('timeDisplay');
            
            if (diff <= 0 || now.getHours() === 0) {
                document.getElementById('lockIcon').textContent = '🔓';
                document.getElementById('unlockMessage').textContent = 'The Secret Message Has Been Revealed';
                document.getElementById('hiddenMessage').style.display = 'block';
                timeDisplay.textContent = '';
            } else {
                timeDisplay.textContent = `Unlocks in ${hours}h ${minutes}m ${seconds}s`;
            }
        }

        // Music Control
        const music = document.getElementById('birthdayMusic');
        const musicControl = document.getElementById('musicControl');
        let isPlaying = true;

        musicControl.addEventListener('click', () => {
            if (isPlaying) {
                music.pause();
                musicControl.querySelector('.music-icon').textContent = '🎵';
            } else {
                music.play();
                musicControl.querySelector('.music-icon').textContent = '⏸️';
            }
            isPlaying = !isPlaying;
        });

        // Scroll Handler
        let scrolled = false;
        window.addEventListener('scroll', () => {
            if (!scrolled && window.scrollY > 100) {
                scrolled = true;
                music.play();
                isPlaying = true;
                musicControl.querySelector('.music-icon').textContent = '⏸️';
            }
        });

        // Initialize Everything
        window.onload = function() {
            createParticles();
            createBalloons();
            createPetals();
            createSparkles();
            createStars();
            
            setTimeout(() => {
                typeText(`Happy Birthday ${herName}`, document.getElementById('typingText'), () => {
                    setTimeout(() => {
                        document.getElementById('heartContainer').style.opacity = '1';
                        setTimeout(() => {
                            document.getElementById('scrollHint').style.opacity = '1';
                            setTimeout(() => {
                                document.getElementById('openingScene').classList.add('hidden');
                                setTimeout(() => {
                                    document.getElementById('mainContent').style.display = 'block';
                                    musicControl.style.display = 'flex';
                                }, 500);
                            }, 3000);
                        }, 2500);
                    }, 1500);
                });
            }, 2000);

            updateTimeLock();
            setInterval(updateTimeLock, 1000);
        };