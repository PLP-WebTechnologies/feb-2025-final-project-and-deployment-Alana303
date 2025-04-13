function addComment() {
    let commentText = document.getElementById("comment").value;
    if (commentText) {
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("mb-3");
        commentDiv.classList.add("border");
        commentDiv.classList.add("p-3");
        commentDiv.innerHTML = `<p>${commentText}</p>`;
        document.getElementById("comments").appendChild(commentDiv);
        document.getElementById("comment").value = ''; // Clear the textarea
    }
}
