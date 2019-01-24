 startButton = document.querySelector(".button.start");

if(startButton){
  
  startButton.click();
   wordArray = [];
   
   seen = document.querySelector(".actions").children[0];
   newButton = document.querySelector(".actions").children[1];
   
  setTimeout(function(){

     setInterval(function(){
      boolCheck = false;
      searchedWord = document.querySelector(".word-animation-wrapper > div > span").textContent;

      

  if(wordArray.length){
      wordArray.forEach(function(element){

          if(searchedWord==element){
              boolCheck=true;
          }
      });

      if(boolCheck){
          seen.click();

      }else{
          wordArray.push(searchedWord);
          newButton.click();

      }}else{

        wordArray.push(searchedWord);
        newButton.click();
       
      }
      

     

    },50);
      
},1000);

}else {
  
  console.log("No Startbutton found. Plox check if you are on the right page");
}
