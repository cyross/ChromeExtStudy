# youtube_to_google_calendar

## 概要

Google ChromeからGoogle Cloud APIを呼び出す拡張を勉強のために作ってみた。

「Youtube」と書かれているが、実際はYoutubeと殆ど関わらない。
ただ単に、Chromeでブラウザで、拡張を起動できるのはYoutubeを開いているときだけに絞る実験をしたかったため。

また、Youtubeの通知をGoogleCalenderに登録しているかのように見せかけて、リクエストが飛んだり、望ましい結果が返ってくるのを確認するだけのものであり、他の何者でもない。

単なる技術研鑽用のプロジェクト。

## Install

	$ npm install

## Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. 

## Docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
