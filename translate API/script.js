document.getElementById("sbm").addEventListener("click", function (e) {
    e.preventDefault();
    var text = document.getElementById("inp-data").value;
    var targt = document.getElementById("inp-lang").value;
    
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const data = new FormData();
    data.append('source_language', 'en');
    data.append('target_language', targt);
    data.append('text', text);
    
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '90fe476f49mshe7a5233ff1d00d7p14501djsn3e8dd4ff67bd',
            'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
        },
        body: data
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            document.getElementById("res").innerHTML = data.data.translatedText;
            let text = data.data.translatedText; 
            return text;
        })
        .catch(error => {
            console.error('Error translating text:', error);
        });
});

const alllangbtn = () => {
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '90fe476f49mshe7a5233ff1d00d7p14501djsn3e8dd4ff67bd',
            'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
        }
    };

    let langdiv = document.getElementById("all-lang");
    langdiv.innerHTML = "";
    langdiv.style.display = "grid";
    langdiv.style.gridTemplateColumns = "repeat(auto-fit, minmax(100px, 1fr))";

    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            let languages = data.data.languages;

            languages.forEach(lang => {
                let div = document.createElement("div");
                let btn = document.createElement('button');
                btn.style.margin = "9px";
                btn.style.padding = "5px";
                btn.style.width = "100px";
                let btntext = document.createTextNode(lang.name);
                btn.addEventListener('click', () => {
                    document.getElementById("inp-lang").value = lang.code;
                });
                btn.appendChild(btntext);
                div.appendChild(btn);
                langdiv.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error fetching languages:', error);
        });
};
let text = document.getElementById("res")
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];
    speechSynthesis.speak(utterance);
}
window.onload = function() {
    speak("Hello, welcome to our translation app.");
};

alllangbtn();
