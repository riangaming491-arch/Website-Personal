document.getElementById("ticketForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Tiket berhasil dipesan!");
});

function playAudio(){

    const audio =
    document.getElementById("audioGuide");

    audio.play();
}

function showAR(){

    document.getElementById("arText").innerHTML =
    "Objek berhasil dipindai.";
}

/* ===========================
   QR SCANNER BUDAYA
=========================== */

function onScanSuccess(decodedText){

    let hasil =
    document.getElementById("hasilBudaya");

    if(decodedText === "SIGER"){

        hasil.innerHTML = `
        <h3>👑 Mahkota Siger</h3>

        <p>
        Siger merupakan mahkota adat Lampung yang
        melambangkan kehormatan, kebesaran,
        dan identitas masyarakat Lampung.
        </p>

        <img src="mahkota siger.png" width="250">
        `;
    }

        else if(decodedText === "KAIN TAPIS LAMPUNG"){

        hasil.innerHTML = `
        <h3>🧵 Kain Tapis Lampung</h3>

        <p>
        Kain Tapis adalah kain tradisional khas Lampung yang
        dihiasi sulaman benang emas dan menjadi salah satu
        warisan budaya yang sangat berharga.
        </p>

        <img src="KaintapisLampung.png" width="250">
        `;
    }

    else if(decodedText === "RUMAH"){

        hasil.innerHTML = `
        <h3>🏠 Rumah Adat Lampung</h3>

        <p>
        Rumah adat Lampung merupakan
        bangunan tradisional yang menjadi
        simbol kehidupan masyarakat Lampung.
        </p>

        <img src="images/siger3.jpg">
        `;
    }

    else if(decodedText === "MENARASIGER"){

        hasil.innerHTML = `
        <h3>🏛 Menara Siger</h3>

        <p>
        Menara Siger adalah ikon Provinsi Lampung
        yang berada di Bakauheni dan menjadi
        gerbang Pulau Sumatera.
        </p>

        <img src="images/siger4.jpg">
        `;
    }

    else{

        hasil.innerHTML = `
        <h3>Data Tidak Ditemukan</h3>
        <p>QR Code tidak dikenali sistem.</p>
        `;
    }

}

const scanner =
new Html5QrcodeScanner(
    "reader",
    {
        fps:10,
        qrbox:250
    }
);

scanner.render(onScanSuccess);