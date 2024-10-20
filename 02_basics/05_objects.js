const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// Object Destructure
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);


// API response 
// JSON - key should be strings only
// {
//     "coursename": "js in hindi",
//     "price": "999",
//     "courseInstructor": "hitesh"
// }

// Note :- use jsonformator tools to analyse JSON  