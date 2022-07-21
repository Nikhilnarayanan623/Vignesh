$(document).ready(function(){
    // header icon mouse enter and leave color change
    $("#home-icon").mouseenter(function(){
        document.getElementById("home-icon").style.backgroundColor="red"
    })
    $("#home-icon").mouseleave(function(){
        document.getElementById("home-icon").style.backgroundColor="rgb(60, 180, 180)"
    })

    $("#services-icon").mouseenter(function(){
        document.getElementById("services-icon").style.backgroundColor="red"
    })
    $("#services-icon").mouseleave(function(){
        document.getElementById("services-icon").style.backgroundColor="rgb(60, 180, 180)"
    })

    $("#aboutMe-icon").mouseenter(function(){
        document.getElementById("aboutMe-icon").style.backgroundColor="red"
    })
    $("#aboutMe-icon").mouseleave(function(){
        document.getElementById("aboutMe-icon").style.backgroundColor="rgb(60, 180, 180)"
    })

    $("#contactMe-icon").mouseenter(function(){
        document.getElementById("contactMe-icon").style.backgroundColor="red"
    })
    $("#contactMe-icon").mouseleave(function(){
        document.getElementById("contactMe-icon").style.backgroundColor="rgb(60, 180, 180)"
    })
})