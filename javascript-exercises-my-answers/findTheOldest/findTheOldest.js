let findTheOldest = function(people) {
    let oldest_age = -1;
    let oldest_person = "";
    for (key in people) {
        if ("yearOfDeath" in people[key]) {
            if (people[key]["yearOfDeath"] - people[key]["yearOfBirth"] > oldest_age) {
                oldest_age = people[key]["yearOfDeath"] - people[key]["yearOfBirth"];
                oldest_person = people[key];
            }
        } else {
            this_year = new Date().getFullYear()
            if (this_year - people[key]["yearOfBirth"] > oldest_age) {
                oldest_age = this_year - people[key]["yearOfBirth"];
                oldest_person = people[key];
            }
        }
      
    }
    return oldest_person;
}

module.exports = findTheOldest
