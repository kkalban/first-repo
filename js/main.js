     // Indicateur de progression
     window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);
        document.getElementById('scrollIndicator').textContent = `${scrollPercentage}%`;
    });

    // Gestion des onglets
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Supprimer la classe active de tous les onglets et contenus
            document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // Ajouter la classe active à l'onglet cliqué et au contenu correspondant
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });