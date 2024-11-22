//example freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

//possible names
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//possible occupations
const occupations = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];
 function makeTableRow(parentContainer, textContent){

 }
function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);
  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancers in
   */
  const table = document.createElement("table");
  const col1 = document.createElement("td")
  col1.textContent = "Name"
  table.appendChild(col1)

  const tr1 = document.createElement("tr")
  tr1.textContent="Bob";
  const tr2 = document.createElement("tr")
  tr2.textContent="Emily";
  table.append(tr1,tr2);

  rootContainer.appendChild(table);

  /**
   * �� STEP 4:
   *    Create a function to render the Freelancers in our Freelancers array
   */
  function renderFreelancers(freelancers) {
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)
    freelancers.forEach((freelancer) => {
      const row = document.createElement("tr")
      tbody.appendChild(row)
      Object.values(freelancer).forEach((value) => {
        const cell = document.createElement("td")
        cell.textContent = value
        row.appendChild(cell)
      })
    })
  }
  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  renderFreelancers(freelancers)


/**
 * 👉 STEP 6:
 *    Create a function to add a new Freelancer to the Freelancers array
 */
  function addFreelancer() {
    const newName = names[Math.floor(Math.random() * names.length)]
    const newOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    const newFreelancer = { name: newName, occupation: newOccupation, price: Math.floor(Math.random() * 100) + 1 }
    freelancers.push(newFreelancer)
    renderFreelancers(freelancers)
/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer every second
 * 
 */
setInterval(addFreelancer, 1000);
//call init function
init() ;
