let soNguyenTo = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(soNguyenTo(11))


let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mangSoNguyenTo = mangSoNguyen.filter((so) => soNguyenTo(so));
console.log(mangSoNguyenTo);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'new york',
    hobbies: ['reading', 'traveling', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'harvard University'
    }
};

// let student = ['firstName: '+ person.firstName,'gender: '+ person.gender ,'degree:'+person.education.degree,'english: '+person.language[0]];
// console.log(student)

// let student = {...person}
// console.log('FirstName: '+ student.firstName, 'Gender: ' + student.gender, 'Degree: ' + student.education.degree, 'Language: '+ student.language[0])

let {firstName, gender, education: {degree}, language: [language1]} = person;
let student = {firstName, gender, education: degree, language1};
console.log(student);


// <------------------------>

let sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English',
}

let sv2 = {
    name: 'John',
    gender: 'male',
    // degree: 'Bachelor',
    english: 'English',
}

let getInfo = ({firstName = "Quân", degree = "NA"}) => {
    console.log("firstName:", firstName);
    console.log("degree", degree);
};

getInfo(sv1);
console.log(sv2)
getInfo(sv2);