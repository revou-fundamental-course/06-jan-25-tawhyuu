document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('welcome-text')) {
        const name = prompt('Please enter your name:');
        if (name) {
            document.getElementById('welcome-text').textContent = `Hi ${name}, Welcome To Website`;
        }
    }
});

let BannerIndex = 1;
showBanner(BannerIndex);

function nextBanner(n) {
    showBanner(BannerIndex += 1);
}

function showBanner(n) {
    let i;
    let photos = document.getElementsByClassName('imgPhotoBanner');
    if (n > photos.length) {
        BannerIndex = 1
    }
    for (i = 0; i < photos.length; i++) {
        photos[i].style.display = 'none';
    }
    photos[BannerIndex-1].style.display = "block";
}

setInterval(() => {
    nextBanner(1)
}, 1500);

function validateForm(event) {
    event.preventDefault();
    
    // Reset errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    
    // Get form values
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    const pesan = document.getElementById('pesan').value;
    
    let isValid = true;
    
    // Validate nama
    if (nama.trim() === '') {
        document.getElementById('namaError').textContent = 'Nama harus diisi';
        isValid = false;
    }
    
    // Validate tanggal
    if (tanggal === '') {
        document.getElementById('tanggalError').textContent = 'Tanggal lahir harus diisi';
        isValid = false;
    }
    
    // Validate jenis kelamin
    if (!jenisKelamin) {
        document.getElementById('jenisKelaminError').textContent = 'Jenis kelamin harus dipilih';
        isValid = false;
    }
    
    // Validate pesan
    if (pesan.trim() === '') {
        document.getElementById('pesanError').textContent = 'Pesan harus diisi';
        isValid = false;
    }
    
    // If form is valid, display the output
    if (isValid) {
        document.getElementById('outputNama').textContent = nama;
        document.getElementById('outputTanggal').textContent = tanggal;
        document.getElementById('outputJenisKelamin').textContent = jenisKelamin.value;
        document.getElementById('outputPesan').textContent = pesan;
        
        // Clear form
        document.getElementById('messageForm').reset();
    }
    
    return false;
}