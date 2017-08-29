# Taza
Key/Value Object Store. Safe or empty by design.

## API
### TazaService.do('key')
Returns stored value or empty object.

### TazaService.do('key', value)
Saves and gets the value reference.

### Install
````
import { TazaService } from '@pomada/taza';

@NgModule({
  providers: [TazaService]
})
export class AppModule { }

export class AppComponent {
  constructor(private taza: TazaService) { }
}
````