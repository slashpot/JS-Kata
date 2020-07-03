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
    return words.reduce((acc,cur) => {
        const dict = word.split('');
        if (isAnagrams(cur,dict))
            acc.push(cur);
        return acc;
    },[])
}