
function checkUserValid(goodUsers){
    return function allUserValid(usersend){
        return usersend.every(function (usersend){
            return goodUsers.some(function(goodUser){
                return goodUser.id === usersend.id
            })
        })
      
    }
}

module.exports = checkUserValid;