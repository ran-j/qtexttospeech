import { QTextToSpeech } from "./lib/QTextToSpeech";

const tts = new QTextToSpeech();

console.log('Engines', QTextToSpeech.availableEngines());

console.log(tts.availableVoices());

tts.addEventListener('pitchChanged', (n) => {
    console.log('(EVENT) Pitch After ' + n);
});

tts.addEventListener('rateChanged', (n) => {
    console.log('(EVENT) Rate After ' + n);
});

tts.addEventListener('stateChanged', (n: State) => {
    const stringState = n === State.Speaking ? 'Speaking' : n === State.Paused ? 'Paused' : 'Read';
    console.log('(EVENT) TTS state is ' + stringState);
});

console.log('Pitch Before setting ', tts.pitch());
tts.setPitch(5);
// console.log('Pitch After setting ', tts.pitch());

console.log('Rate Before setting ', tts.rate());
tts.setRate(2);
// console.log('Rate After setting ', tts.rate());

console.log('Volume Before setting ', tts.volume());
tts.setVolume(0.9);
// console.log('Volume After setting ', tts.volume());

// console.log(tts.state());

setTimeout(() => {
    console.log('saying');
    setTimeout(() => {
        tts.pause();
        setTimeout(() => {
            tts.resume();
            setTimeout(() => {
                tts.stop();
            }, 4000);
        }, 2000);
    }, 1000);
    tts.say(
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    );
}, 5000);