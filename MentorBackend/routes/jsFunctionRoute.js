module.exports = {
//js sandbox for using js with routes. 
    getAllMentors : getAllMentors = userId => {
                        console.log("user Id")
                        // axios.get('api/mentors', {
                        //     params: {
                        //         id: userId
                        //     }
                        // }).then( data => console.log(data));
                    },  

    getAllMentees : getAllMentees = userId => {
                        console.log("get Mentees")
                        // axios.get('/api/mentees/', {
                        //     params: {
                        //         id: userId
                        //     }
                        // }).then(data => {
                        //     //data is going to be an object that has returned
                        //     // everything form /api/mentees/:id route
                        // })
                    },

    getUser: getUser = userId => {
                console.log("getUser")
                // axios.get('/api/all', {
                //     params: {
                //         id: userId
                //     }
                // }).then( data => {
                //     // now you have an object of the user 
                // })
            },

    getMatched : getMatched = userId => {
                    console.log("getMatched")
                    // axios.get('/api/matched/', {
                    //     params: {
                    //         id: userId
                    //     }
                    // }).then( data => {
                    //     // now you have an object of user's matches
                    // })
                },
    postNewUser: postNewUser = () => {
        axios.post();
    },

    postNewMatch: postNewMatch = () => {
        axios.post();
    },

    updateUser: updateUser = userId => {
        axios.update('/api/update', {
            params: {
                id: userId
            }
        })
    }
};
