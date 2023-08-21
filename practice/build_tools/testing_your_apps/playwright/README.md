# Practice of Playwright

* [Playwright Website](https://playwright.dev/)
  * 2023/07/15
  * コンテンツないのでスキップ

* [Playwright Tutorial: Learn Basics and Setup](https://www.browserstack.com/guide/playwright-tutorial)
  * 2023/07/15
  * Playwright はオープンソースのテスト自動化ライブラリ
  * Seleniumより安定で書きやすいらしい
  * Playwrightは、Chromium、Firefox、WebKitの3つのブラウザをサポートしている
    * IE11はサポートしていない
  * VScode でmulti browser のテストを走らせるには、[こちら](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright#run-multiple-tests) の設定をする必要がある

* [Playwright, a Time-Saving End-to-End Testing Framework](https://thenewstack.io/playwright-a-time-saving-end-to-end-testing-framework/)
  * 2023/07/15
  * async/awaitを使っている
  * codegenを使うと、ブラウザでの操作をコードに変換できる
    * デバッグモードを使うと、ステップごとにスクリプトを実行してくれて、セレクターをハイライトしてくれる。[VSCodeで実行すると見やすい](https://playwright.dev/docs/debug)。
  