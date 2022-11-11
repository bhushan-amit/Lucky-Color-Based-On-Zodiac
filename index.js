const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
    console.log (zodiac.value);

    switch(zodiac.value) {
        case "aries":
            body.style.backgroundColor = "Tomato"
            break;
        case "taurus":
            body.style.backgroundColor = "DodgerBlue";
            break;
        case "gemini":
            body.style.backgroundColor = "LightGray"
            break;
        case "cancer":
            body.style.backgroundColor = "SlateBlue";
            break;
        case "leo":
            body.style.backgroundColor = "Gray"
            break;
        case "virgo":
            body.style.backgroundColor = "AliceBlue";
            break;
        case "libra":
            body.style.backgroundColor = "Orange"
            break;
        case "scorpius":
            body.style.backgroundColor = "Bisque";
            break;
        case "sagittarius":
            body.style.backgroundColor = "SpringGreen"
            break;
        case "capricornus":
            body.style.backgroundColor = "Violet";
            break;
        case "aquarius":
            body.style.backgroundColor = "GoldenRod"
            break;
        case "pisces":
            body.style.backgroundColor = "ForestGreen";
            break;
        
        default:
            break;
            

    }
};