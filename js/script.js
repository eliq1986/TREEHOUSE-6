const videoPlayer = document.querySelector(".mejs__player"); //Grabs video element
const spanParagraphs = document.querySelectorAll("span"); //Grabs all span elements aka collection of span tags



 videoPlayer.addEventListener("timeupdate", function() { //listens for any change in video time. It will run the function below.
   for (let i = 0; i < spanParagraphs.length; i++) {
   if (parseFloat(videoPlayer.currentTime.toFixed(2)) >= parseFloat(spanParagraphs[i].getAttribute("data-start")) 
          && parseFloat(videoPlayer.currentTime.toFixed(2)) <= parseFloat(spanParagraphs[i].getAttribute("data-end")))
                {
          spanParagraphs[i].style.color = "#b76e79";
   }
      else {
           spanParagraphs[i].style.color = "black";
   }
   }
 });
