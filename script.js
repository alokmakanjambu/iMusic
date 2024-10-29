document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah submit default

    // Ambil semua input
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let phone = document.getElementById("phone").value;
    let terms = document.getElementById("terms").checked;

    // Validasi setiap field
    let isValid = true;

    if (!fullName) {
      isValid = false;
      alert("Nama lengkap harus diisi.");
    }
    if (!email) {
      isValid = false;
      alert("Alamat email harus diisi.");
    }
    if (!password || password.length < 8) {
      isValid = false;
      alert("Kata sandi harus diisi dan minimal 8 karakter.");
    }
    if (password !== confirmPassword) {
      isValid = false;
      alert("Konfirmasi kata sandi tidak cocok.");
    }
    if (!plan) {
      isValid = false;
      alert("Anda harus memilih sebuah rencana.");
    }
    if (!phone) {
      isValid = false;
      alert("Nomor telepon harus diisi.");
    }
    if (!terms) {
      isValid = false;
      alert("Anda harus menyetujui syarat dan ketentuan.");
    }

    // Submit form jika semua validasi berhasil
    if (isValid) {
      alert("Registrasi berhasil!");
      this.submit();
    }
  });
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah submit default

    // Ambil semua input
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let phone = document.getElementById("phone").value;
    let terms = document.getElementById("terms").checked;

    // Validasi setiap field
    let isValid = true;

    if (!fullName) {
      isValid = false;
      alert("Nama lengkap harus diisi.");
    }
    if (!email) {
      isValid = false;
      alert("Alamat email harus diisi.");
    }
    if (!password || password.length < 8) {
      isValid = false;
      alert("Kata sandi harus diisi dan minimal 8 karakter.");
    }
    if (password !== confirmPassword) {
      isValid = false;
      alert("Konfirmasi kata sandi tidak cocok.");
    }
    if (!plan) {
      isValid = false;
      alert("Anda harus memilih sebuah rencana.");
    }
    if (!phone) {
      isValid = false;
      alert("Nomor telepon harus diisi.");
    }
    if (!terms) {
      isValid = false;
      alert("Anda harus menyetujui syarat dan ketentuan.");
    }

    // Submit form jika semua validasi berhasil
    if (isValid) {
      alert("Registrasi berhasil!");
      this.submit();
    }
  });
