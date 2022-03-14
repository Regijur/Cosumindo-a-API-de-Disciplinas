url = 'http://localhost:5000'

const doGet = () => {
    return axios.get(url)
    .then( response => response)
    .catch( error => console.log(`Erro ao tentar receber os dados: ${error}`))
}

const doPost = (body) => {
    
    return axios.post(url,body)
    .then(response => response)
    .catch(error => console.log(`Erro ao tentar atualizar ${body.Disciplina}`))

}

const doDelete = (discipline_name) => {
    return axios.delete(`${url}/${discipline_name}`)
    .then(response => response)
    .catch(error => console.log(`Erro ao tentar deletar a disciplina ${discipline_name}`))
}

const doPut = (body) => {
    return axios.put(url,body)
    .then(response => response)
    .catch(error => console.log(`Erro ao tentar atualizar ${body.Disciplina}`))

}