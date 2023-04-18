import { log } from 'console';
import { create, Whatsapp } from 'venom-bot';

create({
    session: 'bot', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
})
.then((client) => {
    console.log(start(client));
})
.catch((erro) => {
console.log(erro);
});

function start(client: Whatsapp) {
    client.onMessage((message) => {
        console.log(message.body);
        if (message.body === 'oi' && message.isGroupMsg === false) {
        client
            .sendText(message.from, 'Welcome Venom 🕷')
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
    });
}