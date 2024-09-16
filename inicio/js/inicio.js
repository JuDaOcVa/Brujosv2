
//======================= Background body ================================================
        const symbols = '☠︎☽♆⚰︎⚱︎☾♱⛧⍟✠✯';
        const background = document.querySelector('.background');
        const symbolElements = [];

        function createSymbol() {
            const symbol = document.createElement('div');
            symbol.classList.add('symbol');
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = `${Math.random() * 100}%`;
            symbol.style.top = `${Math.random() * 100}%`;
            background.appendChild(symbol);
            symbolElements.push(symbol);
        }

        for (let i = 0; i < 20; i++) {
            createSymbol();
        }

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            symbolElements.forEach((symbol) => {
                const rect = symbol.getBoundingClientRect();
                const symbolX = rect.left + rect.width / 2;
                const symbolY = rect.top + rect.height / 2;

                const distanceX = mouseX - symbolX;
                const distanceY = mouseY - symbolY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                if (distance < 100) {
                    const angle = Math.atan2(distanceY, distanceX);
                    const newX = symbolX + Math.cos(angle) * 20;
                    const newY = symbolY + Math.sin(angle) * 20;

                    symbol.style.left = `${newX}px`;
                    symbol.style.top = `${newY}px`;
                    symbol.style.color = 'rgba(255, 0, 0, 0.8)';
                    symbol.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
                } else {
                    symbol.style.color = 'rgba(255, 0, 0, 0.6)';
                    symbol.style.textShadow = 'none';
                }
            });
        });

//======================= Boton magico ================================================

        const button = document.getElementById('whatsappButton');
        const runesContainer = document.getElementById('runesContainer');
        

        button.addEventListener('click', () => {
            let message = " a los poderosos brujos";
            console.log(message);
            const url = `https://wa.me/+13234099650?l=es&text=Hola%2C%20vi%20su%20pagina%20web%20y%20deseo%20realizar%20una%20consulta` + encodeURIComponent(message);
            window.open(url, '_blank');
        });

        const runes = '᚛᚜ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';
        for (let i = 0; i < 20; i++) {
            const rune = document.createElement('div');
            rune.className = 'rune';
            rune.textContent = runes[Math.floor(Math.random() * runes.length)];
            rune.style.left = `${Math.random() * 100}%`;
            rune.style.top = `${Math.random() * 100}%`;
            rune.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
            runesContainer.appendChild(rune);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0); }
                50% { transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px); }
                100% { transform: translate(0, 0); }
            }
        `;
        document.head.appendChild(style);



//======================= Carousel ================================================
        const carousel = document.querySelector('.carousel');
        const items = document.querySelectorAll('.item');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');

        let currentAngle = 0;
        const totalItems = items.length;
        const angleIncrement = 360 / totalItems;

        function positionItems() {
            items.forEach((item, index) => {
                const angle = angleIncrement * index;
                const radius = 200; 
                item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
            });
        }

        function rotateCarousel(direction) {
            currentAngle += direction * angleIncrement;
            carousel.style.transform = `rotateY(${currentAngle}deg)`;
        }

        positionItems();

        prevBtn.addEventListener('click', () => rotateCarousel(1));
        nextBtn.addEventListener('click', () => rotateCarousel(-1));

//======================= Agradecimientos ================================================

        function revealContent(card) {
            const content = card.querySelector('.card-content');
            content.style.transform = content.style.transform === 'translateY(0px)' ? 'translateY(100%)' : 'translateY(0)';
        }

        // Create a magical sparkle effect
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = `${x}px`;
                sparkle.style.top = `${y}px`;
                card.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            });
        });