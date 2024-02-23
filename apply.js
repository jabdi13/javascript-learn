const dancer1 = {
    name: "Kike",
    age: 26
}

const dancer2 = {
    name: "Abdiel",
    age: 27
}

function dance(arg1, arg2) {
    console.log(`${this.name} is dancing el cuero del tambor at the age of ${this.age}`)
    console.log(arg1, arg2)
}

dance.apply(dancer1, ["arg1", "arg2"])
dance.apply(dancer2, ["arg1", "arg2"])
