# Practice of HTML-CSS

- [1 冊ですべて身につく HTML & CSS と Web デザイン入門講座](https://www.amazon.co.jp/dp/429710882X/ref=cm_sw_r_tw_dp_5QZJQZQZJZJZJZJZJZJZ?_encoding=UTF8&psc=1)

  - 2023/11/25
  - chapter 2
  - 2-3

    - head タグは表示しない
    - `<meta name="hoge" content="fuga">`で、hoge という名前で fuga という値を設定できる
    - ダブルクオートで、属性値を囲む
    - <p>タグは段落を表す
    - <ul>と<li>でUnordered List(順序なし)リストを表す
    - <table> <tr> <th> <td> で表を表す

  - 2-11 フォームを作ろう

    - <form>タグでフォームを作る
      - action属性で送信先を指定する
      - method属性で送信方法を指定する。GET と POST がある
      - name 属性でフォームの名前を指定する
    - <input>タグで入力欄を作る
    - <input type="submit">で送信ボタンを作る
    - <input type="radio">でラジオボタンを作る
    - <input type="checkbox">でチェックボックスを作る
    - <input type="text">でテキスト入力欄を作る
    - <input type="password">でパスワード入力欄を作る
    - <input type="file">でファイル選択欄を作る
    - <input type="hidden">で隠しデータを作る
    - <input type="reset">でリセットボタンを作る
    - <input type="button">でボタンを作る
    - <input type="image">で画像ボタンを作る
    - <input type="color">で色選択欄を作る
    - <input type="date">で日付選択欄を作る
    - <input type="datetime-local">で日時選択欄を作る
    - <input type="email">でメールアドレス入力欄を作る
    - <input type="month">で月選択欄を作る
    - <input type="number">で数値入力欄を作る
    - <input type="range">で数値範囲選択欄を作る
    - <input type="search">で検索入力欄を作る
    - <input type="tel">で電話番号入力欄を作る
    - <input type="time">で時刻選択欄を作る
    - <input type="url">で URL 入力欄を作る
    - <input type="week">で週選択欄を作る
    - <textarea>で複数行のテキスト入力欄を作る
    - <select>と<option>で選択リストを作る

    - 2-13 ブロック要素でグループ分け
      - <header> タグ、headタグとは別物。
      - <nav> タグ。メインのナビゲーションメニューを表す。headerタグの中に入ることが多い。
      - <main> タグ。メインのコンテンツを表す。
      - <div> タグ、意味のないブロック要素。グループ分けに使う。

  - chapter 3
  - 3-2 CSS を適用させる方法
    - <head>内の<link>タグを使う。rel属性にstylesheet、href属性にファイル名を指定する。
  - 3-10 余白
    - padding は、要素の内側の余白を指定する。padding: 上 右 下 左;
    - margin は、要素の外側の余白を指定する。margin: 上 右 下 左; で指定する。
