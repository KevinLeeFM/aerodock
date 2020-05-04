export default class SkyGradient {

    static keyframes = [
        // 0:00
        {
            //  R   G   B
            0: [43, 51, 80], // lowest color
            1: [20, 26, 88], // middle color
            2: [8, 10, 30], // highest color
            center: 30, // percentage of middle from bottom
        },
        {
            0: [88, 94, 141],
            1: [37, 43, 94],
            2: [15, 20, 45],
            center: 35,
        },
        // 6:00 (sunrise)
        {
            0: [250, 88, 0],
            1: [120, 73, 62],
            2: [70, 44, 44],
            center: 40,
        },
        // 9:00
        {
            0: [240, 222, 182],
            1: [133, 145, 248],
            2: [43, 56, 177],
            center: 45,
        },
        // 12:00
        {
            0: [172, 186, 255],
            1: [94, 130, 250],
            2: [55, 70, 210],
            center: 50,
        },
        // 3:00
        {
            0: [240, 222, 182],
            1: [133, 145, 248],
            2: [43, 56, 177],
            center: 45,
        },
        // 6:00 (sundown)
        {
            0: [255, 113, 31],
            1: [148, 89, 100],
            2: [69, 57, 112],
            center: 40,
        },
        // 9:00
        {
            0: [88, 94, 134],
            1: [37, 43, 94],
            2: [15, 20, 45],
            center: 35,
        },
    ];

    static gradientStep = 3; // in hours

    static getHour(date) {
        return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
    }

    static getGradient(date) {
        let keyframes = SkyGradient.keyframes
        let hour = SkyGradient.getHour(date);
        let gradientStep = SkyGradient.gradientStep;
        let index0 = Math.floor(hour / 3);
        let index1 = (index0 + 1) % (24 / gradientStep);
        let lerpT = (hour % gradientStep) / gradientStep;

        let center0 = keyframes[index0].center;
        let center1 = keyframes[index1].center;
        let gradient = {
            center: SkyGradient.lerpReal(center0, center1, lerpT)
        };

        for (let c = 0; c < 3; c++) {
            let v0 = keyframes[index0][c];
            let v1 = keyframes[index1][c];
            gradient[c] = SkyGradient.lerpVector3(v0, v1, lerpT);
        }

        return gradient;
    }

    static getCSS(date) {
        let g = SkyGradient.getGradient(date);
        return `linear-gradient(to top, rgb(${g[0][0]}, ${g[0][1]}, ${g[0][2]}) 0%, rgb(${g[1][0]}, ${g[1][1]}, ${g[1][2]}) ${g.center}%, rgb(${g[2][0]}, ${g[2][1]}, ${g[2][2]}) 100%)`;
    }

    static lerpVector3(v0, v1, t) {
        let v = []
        for (let i=0; i < 3; i++) {
            v[i] = SkyGradient.lerpReal(v0[i], v1[i], t);
        }

        return v;
    }

    static lerpReal(r0, r1, t) {
        return (r1 - r0) * t + r0;
    }
}