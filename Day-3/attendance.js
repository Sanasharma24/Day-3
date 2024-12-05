// Function to check eligibility for semester exam
function checkEligibility(totalClasses, attendedClasses) {
    // Calculate attendance percentage
    let attendancePercentage = (attendedClasses / totalClasses) * 100;

    // Check eligibility
    if (attendancePercentage >= 75) {
        console.log("Eligible for the semester exam.");
    } else {
        console.log("Not eligible for the semester exam.");
    }
}

// Example usage
let totalClasses = 100;      // Total classes conducted
let attendedClasses = 80;    // Classes attended by the student

checkEligibility(totalClasses, attendedClasses);
