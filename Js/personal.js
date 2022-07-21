$(document).ready(function(){

    // header icon mouse enter and leave color change
    $("#home-icon").mouseenter(function(){
        document.getElementById("home-icon").style.backgroundColor="red"
    })
    $("#home-icon").mouseleave(function(){
        document.getElementById("home-icon").style.backgroundColor="rgb(64, 238, 212)"
    })


    $("#services-icon").mouseenter(function(){
        document.getElementById("services-icon").style.backgroundColor="red"
    })
    $("#services-icon").mouseleave(function(){
        document.getElementById("services-icon").style.backgroundColor="rgb(64, 238, 212)"
    })


    $("#aboutMe-icon").mouseenter(function(){
        document.getElementById("aboutMe-icon").style.backgroundColor="red"
    })

    $("#aboutMe-icon").mouseleave(function(){
        document.getElementById("aboutMe-icon").style.backgroundColor="rgb(64, 238, 212)"
    })


    $("#contactMe-icon").mouseenter(function(){
        document.getElementById("contactMe-icon").style.backgroundColor="red"
    })
    $("#contactMe-icon").mouseleave(function(){
        document.getElementById("contactMe-icon").style.backgroundColor="rgb(64, 238, 212)"
    })
})