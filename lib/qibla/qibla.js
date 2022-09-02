const axios = require("axios").default;

module.exports = async ({ ll = [0, 0] }) => {
    return new Promise((e, r) => {
        axios({
            url: `http://api.aladhan.com/v1/qibla/${ll[0]}/${ll[1]}`
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