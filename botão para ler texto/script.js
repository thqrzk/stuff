const speechSynthesis = window.speechSynthesis;

const speakText = (text) =>  {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
};

const button = document.getElementById('readButton');

button.addEventListener('click', () => {
    const textToRead = 'Bem-vindo à nossa biblioteca! Aqui você encontrará diversos livros, no menu temo início, livros, autores, contato';
    speakText(textToRead);
});

