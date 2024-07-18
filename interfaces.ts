interface IFeatures {
    id: number;
    typeName: string;
    requiredBiom: string;
    needResevoir: boolean;
    area: number;
    nutrition: string;
    type: string;
}


interface IAnimal {
    name: string;
    age: number;
    amountFood: number;
    features: IFeatures;
}

interface ISettElement {
    id: number;
    animals: IAnimal[];
    biom: string;
    space: number;
    animalType: string;
    reservoir: boolean;
}


const chimpanzeeFatures: IFeatures = {
    id: 2,
    typeName: 'Chimpanzee',
    requiredBiom: "Rain Forest",
    needResevoir: true,
    area: 2000,
    nutrition: 'leaves',
    type: 'mammal',
}

const Chimpanzee : IAnimal = {
    name: 'Chimpanzee',
    age: 10,
    amountFood: 10,
    features: chimpanzeeFatures,
}


const GorillaFeatures: IFeatures = {
    id: 1,
    typeName: 'Gorilla',
    requiredBiom: "Rain Forest",
    needResevoir: true,
    area: 2000,
    nutrition: 'leaves',
    type: 'mammal',
}

const Gorilla : IAnimal = {
    name: 'Gorilla',
    age: 20,
    amountFood: 10,
    features: GorillaFeatures,
}

const RainForests : ISettElement = {
    id : 1,
    animals : [],
    biom : 'Rain Forest',
    space:2000,
    animalType: 'mammal',
    reservoir: true,
}

function choosenAnimal(animal: IAnimal ,cage : ISettElement):boolean
{
    return  animal.features.requiredBiom === cage.biom &&
            animal.features.needResevoir === cage.reservoir &&
            animal.features.area <= cage.space &&
            animal.features.type === cage.animalType
}


function checkAnimals(cage:ISettElement,animals:IAnimal[]) : string[]
{
    const canLiveTogether: string[] = []
    for (var animal of animals){
        if(choosenAnimal(animal , cage)){
            canLiveTogether.push(animal.name)
        }
    }
    return canLiveTogether;
}

const animals = [Gorilla,Chimpanzee]
console.log(checkAnimals(RainForests,animals))