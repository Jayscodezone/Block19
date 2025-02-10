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
  const header= document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Price", "Occupation"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  header.appendChild(headerRow);
  table.appendChild(header); // Append the table header to the table
  rootContainer.appendChild(table); // Append the table to the root div

// Calculate average price  and update the Dom 
const averagePriceDiv = document.createElement("h2");
averagePriceDiv.id = "average-price";
rootContainer.appendChild(averagePriceDiv);

function updateAveragePrice() {
  if (freelancers.length === 0) return;

  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const average = (total / freelancers.length).toFixed(2);

  document.getElementById("average-price").textContent = `Average Price: $${average}`;
}
  /**
   * �� STEP 4:
   *    Create a function to render the Freelancers in our Freelancers array
   */
  function renderFreelancers(freelancers) {
    const tbody = document.createElement("tbody");
    freelancers.forEach((freelancer) => {
      const row = document.createElement("tr");
      Object.values(freelancer).forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

    // append new rows

    if (table.querySelector("tbody")) {
      table.removeChild(table.querySelector("tbody"));
    }
    table.appendChild(tbody);
   
    //update Average Price 
    updateAveragePrice(freelancers);
  }




  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
    renderFreelancers(freelancers);
  


/**
 * 👉 STEP 6:
 *    Create a function to add a new Freelancer to the Freelancers array
 */
function addFreelancer() {
  const newName = names[Math.floor(Math.random() * names.length)];
  const newOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const newPrice = Math.floor(Math.random() * 100) + 1;

  const newFreelancer = { name: newName, price: newPrice, occupation: newOccupation };
  freelancers.push(newFreelancer);

  renderFreelancers(freelancers);
}
/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer every second
 */

setInterval(addFreelancer, 1000);
}

//call init function
init();

