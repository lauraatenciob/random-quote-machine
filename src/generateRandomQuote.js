const quotes = [
    {
        text: "El único modo de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs"
    },
    {
        text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        author: "John Lennon"
    },
    {
        text: "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes al no intentarlo.",
        author: "Jack Canfield"
    },
    {
        text: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        author: "Nelson Mandela"
    },
    {
        text: "La creatividad es la inteligencia divirtiéndose.",
        author: "Albert Einstein"
    },
    {
        text: "La paciencia es amarga, pero su fruto es dulce.",
        author: "Jean-Jacques Rousseau"
    },
    {
        text: "No juzgues cada día por lo que cosechas, sino por las semillas que siembras.",
        author: "Robert Louis Stevenson"
    },
    {
        text: "El único límite para tu realización de mañana serán tus dudas de hoy.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.",
        author: "Winston Churchill"
    },
    {
        text: "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía.",
        author: "Mahatma Gandhi"
    },
    {
        text: "La imaginación es más importante que el conocimiento.",
        author: "Albert Einstein"
    },
    {
        text: "No importa lo lento que vayas, siempre y cuando no te detengas.",
        author: "Confucio"
    },
    {
        text: "El verdadero secreto para la felicidad radica en tomar interés genuino en todos los detalles de la vida diaria.",
        author: "William Morris"
    },
    {
        text: "No esperes a que las circunstancias sean perfectas para actuar.",
        author: "Stephen Covey"
    },
    {
        text: "El momento en el que te paras a pensar si amas a alguien, ya has dejado de amarlo para siempre.",
        author: "Carlos Ruiz Zafón"
    },
    {
        text: "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.",
        author: "William George Ward"
    },
    {
        text: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "El conocimiento es poder.",
        author: "Sir Francis Bacon"
    },
    {
        text: "La única manera de hacer un gran trabajo es amar lo que haces.",
        author: "Steve Jobs"
    },
    {
        text: "La mejor manera de predecir tu futuro es crearlo.",
        author: "Peter Drucker"
    }
];


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export default function generateRandomQuote() {
    return quotes[randomIntFromInterval(0, quotes.length - 1)]
}
