const city = "Wroclaw";
const country = "Poland";
const zipCode = 54105;

export const query = `
query MyQuery {
    userAddress(address: {city: "${city}", country: "${country}}",  zipCode: "${zipCode}"}) {
      street
      location
    }
  }    
` as const;
