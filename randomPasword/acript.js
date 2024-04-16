const randomPassword = () => {
let displayPassword = document.querySelector('#displayPassword')
let PasswordLengthe = document.querySelector('#PasswordLengthe')
let error = document.querySelector('*error')
let Password = '';

let characters = 'qwertyuiopasdfhjcdnxclA. B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z.0123456789!@#$%^&*()_+!@#?"{}[]./,'
}


if (PasswordLength === 0){
  error.innerHTML = 'please select password length';
  error.style.color = 'red';

}


for (let i = 0; i < PasswordLength; i++){
  Password =
  password + characters[Math.floor(Marh.random() * characters.length)]
  displayPassword.value = password;
}