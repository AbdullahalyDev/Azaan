const axios = require("axios").default;

module.exports = async ({ year = 1436, month = 2, day = 14 }) => {
    return new Promise((e, r) => {
        axios({
            url: `http://api.aladhan.com/v1/hToG?date=${day}-${month}-${year}`
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