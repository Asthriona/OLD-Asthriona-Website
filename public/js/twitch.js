var data = null;

var streamer = "Asthriona"

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.open("GET", `https://api.twitch.tv/helix/streams?user_login=${streamer}`);
xhr.setRequestHeader("Client-ID", "uic9hxe7wdq8hn9ad3z4lg97qghs1b");
xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json'); 

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4) {
    var data = JSON.parse(xhr.responseText)
    var elm  = document.getElementById("info")
    console.log(data)
    if(!data["id"] === null){
        $('.streamName').text("AsthrionaTV - Offline");
        $('.gameName').text("IRL");
        $('.username').text(streamer);
        $('.isLive').text("Offline");
        $('.viewer').text("0");
        $('.twitchplayer').html('<iframe src="https://player.twitch.tv/?channel='+ streamer +'" frameborder="0" allowfullscreen="true" scrolling="no" height="720px" width="1280px"></iframe>')
        $('.chat').html('<iframe src="https://www.twitch.tv/embed/'+ streamer +'/chat?darkpopout" frameborder="0" scrolling="no" height="720" width="100%"></iframe>')
    }else{
        if (streamer == "asthriona") {
            $('.streamName').text(data.data[0].title);
        } else {
            $('.streamName').text("AsthrionaTV Hosting: "+ streamer + " | " + data.data[0].title);
        }
        console.log(data.data[0].title)
        $('.gameName').text(data.data[0].game_id);
        $('.username').text(data.data[0].user_name);
        $('.isLive').text(data.data[0].type);
        $('.viewer').text(data.data[0].viewer_count);
        $('.twitchplayer').html('<iframe src="https://player.twitch.tv/?channel='+ streamer +'" frameborder="0" allowfullscreen="true" scrolling="no" height="720px" width="1280px"></iframe>')
        $('.chat').html('<iframe src="https://www.twitch.tv/embed/'+ streamer +'/chat?darkpopout" frameborder="0" scrolling="no" height="720" width="100%"></iframe>')
    }
  }
});
xhr.send(data);