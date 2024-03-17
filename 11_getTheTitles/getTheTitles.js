const getTheTitles = function(obj_list) {
    let book_list = []

    for (let obj of obj_list){
        book_list.push(obj["title"])
    }

    return book_list;
};

const getTheTitlesZzz = function (array) { // omg what a code
    return array.map((book) => book.title);
  };

// Do not edit below this line
module.exports = getTheTitles;
