document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const hp = document.getElementById("hp").value;
  const dob = formatDate(document.getElementById("dob").value); // Menggunakan fungsi formatDate untuk mengubah format tanggal
  const color = document.querySelector('input[name="warna"]:checked').value;
  const message = document.getElementById("message").value;

  let price;
  let imageSrc;
  switch (color) {
    case "biru":
      price = "Rp 37.000.000";
      imageSrc = "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-57654990/yamaha_yamaha_all_new_xsr_155_sepeda_motor_-otr_jabodetabekser-_full04_u7se3bix.jpg";
      break;
    case "silver":
      price = "Rp 38.000.000";
      imageSrc = "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-128050568/yamaha_yamaha_all_new_xsr_155_sepeda_motor_-otr_jabodetabek-_full02_pbejkf8y.jpg";
      break;
    case "hitam":
      price = "Rp 39.000.000";
      imageSrc = "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//109/MTA-48846916/yamaha_yamaha_full01.jpg";
      break;
    default:
      price = "Tidak ada informasi harga";
  }

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `
              <p><strong>Nama Pembeli:</strong> ${name}</p>
              <p><strong>No HP: </strong> ${hp}</p>
              <p><strong>Tanggal Pemesanan:</strong> ${dob}</p>
              <p><strong>Jenis Warna:</strong> ${color}</p>
              <p><strong>Alamat:</strong> ${message}</p>
              <p><strong>Harga:</strong> ${price}</p>
              <img src="${imageSrc}" alt="Motor" style="max-width: 100%; height: auto; margin-top: 10px;">
    
            `;
});
function updateName() {
  const userName = document.getElementById("userName").value;
  document.getElementById("nama").textContent = `Hi ${userName}, Welcome to XSR shop`;
  document.getElementById("nameInputContainer").style.display = "none";
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", options); // Menggunakan 'id-ID' untuk lokal Indonesia
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  var priceTags = document.getElementsByClassName("price-tag");

  if (n > imgList.length) slideIndex = 1;
  if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
    priceTags[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
  priceTags[slideIndex - 1].style.display = "block";
}

function resetForm() {
  document.getElementById("dataForm").reset(); // Reset form input
  document.getElementById("result").innerHTML = ""; // Kosongkan hasil print
  document.getElementById("resultContainer").classList.remove("show"); // Sembunyikan container hasil
}
// Dapatkan semua elemen li pada .card-list
const cardItems = document.querySelectorAll(".card-list li");

// Fungsi untuk menambahkan class fade-in ke setiap li secara bertahap
function fadeInCards() {
  cardItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("fade-in");
    }, index * 200); // Tambahkan delay bertahap antara masing-masing item
  });
}

// Panggil fungsi fadeInCards saat halaman dimuat
window.addEventListener("load", fadeInCards);
