# HttpClient example

In this example we will fetch users from <https://jsonplaceholder.typicode.com/users>

## Add `HttpClientModule` to project

- import `HttpClientModule` from `'@angular/common/http'`
- add `HttpClientModule` to project's imports
- this module allows us to inject `HttpClient` to our code

## Create service

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(http: HttpClient) { }
}
```

We use `@Injectable` to tell Angular that this service can be injected to component's constructor as a dependency.

Inject `HttpClient` in constructor.

## Service method to fetch users

```typescript
fetchUsers():Observable<User[]> {
  return this.http.get<User[]>(UserServiceService.USERS_FETCH_URL);
}
```

## Add component method to fetch response from server

Invoke service method on component initialization