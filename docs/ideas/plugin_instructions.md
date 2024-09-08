# GSAPプラグイン設定手順

このドキュメントでは、GSAPプラグインの設定と使用方法について説明します。

## 1. プラグインのインポート

GSAPとそのプラグインを使用するために、まずはプラグインをインポートします。以下のファイル `src/js/gsap-plugins.js` にプラグインのインポートを一括で管理します。

```javascript
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
// 必要なプラグインをここに追加

// プラグインの登録
gsap.registerPlugin(ScrollTrigger, Draggable);