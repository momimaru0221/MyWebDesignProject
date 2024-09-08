// ランダムなSVGパスを生成する関数
function generateRandomSVGPath() {
  const pathLength = Math.floor(Math.random() * 10) + 1; // パスの長さを1から10の間でランダムに決定する
  let path = `M ${Math.random() * 100} ${Math.random() * 100}`; // パスの開始点をランダムな位置に設定する

  for (let i = 0; i < pathLength; i++) { // ランダムなパスを作成するループ
      const controlPoint1X = Math.random() * 100; // 1つ目の制御点のX座標をランダムに設定
      const controlPoint1Y = Math.random() * 100; // 1つ目の制御点のY座標をランダムに設定
      const controlPoint2X = Math.random() * 100; // 2つ目の制御点のX座標をランダムに設定
      const controlPoint2Y = Math.random() * 100; // 2つ目の制御点のY座標をランダムに設定
      const endPointX = Math.random() * 100; // 終点のX座標をランダムに設定
      const endPointY = Math.random() * 100; // 終点のY座標をランダムに設定

      // 正しいCコマンドのフォーマットに従って制御点と終点をパスに追加
      path += ` C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${endPointX} ${endPointY}`;
  }

  return path; // 生成されたSVGパスを返す
}

document.getElementById('generatePathBtn').addEventListener('click', () => {
    const svgCanvas = document.getElementById('svgCanvas');
    const path = generateRandomSVGPath();

    // SVG内の既存のパスを削除
    while (svgCanvas.firstChild) {
        svgCanvas.removeChild(svgCanvas.firstChild);
    }

    // 新しいパス要素を作成
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', path);
    pathElement.setAttribute('stroke', 'black');
    pathElement.setAttribute('fill', 'none');

    // SVGにパスを追加
    svgCanvas.appendChild(pathElement);
});