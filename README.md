# なでしこGoogleHomeプラグイン

なでしこ3(Node版)によるGoogle Homeのためのプラグイン

## インストール

前提条件として、なでしこv3を利用するには、まず、[Node.js](https://nodejs.org) のインストールが必要です。Node.jsをインストールした後、なでしこv3をインストールしましょう。コマンドライン(WinならPowerShell、macOSならターミナル)を起動して、以下のようなコマンドを実行します。

```
npm -g install nadesiko3
```

次に、なでしこGoogleHomeプラグインをインストールします。

```
npm -g install nadesiko3-googlehome
```

## 使い方

以下のように書くと、GoogleHomeが反応し、おはようと挨拶をします。

```
!「nadesiko3-googlehome」を取り込む

「Google-Home」にGoogleHome接続。
「おはよう」とGoogleHome言う。
```

『GoogleHome接続』命令の引数には、GoogleHomeの名前かIPアドレスを指定します。『GoogleHome接続』命令を実行すると、GoogleHomeとして接続できる端末の一覧が表示されるので、うまく接続出来なかった場合、その名前を指定します。


MP3ファイルを再生する時は、以下のようにします。

```
!「nadesiko3-googlehome」を取り込む

「Google-Home」にGoogleHome接続。
「http://xxxx/xxx.mp3」とGoogleHome再生。
```



