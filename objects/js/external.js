let students = []

function generateTable() {
    let tablestring = "<table><tr><th>Name:</th><th>Score</th></tr>"

    for ( let counter = 0; counter < students.length; counter++ ) {
        tablestring += `<tr><td class="student"><button id="delete" value="${counter}" onclick="deletestudent(${counter})">${students[counter].name}</button></td><td class="score">${students[counter].score}</td>`
    }

    tablestring += "</table>"

    document.getElementById("scoresout").innerHTML = tablestring
}

function sortscores(a,b) {
    return a.score - b.score
}

function deletestudent(id) {
    let newlist = []
    for( let counter = 0; counter < students.length; counter ++ ) {
        if ( counter == id )
            continue
        newlist.push(students[counter])
    }
    students=newlist
    console.log("Deleted: "+students[id].name)

    generateTable()
}

// document.getElementById('add').addEventListener('click', () => {
// Use of onclick in the html to call our function instead of an event listener
function addScore() {
    students.push( { name: document.getElementById('student').value, score: document.getElementById("score").value } )

    console.log("STUDENTS: "+students.name+" & "+students.score)

    generateTable()
}
// })

document.getElementById('sort').addEventListener('click', () => {
    students.sort(sortscores)

    // The assignment no longer required as the div is targetted in the function
    generateTable()
})