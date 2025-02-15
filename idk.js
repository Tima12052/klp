let FirstName = prompt("Whats your first name?");
let SecondName = prompt("Whats your second name?");
let Age = prompt("How old are you?");
let UserCountry = prompt("Whats your country?");
let UserState = prompt("Whats your state?");
let Email = prompt("Whats your Email?");
let Password = prompt("Whats your Password?");
let ConfirmPassword = prompt("Confirm your Password");

const userData = {
    firstName: FirstName,
    secondName: SecondName,
    age: Age,
    userCountry: UserCountry,
    userState: UserState,
    email: Email,
    password: Password,
    confirmPassword: ConfirmPassword
};

fetch('tima12052.github.io/klp/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});