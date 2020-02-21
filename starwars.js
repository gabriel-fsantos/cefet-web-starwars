var json;

var callbackFilms = function(){
    if (this.readyState === 4 ) {
        if (this.status === 200) {
            json = this.response;
            executa(json);
            addEvents(json);
        }
        else {
            console.log('Erro na resposta HTTP: ' + this.status);
        }
    }
}

var filmsRequest = new XMLHttpRequest();
filmsRequest.onreadystatechange = callbackFilms;
filmsRequest.responseType = 'json';
filmsRequest.open('GET', 'https://swapi.co/api/films/', true);
filmsRequest.send(null);

var id;
var executa = function(json){
    console.log(json.results);
    for(i=0; i<json.results.length; i++){
        document.getElementById("movies").innerHTML = 
        document.getElementById("movies").innerHTML + 
        '<li id=episode' + json.results[i].episode_id + '>' + 'Episode ' 
        + json.results[i].episode_id + '</li>';
        id = json.results[i].episode_id;
    }
}

var addEvents = function(json){
    for (let i = 0; i < json.results.length; i++) {
        document.getElementById("episode"+json.results[i].episode_id).addEventListener('click', function (){
            alteraDoc("episode"+json.results[i].episode_id);
        }); 
    }
}

var alteraDoc = function(id){

    console.log(id);
    switch (id) {
        case 'episode1':
            document.getElementById("conteudo").innerHTML = json.results[0].opening_crawl;
            break;
        case 'episode2':
            document.getElementById("conteudo").innerHTML = json.results[1].opening_crawl;
            break;
        case 'episode3':
            document.getElementById("conteudo").innerHTML = json.results[2].opening_crawl;
            break;
        case 'episode4':
            document.getElementById("conteudo").innerHTML = json.results[3].opening_crawl;
            break;
        case 'episode5':
            document.getElementById("conteudo").innerHTML = json.results[4].opening_crawl;
            break;
        case 'episode6':
            document.getElementById("conteudo").innerHTML = json.results[5].opening_crawl;
            break;
        case 'episode7':
            document.getElementById("conteudo").innerHTML = json.results[6].opening_crawl;
            break;
    }
}
