export class Meal{
    id: number
    imgSrc: string
    heading: string
    time: string
    calories: string
    people: number
    difficulty: string
    intro: string
    advice: string
    fat: string
    sugar: string
    salt: string
    protein: string
    carbs: string
    fiber: string
    ingredients: string
    bullets: string[]
    constructor(
        id: number, 
        imgSrc: string, 
        heading: string, 
        time: string, 
        calories: string, 
        people: number, 
        difficulty: string, 
        intro: string, 
        advice: string, 
        fat: string, 
        sugar: string,
        salt: string,
        protein: string,
        carbs: string,
        fiber: string,
        ingredients: string,
        bullets: string[]
        ){
        this.id = id
        this.imgSrc = imgSrc
        this.heading = heading
        this.time = time
        this.calories = calories
        this.people = people
        this.difficulty = difficulty
        this.intro = intro
        this.advice = advice
        this.fat = fat
        this.sugar = sugar
        this.salt = salt
        this.protein = protein
        this.carbs = carbs
        this.fiber = fiber
        this.ingredients = ingredients
        this.bullets = bullets
    }
}