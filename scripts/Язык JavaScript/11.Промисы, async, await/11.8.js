// 1) Заменить обычную функцию на async/await
async function loadJson(url) {

    let response = await fetch(url);
    if (response.status == 200) {
          return response.json();
    } else {
          throw new Error(response.status);
    }

  }
  
loadJson('no-such-user.json')
.catch(alert);
// throw new HttpError(response);
// 2)
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
// Просто функция из первого примера
async function loadJson(url) {

    let response = await fetch(url);
    if (response.status == 200) {
          return response.json();
    } else {
          throw new HttpError(response);
    }

  }
  
// Заменить рекурсию на цикл?
async function demoGithubUser() {
    let user;
    while (true) {
        let name = prompt("Введите логин?", "iliakan");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name}.`);
            return user;
        }
        catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
              } else {
                throw err;
              }
        }
    }
}
  
demoGithubUser();

// 3)
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"

    wait().then(promise => alert(promise));
  }