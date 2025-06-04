// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = function (userObj) {
    if ("ADMIN" === userObj.userRole) {
        return true
    } else {
        return false
    }
}

const getEmail = function (userObj) {
    let firstInitial = userObj.firstName[0].toLowerCase()
    let lastName = userObj.lastName.toLowerCase()
    let email = firstInitial + lastName + '.prsvr@gmail.com'

    return email
}

const getPlaylistLength = function (playlist) {
    if (playlist.songs) {
        return playlist.songs.length
    } else {
        return 0
    }
}

const getHardestHomework = function (homeworks) {
    if (homeworks.length === 0) {
        return ''
    }
    let lowestScore = homeworks[0].averageScore
    let hardestName = homeworks[0].name
    for (let i = 1; i < homeworks.length; i++) {
        if (homeworks[i].averageScore < lowestScore) {
            lowestScore = homeworks[i].averageScore
            hardestName = homeworks[i].name
        }
    }
    return hardestName
}

const createPhonebook = function (names, numbers) {
    let phonebook = {}
    for (let i = 0; i < names.length; i++) {
        phonebook[names[i]] = numbers[i]
    }
    return phonebook
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};