class PrayTimes {
    static month = {
        gregorian: {
            byLL: require("./praytimes/month/gregorian/byLL"),
            byAddress: require("./praytimes/month/gregorian/byAdress"),
            byCity: require("./praytimes/month/gregorian/byCity")
        },
        hijri: {
            byLL: require("./praytimes/month/hijri/byLL"),
            byAddress: require("./praytimes/month/hijri/byAdress"),
            byCity: require("./praytimes/month/hijri/byCity")
        }
    }
    static day = {
        byLL: require("./praytimes/day/byLL"),
        byAddress: require("./praytimes/day/byAddress"),
        byCity: require("./praytimes/day/byCity")
    }
}

module.exports = PrayTimes;
