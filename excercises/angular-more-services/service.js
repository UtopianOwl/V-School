angular.module('cartoonApp')
    .service('mainSrvc', function () {
        this.cartoonArray = [
            {
                'name' : 'Power Puff Girls',
                'imgUrl' : 'http://4.bp.blogspot.com/-vwxFxx8CY2Q/T2eB4GDRnjI/AAAAAAAAA7g/W5SbR6DzDIg/s1600/PowerPuff_Girls.png',
                'description' : 'Three young girls with extraordinary abilities!'
            },
            {
                'name' : 'Jonny Bravo',
                'imgUrl' : 'http://img07.deviantart.net/7a74/i/2012/068/e/d/johnny_bravo_vector_by_supermariogalaxy13-d4s885d.png',
                'description' : "Hey mama, I'm Awesome!"
            },
            {
                'name' : 'Courage the Cowardly Dog',
                'imgUrl' : 'http://static.giantbomb.com/uploads/original/8/82962/1987677-courage_the_cowardly_dog.png',
                'description' : 'The best worst hero!'
            }
        ];
        this.addCartoon = function (character) {
            this.cartoonArray.push(character);
            return this.cartoonArray;
        }
    });