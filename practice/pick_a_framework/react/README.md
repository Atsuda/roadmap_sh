# React

- [【React 入門】完全初心者 OK！１から簡単な Todo アプリを作って React の１歩を踏み出してみよう ~React チュートリアル~](https://www.youtube.com/watch?v=nRCNL9T3J98)
  - 2023/09/20
  - メリット
    - js だけで
    - リレーの形でデータを渡せる
    - hutuuha
    - html と js の連携が面倒
  - create app
    - `npx create-react-app my-app`
      - public -> index.html
        - div id="root"
      - src -> index.js
      - package.json ; パッケージがいろいろ入っている
        - scripts
          - start
            - `npm start`で起動
          - build
          - test
          - eject
      - App.js が、くるくる回ってるやつ
        - index.js で、App.js を呼び出してい、App というコンポーネントをレンダリング
    - `rafce` で、コンポーネントを作成
    - hooks で、コンポーネント間で変数を共有
      - 状態を管理
      - `useState` で、変数を作成
        - `const [変数名, 変数を変更する関数] = useState(初期値)`
        - 変数名が変わったときにレンダリングしてくれる
    - コンポーネントに変数を渡すには、`<コンポーネント名 変数名={変数名} />`
    - コンポーネントから変数を受け取るには、`props.変数名`
      - {} は jsx 記法
    - 変数のバケツリレー
    - タスクを追加に関数
      - onclick を triger
      - useRef で input した値を取得
    - ... はスプレッド構文。配列を展開してくれる。オブジェクトに対する追加のモダンな書き方
    - find 関数、filter 関数 配列から条件に合うものを取り出す
