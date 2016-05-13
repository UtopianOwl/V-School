// This function will be used as my method 
var levelFunction = function () {
    console.log(this.name)
    for (var i = 0; i < this.skills.length; i++) {
        console.log(this.skills[i].name + " level " + this.skills[i].proficiency);
    }
}
var caveMan = {
        name: "Gurk",
        age: 26,
        eaten: true,
        height: 73,
        weight: 12,
        tribe: [
            {
                name: "Ruk",
                age: 31,
                eaten: true,
                height: 59,
                weight: 13,
                skills: [
                    {
                        name: "hunting",
                        proficiency: 5
                    },
                    {
                        name: "crafting",
                        proficiency: 4
                    },
                    {
                        name: "storytelling",
                        proficiency: 5
                    },
                ],
//      Here is that method
                showMe: levelFunction
            },
            {
                name: "Arr",
                age: 16,
                eaten: false,
                height: 70,
                weight: 10,
                skills: [
                    {
                        name: "gathering",
                        proficiency: 3
                    },
                    {
                        name: "fire",
                        proficiency: 4
                    },
                    {
                        name: "astronomy",
                        proficiency: 5
                    },
                ],
                showMe: levelFunction
            },
            {
                name: "Ish",
                age: 20,
                eaten: true,
                height: 63,
                weight: 8,
                skills: [
                    {
                        name: "gathering",
                        proficiency: 4
                    },
                    {
                        name: "cooking",
                        proficiency: 5
                    },
                    {
                        name: "crafting",
                        proficiency: 5
                    },
                ],
                showMe: levelFunction
        },
            {
                name: "Gog",
                age: 29,
                eaten: false,
                height: 65,
                weight: 14,
                skills: [
                    {
                        name: "hunting",
                        proficiency: 3
                    },
                    {
                        name: "gathering",
                        proficiency: 3
                    },
                    {
                        name: "drinking",
                        proficiency: 5
                    },
                ],
                showMe: levelFunction
            },
        ],
        skills: [
            {
                name: "hunting",
                proficiency: 4
            },
            {
                name: "planning",
                proficiency: 5
            },
            {
                name: "leadership",
                proficiency: 3
            },
        ],
}
    // Add two properties to an object
caveMan.tribe[3].drunk = true;
caveMan.tribe[3].lazy = true;

// Add two items to an array
caveMan.tribe[1].skills[3] = {
    name: "prophecy",
    proficiency: 2
}
caveMan.tribe[1].skills[4] = {
    name: "mysticism",
    proficiency: 2
}

for (var j = 0; j < caveMan.tribe.length; j++) {
    caveMan.tribe[j].showMe()
}
