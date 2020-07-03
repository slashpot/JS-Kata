//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
function isAnagrams(item, dictSet) {
    return item.split('').every((char) => {
        return dictSet.has(char)
    })
}

export function anagrams(word, words) {
    const output = []
    const dictSet = word.split('').reduce((acc, cur) => {
        if (!acc.has(cur))
            acc.add(cur)
        return acc;
    },new Set())

    words.forEach((item) => {
        if (isAnagrams(item,dictSet))
            output.push(item);
    })

    return output;
}