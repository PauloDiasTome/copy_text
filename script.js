

function copy() {

    const copyText = document.getElementById("text");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value);
    alert(copyText.value);
}
