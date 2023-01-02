members = {
  member1:{
    img:'',
    imgAlt:'',
    name:'Revathi',
    occupation:'Actor,Screenplay Writer,Director',
    details:''
  },
  member2:{
    img:'image-resources/suhasini.png',
    imgAlt:'image of actor suhasini',
    name:'Suhasini Maniratnam',
    occupation:'Actor, Director',
    details:''
  },
  member3:{
    img:'image-resources/madhan.jpg',
    imgAlt:'image of writer Madhan',
    name:'Madhan',
    occupation:'Cartoonist, Writer, Film Critic',
    details:''
  },
}

function createCard(obj){
  const card = document.createElement('div');
  card.classList.add('member-card');

  const memberImgContainer = document.createElement('div');
  memberImgContainer.classList.add('member-image-container');
  const memberImg = document.createElement('img');
  memberImg.classList.add('member-img');
  memberImg.src = obj.img;
  memberImg.alt=obj.imgAlt;
  memberImgContainer.appendChild(memberImg);

  const memberTextContent = document.createElement('div');
  memberTextContent.classList.add('member-text-content');
  
  const memberName = document.createElement('h3');
  memberName.classList.add('member-name');
  memberName.textContent=obj.name;

  const memberJob = document.createElement('h5');
  memberJob.classList.add('member-job');
  memberJob.textContent=obj.occupation;

  const greyLine = document.createElement('div');
  greyLine.classList.add('grey-line');

  const memberDetails = document.createElement('p');
  memberDetails.classList.add('member-details');
  memberDetails.textContent=obj.textContent;

  memberTextContent.appendChild(memberName);
  memberTextContent.appendChild(memberJob);
  memberTextContent.appendChild(greyLine);
  memberTextContent.appendChild(memberDetails);

  card.appendChild(memberImgContainer);
  card.appendChild(memberTextContent);
  return card;
}

function loadCards(){
  const cardContainer = document.querySelector('.card-container');
  if(window.innerWidth>768){
    for(member in members){
      cardContainer.appendChild(createCard(members[member]));
    }
  }
}

console.log('loadcards');

loadCards();