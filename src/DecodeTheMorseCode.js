function toChar(code) {
    switch (code) {
        case "....":
            return "H";
        case ".":
            return "E";
        case "-.--":
            return "Y";
        case ".---":
            return "J";
        case "..-":
            return "U";
        case "-..":
            return "D";
    }
}

export const decodeMorse = function (morseCode) {
    const arr = morseCode.split(" ");
    let isLeadingSpace = false;

    return arr.map(code => {
        if (code === "") {
            const char = isLeadingSpace ? "": " ";
            isLeadingSpace = true;
            return char;
        }
        isLeadingSpace = false;
        return toChar(code);
    }).join('');
};