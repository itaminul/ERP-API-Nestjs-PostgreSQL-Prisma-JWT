import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import { error } from 'console';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { CountriesService } from 'src/global-setup/countries/countries.service';
import { CreateCountriesDto } from 'src/global-setup/countries/dto/create.countries.dto';
import { UpdateCountriesDto } from 'src/global-setup/countries/dto/update.countries.dto';
import { JavascriptService } from './javascript.service';

@Controller('javascript')
export class JavascriptController {
    constructor(private readonly countriesService: JavascriptService) { }

    @Get()
  
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {

            const ids = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
            const newid = [55]
            const searchId = 51
            const res = await this.countriesService.getAll()
            const newArray = res.reduce((acc, obj) => obj.id, 0)

            //value join, sub, add
            const joinedValue = ids.reduce(joinString)

            //remove duplicate value
            const uniqueIds = ids.reduce(function (accumulator, currentValue): any {
                 if(accumulator.indexOf(currentValue) === -1) {
                    accumulator.push(currentValue)
                 }
                 return accumulator;
            }, [])

            //grouping object by a property

            const people = [
                { name: "A", age: 21},
                { name: "B", age: 21},
                { name: "C", age: 55},
                { name: "D", age: 55},
                { name: "E", age: 88},
                { name: "F", age: 10},
                { name: "G", age: 10},
                { name: "H", age: 2},
                { name: "I", age: 2},
            ]

            const groupBy = people.reduce(function(accumulator, currentObject): any {
                            const key = currentObject.age;
                            if(!accumulator[key]) {
                                accumulator[key] = []
                            }
                            accumulator[key].push(currentObject)
                            return accumulator;
            }, [])

            //value push in the last

            newid.push(88);

            //search id

            const indexOfValue = ids.indexOf(searchId);

            const indexUsindFindIndex = ids.findIndex(item => item===searchId)

            //searching in an Object
            const obj = {
                key1: 'value1',
                key2: 'value2',
                key3: 'value3'
            }
            const keyToSerch = 'key2';
            const hasProperty= obj.hasOwnProperty(keyToSerch)
            const existsUsingInOperator = keyToSerch in obj;
            //searching in an Array Objects

            const arrayOfObjects = [
                { id: 1, name: 'A'},
                { id: 2, name: 'B'},
                { id: 3, name: 'C'}
            ]
            const idToSearch = 'B';
            const foundObject = arrayOfObjects.find(obj => obj.name === idToSearch)

            //string methods
            const text = 'Hello, world';
            const substring = 'world';
            const index = text.indexOf(substring);
            const includesSubstring = text.includes(substring);

            const newArrayOfObjects = [
                {id: 1, name: 'A'},
                {id: 2, name: 'B'},
                {id: 3, name: 'C'}
            ]

            const findNewArray = newArrayOfObjects.find(obj => obj.name === 'A')
            let foundObjecta = null;
            newArrayOfObjects.forEach(obj => {
                if(obj.name==='C') {
                    foundObjecta = obj
                }
            })

            let foundNewObject = null;
            for(const obj of newArrayOfObjects) {
                if(obj.id === 2) {
                    foundNewObject = obj
                    break;
                }
            }

            const nameArrays = []
            for(const obj of newArrayOfObjects) {
                nameArrays.push(obj.id)
            }
            //map

            const valueArray3 = ['a', 'b', 'c']
            const array2 = newArrayOfObjects.map(obj => obj.name)

            const array3 = valueArray3.map((value, index) => ({
                id: index,
                newName: value
            }))

            //loop
            const arrayObject=[]
            for(let i =0; i<valueArray3.length; i++) {
                arrayObject.push({
                    id: i, 
                    name: valueArray3[i]
                })
            }
            //Creating an Array of Objects from a Simple Array

            const simpleArray = ['Bangladesh','Australia','Canada','America']
            const arrayObject1 = simpleArray.map((value, index) => ({
                generateNewId: index,
                geneateNewName: value
            }))
            const arrayObject2 = []
            simpleArray.forEach((value, index) => {
                arrayObject2.push({
                    id: index,
                    name: value
                })
            })

            const arrayObject3=[];
            for(const nv of simpleArray) {
                arrayObject3.push({
                    id: index,
                    name:nv
                })
            }

            //multiple ways  Creating an Array from a  Array Objects

            const array1 = arrayOfObjects.map(obj => obj.id)
            const array4 = []
            for(const obj of arrayOfObjects) {
                array4.push(obj.id)
            }

            const array5=[...arrayOfObjects]
            const array6= arrayOfObjects.slice()


            //using the set objects

            const uniqueNumbers = new Set();
            uniqueNumbers.add(10);
            uniqueNumbers.add(20);
            uniqueNumbers.add(30);
            uniqueNumbers.add(10);
            const sUniqNum = new Set(ids)
            const vsearch = 10;
            const hasValue = sUniqNum.has(vsearch)
            const response = await this.countriesService.getAll()
            return { message: "Show successfully", status: HttpStatus.OK, hasValue}
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){

            }
        }
        throw error
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createCountriesDto: CreateCountriesDto, @AuthUserInfo() authUserInfo: Users) {
        try {
         //   console.log("createCountriesDto", createCountriesDto)
            const response = await this.countriesService.create(createCountriesDto,authUserInfo)
            return { message: "Created successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){

            }
        }
        throw error
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCountriesDto: UpdateCountriesDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.countriesService.update(id, updateCountriesDto,authUserInfo)
            return { message: "Updated successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){

            }
        }
        throw error
    }
}

function joinString(accumulator, currentValue) {
    return accumulator - currentValue;
}

