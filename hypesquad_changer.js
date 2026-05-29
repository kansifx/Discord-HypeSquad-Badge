(async () => {
    // 1: Bravery, 2: Brilliance, 3: Balance
    const houseId = 3; 

    console.log("Menunggu aktivitas jaringan Discord untuk mencegat Token...");
    console.log("👉 SEKARANG: Klik menu User Settings (ikon gir), klik profil orang, atau pindah server!");

    let tokenFound = false;

    async function sendHypesquadRequest(token) {
        if (tokenFound) return;
        tokenFound = true;

        console.log("Token berhasil dicegat! Mengirim permintaan ganti house...");
        
        try {
            const response = await originalFetch("https://discord.com/api/v9/hypesquad/online", {
                method: "POST",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ house_id: houseId })
            });

            if (response.ok) {
                console.log("%c BERHASIL! House HypeSquad kamu telah diperbarui.", "color: green; font-weight: bold; font-size: 14px;");
                console.log("Silakan buka ulang profil atau refresh Discord kamu (Ctrl + R).");
            } else {
                const errData = await response.json().catch(() => ({}));
                console.error(`Gagal ganti house. Status: ${response.status}`, errData);
            }
        } catch (err) {
            console.error("Terjadi kesalahan saat menembak API:", err);
        }
    }

    // 1. Intercept window.fetch
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const [url, config] = args;
        if (config && config.headers) {
            const token = config.headers['Authorization'] || config.headers['authorization'];
            if (token && !tokenFound) {
                sendHypesquadRequest(token);
            }
        }
        return originalFetch.apply(this, args);
    };

    // 2. Intercept XMLHttpRequest (XHR)
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    const originalSetHeader = XMLHttpRequest.prototype.setRequestHeader;

    XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
        if ((header.toLowerCase() === 'authorization') && value && !tokenFound) {
            sendHypesquadRequest(value);
        }
        return originalSetHeader.apply(this, arguments);
    };
})();
