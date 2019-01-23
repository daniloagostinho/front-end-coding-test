import React from 'react'
import ListItem from './ListItem';

function renderList(repositories = []) {
    if (!Array.isArray(repositories) || repositories.length < 1) return <div>Não existe nenhum repositório</div>
    return repositories.map((repository, index) => <ListItem key={index} info={repository} />)
}

export default ({ repositories }) => <ul>{renderList(repositories)}</ul>