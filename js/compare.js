
//car
let carArr = [];

class Car {


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }
}

// pesquisar na matriz se existir carClass retornando 1 se não retornar -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length < 2) {
                carArr.push(carClass);
                console.log(carArr);
            } else {
                alert("Você só pode comparar 2 carros");
                el.checked = false;

            }



        } else {
            let index = GetCarArrPosition(carArr, carClass);
            carArr.splice(index, 1);
            console.log(carArr);
            


        }
    } else {
        throw "Você precisa definir uma classe de carro";
    }




}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {

    for (let i = 0; i < carArr.length; i++) {
        
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carArr[i].image}" style="width: 90%">`;
        document.getElementById(`compare_modelo_${i}`).innerHTML = carArr[i].nome;
        document.getElementById(`compare_preco_${i}`).innerHTML = carArr[i].preco;
        document.getElementById(`compare_alturacacamba_${i}`).innerHTML = carArr[i].alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerHTML = carArr[i].alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerHTML = carArr[i].alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerHTML = carArr[i].capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerHTML = carArr[i].motor;
        document.getElementById(`compare_potencia_${i}`).innerHTML = carArr[i].potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerHTML = carArr[i].volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerHTML = carArr[i].roda;
    }
}