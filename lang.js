// Xử lý nhập liệu máy tính
const display = document.getElementById('display');

function appendToDisplay(value) {
    // SỬA: Cho phép nhập tối đa 8 số
    if (display.value.length < 8) {
        display.value += value;
        createKeyEffect(value);
    }
}

function clearDisplay() {
    display.value = '';
}

function checkPassword() {
    // SỬA: MẬT KHẨU MỚI 29012004
    if (display.value === '29012004') {
        // Nếu đúng chuyển sang trang chúc mừng
        window.location.href = 'chucmung.html';
    } else {
        // Nếu sai hiệu ứng rung
        display.style.animation = 'shake 0.5s ease';
        display.style.borderColor = 'red';
        setTimeout(() => {
            display.style.animation = '';
            display.style.borderColor = 'rgba(255, 182, 213, 0.35)';
            // SỬA: Thông báo gợi ý mới
            alert('Sai mật khẩu rồi! Gợi ý: Ngày sinh nhật đầy đủ (ddmmyyyy)');
            clearDisplay();
        }, 500);
    }
}

function createKeyEffect(val) {
    const btns = document.querySelectorAll('.btn-number');
    btns.forEach(btn => {
        if (btn.textContent.trim() === val) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 100);
        }
    });
}

// Hỗ trợ nhập bàn phím máy tính
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        checkPassword();
    } else if (key === 'Backspace' || key === 'Escape') {
        clearDisplay();
    }
});

/* CSS Animation cho rung lắc khi sai pass */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(styleSheet);