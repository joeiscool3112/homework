
const user = {
  username: 'joe_tran',
  email: 'joe@example.com',
  age: 25,
  skills: ['HTML', 'CSS', 'JavaScript']
};

console.log(user);
user.age = 26;
console.log(user);
delete user.email;
console.log(user)
if (user.hasOwnProperty("username"))
    console.log("co ten");
else
    console.log("khong co ten");
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}