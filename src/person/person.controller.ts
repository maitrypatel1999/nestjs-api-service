import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonService } from './person.service';
import { Person } from './person.schema';
import { PersonDto } from './person.dto';

@Controller('/api/person')
@ApiTags('Crestron Passcode')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getPerson(): Promise<Person[]> {
    return this.personService.getPerson();
  }


  @Get(':id')
  async getPersonById(@Param('id') id: string): Promise<Person | null> {
    return this.personService.getPersonById(id);
  }


  @Post()
  addPerson(@Body() person: PersonDto): Promise<Person | null> {
    return this.personService.addPerson(person);
  }

  @Delete(':id')
  deletePerson(@Param('id') id : string): Promise<Person | null> {
    return this.personService.deletePerson(id);
  }

  @Put(':id')
  updatePerson(@Param('id') id: string, @Body() person: PersonDto): Promise<Person | null> {
    return this.personService.updatePerson(id, person);
  }

}
