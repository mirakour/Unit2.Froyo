// Prompt the user for a list of froyo flavors separated by commas.

const userInput = prompt(
    "Enter your froyo flavors, separated by commas:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // Convert the user input into an array of flavors.
  const flavorArray = userInput.split(",");
  
  // Display froyo flavors slected by user.
  console.log("The Froyo flavors selected are:", userInput)

  // Function to count the occurrences of each flavor
  function countFlavors(flavorList) {
    const flavorCounts = {};
  
    for (let i = 0; i < flavorList.length; i++) {
      const flavor = flavorList[i].trim().toLowerCase(); // Normalize input
      if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        flavorCounts[flavor] = 1;
      }
    }
  
    return flavorCounts;
  }
  
  // Get the counted flavor orders
  const flavorCounts = countFlavors(flavorArray);
  
  // Display the results in the console as a table
  console.table(flavorCounts);