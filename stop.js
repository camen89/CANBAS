// 選択中の画像をクリックして選択解除
document.getElementById("memo_list").addEventListener("click", function (e) {
    const target = e.target;
    if (target && target.tagName === "IMG") {
        if (selectedImage) {
            // すでに選択中の画像がある場合、選択を解除
            selectedImage.style.border = "none";
        }
        selectedImage = target;
        target.style.border = "2px solid red";
    } else if (selectedImage) {
        // 写真以外の部分をクリックした場合、選択を解除
        selectedImage.style.border = "none";
        selectedImage = null;
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
