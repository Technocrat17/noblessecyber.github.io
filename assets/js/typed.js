document.addEventListener('DOMContentLoaded', function() {
            const phrases = ['Cyber Security Solutions for Home and Enterprise'];
            let currentPhraseIndex = 0;

            const options = {
                strings: [phrases[currentPhraseIndex]],
                typeSpeed: 50,
                backSpeed: 50, // Erasing speed
                startDelay: 1000,
                showCursor: true,
                cursorChar: '|',
                onComplete: function() {
                    setTimeout(() => {
                        this.deleteAll(); // Erase the text
                        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                        this.options.strings = [phrases[currentPhraseIndex]];
                        this.start(); // Restart typing
                    }, 1000); // Delay before starting the next phrase
                },
            };

            const typed = new Typed('#typed-text', options);
        });