class Users {
    constructor() {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        //return user that was remove
        var user = this.getUser(id);
         if(user){
            this.users = this.users.filter((user) => user.id !== id);
         }
        // this.users.splice(user.indexOf(), 1);
        
        return user;

    }
    getUser(id){
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};

// class Person {
//     constructor (){

//     }
// }

// var me = new Person();