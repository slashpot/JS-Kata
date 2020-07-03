//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
function isAnagrams(item, dict) {
    return item.split('').every((char) => {
        const index = dict.findIndex(x=>x===char);
        if (index != -1){
            dict[index]=null;
            return true;
        }
        return false;
    })
}

export function anagrams(word, words) {
    const output = []

    words.forEach((item) => {
        const dict = word.split('');
        if (isAnagrams(item,dict))
            output.push(item);
    })

    return output;
}