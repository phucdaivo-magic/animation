import Vertor from "./vertor";
window.all = {}
export default class Matrix {
    constructor({ $frame }) {
        this.initState($frame);
        setTimeout(() => {
            this.initData();
        }, 100);
        
    }

    initState($frame) {
        this.$frame = $frame;
        this.pointFirst = null;
        this.pointLast = null;
        this.listPoint = [];
    }

    initData() {
        const _all = JSON.parse(localStorage.getItem('SKILING')) || [];
        const a = JSON.parse(`[{"pointFirst":{"x":662,"y":785},"pointLast":{"x":597,"y":896},"width":1600.833251953125},{"pointFirst":{"x":597,"y":896},"pointLast":{"x":614,"y":963},"width":1600.833251953125},{"pointFirst":{"x":614,"y":963},"pointLast":{"x":718,"y":1048},"width":1600.833251953125},{"pointFirst":{"x":718,"y":1048},"pointLast":{"x":817,"y":1086},"width":1600.833251953125},{"pointFirst":{"x":817,"y":1086},"pointLast":{"x":1225,"y":1231},"width":1600.833251953125},{"pointFirst":{"x":1225,"y":1231},"pointLast":{"x":1336,"y":1297},"width":1600.833251953125},{"pointFirst":{"x":1336,"y":1297},"pointLast":{"x":1362,"y":1396},"width":1600.833251953125},{"pointFirst":{"x":1362,"y":1396},"pointLast":{"x":1303,"y":1492},"width":1600.833251953125},{"pointFirst":{"x":1303,"y":1492},"pointLast":{"x":828,"y":1685},"width":1600.833251953125},{"pointFirst":{"x":828,"y":1685},"pointLast":{"x":709,"y":1773},"width":1600.833251953125},{"pointFirst":{"x":709,"y":1773},"pointLast":{"x":743,"y":1916},"width":1600.833251953125},{"pointFirst":{"x":743,"y":1916},"pointLast":{"x":918,"y":1995},"width":1600.833251953125},{"pointFirst":{"x":918,"y":1995},"pointLast":{"x":1365,"y":2186},"width":1600.833251953125},{"pointFirst":{"x":1365,"y":2186},"pointLast":{"x":1417,"y":2320},"width":1600.833251953125},{"pointFirst":{"x":1417,"y":2320},"pointLast":{"x":1423,"y":2496},"width":1600.833251953125},{"pointFirst":{"x":1423,"y":2496},"pointLast":{"x":1290,"y":2648},"width":1600.833251953125},{"pointFirst":{"x":1290,"y":2648},"pointLast":{"x":907,"y":2815},"width":1600.833251953125},{"pointFirst":{"x":907,"y":2815},"pointLast":{"x":384,"y":2958},"width":1600.833251953125},{"pointFirst":{"x":384,"y":2958},"pointLast":{"x":306,"y":3136},"width":1600.833251953125},{"pointFirst":{"x":306,"y":3136},"pointLast":{"x":343,"y":3307},"width":1600.833251953125},{"pointFirst":{"x":343,"y":3307},"pointLast":{"x":561,"y":3426},"width":1600.833251953125},{"pointFirst":{"x":561,"y":3426},"pointLast":{"x":933,"y":3522},"width":1600.833251953125},{"pointFirst":{"x":933,"y":3522},"pointLast":{"x":1140,"y":3665},"width":1600.833251953125},{"pointFirst":{"x":1140,"y":3665},"pointLast":{"x":1086,"y":3859},"width":1600.833251953125},{"pointFirst":{"x":1086,"y":3859},"pointLast":{"x":920,"y":3970},"width":1600.833251953125},{"pointFirst":{"x":920,"y":3970},"pointLast":{"x":588,"y":4062},"width":1600.833251953125},{"pointFirst":{"x":588,"y":4062},"pointLast":{"x":346,"y":4210},"width":1600.833251953125},{"pointFirst":{"x":346,"y":4210},"pointLast":{"x":260,"y":4378},"width":1600.833251953125},{"pointFirst":{"x":260,"y":4378},"pointLast":{"x":262,"y":4607},"width":1600.833251953125},{"pointFirst":{"x":262,"y":4607},"pointLast":{"x":317,"y":4731},"width":1600.833251953125},{"pointFirst":{"x":317,"y":4731},"pointLast":{"x":450,"y":4868},"width":1600.833251953125},{"pointFirst":{"x":450,"y":4868},"pointLast":{"x":594,"y":4943},"width":1600.833251953125},{"pointFirst":{"x":594,"y":4943},"pointLast":{"x":875,"y":5037},"width":1600.833251953125},{"pointFirst":{"x":875,"y":5037},"pointLast":{"x":1042,"y":5131},"width":1600.833251953125},{"pointFirst":{"x":1042,"y":5131},"pointLast":{"x":1209,"y":5313},"width":1600.833251953125},{"pointFirst":{"x":1209,"y":5313},"pointLast":{"x":1209,"y":5580},"width":1600.833251953125},{"pointFirst":{"x":1209,"y":5580},"pointLast":{"x":1083,"y":5699},"width":1600.833251953125},{"pointFirst":{"x":1083,"y":5699},"pointLast":{"x":837,"y":5877},"width":1600.833251953125},{"pointFirst":{"x":837,"y":5877},"pointLast":{"x":648,"y":5981},"width":1600.833251953125},{"pointFirst":{"x":648,"y":5981},"pointLast":{"x":486,"y":6140},"width":1600.833251953125},{"pointFirst":{"x":486,"y":6140},"pointLast":{"x":492,"y":6252},"width":1600.833251953125},{"pointFirst":{"x":492,"y":6252},"pointLast":{"x":593,"y":6351},"width":1600.833251953125},{"pointFirst":{"x":593,"y":6351},"pointLast":{"x":798,"y":6413},"width":1600.833251953125},{"pointFirst":{"x":798,"y":6413},"pointLast":{"x":1121,"y":6527},"width":1600.833251953125},{"pointFirst":{"x":1121,"y":6527},"pointLast":{"x":1192,"y":6608},"width":1600.833251953125},{"pointFirst":{"x":1192,"y":6608},"pointLast":{"x":1168,"y":6697},"width":1600.833251953125},{"pointFirst":{"x":1168,"y":6697},"pointLast":{"x":793,"y":6826},"width":1600.833251953125},{"pointFirst":{"x":793,"y":6826},"pointLast":{"x":551,"y":6920},"width":1600.833251953125},{"pointFirst":{"x":551,"y":6920},"pointLast":{"x":499,"y":7062},"width":1600.833251953125},{"pointFirst":{"x":499,"y":7062},"pointLast":{"x":548,"y":7142},"width":1600.833251953125},{"pointFirst":{"x":548,"y":7142},"pointLast":{"x":879,"y":7239},"width":1600.833251953125},{"pointFirst":{"x":879,"y":7239},"pointLast":{"x":1141,"y":7342},"width":1600.833251953125},{"pointFirst":{"x":1141,"y":7342},"pointLast":{"x":1185,"y":7427},"width":1600.833251953125},{"pointFirst":{"x":1185,"y":7427},"pointLast":{"x":1188,"y":7517},"width":1600.833251953125},{"pointFirst":{"x":1188,"y":7517},"pointLast":{"x":858,"y":7630},"width":1600.833251953125},{"pointFirst":{"x":858,"y":7630},"pointLast":{"x":595,"y":7740},"width":1600.833251953125},{"pointFirst":{"x":595,"y":7740},"pointLast":{"x":544,"y":7798},"width":1600.833251953125},{"pointFirst":{"x":544,"y":7798},"pointLast":{"x":543,"y":7950},"width":1600.833251953125},{"pointFirst":{"x":543,"y":7950},"pointLast":{"x":674,"y":8057},"width":1600.833251953125},{"pointFirst":{"x":674,"y":8057},"pointLast":{"x":818,"y":8215},"width":1600.833251953125},{"pointFirst":{"x":818,"y":8215},"pointLast":{"x":898,"y":8521},"width":1600.833251953125},{"pointFirst":{"x":898,"y":8521},"pointLast":{"x":894,"y":8938},"width":1600.833251953125}]`);
        const { width } = this.$frame.getBoundingClientRect();

        for (const { pointFirst, pointLast, width: widthOfSetting } of _all) {
            const vertor = new Vertor({ $frame: this.$frame });
            const k = width / widthOfSetting;
            const getNumber = (y) => Number((y * k).toFixed());

            pointFirst.x = Number((pointFirst.x * k).toFixed());
            pointFirst.y = getNumber(pointFirst.y);

            pointLast.x = Number((pointLast.x * k).toFixed());
            pointLast.y = getNumber(pointLast.y);

            vertor.setPoint(pointFirst);
            vertor.setPoint(pointLast);
        }
    }

    registerEvent() {
        document.addEventListener("mouseup", ({ offsetX, offsetY }) => {
            const { width } = this.$frame.getBoundingClientRect();
            const x = offsetX;
            const y = offsetY;
            if (this.pointFirst) {
                this.pointLast = { x, y };
                const vertor = new Vertor({ $frame: this.$frame });
                vertor.setPoint(this.pointFirst);
                vertor.setPoint(this.pointLast);
                this.listPoint.push({
                    pointFirst: this.pointFirst,
                    pointLast: this.pointLast,
                    width
                });
                // reset
                this.pointFirst = this.pointLast;
                this.pointLast = null;
                localStorage.setItem('SKILING', JSON.stringify(this.listPoint));
            } else {
                this.pointFirst = { x, y };
            }
        });
    }
}