// 選択中の画像を保持
let selectedImage = null;

// 画像をクリックして選択
document.getElementById("memo_list").addEventListener("click", function (e) {
    const target = e.target;
    if (target && target.tagName === "IMG") {
        if (selectedImage) {
            // すでに選択中の画像がある場合、選択を解除
            selectedImage.style.border = "none";
        }
        selectedImage = target;
        target.style.border = "2px solid red";
    }
});

// Deleteキーで選択中の画像を削除
document.addEventListener("keydown", function (e) {
    if (e.key === "Delete" && selectedImage) {
        const parentContainer = selectedImage.parentElement;
        if (parentContainer) {
            parentContainer.remove();
            selectedImage = null; // 選択を解除
        }
    }
});
