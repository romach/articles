# Create custom pipe

In  this example we will output list pf messages on the main page.

This list should be filtered according query in `Search` input.

If `Search` input is empty we should output all messages.

## Create prototype

- initialize several messages in `AppComponent`
- output all messages
- create input
- create properties in `AppComponent`:
  - `messages`
  - `searchQuery`
- add `ngModel` to input
  - import `FormsModule` to `AppModule`

## Create custom pipe

- create `SearchPipe` class in `search.pipe.ts`
- implement `transform()` from `PipeTransform` interface
  - return filtered messages according query string
- add `Pipe` annotation with name `search`
- import `Pipe` and `PipeTransform` from `'@angular/core'`
- import `SearchPipe` to `AppModule`

## Use custom pipe

```
*ngFor="let message of (messages|search:searchQuery)"
```

- `messages` - initial messages
- `search` - pipe
- `searchQuery` - query from input