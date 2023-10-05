# Practice of Testing your apps

- [A comprehensive dive into software testing.](https://www.softwaretestingmaterial.com/software-testing/)

  - 2023/07/15
  - Why do we need Software Testing?
    - Cost-effectiveness
      - 早期にバグを見つけることで、コストを抑えることができる
    - Customer Satisfaction
      - バグがあると、顧客満足度が下がる
    - Security
      - バグがあると、セキュリティが脆弱になる
    - Product Quality
      - 要求通りに作れているかを確認する
  - 手動テストと自動テスト

    - 手動
      - 要求通りにできているかを見るが、ユーザー目線でのテストのもしばしばする
      - コスト高い
      - typo とかステップを飛ばすとかするかも
    - 自動
      - テストケースを作成して、自動でテストを実行する
      - コスト低い
      - 書かれ方によってクオリティが変わる
      - CI/CD のキーコンポーネント

  - [テスト方法](https://www.softwaretestingmaterial.com/verification-and-validation/)
    - 静的テスト(Verification)
      - コードは実行しない
      - レビューとかして、ドキュメントやファイルの内容を確認する
      - validation と比べて、コストが低い
    - 動的テスト(Validation)
      - プロダクトを動かすことで、動作を確認する
      - white,gray,black box testing
  - テストレベル
    - ユニットテスト
      - 関数やクラスの単位でテストする
    - 結合テスト(I&T Testing,String Testing)
      - ユニットテストを組み合わせて、機能をテストする
      - モジュール間のデータのやり取りをテストする
    - システムテスト(End to End Testing)
      - black box テスト
      - すべてのシステムを結合して、機能をテストする
      - ユーザーの視点で、システム全体をテストする
      - インプットに対して、アウトプットが正しいかを確認する
    - 受け入れテスト(UAT)
      - 発注者がテストすることで、発注者の要求を満たしているかを確認する
  - テストの成果物
    - SDLC に則るなら、フェーズごとにいろいろある。
  - テストの原則
    - Testing shows the presence of defects
      - テストは、バグがあることを示す
    - Exhaustive testing is impossible
      - 網羅的なテストは不可能
    - Early testing saves time and money
      - 早期のテストは、コストを抑える
    - Defect clustering
      - バグは、特定の箇所に集中する
    - Pesticide paradox
      - テストケースを繰り返し実行すると、バグが見つからなくなる
    - Testing is context dependent
      - テストは、コンテキストに依存する
    - Absence of error – a fallacy
      - バグがないというのは、間違い

- [The different types of software tests](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing)

  - 似た内容なのでスキップ

- [Testing React apps with Jest](https://jestjs.io/docs/tutorial-react)

  - スキップ

- [【この 1 冊でよくわかる】 ソフトウェアテストの教科書 [増補改訂 第 2 版]](https://www.amazon.co.jp/%E3%80%90%E3%81%93%E3%81%AE1%E5%86%8A%E3%81%A7%E3%82%88%E3%81%8F%E3%82%8F%E3%81%8B%E3%82%8B%E3%80%91-%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82-%E7%AC%AC2%E7%89%88-%E5%B8%83%E6%96%BD/dp/481560875X)

  - 2023/10/05
  - ★ おすすめ
  - 各段階における成果物の一般的な定義がなされている
  - **品質に基づいてテスト観点を整理、テストケースを作成する**
  - テスト仕様書前後の計画書のフォーマット
  - アジャイルではテスト計画書を作らない
