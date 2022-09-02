const axios = require("axios").default;

module.exports = async ({ zone = "Etc/UTC" }) => {
    return new Promise((e, r) => {
        axios({
            url: `http://api.aladhan.com/v1/currentTime?zone=${zone}`
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