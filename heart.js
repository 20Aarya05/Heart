function generatePatternString(n) {
    let result = "";
    let x = Math.floor(((((n * 2) - 1) / 2) + 1) / 2 + 1);
    let spaces = Math.floor(n / 2);

    for (let i = 0; i < x; i++) {
        let line = "";

        for (let j = 0; j < spaces; j++) {
            line += "&nbsp;";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            if(i>0){
                if (j === 0 ) {
                    line += "/";
                }else if(  j === 2 * i && i !== x - 1) {
                    line += `\\`;
                }else {
                    line += "&nbsp;";
                }
            }
        }
        for (let j = 0; j < 2 * spaces - 1; j++) {
            line += "&nbsp;";
        }
        if(i==0){
            line += "&nbsp;";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            if(i>0){
                if (j === 0 && i !== x - 1) {
                    line += "/";
                }else if( j === 2 * i){
                    line += "\\";
                } else {
                    if (!(j === 0 && i === x - 1)) {
                        line += "&nbsp;";
                    }
                }
            }
        }
        spaces--;
        result += line + "<br>";
    }

    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "&nbsp;";
        }
        for (let j = 0; j < ((n * 2) - 1) - (2 * i); j++) {
            if(i<n-1){
                if (j === 0 ) {
                    line += "\\";
                }else if( j === ((n * 2) - 1) - (2 * i) - 1){
                    line += "/";
                } else {
                    line += "&nbsp;";
                }
            }
            
        }
        result += line + "<br>";
    }
    document.querySelector(".main").innerHTML = result;
    return result;
}

const max = 40;
const min = 5;
let count = min;
setInterval(() => {
    generatePatternString(count+=2);
    if(count==max){
        count=min;
    }
}, 250);