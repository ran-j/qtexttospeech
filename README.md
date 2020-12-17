# NodeGui plugin Text to Speech

[![npm version](https://img.shields.io/npm/v/@nodegui/plugin-animation.svg)](https://www.npmjs.com/package/@nodegui/plugin-animation)

Plugin you can use QT text to speech

## Requirements

Requires NodeGui v0.20.0 and up

## Installation

```
    npm install 
```

## Build from source

```
    npm install 
    npm run build
```

## Demo

```js
import { QTextToSpeech } from "./lib/QTextToSpeech";

const tts = new QTextToSpeech();

tts.addEventListener('stateChanged', (n: State) => {
    const stringState = n === State.Speaking ? 'Speaking' : n === State.Paused ? 'Paused' : 'Read';
    console.log('(EVENT) TTS state is ' + stringState);
});

 tts.say("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");

```
