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
const rowEl = document.querySelector(".row");
// console.log(rowEl);

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
      <div class="card">
          <div class="card-body">
              <img src="assets/${img}" alt="" class="card-img-top">
              <h3>${name}</h3>
              <div>${role}</div>
              <div>${email}</div>
          </div>
      </div>
    </div>
    `;

  return memberMarkup;
}
