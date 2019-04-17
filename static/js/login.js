function submit_form() {
    var s_btn = document.getElementById('submit');
    var btn_t = document.getElementById('button_text')
    var spinner = document.getElementById('spinner');
    s_btn.disabled = true;
    btn_t.innerText = 'Loading...';
    spinner.style.display = '';
}