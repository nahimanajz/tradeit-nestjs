import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Global() // to make database module be accessible in other modules
@Module({
  providers: [DatabaseService],
  exports:[DatabaseService] // now it can be called injected in other modules
})
export class DatabaseModule {}
