# Hippy 開発ガイド（フロントエンド）


## Setup

```
# Docker 起動
$ docker-compose up -d 
```

## Overview

Ruby on Rails を使用したアプリケーション。RESTful APIとし、フロントエンドとのデータのやりとりはJSONを用います。
認証機能は、devise_token_auth を使用し、トークンを利用して認証します。
