# npm-package-template-2023

## 初回設定

GitHub Template Repository としてこのリポジトリを使って新しいリポジトリを作った後は、以下のコマンドで正しいリポジトリの名前に置き換える。

```
REPOSITORY_NAME=
sed -i s/npm-package-template-2023/$REPOSITORY_NAME/ README.md ./package.json ./package-lock.json
```
