import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person, PersonSchema } from './person.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Person.name, schema: PersonSchema },
    ]),
  ],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
