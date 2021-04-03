// Addess object

let Address = {
    street : 'Ekwulobia street',
    city : 'Awka',
    zipCode: 897

};
function showAddress(Address) {
    for (let key in Address)
        console.log(key, Address[key]);
    }

showAddress(Address);

// constructor function
function Address1 (street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}


//factory function
function address2 (street, city, zipcode){
    return{
      street,
      city,
      zipcode
    };
}

// blogPost object
let blogPost = {
    title : 'dsd',
    body : 'jsssssssssssssxxxxxxxxxx deiklweddwe',
    author : 'jsjfnwu',
    views : 8388,
    comments : [
        {author: 'dfgrf',
     body: 'kefefefe'},
     {author: 'dfgrf',
     body: 'kefefefe'}
    ],
    isLive : true
}
console.log(blogPost)

// post object
function Post (title, body, author, isLive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;

}
Post()

// 

