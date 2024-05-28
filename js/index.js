var quote=[
    {
      name:"“A room without books is like a body without a soul.”",
      author:"― Marcus Tullius Cicero"
    },
    {
        name:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch"
      },
      {
        name:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author:"― Maya Angelou"
      }

]



function display(){
    var quotes=Math.floor (Math.random() * quote.length);
    console.log(quotes);
    document.getElementById("name").innerHTML=quote[quotes].name;
    document.getElementById("author").innerHTML=quote[quotes].author;
}