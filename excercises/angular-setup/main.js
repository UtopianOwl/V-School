var app = angular.module('playerApp', []);

var names1 = ['Farinant', 'Feragorma', 'FighterDj', 'Flownpl', 'Forbushuma', 'FraserWoman', 'Freedsetch', 'Gallerson', 'Georgas', 'Glossbo', 'Grandista', 'GuantoIs', 'Harterment', 'HartMs', 'HiConn', 'Hugzhopper', 'HumanBoard', 'Chiquita', 'Huntocked', 'Iamaindata', 'Ideallywh', 'Ightligh', 'InfernoBoost', 'IntcatLaw', 'Ionisered', 'Itilinell', 'Joshershar', 'JuzGlossy', 'Kehiveni', 'KenjiTary'];
var names2 = ['KiddoTabSaren', 'KidGiggly', 'KroolVampLadycept', 'LeonTalent', 'Letteriumg', 'Lillismit', 'ListBoboNaybor', 'Livemcm', 'Lotsontr', 'LouThin', 'LovesLeonSmarter', 'LudaBloomRecipe', 'Ludantalkr', 'Madevolati', 'Marquette', 'Marxodego', 'Maryserte', 'MilkSocial2hot', 'NozyReader', 'Actitele', 'Activetsto', 'Aetionius', 'Agiterst', 'AllyScooby', 'Anguristeum', 'Annashleart', 'Apeironym', 'AshDj', 'Babixzakar', 'BadTainted'];
var names3 = ['Balactowsaw', 'Barnbill', 'Berkswo', 'Blikinslina', 'Bloggerma', 'BoboDiary', 'BoltZin', 'Borguetica', 'Bristleseel', 'BugChan', 'Buzzlebond', 'CarThrill', 'Carticia', 'CatLukeMax', 'Charmsahou', 'Chiceterie', 'ChikkPeatear', 'ChiriVibrant', 'Chivitas', 'ChooseCrown', 'Commuregi', 'Costerfo', 'Dampipeed', 'Doralight', 'Dorimprm', 'DravenTalent', 'Dubyantekur', 'Eckoenme', 'Exectytv', 'Extimete'];
var names4 = ['Moregmou', 'MurphyWarRosa', 'Nativell', 'Naybormesi', 'NeilBulletin', 'NetwoodiaNip', 'NightOlympicTeenage', 'PeakCasual', 'Peateartf', 'Peractolo', 'Perryco', 'PiraChiariThebest', 'PlatinumSlim', 'Poettelent', 'Popperci', 'Popularte', 'Prytans', 'Prythenwi', 'Quotatic', 'RecipeTinker', 'ReggaeGooble', 'Relynxtext', 'RunningWasabi', 'Sepofran', 'Shark', 'SupremeShowereise', 'Solomonchbu', 'SpectumanThegalter'];

function Player(handle, rank, clan) {
    this.handle = handle();
    this.rank = rank();
    this.clan = clan();
}

function handle() {
    var random = Math.floor(Math.random() * 28);
    return names4[random];
}

function rank() {
    return Math.floor(Math.random() * 999900) + 100
}

function roll30() {
    return Math.floor(Math.random() * 30)
}

function clan() {
    var clanArray = [],
        name1 = names1[roll30()],
        name2 = names2[roll30()],
        name3 = names3[roll30()];
    clanArray = [name1, name2, name3];
    return clanArray;
}

app.controller('playerCtrl', ['$scope', function ($scope) {
    $scope.player = {
        kills: []
    }
for (var i = 0; i < 15; i++) {
        var killed = new Player(handle, rank, clan);
        $scope.player.kills.push(killed);
}
}]);