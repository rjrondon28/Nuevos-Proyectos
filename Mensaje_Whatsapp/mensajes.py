import pywhatkit

contactos = ['+584243622565','+584243622565','+584243622565','+584243622565','+584243622565','+584243622565','+584243622565','+584243622565']
message = 'hi222 puta'
hour = 23
minute = 23
t_enviado = 30
var = True
t_aplication = 5

for contact in contactos:
    contacto = contact
    pywhatkit.sendwhatmsg(contacto,message,hour,minute,t_enviado,var,t_aplication)
    minute = minute + 1
