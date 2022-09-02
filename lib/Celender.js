class Calendar {
    static gtoh = {
        day: require("./calendar/gtoh/day"),
        month: require("./calendar/gtoh/month")
    }
    static htog = {
        day: require("./calendar/htog/day"),
        month: require("./calendar/htog/month")
    }
}

module.exports = Calendar