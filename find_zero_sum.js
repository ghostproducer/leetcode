
// Given four lists A, B, C, D of integer values, calculate how many quadruplets (a, b, c, d) belonging to A x B x C x D are such that:
// a + b + c + d = 0

// a + b + c = -d
// d = -a -b -c


function findZeroSum(a, b, c, d) {

    let quadruplets = 0;
    for (let i = 0; i<a.length; i++) {
        for (let j = 0; j<b.length; j++) {
            for (let k = 0; k<c.length; k++) {
                for (let l = 0; l<d.length; l++) {

                    if (a[i] + b[j] + c[k] + d[l] === 0) {
                        quadruplets += 1;
                    }
                }
            }
        }
    }

    console.log('quadruplets => ', quadruplets)
}

const A = [12, 21, 34, 1]
const B = [-3, -5, 14, 1]
const C = [100, -9, 34, 34]
const D = [2, 18, 14, -100]


findZeroSum(A,B,C,D)
