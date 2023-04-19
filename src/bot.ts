import { create, Whatsapp } from 'venom-bot';
import fs from 'fs';

let perguntas: [] = [];

create({
    session: 'bot', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
})
.then((client) => {
    console.log("sessão iniciada");
    fs.readFile('data.json', 'utf-8', (err, jsonString) => {
        if (err) {
          console.log('Error reading file:', err);
          return;
        }
      
        try {
          const data: any = JSON.parse(jsonString);
          perguntas = data;
          console.log('Data from file:', data);
        } catch (err) {
          console.log('Error parsing JSON string:', err);
        }
      });
    start(client)
})
.catch((erro) => {
console.log(erro);
});

function start(client: Whatsapp) {
    client.onMessage((message) => {
        console.log(message.body);
        if (message.body === 'oi' && message.isGroupMsg === false) {
        client.sendText(message.from, 'Welcome Venom 🕷')
            .then((result) => {
              console.log('Result: ', result); //return object success
              console.log(perguntas)
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
    });
}