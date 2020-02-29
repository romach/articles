# Using of fetch() method 

[**Demo**](https://romach.github.io/examples/javascript/fetch/demo.html) | [**Source code**](https://github.com/romach/examples/tree/master/javascript/fetch)

In this example we fetch users from https://jsonplaceholder.typicode.com Rest API and show them on page.

## Fetch information from the server

We use `fetch()` in two steps:

- asynchronously get response;
- asynchronously get json from response;

Let's create function that will output all users to console:

```javascript
async function fetchUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return await response.json();
}
fetchUsers().then(users => console.log(users));
```

## Build DOM nodes

To build DOM node for user we need to make 3 steps

1. create HTML Template for user;
2. create HTML Node for user with template;
3. add `user` node to parent node;

In our example we use simple template:

```html
<strong>${user.username}</strong> - <a href="mailto:${user.email}">${user.email}</a>
```

To create HTML Node for user we use `document.createElement('div')` and then `node.insertAdjacentHTML()` to add content inside `div` tag.

To add user Node to parent we use `parentNode.appendChild(childNode)` method.

```javascript
fetchUsers().then(users => {
  const rootUsersNode = document.querySelector(".users");
  users.forEach(user => {
    const userNode = document.createElement("div");
    const content = `<strong>${user.username}</strong> - <a href="mailto:${user.email}">${user.email}</a>`;
    userNode.insertAdjacentHTML("afterbegin", content);
    rootUsersNode.appendChild(userNode);
  });
});
```