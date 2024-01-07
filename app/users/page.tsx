import React from 'react'

interface User {
    id: number,
    name: string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()

    console.log(users)
    return (
        <>
            <div>UsersPage</div>
            {users.map((x) => (
                <ul key={x.id}>{x.name}</ul>
            ))}
        </>
    )
}

export default UsersPage