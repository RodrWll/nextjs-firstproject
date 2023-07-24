// "use client" cuando no hay un user client se trata de un server component o un componente renderizado del lado del servidor
import {useParams} from "next/navigation"
async function getUser(id){
    console.log(id)
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return (data.data);
}



async function UsersPages({params}){
    const user = await getUser(params.id)    
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <img src={user.avatar} alt= {user.email} />
                    </div>
                    <div className="card-body text-center">
                        <h3>{user.id} {user.first_name} {user.last_name}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsersPages;