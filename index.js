
$(document).ready(function()
{
    $("#1").click(function(){
        var new_name = prompt("Update user  name");
        $("#rose1").text(new_name);
        var blog_name = prompt("Update your blog name");
        $("#user1nm").text(blog_name);
        var content =prompt("write your blog content over here")
        $("#blog1cnt").text(content);
        var img=prompt("enter new imag url");
        $("#img1").attr("src", img );


    });

    
        $("#adblg").click(function(){
             
            var new_name = prompt("Update user  name");
           
            var blog_name = prompt("Update your blog name");
           
            var content =prompt("write your blog content over here")
           
            var img=prompt("enter new imag url");
           

//var b=Math.random();
            var r1=Math.round(Math.random()*100);
            var a = $("#copy").clone()
           
            a.attr("id","I"+r1);
            
            
           a.appendTo("#kebad")
           $("#I"+r1+" #c1").text(new_name);
           $("#I"+r1+" #c2").text(blog_name);
           $("#I"+r1+" #c3").text(content);
           $("#I"+r1+" #c4").attr("src", img );

         //  b=Math.random();

        //    var b=Math.random();
       
        //     var a = $("#copy").clone()
            
        //     a.attr("id","r1"+b.this);
            
            
        //    a.appendTo("#kebad")
        //    $("#r1"+b.this+" #c1").text(new_name);
        //    $("#r1"+b.this+" #c2").text(blog_name);
        //    $("#r1"+b.this+" #c3").text(content);
        //    $("#r1"+b.this+" #c4").attr("src", img );

        //    b=Math.random();
        });
        

        
            $("#90").click(function(){
            $("#formrow").show();
           

        });
        

        $("#789").click(function (){


        

        var username = $("#validationServer01").val();
           
        var blogname  = $("#exampleInputtitle").val();
       
        var blogcontent = $("#exampleInputcontent").val();
       
        var imag =  $("#img").val();

        var r1=Math.round(Math.random()*1000);
        var a = $("#copy").clone()
       
        a.attr("id","I"+r1);
        
        
       a.appendTo("#kebad")
       $("#I"+r1+" #c1").text(username);
       $("#I"+r1+" #c2").text(blogname);
       $("#I"+r1+" #c3").text(blogcontent);
       $("#I"+r1+" #c4").css("background-image","url("+imag +")");


      $("#validationServer01").val("");
      $("#exampleInputtitle").val("");
      $("#exampleInputcontent").val("");
      $("#img").val("");


      $("#formrow").css("display","none");
    });
    

});
