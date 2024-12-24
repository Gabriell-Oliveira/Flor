// Remove a classe inicial após carregamento
window.onload = () => {
        document.body.classList.remove("container");
    };
    
    // Adiciona interatividade se necessário (atualmente animação é controlada pelo CSS)
    console.log("A cúpula de vidro está animando...");

    // Tenta reproduzir a música automaticamente
    const music = document.getElementById('music');
    music.play().catch((error) => {
        console.warn("Autoplay foi bloqueado. O usuário precisa interagir com a página.", error);
    });