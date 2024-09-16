//======================= Boton flotante del whatsapp ==================================

let message = " a los poderosos brujos";

document.getElementById('whatsapp-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log(message);

    
    var url = 'https://wa.me/+13234099650?l=es&text=Hola%2C%20vi%20su%20pagina%20web%20y%20deseo%20realizar%20una%20consulta' + encodeURIComponent(message);

    window.open(url, '_blank');
});