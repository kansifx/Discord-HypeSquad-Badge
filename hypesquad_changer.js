const houseId = 3; // 1: Bravery, 2: Brilliance, 3: Balance

if (api && api.post) {
    console.log("Sedang mengirim permintaan...");
    api.post({
        url: "/hypesquad/online",
        body: { house_id: houseId }
    })
    .then(res => {
        console.log("%c BERHASIL!", "color: green; font-weight: bold;");
        console.log("Respon Server:", res.body);
    })
    .catch(err => {
        console.error("Gagal ganti house. Kode error:", err.status);
        if(err.status === 429) console.warn("Kamu kena Rate Limit (terlalu cepat klik).");
    });
} else {
    console.error("Variabel 'api' tidak valid atau method 'post' tidak ditemukan.");
}
