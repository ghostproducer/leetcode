function compress (text) {

    let count = 0;
    let compressedString = '';
    for (let i = 0; i < text.length; i++) {
        // console.log(text[i])

        if (text[i] === text[i+1]) {
            count += 1;
        } else {

            if (count === 0) {
                compressedString = compressedString + text[i]
            } else {
                compressedString = compressedString + text[i] + 'x' + (count + 1)
                count = 0;
            }
        }
    }
    console.log(compressedString)
    return compressedString;

}


compress('aaabbbaaaddd');