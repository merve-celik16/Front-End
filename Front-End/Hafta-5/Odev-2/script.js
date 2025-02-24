const sounds = {
    'A': 'sources/boom.wav',
    'S': 'sources/clap.wav',
    'D': 'sources/tom.wav',
    'F': 'sources/hihat.wav',
    'G': 'sources/kick.wav',
    'H': 'sources/openhat.wav',
    'J': 'sources/ride.wav',
    'K': 'sources/snare.wav',
    'L': 'sources/tink.wav'
};

// Tüm butonları yakaladık
const buttons = document.querySelectorAll('button');

// Ses çalma fonksiyonu
function playSound(key) {
    const audio = new Audio(sounds[key]); // Ses dosyasını yükle
    audio.play(); // Sesi çal
}

// Tıklayınca:
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.textContent; // Düğmenin içeriğini al
        playSound(key); // Düğmeye basıldığında sesi çal
    });
});

// Klavye ile:
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); 
    if (sounds[key]) {
        playSound(key); // Eğer tanımlı bir ses varsa, sesi çal
    }
});