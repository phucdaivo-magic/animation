import { drawPoint } from "./utils";

export default class Vertor {
    constructor({ $frame }) {
        this.A = null;
        this.B = null;
        this.data = {};
        this.$frame = $frame;
    }

    setPoint(point) {
        if (this.A) {
            this.B = point;
            this.setPosition();
        } else {
            this.A = point;
        }
    }

    setPosition() {
        const { width } = this.$frame.getBoundingClientRect();
        for (let y = this.A.y; y <= this.B.y; y += 1) {
            this.data[y] = this.getX(y);
            const angle = this.calculateAngleWithOY(this.A.x, this.A.y, this.B.x, this.B.y);
            drawPoint(this.data[y], y, this.getImage(-angle), this.$frame);

            window.all[y] = {
                w: width,
                x: this.data[y],
                y,
                a: -angle,
                img: this.getImage(-angle)
            }
        }
    }

    getImage(angle) {
        let images = {
            '-15_1': 3,
            '-60_-15': 2,
            '-90_-60': 1,
            '-120_-90': 5,
            '-165_-120': 4,
            '-180_-165': 3,
        }

        for (const key in images) {
            const [start, end] = key.split('_');
            if (Number(start) <= angle && angle < Number(end)) {
                return images[key];
            }
        }
    }

    getX(y) {
        const tmp = (this.B.x - this.A.x) / (this.B.y - this.A.y);
        return tmp * y + (this.A.x - tmp * this.A.y);
    }

    calculateAngleWithOY(x1, y1, x2, y2) {
        if (x1 === x2) {
            return 0;
        }

        let slope = (y2 - y1) / (x2 - x1);
        let theta = Math.atan(slope) * (180 / Math.PI);
        let alpha = 90 - theta;

        return Math.abs(alpha);
    }
}