chrome.runtime.onInstalled.addListener((details) => {
  const menuItemId = 'YoutubeToGoogleCalendar'

  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      contexts: ['all'],
      id: menuItemId,
      title: 'Youtubeの通知をGoogleCalendarに登録',
      documentUrlPatterns: [
        "https://www.youtube.com/*"
      ]
    })
  })

  // メニューアイテムがクリックされたら Contents Script にメッセージを送って処理を行わせる
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if ( info.menuItemId !== menuItemId) {
      return
    }

    const tabId = tab.id

    chrome.tabs.sendMessage(tabId, { text: 'fromYt2GcBg' }, (json) => {
      const res = JSON.parse(json)

      console.log("get from contents script")

      chrome.identity.getAuthToken({interactive: true}, (token) => {
        console.log("got token")
        console.log(token)

        console.log(res)

        let init = {
          method: 'GET',
          async: true,
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          'contentType': 'json'
        }

        console.log(init)

        const url = 'https://www.googleapis.com/calendar/v3/users/me/calendarList?key=' + res.conf.apiKey

        console.log(url)

        fetch(url, init)
        .then((response) => {
          console.log("show response")
          console.log(response)
          return response.body.getReader()
        })
        .then((reader) => reader.read())
        .then(({done, value}) => {
          const decoder = new TextDecoder()
          console.log(decoder.decode(value))
        })
      })
    })
  })
})
