import { Injectable } from '@nestjs/common';
import { PersonDto } from './person.dto';
import { Person } from './person.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {

  constructor(
    @InjectModel(Person.name)
    private readonly personModel: Model<Person>,
  ) {}
    

  getPerson(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

   async getPersonById(id : string): Promise<Person | null> {
    return this.personModel.findOne({_id : id}).exec();
   }

  async addPerson(personDto: PersonDto): Promise<Person> {
      return await this.personModel.create(personDto);
  }

  async deletePerson(id: string): Promise<Person | null> {
    return await this.personModel.findOneAndDelete({_id: id}).exec();
  }

  async updatePerson(
    id: string,
    personDto: PersonDto,
  ): Promise<Person | null> {
    await this.personModel.updateOne(
      { _id: id },
      {
        firstName: personDto.firstName,
        lastName: personDto.lastName,
        address: personDto.address,
        phone : personDto.phone
      },
    );
    return this.getPersonById(id);
  }
}
