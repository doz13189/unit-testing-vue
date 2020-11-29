# 自動ユニットテストのガイドライン(Vue)

## 前置き
このドキュメントは、Vue 製のアプリケーションの自動ユニットテストの開発ガイドラインです。自動ユニットテスト自体、初めて書く人が作成しているドキュメントなので、間違ったところ、現場に即していないところは積極的に指摘を入れて修正していきましょう。


## 自動ユニットテストの目的

自動ユニットテストの目的は、機能追加時のデグレードの回避です。
色々と議論の余地はありそうですが、今のプロジェクトで、機能追加をする上のノンデグレーションテストにかかる工数が増えてきたため、とりあえず、私の思いはこれです。


## 自動ユニットテストはどの単位でやりますか？

アジャイル開発流の言い方をすれば、ROI(return of investment) で考える、です。
一般的なユニットテストとして（C1 分岐網羅）、ユニットテストケースは作成していきますが、全てを自動化の対象にする必要はありません。自動ユニットテストは、それ用のコードを作成する必要があるため、それなりにコストは必要ですから。  

どう考えても仕様変更がなさそうな箇所、バグが生まれなさそうな（ロジックがシンプルすぎる）箇所に関しては「自動ユニットテストを作成しない」という判断はアリです。言い換えると、投資に対するリターンが少ない場合は、自動ユニットテストの実施は不要です。手動でのユニットテストをやるなり、インテグレーションテストに含めてやるなり、他の方法でカバーしましょう。  

ただし、自動ユニットテストをしない、という判断をした場合は、その旨が他人から分かる形で残しておくことは必要です。


## 自動ユニットテストツールは何を使いますか？

vue-test-utils を使用した Jest で自動ユニットテストを実施します。  
https://jestjs.io/  
https://vue-test-utils.vuejs.org/

以下のテストは行いません。

- E2E(End to End)テスト
- スナップショットテスト

インテグレーションテストでもこれらの実施予定は、今のところありませんが、導入の検討はアリです。


## 自動ユニットテストの対象は何ですか？

自動ユニットテストのテスト対象は、Vue Mastery にも記載がある通り、コンポーネントのアウトプットが対象です。

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

これらのアウトプットを確認するために、自動ユニットテストでは以下のコンポーネントのインプットを設定しながら、進めます。

- Component Data
- Component Props
- User Interaction  
Ex: user clicks a button
- Lifecycle Methods  
mounted(), created(), etc.
- Vuex Store
- Route Params


注意点として、自動ユニットテスト対象はコンポーネントのアウトプットであり、methods や n 行目のコードは、自動ユニットテスト対象ではありません。vue-test-utils のドキュメントにも記載されているように、ラインベースでの自動ユニットテストはしません。以下は、vue-test-utils のドキュメント抜粋。とても大切なことが書かれています。

> #何をテストするかを知る  
UI コンポーネントでは、コンポーネントの内部実装の詳細に集中しすぎて脆弱なテストが発生する可能性があるため、完全なラインベースのカバレッジを目指すことはお勧めしません。  

>代わりに、コンポーネントのパブリックインターフェイスを検証するテストを作成し、内部をブラックボックスとして扱うことをお勧めします。単一のテストケースでは、コンポーネントに提供された入力（ユーザーのやり取りやプロパティの変更）によって、期待される出力（結果の描画またはカスタムイベントの出力）が行われることが示されます。  
https://vue-test-utils.vuejs.org/ja/guides/#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%92%E3%83%B3%E3%83%88


## 何をテストしないべきか

導入するライブラリは、公式サポートがあるもの、十分なサイズのコミュニティが形成されていること、継続的にメンテナンスされていること、などを確認しましょう。  
これらが確認されている上で、vue mastery に記載されている通り、以下の3つはテスト対象としません。

> Don’t test the framework Itself  
Don’t test third party libraries  
Don’t test implementation details  

implementation details をテストしない理由は、もう十分に記載しているため、省略します。フレームワークと 3rd パーティをテストしない理由は、既に提供元がテストを十分にしている、という仮定を置いているためです。

正直、当たり前のことを書いてしまいましたが...これらのことがわかっていれば、github スターが 100 くらいの便利な  vuetify のコンポーネントを陽気に導入するなんてないですよね。冷静に github のスターが 100 は十分すごいんですがね。


## 参考
https://www.vuemastery.com/courses/unit-testing/what-to-test  
https://vue-test-utils.vuejs.org/ja/guides/#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%92%E3%83%B3%E3%83%88


