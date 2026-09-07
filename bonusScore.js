function bonusScore(scores) {
    // Write your code here
    if (!Array.isArray(scores) || scores.length === 0 || !scores.every(score => typeof score === "number")) {
        return "Invalid"
    }
    let Bonusmarks = scores.map(score => score + 10)
    return Bonusmarks.reduce((sum, number) => sum + number, 0)
}