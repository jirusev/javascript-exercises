const findTheOldest = function (people) {
    let currentYear = new Date().getFullYear();

    let data = people.reduce((oldest, person) => {
       
        let personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        
        return personAge > oldestAge ? person : oldest;
    });

    return data;
};


// Do not edit below this line
module.exports = findTheOldest;
