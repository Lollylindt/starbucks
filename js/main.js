const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window, scrollY);
    if (window.scrollY > 500) {
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 투탑 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    }
    else {
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 투탑 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1)* .7,
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper', {
    // direction: 'horizontal' 기본값
    slidesPerView: 3, // 한번에 보여줄 슬라이드 수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 여부 가능
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }

});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion // 느낌표의 의미는 상태를 반대로 한다-결국 false를 true로, true를 false로 클릭할때마다 바꿔줌
    if (isHidePromotion) {
        // if 안쪽이 트루(느낌표로 재할당했으므로), 숨김처리
        promotionEl.classList.add('hide');
    } else {
        // if가 폴스, 보임 처리
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
function floatingObject(selector, delay, size) {
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메 동작 시간(초)
        { //옵션
        y: size,
        repeat: -1, // 무한반복
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay) //n초 뒤 동작 시작, 아래에 정해진 딜레이값이 최대값
        }
    ); //gsap.to(요소, 시간-s-, 옵션);
}
floatingObject('.floating1', 1, 15); //css선택자(selector), delay, size (위에서 정해놓은 수치들)
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 //뷰포트 시작부분을 0, 끝부분을 1로 인식. 스크롤 내릴때 트리거가 0.8의 부분에 걸리면 애니메이션 실행
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});
