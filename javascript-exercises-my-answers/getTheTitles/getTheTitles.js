const getTheTitles = function(books) {
    titles = []
    for (key in books) {
        titles[key] = books[key]["title"]
    }  
    return titles
}

module.exports = getTheTitles;
