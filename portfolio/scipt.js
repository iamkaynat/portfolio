const text = document.getElementById('dynamic-text');


const phrase = ['Student...', 'Software Engineer...', 'Dancer...'];
let phraseIndex = 0;
let index = 0;

function print(phrase) {
    if (index === phrase.length) {
        clearLetters();

    }
    else if (index < phrase.length) {
        text.textContent += phrase.charAt(index);
        index += 1;
        setTimeout(function () {
            print(phrase);
        }, 200);
    }


}
function clearLetters() {
    if (index === -1) {
        phraseIndex = (phraseIndex + 1) % phrase.length;
        index = 0;
        print(phrase[phraseIndex]);
    }
    else if (index > -1) {
        let updatePhrase = '';
        for (let i = 0; i < index; i++) {
            updatePhrase += phrase[phraseIndex].charAt(i);

        }
        console.log(updatePhrase);
        text.textContent = updatePhrase;
        index -= 1;
        setTimeout(clearLetters, 100);
    }
}
print(phrase[phraseIndex]);
