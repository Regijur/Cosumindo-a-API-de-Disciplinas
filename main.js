// Referenciando elementos da página
const table = document.getElementById('table')
const update_table_button = document.getElementById('update-table-button')

const add_form = document.getElementById('add-discipline-form')
const add_discipline = document.getElementById('add-discipline-name')
const add_subjects = document.getElementById("add-discipline-subjects")

const update_form = document.getElementById('update-discipline-form')
const update_discipline = document.getElementById('update-discipline-name')
const update_subjects = document.getElementById("update-discipline-subjects")

const delete_form = document.getElementById('delete-discipline-form')
const delete_discipline_name = document.getElementById('delete-discipline-name')

// Adicionando eventos nos componentes html
function AddEvents(){
    update_table_button.addEventListener('click',() => updateTable(doGet()))
    add_form.addEventListener('submit', (e) => {
        e.preventDefault()
        AddDiscipline(add_discipline.value, add_subjects.value)
    })
    delete_form.addEventListener('submit',(e)=>{
        e.preventDefault()
        DeleteDiscipline(delete_discipline_name.value)
    })
    update_form.addEventListener('submit', (e) => {
        e.preventDefault()
        UpdateDiscipline(update_discipline.value, update_subjects.value)
    })
}

// Função responsável por atualizar a tabela
function updateTable(){
    doGet().then(response => {
        table.innerHTML = '';
        table.innerHTML = "<tr class='table-row' id='table-header-row'> <th class='table-column' id='discipline-header-tittle'>Disciplinas</th><th class='table-column' id='subjects-header-tittle'>Assuntos</th></tr>"
        response.data.map(discipline => {
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            let ul = document.createElement("ul")

            tr.className = 'table-row'
            td.className = 'table-column table-discipline'
            
            td.innerHTML = discipline.Disciplina
            tr.appendChild(td)
            td = document.createElement("td")
            td.className = 'table-column table-subjects'

            discipline.Assuntos.sort()
            ul.innerHTML = discipline.Assuntos.map(e => `<li class="table-subject">${e}</li>`).join('')
            td.appendChild(ul)
            tr.appendChild(td)
            table.appendChild(tr)
        })
    })
}

// Função responsável por adicionar um elemento na API
function AddDiscipline(discipline_name,subjects){
    subjects = subjects.split('\n').join('').split(';')

    body = {
        Disciplina: discipline_name,
        Assuntos: subjects
    }

    doPost(body).then((response) =>{
        if(response.status == 200){
            ClearInputs()
            updateTable()
        }
    } )
}

// Função responsável por atualizar um elemento da API 
function UpdateDiscipline(discipline_name,subjects){
    subjects = subjects.split('\n').join('').split(';')

    body = {
        Disciplina: discipline_name,
        Assuntos: subjects
    }

    doPut(body).then((response) =>{
        if(response.status == 200){
            ClearInputs()
            updateTable()
        }
    })
    .catch(error => console.log(`Erro ao tentar atualizar ${discipline_name}`))
}

// Função responsável por deletar um elemento da API
function DeleteDiscipline(discipline_name){
    doDelete(discipline_name)
    .then((response) =>{
        if(response.status == 200){
            ClearInputs();
            updateTable()
        }    
    })
}

// Função responsável por limpar os campos de texto da página
function ClearInputs(){
    add_discipline.value = ''
    add_subjects.value = ''
    update_discipline.value = ''
    update_subjects.value = ''
    delete_discipline_name.value = ''
}

AddEvents()