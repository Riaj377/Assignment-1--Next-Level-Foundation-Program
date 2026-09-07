function filterActiveUsers(users) {
    // Write your code here
    if (!Array.isArray(users) || users.length === 0 || users.some(user => !("isActive" in user))) {
        return "Invalid"
    }
    return users.filter(user => user.isActive === true);

}
