import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

// doublon avec la config de l'app (app.config.ts)
// encore utile en version >=17 ?
@NgModule({
	declarations: [],
	imports: [HttpClientModule],
	providers: [],
	bootstrap: [],
})
export class AppModule {}
