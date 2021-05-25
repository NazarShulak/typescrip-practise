interface IAnimal {
    typeOfMovement: string;
    says: string;

    info(): void

}

class Bird implements IAnimal {
    public typeOfMovement: string
    public says: string

    constructor(typeOfMovement: string = 'fly', says: string = '') {
        this.typeOfMovement = typeOfMovement;
        this.says = says;
    }

    info() {
        console.log('type of moving: ' + this.typeOfMovement, '\nIt says: ' + this.says)
    }
}

class Cat implements IAnimal {
    public typeOfMovement: string
    public says: string

    constructor(typeOfMovement: string = 'walk', says: string = 'may may') {
        this.typeOfMovement = typeOfMovement;
        this.says = says;
    }

    info() {
        console.log('type of moving: ' + this.typeOfMovement, '\nIt says: ' + this.says)
    }
}

class Fish implements IAnimal {
    public typeOfMovement: string
    public says: string

    constructor(typeOfMovement: string = 'swim', says: string = 'bloblob') {
        this.typeOfMovement = typeOfMovement;
        this.says = says;
    }

    info() {
        console.log('type of moving: ' + this.typeOfMovement, '\nIt says: ' + this.says)
    }
}

// let bird: IAnimal = new Bird()
// bird.info()
// let cat: IAnimal = new Cat()
// cat.info()
// let fish: IAnimal = new Fish()
// fish.info()

abstract class Shape {
    abstract perimetr(): number

    abstract area(): number


    protected constructor() {
    }
}


class Triangle extends Shape {

    constructor(readonly a: number, readonly b: number, readonly c: number) {
        super();
        this.a = a
        this.b = b
        this.c = c
    }

    area(): number {
        const p = (this.a + this.b + this.c) / 2
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    }

    perimetr(): number {
        return this.a + this.b + this.c;
    }

}

class Rectangle extends Shape {
    constructor(private a: number, private b: number) {
        super();
        this.a = a
        this.b = b
    }

    area(): number {
        return this.a * this.b;
    }

    perimetr(): number {
        return 2 * (this.a + this.b)
    }
}

let triangle = new Triangle(4, 7, 8);
let rectangle = new Rectangle(6, 9);

let shapes = [triangle, rectangle];

// shapes.forEach(value => {
//     console.log(value.area())
//     console.log(value.perimetr())
// })