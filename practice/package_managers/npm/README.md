# Practice of npm

* [Modern JavaScript for Dinosaurs](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)
  * 2023/07/02
  * `npm` is a package manager for JavaScript
    * `npm` is a command-line tool for interacting with a huge repository of Node.js projects
    * `npm` is installed with Node.js
  * `webpack` is a module bundler for JavaScript
    * `webpack` is installed with `npm`
    * `webpack` is configured with a file named `webpack.config.js`
    * すべてのrequirementステートメントを見つけて、それらを1つのファイルにまとめる(バンドルする)
    * dist/main.jsにバンドルされたファイルが出力される
    * `devtool: 'source-map'`を設定することで、バンドル前のファイルとバンドル後のファイルのマッピングがされ、デバッグがしやすくなる
      * ただし、バンドル後のファイルが大きくなる
      * また、プロダクション環境では、`devtool: 'source-map'`は設定するべきではない
  * `Babel` is a JavaScript compiler
    * 次世代のJavaScriptを現在のブラウザで動作するように変換する
      * q:トランスパイルとコンパイルの違いは?
      * a:コンパイルは機械語に変換することを指す。トランスパイルは同じレベルの言語に変換することを指す。
    * `Babel` is installed with `npm`
    * `babel-loader` is a `webpack` plugin that transpiles JavaScript files using `Babel`
  * `gulp`やnpmスクリプトは、ビルドプロセスを自動化するためのツール。タスクランナーと呼ばれる。
    * package.jsonに定義を追加することで、`npm run build`コマンドで、ビルドプロセスを実行できる。
      * 使わない場合は、`./node_modules/.bin/webpack`のように書かないといけない。
    * `webpack-dev-server`を使うことで、変更があるたびに自動でトランスパイルされるようにすることもできる。

* An Absolute Beginners Guide to Using npm
  * 2023/07/03
  * Skipped
* How to NPM
  * 2023/07/03
  
* NPM tutorial for Beginners
  * 動画のためスキップ
* NPM Crash Course
  * 動かないためスキップ