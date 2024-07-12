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
    
    fetch(url, options).then(res => res.json()).then(data => {
        document.getElementById("res").innerHTML = data.data.translatedText;
    });
});


const alllangbtn = async () => {
    let langdiv = document.getElementById("alllang")
    langdiv.innerHTML = '';
    
    const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '90fe476f49mshe7a5233ff1d00d7p14501djsn3e8dd4ff67bd',
            'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
        }
    };
    
    fetch(url, options).then(res = res.json()).then(data => {
        let languages = Array();
        languages = data.data.languages;
        
        languages.forEach((e) => {
            let btn = document.createElement('button');
            btn.innerHTML = e.name;
            btn.addEventListener('click', () => {
            document.getElementById("inp-lang").value = e.code;
            });


            languages.appendChild(btn);
        })
    })

}