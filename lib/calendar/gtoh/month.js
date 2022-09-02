const axios = require("axios").default;

module.exports = async ({ year = 2014, month = 12 }) => {
    return new Promise((e, r) => {
        axios({
            url: `http://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
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