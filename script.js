// script.js
const memo_list = document.getElementById("memo_list");
const html2canvas = window.html2canvas;

function memo() {
    // 入力ウィンドウを表示して入力された値を保存
    const input = prompt("メモの内容を入力してください");

    if (input !== null) { // ユーザーがキャンセルボタンをクリックした場合は何もしない
        // フォントサイズを入力
        const fontSize = prompt("フォントサイズを指定してください（デフォルトは16ピクセル）");
        const fontSizeValue = parseInt(fontSize, 10);

        if (!isNaN(fontSizeValue) && fontSizeValue > 0) { // フォントサイズが正の数であることを確認
            // 要素を作成、値とフォントサイズを設定
            const newMemo = document.createElement("div");
            newMemo.textContent = input;
            newMemo.style.fontSize = fontSizeValue + "px";
            newMemo.style.position = "absolute";
            newMemo.style.left = "10px";
            newMemo.style.top = "10px";
            newMemo.classList.add("memo");

            // 表示する場所を指定、要素を加える
            memo_list.appendChild(newMemo);

            // メモをドラッグ可能にする
            makeDraggable(newMemo);
        } else {
            alert("無効なフォントサイズです。デフォルトの16ピクセルを使用します。");
            // フォントサイズが無効な場合は、デフォルトの16ピクセルで要素を作成
            const newMemo = document.createElement("div");
            newMemo.textContent = input;
            newMemo.style.fontSize = "16px";
            newMemo.style.position = "absolute";
            newMemo.style.left = "10px";
            newMemo.style.top = "10px";
            newMemo.classList.add("memo");

            memo_list.appendChild(newMemo);

            // メモをドラッグ可能にする
            makeDraggable(newMemo);
        }
    }
}

function makeDraggable(element) {
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        const rect = element.getBoundingClientRect();
        offset.x = e.clientX - rect.left;
        offset.y = e.clientY - rect.top;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            element.style.left = e.clientX - offset.x + "px";
            element.style.top = e.clientY - offset.y + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

// 画面全体をPNGにエクスポートする処理
// document.getElementById("export-png").addEventListener("click", function () {
//     html2canvas(memo_list).then(function(canvas) {
//         const link = document.createElement("a");
//         link.href = canvas.toDataURL("image/png");
//         link.download = "memos.png";
//         link.click();
//     });
// });

// ボタンが押された時に関数memoを呼び出す
const addMemoBtn = document.getElementById("add-memo");
addMemoBtn.addEventListener("click", memo);
