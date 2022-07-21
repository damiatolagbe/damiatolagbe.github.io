var quoteList = ["Forests cover 30% of the earth's land","It is estimated that within 100 years, there will be no rainforests","Agriculture is the leading cause of deforestation.","One and a half acres of forest are cut down every second."," If the current rate of deforestation continues, it will take less than 100 years to destroy all the rainforests on the earth.","The rate of deforestation equals the loss of 36 football fields every minute.","According to the Rainforest Action Network, the United States has less than 5% of the world’s population yet consumes more than 30% of the world’s paper.","The overexploitation of forests is making it extremely difficult to replant a new ecology.","20% of the world’s oxygen is produced in the Amazon forest.","Up to 28,000 species are expected to become extinct by the next quarter of the century due to deforestation.","Deforestation has considerably stopped in places like Europe, the Pacific, North America and some parts of Asia due to a lack of agricultural land.","Half of the world’s tropical forests have already been cleared.","4500 acres of forests are cleared every hour by forest fires, bulldozers, machetes etc.","1.6 billion people across the globe depend on forest products for their livelihoods, thereby adding more to deforestation.","Almost half of world’s timber and up to 70% of paper is consumed by Europe, the United States and Japan alone.","Trees are essential constituents of the ecosystem that absorb carbon."];

var myBtn = document.getElementById('myBtn');
var quote = document.getElementById('fact');
var count = 0;
myBtn.addEventListener("click", displayQuote);

function displayQuote(){
  quote.innerHTML = quoteList[count];
  if (count >= quoteList.length) {
    count = 0;
  } else {
    count++;
  }
}
