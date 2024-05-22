/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];//we use const as it is immutable and can store permanent values;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyecolor, accessory) {
  const NFT = {
       "name" : name,
       "eyecolor" : eyecolor,
       "accessory" : accessory,

};
 NFTs.push(NFT);
console.log("MINTED:" +name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for(let i = 0; i < NFTs.length; i++){
      console.log("\nID:"+ (i+1))
      console.log("Name:\t \t" + NFTs[i].name);// Also I can Use console.log(NFTs[i]);
      console.log("Eyecolor: \t" + NFTs[i].eyecolor);
      console.log("Accessory: \t" + NFTs[i].accessory);//another way to access object property is object_name[Property_name];
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n TOTAL NUMBER OF NFTs THAT WE HAVE MINTED IS: " +NFTs.length);
}

// call your functions below this line
mintNFT("Mansidak", "Brown", "Watch");
mintNFT("Gurpreet", "Black", "Bracelet");
mintNFT("Gurdeep", "Brown", "Iron Bracelet ");//So Here are three minNFT as given to perform

listNFTs();
getTotalSupply();

