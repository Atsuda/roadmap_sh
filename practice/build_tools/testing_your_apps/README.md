# Practice of Testing your apps

* [A comprehensive dive into software testing.](https://www.softwaretestingmaterial.com/software-testing/)
  * 2023/07/15
  * Why do we need Software Testing?
    * Cost-effectiveness
      * 早期にバグを見つけることで、コストを抑えることができる
    * Customer Satisfaction
      * バグがあると、顧客満足度が下がる
    * Security
      * バグがあると、セキュリティが脆弱になる
    * Product Quality
      * 要求通りに作れているかを確認する
  * 手動テストと自動テスト
    * 手動
      * 要求通りにできているかを見るが、ユーザー目線でのテストのもしばしばする
      * コスト高い
      * typoとかステップを飛ばすとかするかも
    * 自動
      * テストケースを作成して、自動でテストを実行する
      * コスト低い
      * 書かれ方によってクオリティが変わる
      * CI/CDのキーコンポーネント

  * [テスト方法](https://www.softwaretestingmaterial.com/verification-and-validation/)
    * 静的テスト(Verification)
      * コードは実行しない
      * レビューとかして、ドキュメントやファイルの内容を確認する
      * validation と比べて、コストが低い
    * 動的テスト(Validation)
      * プロダクトを動かすことで、動作を確認する
      * white,gray,black box testing
  * テストレベル
    * ユニットテスト
      * 関数やクラスの単位でテストする
    * 結合テスト(I&T Testing,String Testing)
      * ユニットテストを組み合わせて、機能をテストする
      * モジュール間のデータのやり取りをテストする
    * システムテスト(End to End Testing)
      * black box テスト
      * すべてのシステムを結合して、機能をテストする
      * ユーザーの視点で、システム全体をテストする
      * インプットに対して、アウトプットが正しいかを確認する
    * 受け入れテスト(UAT)
      * 発注者がテストすることで、発注者の要求を満たしているかを確認する
  * テストの成果物
    * SDLCに則るなら、フェーズごとにいろいろある。
  * テストの原則
    * Testing shows the presence of defects
      * テストは、バグがあることを示す
    * Exhaustive testing is impossible
      * 網羅的なテストは不可能
    * Early testing saves time and money
      * 早期のテストは、コストを抑える
    * Defect clustering
      * バグは、特定の箇所に集中する
    * Pesticide paradox
      * テストケースを繰り返し実行すると、バグが見つからなくなる
    * Testing is context dependent
      * テストは、コンテキストに依存する
    * Absence of error – a fallacy
      * バグがないというのは、間違い



* [The different types of software tests](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing)
  * 似た内容なのでスキップ

* [Testing React apps with Jest](https://jestjs.io/docs/tutorial-react)
  * スキップ