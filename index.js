let nama = prompt("Selamat datang. Silahkan masukkan nama kamu!")

document.getElementById("welcome").innerHTML = `${nama}`

let saldo = 0

function cekSaldo() {
    return alert(`Saldo kamu adalah : ${saldo}`)
}

function setorTunai() {
    let jumlahSetoran = parseInt(prompt("Masukkan nominal setoran!"))
    
    if(isNaN(jumlahSetoran)) {
        alert("Kamu memasukkan input yang salah. Harap memasukkan nominal dengan benar!")
        return saldo
    } else if(jumlahSetoran < 10000) {
        alert("Minimal setoran adalah 10000!")
        return saldo
    } else {
        alert("Berhasil!!!")
        return saldo += jumlahSetoran
    }


    
}

function tarikTunai() {
    let jumlahPenarikan = parseInt(prompt("Masukkan nominal untuk ditarik!"))

    if(isNaN(jumlahPenarikan)) {
        alert("Kamu memasukkan input yang salah. Harap memasukkan nominal dengan benar!")
        return saldo
    } else if(jumlahPenarikan > saldo) {
        alert("Saldo tidak cukup")
        return saldo
    } else {
        alert("Berhasil!!!")
        return saldo -= jumlahPenarikan
    }
    
}


function exit() {
    return confirm("Are you sure to exit?")
}