let students = []

function generateTable() {
    let tablestring = "<table><tr><th>Name:</th><th>Score</th></tr>"

    for ( let counter = 0; counter < students.length; counter++ ) {
        tablestring += `<tr><td class="student"><button id="delete" value="${counter}">${students[counter].name}</button></td><td class="score">${students[counter].score}</td>`
    }

    tablestring += "</table>"

    return tablestring
}

function sortscores(a,b) {
    return a-b
}

function sortcombinedscores(a,b) {
    return a.score - b.score
}

// document.getElementById('add').addEventListener('click', () => {
function addScore() {
    students.push( { name: document.getElementById('student').value, score: document.getElementById("score").value } )

    console.log("STUDENTS: "+students.name+" & "+students.score)

    let tablestring = generateTable()
    
    document.getElementById("scoresout").innerHTML = tablestring
}
// })

document.getElementById('sort').addEventListener('click', () => {
    let combined = students.map((student, idx) => ({ student, score: scores[idx] }))
    combined.sort(sortcombinedscores)
    console.log("SORTED:" + combined)
    students = combined.map(item => item.student)
    scores = combined.map(item => item.score)

    let tablestring = generateTable()

    document.getElementById("scoresout").innerHTML = tablestring
})