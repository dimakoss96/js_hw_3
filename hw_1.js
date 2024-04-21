let person = {
    "id": "0041",
    "name": "Alice 41",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 41",
        "Hiking 41"
    ]
};
console.log("Вся інформація про об'єкт:", person);
console.log("Останнє хоббі:", person.hobbies[person.hobbies.length - 1]);
console.log("Address:", person.address.city + ", " + person.address.street);
