const table = document.getElementById('table')
const update_table_button = document.getElementById('update-table-button')
const add_form = document.getElementById('add-table-form')
const add_discipline = document.getElementById('add-table-discipline')
const add_subjects = document.getElementById("add-table-subjects")

function AddEvents(){
    update_table_button.addEventListener('click',updateTable)
    add_form.addEventListener('submit', (e) => {
        e.preventDefault()
        AddTable(add_discipline.value, add_subjects.value)
    })
}

function updateTable(){
    doGet()
    .then( response =>{
        table.innerHTML = '';
        table.innerHTML = "<tr> <th>Disciplinas</th><th>Assuntos</th></tr>"
        response.data.map(discipline => {
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            td.innerHTML = discipline.Disciplina
            tr.appendChild(td)
            td = document.createElement("td")
            discipline.Assuntos.sort()
            td.innerHTML = discipline.Assuntos.map(e => `<span>${e}</span>`).join('<br>')
            tr.appendChild(td)
            table.appendChild(tr)
        })
    })
}

function AddTable(discipline,subjects){
    subjects = subjects.split(',')

    body = {
        Disciplina: discipline,
        Assuntos: subjects
    }

    doPost(body)
    .then(e => {updateTable()})
}
AddEvents()