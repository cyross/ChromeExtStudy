import { googleAPIConfig } from "./config"

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log("get from background")
  console.log(msg)
  console.log(googleAPIConfig)

  let res = {
    conf: googleAPIConfig,
    data: {}
  }

  if (msg.text === 'fromYt2GcBg') {
    res.data = {
      time: [
        "11:00-15:00"
      ]
    }
    console.log("finish contents script")
  }
  else
  {
    console.log("break contents script")
  }

  sendResponse(JSON.stringify(res))
})
