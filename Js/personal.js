$(document).ready(function(){

    //change this after workdone
    $("#submit").click(function(){
        alert("Submission is under woking \n  It will be ready soon\nuse another contacting options")
    })

    // header icon mouse enter and leave color change
    $("#home-icon").click(function(){
        document.getElementById("home-icon").style.backgroundColor="aliceblue"
        document.getElementById("services-icon").style.backgroundColor="crimson"
        document.getElementById("aboutMe-icon").style.backgroundColor="crimson"
        document.getElementById("contactMe-icon").style.backgroundColor="crimson"
    })



    $("#services-icon").click(function(){
        document.getElementById("services-icon").style.backgroundColor="aliceblue"
        document.getElementById("home-icon").style.backgroundColor="crimson"
        document.getElementById("aboutMe-icon").style.backgroundColor="crimson"
        document.getElementById("contactMe-icon").style.backgroundColor="crimson"
    })
    


    $("#aboutMe-icon").click(function(){
        document.getElementById("aboutMe-icon").style.backgroundColor="aliceblue"
        
        document.getElementById("services-icon").style.backgroundColor="crimson"
        document.getElementById("home-icon").style.backgroundColor="crimson"
        document.getElementById("contactMe-icon").style.backgroundColor="crimson"
    })

    


    
    $("#contactMe-icon").click(function(){
        document.getElementById("contactMe-icon").style.backgroundColor="aliceblue"
        document.getElementById("services-icon").style.backgroundColor="crimson"
        document.getElementById("aboutMe-icon").style.backgroundColor="crimson"
        document.getElementById("home-icon").style.backgroundColor="crimson"
    })

   
})

//image auto change 

let flag=false

        var images1 = [], x = 0;
        images1[0] = "images/Forestcroppped.jpeg";
        images1[1] = "images/WithCycle.jpeg";
        images1[2] = "images/College.jpeg";
        images1[3] = "images/SmilePortrate.jpeg";

        var images2 = [], y = 0;
        images2[0] = "images/SmilePortrate.jpeg";
        images2[1] = "images/Forestcroppped.jpeg";
        images2[2] = "images/WithCycle.jpeg";
        images2[3] = "images/College.jpeg"

        var images3 = [], z = 0;
        images3[0] = "images/College.jpeg";
        images3[1] = "images/SmilePortrate.jpeg";
        images3[2] = "images/Forestcroppped.jpeg";
        images3[3] = "images/WithCycle.jpeg"

        var images4 = [], w = 0;
        images4[0] = "images/WithCycle.jpeg";
        images4[1] = "images/College.jpeg";
        images4[2] = "images/SmilePortrate.jpeg";
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
                

                
    },2000)



       /* function displayPreviousImage() {
            x = (x <= 0) ? images.length - 1 : x - 1;
            document.getElementById("img1").src = images[x];

        }

        function startTimer() {
            flag=true
            setInterval(displayNextImage,4000);
            
        }*/
        