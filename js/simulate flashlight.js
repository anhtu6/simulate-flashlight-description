let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    }
    this.getEnergy = function () {
        return this.energy;
    }
    this.decreaseEnergy = function () {
        if (this.energy>0) {
            this.energy--;
        }
    }
};

let Flashlamp = function () {
    this.setBattery = function () {
        this.battery = battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status){
            alert('Lighting');
        } else {
            alert('Not lighting');
        }
    };
    this.turnOn = function () {
        this.status =true;
    }
    this.turnOff = function () {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(10);
let flashlamp = new Flashlamp();
flashlamp.setBattery(battery);

document.write('Battery info:'+flashlamp.getBatteryInfo()+'<br/>');
flashlamp.light();

document.write('Turn on<br/>')
flashlamp.turnOn();
flashlamp.light();
document.write('Battery info:'+flashlamp.getBatteryInfo()+'<br/>');

document.write('turn off<br/>');
flashlamp.turnOff();
flashlamp.light();