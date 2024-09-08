// ランダムなSVGパスを生成する関数
function generateRandomSVGPath() {
    const pathLength = Math.floor(Math.random() * 10) + 5; // パスの長さを5から14の間でランダムに決定する
    let path = `M ${Math.random() * 100} ${Math.random() * 100}`; // パスの開始点をランダムな位置に設定する

    for (let i = 0; i < pathLength; i++) { // ランダムなパスを作成するループ
        const controlPointX = Math.random() * 100; // 制御点のX座標をランダムに設定
        const controlPointY = Math.random() * 100; // 制御点のY座標をランダムに設定
        const endPointX = Math.random() * 100; // 終点のX座標をランダムに設定
        const endPointY = Math.random() * 100; // 終点のY座標をランダムに設定

        path += ` C ${controlPointX} ${controlPointY}, ${endPointX} ${endPointY}`; // 制御点と終点をパスに追加
    }

    return path; // 生成されたSVGパスを返す
}