document.addEventListener("DOMContentLoaded", function() {
    var holidayData = [
        {
            Location: "Rosoy-en-Multien, France",
            Type: "Professional Host",
            Date: "22-27Apr",
            Price: 277,
            Rating: 4.89,
            Images: [
                "assets/Holiday 1/1.jpg",
                "assets/Holiday 1/2.jpg",
                "assets/Holiday 1/3.jpg",
                "assets/Holiday 1/4.jpg",
            ]
        },
        {
            Location: "Konsmo, Norway",
            Type: "Individual Host",
            Date: "28Jan - 2Feb",
            Price: 236,
            Rating: 4.96,
            Images: [
                "assets/Holiday 2/1.jpg",
                "assets/Holiday 2/2.jpg",
                "assets/Holiday 2/3.jpg",
                "assets/Holiday 2/4.jpg",
                "assets/Holiday 2/5.jpg"
            ]
        },
        {
            Location: "Dörverden, Germany",
            Type: "Professional Host",
            Date: "18-23Feb",
            Price: 578,
            Rating: 4.26,
            Images: [
                "assets/Holiday 3/1.jpg",
                "assets/Holiday 3/2.jpg",
                "assets/Holiday 3/3.jpg",
                "assets/Holiday 3/4.jpg",
                "assets/Holiday 3/5.jpg"
            ]
        },
        {
            Location: "Râșnov Romacril, Romania",
            Type: "Individual Host",
            Date: "25Feb-1Mar",
            Price: 432,
            Rating: 4.92,
            Images: [
                "assets/Holiday 4/1.jpg",
                "assets/Holiday 4/2.jpg",
                "assets/Holiday 4/3.jpg",
                "assets/Holiday 4/4.jpg",
            ]
        },
        {
            Location: "Pierantonio, Italy",
            Type: "Individual Host",
            Date: "25-30Jan",
            Price: 558,
            Rating: 4.95,
            Images: [
                "assets/Holiday 5/1.jpg",
                "assets/Holiday 5/2.jpg",
                "assets/Holiday 5/3.jpg",
                "assets/Holiday 5/4.jpg",
                "assets/Holiday 5/5.jpg"
            ]
        }
    ]

    let currencies = ["£", "$", "€", "¥"];
    let imageGap = 1.5;

    for (let i = 0; i < holidayData.length; i++) {
        
    // Create the card element
    var cardElement = document.createElement("div");
    cardElement.classList.add("item__card");
    // set unique id for each item card
    cardElement.id = "item" + [i]

    // Create the carousel element and arrows
    var cardCarouselElement = document.createElement("div");
    var cardCarouselNext = document.createElement("button");
    var cardCarouselPrev = document.createElement("button");
    cardCarouselElement.classList.add("card__carousel-container");
    cardCarouselNext.classList.add("card__next-button");
    cardCarouselPrev.classList.add("card__prev-button");

    // Create the card image element
    var cardImgElement = document.createElement("div");
    cardImgElement.classList.add("card__img");

    var currentObject = holidayData[i];
    
    // Loop through the properties of each object for img src
    for (var key in currentObject) {
        if (Array.isArray(currentObject[key])) {
            // If the property is an array, loop through its elements
            for (let j = 0; j < currentObject[key].length; j++) {

                var imgElement = document.createElement("img");
                imgElement.setAttribute("src", currentObject[key][j]);
                cardImgElement.appendChild(imgElement);
                // Call the createCarousel function for each card
            }
        }
    }

    // Create the card information element
    var cardInfoElement = document.createElement("div");
    cardInfoElement.classList.add("card__information");

    // Create the card information labels
    var cardInfoLabelsElement = document.createElement("div");
    cardInfoLabelsElement.classList.add("card__information-labels");

    // Create and append location element
    var cardLocationElement = document.createElement("div");
    cardLocationElement.classList.add("card__location");
    cardLocationElement.innerHTML = holidayData[i].Location;
    cardInfoLabelsElement.appendChild(cardLocationElement);

    // Create and append tag element
    var cardTagElement = document.createElement("div");
    cardTagElement.classList.add("card__tag");
    cardTagElement.innerHTML = holidayData[i].Type;
    cardInfoLabelsElement.appendChild(cardTagElement);

    // Create and append dates element
    var cardDatesElement = document.createElement("div");
    cardDatesElement.classList.add("card__dates");
    cardDatesElement.innerHTML = holidayData[i].Date;
    cardInfoLabelsElement.appendChild(cardDatesElement);

    // Create and append price labels element
    var cardPriceLabelsElement = document.createElement("div");
    cardPriceLabelsElement.classList.add("card__price");
    cardPriceLabelsElement.innerHTML = currencies[0] + holidayData[i].Price + " total";
    cardInfoLabelsElement.appendChild(cardPriceLabelsElement);

    cardInfoElement.appendChild(cardInfoLabelsElement);

    // Create the card information rating and icon elements
    var cardInfoRatingElementIcon = document.createElement("i");
    cardInfoRatingElementIcon.classList.add("fa-solid");
    cardInfoRatingElementIcon.classList.add("fa-star");

    var cardInfoRatingElement = document.createElement("div");
    cardInfoRatingElement.classList.add("card__information-rating");

    // Create and append rating element
    var cardRatingElement = document.createElement("div");
    cardRatingElement.classList.add("card__rating");
    cardRatingElement.innerHTML = holidayData[i].Rating;
    cardInfoRatingElement.appendChild(cardInfoRatingElementIcon);
    cardInfoRatingElement.appendChild(cardRatingElement);

    cardInfoElement.appendChild(cardInfoRatingElement);

    // Carousel icons
    var cardCarouselNextIcon = document.createElement("i");
    var cardCarouselPrevIcon = document.createElement("i");
    cardCarouselNextIcon.classList.add("fa-solid");
    cardCarouselPrevIcon.classList.add("fa-solid");
    cardCarouselNextIcon.classList.add("fa-chevron-right");
    cardCarouselPrevIcon.classList.add("fa-chevron-left");

    // Append card image and information to the card element
    cardElement.appendChild(cardCarouselElement);
    cardElement.appendChild(cardInfoElement);
    cardCarouselElement.appendChild(cardImgElement);
    cardCarouselElement.appendChild(cardCarouselNext);
    cardCarouselNext.appendChild(cardCarouselNextIcon);
    cardCarouselElement.appendChild(cardCarouselPrev);
    cardCarouselPrev.appendChild(cardCarouselPrevIcon);

    // Get the parent element by id and append the card to it
    var parentElement = document.getElementById("content__items-grid");
    parentElement.appendChild(cardElement);

    // run createCarousel for each card
    createCarousel(cardElement.id, holidayData[i].Images);
    }

    function createCarousel(containerId, images) {
        const cardImg = document.getElementById(containerId).querySelector(".card__img");
        const prevButton = cardImg.parentElement.querySelector(".card__prev-button");
        const nextButton = cardImg.parentElement.querySelector(".card__next-button");
        let currentIndex = 0;

        function showImage(index) {
            const percentage = -index * 100;
            const translateValue = `calc(${percentage}% - ${currentIndex * imageGap}rem)`
            cardImg.style.transform = `translateX(${translateValue})`;
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        prevButton.addEventListener("click", showPrev);
        nextButton.addEventListener("click", showNext);

        // Initially show the first image
        showImage(currentIndex);
    }

});
