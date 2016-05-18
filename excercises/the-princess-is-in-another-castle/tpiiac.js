var starCount = 0;

function Playa() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Small";
    this.star = false;
    this.gameActive = true;
    this.setName = function (namePicked) {
        this.name = namePicked;
    };
    this.gotHit = function () {
        if (!this.star) {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Small";
            } else if (this.status === "Small") {
                this.gameActive = false;
                this.status = "Dead";
            }
        }
    };
    this.gotPowerup = function () {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    };
    this.addCoin = function () {
        this.totalCoins++;
    };
    this.print = function () {
        console.log("\nName: " + this.name);
        console.log("Coins: " + this.totalCoins);
        console.log("Star: " + this.star)
        console.log("Satus: " + this.status + "\n");
        console.log("------------------------------------")
    };
    this.gotStar = function () {
        if (this.status !== "Dead") {
            this.star = true;
        }
    }

}

function getName() {
    if (Math.floor(Math.random() * 2) === 0) {
        return "Mario";
    } else {
        return "Luigi"
    }
}

function game(playa) {
    var roll = Math.floor(Math.random() * 7);
    if (playa.star) {
        if (starCount > 4) {
            playa.star = false;
            starCount = 0;
        } else {
            starCount++;
        }
    }
    switch (roll) {
    case 0:
    case 1:
        playa.gotHit();
        break;
    case 2:
    case 3:
        playa.gotPowerup();
        break;
    case 4:
    case 5:
        playa.addCoin();
        break;
    case 6:
        playa.gotStar();
        break;
    default:
        break;
    }
    console.log(roll);
    playa.print();
}

function playgame(n) {
    var playa = new Playa();
    playa.setName(getName());
    for (var i = 0; i < n; i++) {
        if (!playa.gameActive) {
            break
        } else {
            game(playa);
        }
    }
}

playgame(20);