const axios = require("axios");
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization:
    "Bearer BQCUiMikU7ypHmpZj_rGEBkULAHDRBOqkbulP2wJ3Kis2EkZRup4Sde-iHifWo_3cK-vQvmPVZHacZvwirXcChxeU80kmXb-lBHSd-z-F5tEYUGgFt6XMogaIqHyV04VuKBzGwWWgvBYYV9dOktrUrlrlNaG2ID435qr3s63P3kLVE_IQLLUKwkF2eo6Yv7F4kcGeovD3QLKADHdTZVkH-kGxjN6XjwtxEV4eMot6Y9WzppncphjKy5u0DfMhefXYj1GnA7HeiXUYlVOYT6Ic2ahZni1J87xcID5Vjs-1k3K4ZlgFAvi01ke0CfQQc1WrvkR7Ez49gfzEw",
};
axios.get(
  "https://api.spotify.com/v1/me/player/devices",
  { headers }
);
https://developer.spotify.com/documentation/general/guides/authorization/code-flow/