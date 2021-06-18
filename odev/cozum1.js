// görev 1

var metin = document.getElementsByTagName("h2");

$(document).ready(function(){
    $("#gorev1 > button").click(function(){
        for (var i = 0; i < 3; i++) {
            document.getElementById("gorev1").innerHTML += "<li>" + metin[i].innerHTML 
        }
    });
  });


// görev 2
var sayac = 0;
var h2 = document.querySelectorAll("article > div > h2");
for( var i = 0; i < h2.length; i++){
    ++sayac;
} 

$(document).ready(function(){
    $("#gorev2 > button").click(function(){
        $('#gorev2 > input[type=text]').val(sayac);
    });
  });

// görev 3
$(document).ready(function(){
    var h1 = $("article > h1").text();
    $("#gorev3 > button").click(function(){
        $('#gorev3 > input[type=text]').val(h1);
    });
  });

// görev 4
$(document).ready(function(){
    $("#gorev4 > button").click(function(){
        $("article > div > p").each(function() {
            var metin = $(this).text();
            $(this).prev().append(" (" + metin.length + " karakter)");
        });
    });
    
  });


// görev 5
$(document).ready(function(){
    $("#gorev5 > button").click(function(){
        var h2 = document.querySelectorAll("article > div > h2");
        for( var i = 0; i < h2.length; i++){
            if(i % 2 == 0){
                h2[i].style.color = "orange";
            }
            else{
                h2[i].style.color = "blue";
            }
        } 
        $("h1").css("color","red");
    });
    
  });

// görev 6
$(document).ready(function(){
    $("#gorev6 > button").click(function(){
        
        var paragraflar = Array.from($("p:lt(15)"));
        var basliklar = Array.from($("h2:lt(15)"));
        
        paragraflar.forEach(paragraf => {
            $("p:lt(1)").fadeOut();
        });

        basliklar.forEach(baslik => {
            $("h2:lt(1)").fadeOut();
        });

    });
    
  });

// görev 7
$(document).ready(function(){
    $("#gorev7 > button").click(function(){
        $("article").find("h2:contains('can')").each(function(){
            $("#gorev7>ul").append("<li>" + $(this).clone().text() + "</li>");
        });
    });
    
  });

// görev 8
$(document).ready(function(){
    $("#gorev8 > button").click(function(){
       
        $.ajax({
            url: "lorem.html",
            type: "get",
            success: function(sonuc) {

                $("article > h1").next().append("<h2>Lorem</h2> <p>"+sonuc+"</p>");

                
            }
        });

    });
    
  });

// görev 9

    $("article > h1,h2").hover(function() {
        $('#gorev9 > input[type=text]').val($(this).hover().text());
    });

   
    


// görev 10
$(document).ready(function(){
    $("#gorev10 > button").click(function(){
        var resim = $("<div>");
        $("footer").append(resim);
        resim.addClass("dv");
        $('.dv').prepend('<img src="check.png" width="100px" height="100px" style="margin-top:-1450px; position:fixed; right:0;"/>');

    });
    
  });