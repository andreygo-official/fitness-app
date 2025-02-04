export class Program {
    id: number
    imgSrc: string
    price: string
    programType: string
    time: string
    intensity: string
    nutrition: string
    info: string
    list: string[]
    constructor(id: number, imgSrc: string, price: string, programType: string, time: string, intensity: string, nutrition: string, info: string, list: string[]){
        this.id = id
        this.imgSrc = imgSrc
        this.price = price
        this.programType = programType
        this.time = time
        this.intensity = intensity
        this.nutrition = nutrition
        this.info = info
        this.list = list
    }
}