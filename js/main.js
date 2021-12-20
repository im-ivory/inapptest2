///* INTRO *///

/* 인트로메인 마우스 아이콘 페이드아웃 */
function removeWheel(e){
    const mouseWheel = document.querySelectorAll(".icon_scroll");
    if(mouseWheel[0].getBoundingClientRect().top<400){
        mouseWheel[0].classList.add("hide");
    }else{
        mouseWheel[0].classList.remove("hide");
    }
}
      
window.addEventListener("scroll", removeWheel); 


/* intro02 글자 떠오르는 효과 */
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power0", duration: 3});

gsap.fromTo('#float-text',{opacity:0, y: 100},{
    y: 0,
    opacity:1,
    immediateRender: false,
    scrollTrigger: {
        trigger: '.intro02 .spacer',
        scrub: 1,    
        start: 'top 80%',
        end: '+=100',
    }
})

/* intro03 지도 옆 텍스트 나타나는 효과 */
gsap.to('.intro03 .article_txt',{
    display: "flex",
    opacity:1,
    immediateRender: false,
    scrollTrigger: {
        trigger: '.intro03 .start',
        scrub: 1,    
        start: 'top 100%',
        end: '+=10',
    }
})
gsap.to('.intro03 .article_txt',{
    opacity:0,
    display: "none",
    immediateRender: false,
    scrollTrigger: {
        trigger: '.intro03 .sanyang',
        scrub: 1,    
        start: 'top 100%',
        end: '+=200',
    }
})

/* intro03 동물 지도 */
const seolark = document.querySelector(".seolark");
const odae = document.querySelector(".odae");
const taebaek = document.querySelector(".taebaek");
const sobaek = document.querySelector(".sobaek");
const worak = document.querySelector(".worak");
const juwang = document.querySelector(".juwang");
const sokri = document.querySelector(".sokri");
const changnyeong = document.querySelector(".changnyeong");
const jiri = document.querySelector(".jiri");
const sanyangArray = [seolark,odae,taebaek,worak,juwang,sokri];

function blinkPlace(e){
    const sanyang = document.querySelector(".sanyang");
    const fox = document.querySelector(".fox");
    const ibis = document.querySelector(".ibis");
    const bear = document.querySelector(".bear");
    if(sanyang.getBoundingClientRect().top<400 && sanyang.getBoundingClientRect().top>-400){
        sanyangArray.forEach(function(element){
            element.classList.add("blinking");
        })
        sobaek.classList.add("blinking");
    }else{
        sanyangArray.forEach(function(element){
            element.classList.remove("blinking");
        })
    }

    //////////////////
    if(fox.getBoundingClientRect().top<400 && fox.getBoundingClientRect().top>-400){
        sobaek.classList.add("blinking")
    }else{
        sobaek.classList.remove("blinking")
    }

    //////////////////
    if(ibis.getBoundingClientRect().top<400 && ibis.getBoundingClientRect().top>-400){
        changnyeong.classList.add("blinking")
    }else{
        changnyeong.classList.remove("blinking")
    }

    ////////////////
    if(bear.getBoundingClientRect().top<400 && bear.getBoundingClientRect().top>-400){
        jiri.classList.add("blinking")
    }else{
        jiri.classList.remove("blinking")
    }
}

window.addEventListener("scroll", blinkPlace); 


/* intro05 페이지 선택 버튼 */
    function fnMove(seq){
        $(".bear").removeClass("hide");
        //변경사항: 12월 24일 따오기 발간시 밑의 주석을 지워주세요//
         $(".ibis").removeClass("hide");
        /////////
        $("#byline").removeClass("hide");
        $("#original").removeClass("hide");
        $("#footer").removeClass("hide");
        var offset = $(".story" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
 
        map.resize();
    }


///* MAIN *///

/* page 공통 사진 -> 배경 전환 효과 */
let sections = Array.from(document.querySelectorAll(".bg-change"));
let bgs = Array.from(document.getElementsByClassName("bg"));

function changeBg(e){
    for (i=0;i<sections.length;i++){
        if(sections[i].getBoundingClientRect().top < 800){
            bgs[i].classList.add("show");
            if(i>0 && i<sections.length-1){
            bgs[i-1].classList.remove("show");
            }
            if (i ==sections.length-1){
            bgs[i-1].classList.remove("show");
                if(sections[i].getBoundingClientRect().bottom < 0){
                bgs[i].classList.remove("show");
                }
            }
        }
        else {
            bgs[i].classList.remove("show");
    }
    }

    
}

window.addEventListener("scroll", changeBg);



//* 반달곰 *//

//* 따오기 *//

////////////page02 따오기 울음소리
const soundBtn = document.getElementById("soundBtn");
const ibisVid = document.querySelector(".ibis_sound");

function toggleSound() {
    soundBtn.classList.toggle("unmute");
          if(soundBtn.classList.contains("unmute")){
              ibisVid.muted = false;
          }else{
              ibisVid.muted = true;
          }
    }

    ibisVid.addEventListener("click", toggleSound);