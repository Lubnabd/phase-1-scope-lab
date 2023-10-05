// Write your solution in this file!


var customerName;


function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
      customerName = customerName.toUpperCase();
    }
  }


  function setBestCustomer() {
    bestCustomer = 'not bob';
  }

  setBestCustomer();


  function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
  }  

  const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer(newCustomer) {
  try {
    leastFavoriteCustomer = newCustomer; // Attempt to change the constant
  } catch (error) {
    console.error(error.message); // Log any error that occurs
  }
}