const axios = require("axios");
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization:
    "Bearer BQCUiMikU7ypHmpZj_rGEBkULAHDRBOqkbulP2wJ3Kis2EkZRup4Sde-iHifWo_3cK-vQvmPVZHacZvwirXcChxeU80kmXb-lBHSd-z-F5tEYUGgFt6XMogaIqHyV04VuKBzGwWWgvBYYV9dOktrUrlrlNaG2ID435qr3s63P3kLVE_IQLLUKwkF2eo6Yv7F4kcGeovD3QLKADHdTZVkH-kGxjN6XjwtxEV4eMot6Y9WzppncphjKy5u0DfMhefXYj1GnA7HeiXUYlVOYT6Ic2ahZni1J87xcID5Vjs-1k3K4ZlgFAvi01ke0CfQQc1WrvkR7Ez49gfzEw",
};
axios
  .put(
    "https://api.spotify.com/v1/me/player/pause",
    {
      device_id:
        "1fe4173b14b36a8b07a78f13044683f52b8f6013",
    },
    { headers }
  )
  .then((res) => {
    console.log(res);
  });
