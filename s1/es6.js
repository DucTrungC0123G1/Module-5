let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
// ex1
// let ratings = courses.filter((count => count.rating > 4));
// console.log(ratings);


// let ratings = courses.filter((count => count.rating < 4));
// console.log(ratings);

// <--------------------------->
// ex2
// let addCourses = [];
// courses.map((count=>{
//     if (count.rating<4){
//         addCourses.push(count)
//     }
//     return addCourses;
// }))
// let a = addCourses.map((count) =>
//     count.id + '-'+count.title+'-'+count.rating
// )
// console.log(a);


let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

let mergeArray = [...courses,...addedCourses];
console.log(mergeArray);