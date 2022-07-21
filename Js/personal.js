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

//image auto change 

let flag=false

        var images1 = [], x = -1;
        images1[0] = "images/Forestcroppped.jpeg";
        images1[1] = "images/WithCyclecropped.jpeg";
        images1[2] = "images/College.jpeg";
        images1[3] = "images/BikeCropped.jpg";

        var images2 = [], y = -1;
        images2[0] = "images/BikeCropped.jpg";
        images2[1] = "images/Forestcroppped.jpeg";
        images2[2] = "images/WithCyclecropped.jpeg";
        images2[3] = "images/College.jpeg"

        var images3 = [], z = -1;
        images3[0] = "images/College.jpeg";
        images3[1] = "images/BikeCropped.jpg";
        images3[2] = "images/Forestcroppped.jpeg";
        images3[3] = "images/WithCyclecropped.jpeg"

        var images4 = [], w = -1;
        images4[0] = "images/WithCyclecropped.jpeg";
        images4[1] = "images/College.jpeg";
        images4[2] = "images/BikeCropped.jpg";
        images4[3] = "images/Forestcroppped.jpeg"

/*
    $(document).ready(function(){
        if(flag==false){
            setInterval(function(){
                $("#img1").fadeOut()
                $("#img2").fadeOut()
                $("#img3").fadeOut()
                console.log("Out")
                flag=true
        },2000);
        }
        


        setInterval(function() {
    
            $("#img1").fadeIn()
            $("#img2").fadeIn()
            $("#img3").fadeIn()
            console.log("In")
        }, 2000); 

        

    })*/

     setInterval(function(){


        w = (w === images1.length - 1) ? 0 : w + 1;
            
        document.getElementById("img1").src = images1[w];
           
        
        x = (x === images1.length - 1) ? 0 : x + 1;
             
        document.getElementById("img2").src = images2[x];         
              
        
        y = (y === images1.length - 1) ? 0 : y + 1;
                
        document.getElementById("img3").src = images3[y];
                
                       
        z = (z === images1.length - 1) ? 0 : z + 1;
               
        document.getElementById("img4").src = images4[z];
                

                
    },4000)



       /* function displayPreviousImage() {
            x = (x <= 0) ? images.length - 1 : x - 1;
            document.getElementById("img1").src = images[x];

        }

        function startTimer() {
            flag=true
            setInterval(displayNextImage,4000);
            
        }*/
        