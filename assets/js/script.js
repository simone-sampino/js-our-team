const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// DOM
const titleEl = document.getElementById("title");
const paragraphEl = document.querySelector("p");
const rowEl = document.querySelector(".row");
// console.log(titleEl, rowEl);

// add title
const titleMarkup = `Meet our Team`;

function generateTitleMarkup(title) {
  title.insertAdjacentHTML("beforeend", titleMarkup);
}

generateTitleMarkup(titleEl);

// add paragraph
const paragraphMarkup = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere architecto accusamus sed hic omnis, eos quibusdam! Aspernatur non facilis eos aliquid quam accusamus voluptatem eius, officia incidunt! Nesciunt, adipisci illum.`;

function generateParagraphMarkup(paragraph) {
  paragraph.insertAdjacentHTML("beforeend", paragraphMarkup);
}

generateParagraphMarkup(paragraphEl);

// add cards
renderTeamMembers(teamMembers, rowEl);

function renderTeamMembers(teamMembers, nodeEl) {
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    // console.log(member);

    const memberMarkup = generateMembersMarkup(member);
    // console.log(memberMarkup);

    nodeEl.insertAdjacentHTML("beforeend", memberMarkup);
  }
}

function generateMembersMarkup(member) {
  const { name, role, email, img } = member;
  // console.log(name, role, email, img);

  const memberMarkup = `
    <div class="col">
      <div class="card bg-black">
          <div class="card-body d-flex">
              <img src="assets/${img}" alt="">
              <div class="ms-4 d-flex flex-column justify-content-evenly">
              <h3 class="text-light">${name}</h3>
              <div class="text-light">${role}</div>
              <div class="text-info">${email}</div>
              </div>
          </div>
      </div>
    </div>
    `;

  return memberMarkup;
}
