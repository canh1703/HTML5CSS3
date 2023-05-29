const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const username = document.querySelector('#exampleInputUsername1').value;
  const password = document.querySelector('#exampleInputPassword1').value;

  // Username validation
  const usernameRegex = /^[a-zA-Z0-9]*$/;
  const usernameValid = usernameRegex.test(username);
  const usernameError = document.querySelector('#usernameError');
  if (username.trim() === '') {
    event.preventDefault();
    usernameError.textContent = 'Vui lòng nhập tên người dùng.';
    usernameError.style.color = 'red';
  } else if (!usernameValid) {
    event.preventDefault();
    usernameError.textContent = 'Tên người dùng chỉ có thể chứa các ký tự chữ và số.';
    usernameError.style.color = 'red';
  } else {
    usernameError.textContent = '';
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const passwordValid = passwordRegex.test(password);
  const passwordError = document.querySelector('#passwordError');
  if (password.trim() === '') {
    event.preventDefault();
    passwordError.textContent = 'Vui lòng nhập mật khẩu.';
    passwordError.style.color = 'red';
  } else if (!passwordValid) {
    event.preventDefault();
    if (password.length < 8) {
      passwordError.textContent = 'Mật khẩu phải dài ít nhất 8 ký tự.';
    } else {
      passwordError.textContent = 'Mật khẩu phải bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường và một chữ số.';
    }
    passwordError.style.color = 'red';
  } else {
    passwordError.textContent = '';
  }
});

  

    
