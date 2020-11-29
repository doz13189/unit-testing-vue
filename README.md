# ユニットテストのガイドライン(Vue)

## 前置き
このドキュメントは、Vue 製のアプリケーションのユニットテストの開発ガイドラインです。ユニットテスト自体、初めて書く人が作成しているドキュメントなので、間違ったところ、現場に即していないところは積極的に指摘を入れて修正していきましょう。


## ユニットテストの目的

ユニットテストの目的は、機能追加時のデグレードの回避です。
色々と議論の余地はありそうですが、今のプロジェクトで、機能追加をする上のノンデグレーションテストにかかる工数が増えてきたため、とりあえず、私の思いはこれです。通常、ユニットテストの主目的になりうる「品質の確認」は、私の中では2番目です。


## ユニットテストはどの単位でやりますか？

アジャイル開発流の言い方をすれば、ROI(return of investment) で考える、です。
一般的なユニットテストとして、ユニットテストケースは作成していくべきですが（C1 分岐網羅）、どう考えても仕様変更がなさそうな箇所、バグが生まれなさそうな（ロジックがシンプルすぎる）箇所に関しては「ユニットテストコードを作成しない」という判断はアリです。言い換えると、投資に対するリターンが少ない場合は、ユニットテストコードの作成は不要です。ユニットテストを手動でやるなり、インテグレーションテストに含めてやるなり、他の方法でカバーしましょう。ユニットテストをする必要がないわけではなく、
（ユニットテストをしない、という判断をした場合は、その旨が他人から分かる形で残しておくこと）


## ユニットテストツールは何を使いますか？

vue-test-utils を使用した Jest でユニットテストを実施します。  
https://jestjs.io/  
https://vue-test-utils.vuejs.org/

以下のテストは行いません。

- E2E(End to End)テスト
- スナップショットテスト

インテグレーションテストでもこれらの実施予定は、今のところありませんが、導入の検討はアリです。


## ユニットテストの対象は何ですか？

ユニットテストのテスト対象は、Vue Mastery にも記載がある通り、コンポーネントのアウトプットがユニットテストの対象です。

> So what do we test in a Vue.js app?  
The answer is actually quite simple: components.  
https://www.vuemastery.com/courses/unit-testing/what-to-test

コンポーネントのアウトプットは以下です。

- What is rendered to the DOM
- External function calls
- Events emitted by the component
- Route Changes
- Updates to the Vuex Store
- Connection with children  
i.e. changes in child components

これらのアウトプットを確認するために、ユニットテストでは以下のコンポーネントのインプットを設定しながら、進めます。

- Component Data
- Component Props
- User Interaction  
Ex: user clicks a button
- Lifecycle Methods  
mounted(), created(), etc.
- Vuex Store
- Route Params


注意点として、テスト対象はコンポーネントのアウトプットであり、methods や n 行目のコードは、テスト対象ではありません。vue-test-utils のドキュメントにも記載されているように、ラインベースでのユニットテストはしません。

> #何をテストするかを知る  
UI コンポーネントでは、コンポーネントの内部実装の詳細に集中しすぎて脆弱なテストが発生する可能性があるため、完全なラインベースのカバレッジを目指すことはお勧めしません。  

>代わりに、コンポーネントのパブリックインターフェイスを検証するテストを作成し、内部をブラックボックスとして扱うことをお勧めします。単一のテストケースでは、コンポーネントに提供された入力（ユーザーのやり取りやプロパティの変更）によって、期待される出力（結果の描画またはカスタムイベントの出力）が行われることが示されます。  
https://vue-test-utils.vuejs.org/ja/guides/#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%92%E3%83%B3%E3%83%88


### UT 対象のコンポーネントのインプット & アウトプットを確認する

first step, create a list
- input
  - Props  
  min & max
  - User Interaction  
  Clicking of the Generate Random Number button
- output
  - Rendered Output (DOM)
  Is the number displayed on the screen between min and max?

## mount vs shalloMount


## UT の自動化が必要になるタイミング
機能追加が発生するタイミング。


## 何をテストしないべきか

導入するライブラリは、公式サポートがあるもの、十分なサイズのコミュニティが形成されていること、継続的にメンテナンスされていること、などを確認しましょう。  
これらが確認されている上で、vue mastery に記載されている通り、以下の3つはテスト対象としません。

> Don’t test the framework Itself  
Don’t test third party libraries  
Don’t test implementation details  

implementation details をテストしない理由は、もう十分に記載しているため、省略します。フレームワークと 3rd パーティをテストしない理由は、既に提供元がテストを十分にしている、という仮定を置いているためです。

正直、当たり前のことを書いてしまった...これらのことがわかっていれば、vue の便利なコンポーネントを陽気に導入するなんてないですよね。


## 参考
https://www.vuemastery.com/courses/unit-testing/what-to-test  
https://vue-test-utils.vuejs.org/ja/guides/#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%92%E3%83%B3%E3%83%88


