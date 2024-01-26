document.addEventListener("DOMContentLoaded", function() {
    var holidayData = [
        {
            Location: "Rosoy-en-Multien, France",
            Type: "Professional Host",
            Date: "22-27Apr",
            Price: 277,
            Rating: 4.89,
            Url: "https://www.airbnb.co.uk/rooms/20958243?adults=2&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-04-14&check_out=2024-04-19&source_impression_id=p3_1706059106_T1%2FRViSI3%2B6acTRV&previous_page_section_name=1000&federated_search_id=f707ebfb-ae25-4f20-9970-c57f322a9fc2",
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
            Url: "https://www.airbnb.co.uk/rooms/38874907?adults=2&category_tag=Tag%3A8188&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=931140223&check_in=2024-02-18&check_out=2024-02-23&source_impression_id=p3_1706059486_mAMFtNiHpMw6011F&previous_page_section_name=1000&federated_search_id=ab3737b0-bd98-4f2f-9dbe-a2972595de7a",
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
            Url: "https://www.airbnb.co.uk/rooms/625995554253317728?adults=1&category_tag=Tag%3A8188&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1399919845&search_mode=flex_destinations_search&check_in=2024-02-18&check_out=2024-02-23&source_impression_id=p3_1706059582_oQ8kBj%2BGRg570AWe&previous_page_section_name=1000&federated_search_id=c7b81ec4-de7e-4747-95a1-0f0bf2346675",
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
            Url: "https://www.airbnb.co.uk/rooms/676044415326884478?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-16&check_out=2024-02-21&source_impression_id=p3_1706059606_V2rLqq2lWDJPKeHW&previous_page_section_name=1000&federated_search_id=ffbaaab1-b672-49c4-868d-5673479bf023",
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
            Url: "https://www.airbnb.co.uk/rooms/2922931?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-01&check_out=2024-02-06&source_impression_id=p3_1706059631_yecnhG0mIFu14D2B&previous_page_section_name=1000&federated_search_id=f218c8af-3499-45e7-948d-cdfc842bcbd9",
            Images: [
                "assets/Holiday 5/1.jpg",
                "assets/Holiday 5/2.jpg",
                "assets/Holiday 5/3.jpg",
                "assets/Holiday 5/4.jpg",
                "assets/Holiday 5/5.jpg"
            ]
        }
    ]

    // currency selector (unsure if using)
    let currencies = ["£", "$", "€", "¥"];

    // Gap between carousel images
    let imageGap = 1.5;

    // Start loop through data to populate content grid
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

    // Create link to wrap card element in
    // var cardElementHref = document.createElement("a");
    // cardElementHref.href = holidayData[i].Url

    // Append card image and information to the card element
    // cardElementHref.appendChild(cardElement);
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


    var scrollCount = 0;
    const stickyFooter = document.querySelector(".sticky__footer-container");
    const stickyMapBtn = document.querySelector(".sticky__map");

    document.addEventListener("wheel", function(event) {
        if ('deltaY' in event) {
            if (event.deltaY > 0) {
                scrollCount++;
    
                if (scrollCount >= 2) {
                    stickyFooter.style.transform = "translate(0, 60px)";
                    stickyFooter.style.pointerEvents = "none";
                    scrollCount = 0;
                }
            } else if (event.deltaY < 0) {
                stickyFooter.style.transform = "translate(0, 0px)";
                stickyFooter.style.pointerEvents = "auto";
                scrollCount = 0;
            }
        }


        const footerCont = document.querySelector(".footer__container");
        const elementRect = footerCont.getBoundingClientRect();

        if (elementRect.top <= window.innerHeight && elementRect.bottom >= 0) {
            stickyMapBtn.style.opacity = "0";
        } else {
            stickyMapBtn.style.opacity = "1";
        }
    });
});
