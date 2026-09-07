/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0 || students.some(student => !("name" in students)) || students.some(student => !("score" in students)) || !students.every(student => typeof student.score === "number")) {
        return "Invalid";
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });
    // return qualified;

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}