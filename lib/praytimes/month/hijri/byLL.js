const axios = require("axios").default;

module.exports = async ({
    ll = [0, 0],
    month = new String(),
    year = new String(),
    aunual = false,
    method = 2,
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
            url: `http://api.aladhan.com/v1/hijriCalendar?latitude=${ll[0]}&longitude=${ll[1]}&month=${month}&year=${year}&aunual=${aunual}&method=${method}&shafaq=${shafaq}&tune=${tune}&school=${school}&midnightMode=${midnightMode}&adjustment=${adjustment}&iso8601=${iso8601}&timezonestring=${timezonestring}`
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