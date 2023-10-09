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

  - [Thinking in React](https://react.dev/docs/thinking-in-react)
  - [日本語版](https://ja.react.dev/docs/thinking-in-react)
    - 2023/10/09
    - React の考え方を学ぶ
    - [thinking_in_react](/practice/server_side_rendering/react/thinking_in_react)
    - React の UI 構築ステップ
    1.  コンポーネントに分割
    2.  各コンポーネントの視覚的状態を記述
    3.  複数のコンポーネントを接続し、それらの間をデータが流れるようにする
    - 検索可能な商品テーブル作成チュートリアル
      1. コンポーネントに分割
      - 単一責任の原則に従い、1 津のコンポーネントは理想的には 1 津の機能を持つ
      - サブコンポーネント
      2. 静的なバージョンを作成
      - まずは、データモデルをレンダーする静的なバージョン作成する
        - ほかのコンポーネントを再利用しつつ、props 経由でそれらにデータを渡す
        - state はインタラクティブ、時間とともに変化するデータのためにあるものなので使わない
        - データがトップレベルのコンポネントから下の方向に流れていく構造もある
      3. UI の状態を最小限かつ完全に表現する方法を見つける
      - state とは、アプリが記憶する必要のある、変化するデータの最小限のセット
      - DRY の原則
        - 必要なものはその場で計算
          - 時間が経っても変わらないものですか？ そうであれば、state ではありません。
          - 親から props 経由で渡されるものですか？ そうであれば、state ではありません。
          - コンポーネント内にある既存の state や props に基づいて計算可能なデータですか？ そうであれば、それは絶対に state ではありません！
      4. state を保持すべき場所を特定する 1.その state に基づいて何かをレンダーするすべてのコンポーネントを特定する。 2.階層内でそれらすべての上に位置する、最も近い共通の親コンポーネントを見つける。
         3.state がどこにあるべきかを決定する
         vscode の outline 機能を使うと、コンポーネントの階層がわかる
      5. 逆方向のデータフローを追加する
      - form から FilterableProductTable にデータを渡す必要がある
      - 更新用の関数を、FilterableProductTable から SearchForm に渡す
