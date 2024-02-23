const dancer1 = {
    name: "Kike",
    age: 26
}

const dancer2 = {
    name: "Abdiel",
    age: 27
}

function dance() {
    console.log(`${this.name} is dancing el cuero del tambor at the age of ${this.age}`)
}

const danceAbdiel = dance.bind(dancer2)
const danceKike = dance.bind(dancer1)

danceAbdiel()
danceKike()
