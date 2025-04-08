
//Array storage class carousel
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, text, link) {
        this.image = image;
        this.text = text;
        this.link = link;

    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); // Começar
                Carousel._interval = setInterval(function () {
                    Carousel.Next();
                }, 2000);

                document.getElementById("carousel", "carousel-text").addEventListener("mouseenter", () => {
                    clearInterval(Carousel._interval);
                });

                document.getElementById("carousel", "carousel-text").addEventListener("mouseleave", () => {
                    Carousel._interval = setInterval(function () {
                        Carousel.Next();
                    }, 2000);
                });
            }
        } else {
            throw "O método Start precisa de uma variável de matriz.";
        }
    }


    static Next() {
        const current = carouselArr[Carousel._sequence];

        // Atualizar todas as imagens no carrossel
        document.querySelectorAll("#carousel img").forEach((img, index) => {
            img.src = `img/${carouselArr[(Carousel._sequence + index) % Carousel._size].image}`;
        });

        // Atualizar texto e link
        document.querySelectorAll("#carousel-title #carousel-text a")[0].textContent = current.text;
        document.querySelectorAll("#carousel-title #carousel-text a")[0].href = current.link;

        // Atualizar sequência
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
    static Prev() {
        // Retroceder na sequência de forma cíclica
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;

        // Obter o item atual após retroceder
        const current = carouselArr[Carousel._sequence];

        // Atualizar todas as imagens no carrossel
        document.querySelectorAll("#carousel img").forEach((img, index) => {
            const newIndex = (Carousel._sequence + index) % Carousel._size;
            img.src = `img/${carouselArr[newIndex].image}`;
        });

        // Atualizar texto e link
        const carouselLink = document.querySelector("#carousel-title #carousel-text a");
        if (carouselLink) {
            carouselLink.textContent = current.text;
            carouselLink.href = current.link;
        }
    }
}