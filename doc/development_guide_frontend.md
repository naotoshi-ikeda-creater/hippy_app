
# Hippy 　開発ガイド(フロントエンド)
## Setup

```
# インストール
cd frontend
yarn install
# ローカル起動
yarn run dev
```

## Overview

Vue.jsフレームワークのアプリケーション。UIは、UIフレームワークであるVuetifyを使用します。
## System Requirement

* Node.js
* npm
* yarn

## Development environment

推奨
* IDE:VScode

## Architecture


## Licrary

### コアライブラリ

* Vue.js
→ javascriptベースのフロントエンドフレームワーク。
* vue-router
→ ルーティング（画面とURLのマッピング）を直感的に設定できるようにしてくれるライブラリ これを使うことで画面ごとにファイル、コンポーネントを分けて開発ができる。
* axios
→ HTTPクライアント。バックエンドのREST APIを呼び出すときに使用する。 Mockモジュールもサポートしているのでローカル環境では静的なMockオブジェクトを返すこともできる。
* vuex
→ フロントエンド上での状態管理を可能にするライブラリ。
* vuelidate
→ バリデーションライブラリ。一般的に適用するバリデーション機能をライブラリとして提供する。Formをまとめてバリデーション状態を判別することも可能。
* Vutify
→ Vue.jsで使える、マテリアルデザインのフレームワーク。凝ったレイアウトでなければ、CSSを書くことなくデザインをすることが可能。














