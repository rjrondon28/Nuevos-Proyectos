// Cargar la biblioteca Twilio
const twilio = require('twilio');

// Los datos de autenticación (Account SID y Auth Token)
const accountSid = 'TU_ACCOUNT_SID';  // Coloca tu Account SID de Twilio
const authToken = 'TU_AUTH_TOKEN';    // Coloca tu Auth Token de Twilio

// Crear una instancia del cliente Twilio
const client = twilio(accountSid, authToken);

// Llamar a la función para enviar el SMS
client.messages
  .create({
    body: '¡Hola! Este es un mensaje de prueba enviado desde Twilio.', // Tu mensaje personalizado
    from: '+TU_NUMERO_TWILIO', // Número de teléfono de Twilio
    to: '+NUMERO_DESTINO'      // Número de destino al que quieres enviar el mensaje
  })
  .then(message => console.log(`Mensaje enviado con SID: ${message.sid}`))
  .catch(error => console.error('Error al enviar el mensaje:', error));
