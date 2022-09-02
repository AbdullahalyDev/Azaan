const axios = require("axios").default;

module.exports = async ({
    address = new String(),
    month = new String(),
    year = new String(),
    aunual = false,
    method = 5,
    shafaq = "general",
    tune = new String(),
    school = "Shafii",
    midnightMode = 0,
    timezonestring = "Etc/UTC",
    adjustment = 1,
    iso8601 = false
}) => {
    return new Promise((e, r) => {
        axios({
            url: `http://api.aladhan.com/v1/calendarByAddress?address=${address}}&month=${month}&year=${year}&aunual=${aunual}&method=${method}&shafaq=${shafaq}&tune=${tune}&school=${school}&midnightMode=${midnightMode}&adjustment=${adjustment}&iso8601=${iso8601}&timezonestring=${timezonestring}`
        })
            .then((res) => {
                if (res.status != 200) return r(new Error(res.data.data));
                e(res.data);
            })
            .catch((err) => {
                r(new Error(err))
            })
    });
}