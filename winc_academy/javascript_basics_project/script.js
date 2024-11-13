'use strict';
const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();


// // Initialize an empty profile object and matchProfile object
let profile = {};

// // Collect user input data for the profile
while (true) {
    let first_Name = String(prompt("What is your first name?"));
    let last_Name = String(prompt("What is your last name?"));

    if (first_Name && last_Name) {
        profile.first_name = first_Name;
        profile.last_name = last_Name;
    } else {
        console.log("Please enter a valid first and last name.");
        continue;
    }

    let age = Number(prompt("What is your age?"));
    if (age >= 18) {
        profile.age = age;
    } else {
        console.log("You must be 18 or older.");
        continue;
    }

    let minAgeInterest = Number(prompt("What is your minimum age interest?"));
    let maxAgeInterest = Number(prompt("What is your maximum age interest?"));
    if (minAgeInterest >= 18 && maxAgeInterest >= 18 && maxAgeInterest > minAgeInterest) {
        profile.min_age_interest = minAgeInterest;
        profile.max_age_interest = maxAgeInterest;
    } else {
        console.log("Minimum and maximum age interests must be valid.");
        continue;
    }

    let gender = prompt("What is your gender? M/F/X");
    if (["M", "F", "X"].includes(gender)) {
        profile.gender = gender;
    } else {
        console.log("Gender must be M, F, or X.");
        continue;
    }

    let genderInterest = prompt("What is your gender interest? M/F/X");
  
    if (["M", "F", "X"].includes(genderInterest)) {
        profile.gender_interest = genderInterest;
    } else {
        console.log("Gender interest must be M, F, or X.");
        continue;
    }

    let location = prompt("What is your location? rural or city");
    if (["rural", "city"].includes(location)) {
        profile.location = location;
    } else {
        console.log("Location must be either rural or city.");
        continue;
    }

    break; // Exit the loop once profile is filled with validated data
}



// Find and store matches in matchProfile
let matches = []; // Array to hold all matched profiles

for (let i = 0; i < mockData.length; i++) {
  
            let mockProfile = mockData[i];
  
            if(// Age range matches
            profile.age >= mockProfile.min_age_interest &&
            profile.age <= mockProfile.max_age_interest &&
            mockProfile.age >= profile.min_age_interest &&
            mockProfile.age <= profile.max_age_interest &&
            // Gender interest matches
            profile.gender === mockProfile.gender_interest &&
            profile.gender_interest === mockProfile.gender &&
            // Location matches
            profile.location === mockProfile.location){
            matches.push(mockProfile);
            console.log(matches);
            }
   
        
}

// Display the matching profiles in a readable format
if (matches.length > 0) {
  
    console.log(`Found ${matches.length} match(es):`);
  
          for(const match of matches){
          console.log(`${match.first_name},${match.last_name},${match.age}`);
          }
  
  
} else {
    console.log("No matching profiles found.");
}






