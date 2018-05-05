var users = require("../data/users.js");
module.exports = function(app){

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/users", function(req,res){
        
        res.json(users);
    });
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/users", function(req,res){
   //newFriend is the user that filled out the survey
  // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
  var bestMatch = {
    name: "",
    photo: "",
    usersDifference: 1000
};

// Here we take the result of the user's survey POST and parse it.
var userData 	= req.body;
var userName 	= userData.name;
var userPhoto 	= userData.photo;
var userScores 	= userData.scores;

// This variable will calculate the difference between the user's scores and the scores of
// each user in the database
var totalDifference = 0;

// Here we loop through all the user possibilities in the database. 
for  (var i=0; i< users.length; i++) {

    console.log(users[i].name);
    totalDifference = 0;

    // We then loop through all the scores of each user
    for (var j=0; j< users[i].scores[j]; j++){

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(users[i].scores[j]));

        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.usersDifference){

            // Reset the bestMatch to be the new mentor/mentee. 
            bestMatch.name = users[i].name;
            bestMatch.photo = users[i].photo;
            bestMatch.usersDifference = totalDifference;
        }
    }
}

// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
// the database will always return that the user is the user's best match).
users.push(userData);

// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
res.json(bestMatch);

});

}