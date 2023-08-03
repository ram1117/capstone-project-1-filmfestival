var members = [
    {
        img: 'image-resources/Jinko-Gotoh.jpg',
        imgAlt: 'image of producer Jinko Gotoh',
        name: 'Jinko Gotoh',
        occupation: 'Producer,Consultant',
        details: 'Jinko Gotoh is an award-winning producer and consultant for the animation industry. ',
    },
    {
        img: 'image-resources/revathi.jpg',
        imgAlt: 'image of producer Revathi',
        name: 'Revathi',
        occupation: 'Actor,Screenplay Writer,Director',
        details: 'Revathi is an Indian actress and director, known for her works predominantly in Tamil & Malayalam cinema - in addition to Telugu, Hindi & Kannada films',
    },
    {
        img: 'image-resources/suhasini.png',
        imgAlt: 'image of actor suhasini',
        name: 'Suhasini Maniratnam',
        occupation: 'Actor, Director',
        details: 'Suhasini is an Indian actress, director, producer and writer in the Tamil film industry. She has worked as an actress in Tamil, Telugu, Malayalam and Kannada films.',
    },
    {
        img: 'image-resources/madhan.jpg',
        imgAlt: 'image of writer Madhan',
        name: 'Madhan',
        occupation: 'Cartoonist, Writer, Film Critic',
        details: 'Madhan is a Tamil cartoonist, journalist, writer and film critic.',
    },
    {
        img: 'image-resources/Sudipto-Sen.jpg',
        imgAlt: 'image of director Sudipto Sen',
        name: 'Sudipto Sen',
        occupation: 'Writer,Director',
        details: 'Sudipto Sen is a film Director, who has worked predominantly in Indian cinema.',
    },
    {
        img: 'image-resources/Komal-Nahta.jpg',
        imgAlt: 'image of anchor Komal Nahta',
        name: 'Komal Nahta',
        occupation: 'Film Trade Analyst,Anchor',
        details: 'Komal Nahta is an Indian film trade analyst. Nahta is the publisher of "Film Information" and also a television show host.',
    },
];
var cardContainer = document.querySelector('.card-container');
function createCard(obj) {
    var card = document.createElement('div');
    card.classList.add('member-card');
    var memberImgContainer = document.createElement('div');
    memberImgContainer.classList.add('member-image-container');
    var memberImg = document.createElement('img');
    memberImg.classList.add('member-img');
    memberImg.src = obj.img;
    memberImg.alt = obj.imgAlt;
    memberImgContainer.appendChild(memberImg);
    var memberTextContent = document.createElement('div');
    memberTextContent.classList.add('member-text-content');
    var memberName = document.createElement('h3');
    memberName.classList.add('member-name');
    memberName.textContent = obj.name;
    var memberJob = document.createElement('h5');
    memberJob.classList.add('member-job');
    memberJob.textContent = obj.occupation;
    var greyLine = document.createElement('div');
    greyLine.classList.add('grey-line');
    var memberDetails = document.createElement('p');
    memberDetails.classList.add('member-details');
    memberDetails.textContent = obj.details;
    memberTextContent.appendChild(memberName);
    memberTextContent.appendChild(memberJob);
    memberTextContent.appendChild(greyLine);
    memberTextContent.appendChild(memberDetails);
    card.appendChild(memberImgContainer);
    card.appendChild(memberTextContent);
    return card;
}
function loadCards() {
    if (cardContainer) {
        if (window.innerWidth > 768) {
            members.forEach(function (member) {
                cardContainer.appendChild(createCard(member));
            });
        }
        else {
            for (var i = 0; i < members.length; i += 1) {
                var card = createCard(members[i]);
                if (i > 1) {
                    card.id = 'hidden-card';
                    card.classList.toggle('card-hidden');
                }
                cardContainer.appendChild(card);
            }
        }
    }
}
loadCards();
var cardButtonToggle = document.getElementById('button-orange');
if (cardButtonToggle && cardContainer) {
    cardButtonToggle.onclick = function () {
        var children = cardContainer.querySelectorAll('#hidden-card');
        for (var i = 0; i < children.length; i += 1) {
            children[i].classList.toggle('card-hidden');
        }
        if (cardButtonToggle.textContent === 'MORE') {
            cardButtonToggle.innerHTML =
                'LESS<span><img src="bg-icons/up-arrow-icon.svg" alt="arrow pointing upwards"></span>';
        }
        else {
            cardButtonToggle.innerHTML =
                'MORE<span><img src="bg-icons/down-arrow-icon.svg" alt="arrow pointing downwards"></span>';
        }
    };
}
window.onresize = function () {
    if (cardContainer) {
        while (cardContainer.firstChild) {
            cardContainer.removeChild(cardContainer.firstChild);
        }
        var cardButtonToggle_1 = document.getElementById('button-orange');
        if (cardButtonToggle_1) {
            cardButtonToggle_1.innerHTML =
                'MORE<span><img src="bg-icons/down-arrow-icon.svg" alt="arrow pointing downwards"></span>';
        }
        loadCards();
        if (window.innerWidth > 768) {
            var popupWindow = document.querySelector('.popup-window');
            if (popupWindow) {
                popupWindow.style.display = 'none';
            }
        }
    }
};
