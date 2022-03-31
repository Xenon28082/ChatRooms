const users = [];

// Joining
function userJoin(id, username, room) {
    const user = { id, username, room };

    users.push(user);

    return user;
}

// Get current
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User left
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get al users from room
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};