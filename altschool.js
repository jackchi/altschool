Board = new Meteor.Collection("board");

if (Meteor.isClient) {

  Template.panel.events({
    'blur input[name=x]' : function(event){
      console.log("X");
      var updatedX = event.target.value;
      Board.update({name: "size", x: updatedX}) 
    }
  });

  Template.board.events({
    'click .square' : function() {
      console.log("hi");

    }
  });

  Template.panel.size = function() {
    return Board.findOne({name : "size"});
  }

  Template.square.randomColor = function() {
    return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
  (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  }



  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Board.remove({});
    Board.insert({name: "size", x: 10, y: 15});
    Board.insert({name: "grid", x: 0, y: 0, color: "#FFFFFF"})
    Board.insert({name: "grid", x: 1  , y: 0, color: "#FFFFFF"})
  });
}
