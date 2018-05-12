const getAllMentors = require('./jsFunctionRoute');


it('function returns console log', ()=> {

    expect(getAllMentors("user")).toBe(3);


})