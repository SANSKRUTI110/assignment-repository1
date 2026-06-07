console.log("Student Result Generation Started...");

// Step 1 - Checking Student Record
function checkStudentRecord() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checking Student Record...");
            resolve();
        }, 2000);
    });
}

// Step 2 - Calculating Marks
function calculateMarks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calculating Marks...");
            resolve();
        }, 2000);
    });
}

// Step 3 - Generating Result
function generateResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Generating Result...");
            resolve();
        }, 2000);
    });
}

// Step 4 - Result Generated Successfully
function resultGenerated() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Result Generated Successfully!");
            resolve();
        }, 2000);
    });
}

// Async/Await Function
async function studentResult() {
    await checkStudentRecord();
    await calculateMarks();
    await generateResult();
    await resultGenerated();

    console.log("Student Name: Rahul");
    console.log("Total Marks: 450");
    console.log("Percentage: 90%");
    console.log("Grade: A");
}

studentResult();