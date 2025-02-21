
const textarea = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

textarea.addEventListener('input', () => {
    const text = textarea.value;
    charCount.innerText = text.length;
    wordCount.innerText = text.trim().split(/\s+/).length;

    if (text.length > 200) {
        alert('You have exceeded the 200 character limit!');
    }
});