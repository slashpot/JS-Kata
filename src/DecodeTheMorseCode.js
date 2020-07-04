function toChar(code) {
    switch (code) {
        case ".-":
            return "A";
        case "-...":
            return "B";
        case "-.-.":
            return "C";
        case "-..":
            return "D";
        case ".":
            return "E";
        case "..-.":
            return "F";
        case "--.":
            return "G";
        case "....":
            return "H";
        case "..":
            return "I";
        case ".---":
            return "J";
        case "-.-":
            return "K";
        case ".-..":
            return "L";
        case "--":
            return "M";
        case "-.":
            return "N";
        case "---":
            return "O";
        case ".--.":
            return "P";
        case "--.-":
            return "Q";
        case ".-.":
            return "R";
        case "...":
            return "S";
        case "-":
            return "T";
        case "..-":
            return "U";
        case "...-":
            return "V";
        case ".--":
            return "W";
        case "-..-":
            return "X";
        case "-.--":
            return "Y";
        case "--..":
            return "Z";
    }
}

export const decodeMorse = function (morseCode) {
    const arr = morseCode.split(" ");
    let isLeadingSpace = false;

    return arr.map(code => {
        if (code === "") {
            const char = isLeadingSpace ? "" : " ";
            isLeadingSpace = true;
            return char;
        }
        isLeadingSpace = false;
        return toChar(code);
    }).join("");
};