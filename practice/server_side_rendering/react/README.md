# Practice of React

- [Visit Dedicated React Roadmap](https://roadmap.sh/react)

  - 2023/10/05
  - Skipped
  - 多すぎる

- [React Website](https://react.dev/)

  - 2023/10/05
  - Component と呼ばれるパーツから UI を構築するための JavaScript ライブラリ
    - Componet は JS の関数
      - if, map を使って、条件分岐やリスト表示ができる
    - data を受け取って画面表示を更新する、インタラクティブな Component を使える
  - React は components を使えるが、ルーティングやデータ取得は行わない。Next.js や Remix といった full-stack フレームワークを使うのが推奨
  - React は、Web,Native 両方作成できる

- [Official Getting Started](https://react.dev/learn/tutorial-tic-tac-toe)
- [日本語版](https://ja.react.dev/learn/tutorial-tic-tac-toe)
- 2023/10/05
- tic-tac-toe を作る(ox ゲーム)
- React の前提知識を必要としない
- React の基本的な機能を学べる
- [tic_tac_toe](/practice/server_side_rendering/react/tic_tac_toe) にて実施
  - //JSX 要素とは、何を表示したいかを記述するための JavaScript コードと HTML タグの組み合わせです。className="square" はこのボタンのプロパティ、または props と呼ばれるもので、CSS にボタンをどのようにスタイル付けするか伝えます。
  - // React Developer Tool
  - //複数の子コンポーネントからデータを収集したい、あるいは 2 つの子コンポーネント同士で通信したい、と思ったら、代わりに親コンポーネントに共有の state を宣言するようにしてください。親コンポーネントはその state を子コンポーネントに prop 経由で渡すことができます。これにより、子同士および親子間で、コンポーネントが同期されるようになります。
  - // 履歴機能の追加 default はトップレベルのコンポーネントを表す
  - const nextSquares = squares.slice(); // 配列のコピーを作成する
