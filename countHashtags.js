function countHashtags(caption) {
    // Write your code here...
    if (typeof caption !== "string") {
        return "Invalid"
    }
    let words = caption.split(" ")
    const hashTagWords = words.filter(word => word.startsWith("#"))

    let count = 0;
    for (let i = 0; i < hashTagWords.length; i++) {
        count ++;
    }
    const longestTag = hashTagWords.reduce((longest, tag) => {
        const cleanTag = tag.slice(1);
        if (cleanTag.length > longest.length) {
            return cleanTag;
        }
        return longest;
    }, "");
    return {
        "hashtagCount": count,
        "longestTag": longestTag
    }
}