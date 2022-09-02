const geo = require("geoip-lite")
const eip = require("ext-ip")()

module.exports = async ({ ip = null }) => {
    return new Promise(async (e, r) => {
        try {
            const _ip = ip ?? await eip.get();
            const lk = geo.lookup(_ip);
            e(lk.ll);
        }
        catch (err) {
            r(new Error(err))
        }
    });
}