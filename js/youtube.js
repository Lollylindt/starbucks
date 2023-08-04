// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', { //player라는 id요소를 가진 값을 찾는다
    videoId: 'An6LvWQuj_8', //최초 재생할 유튭영상 id
    playerVars: {
        autoplay: true, //자동 재생 유무
        loop: true, //반복 재생 유무, 플레이리스트 필수
        playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 id 목록
    },
    events: {
        onReady: function (event) {
            event.target.mute() //타겟은 영상을 의미, 음소거
        }
    }
    });
}