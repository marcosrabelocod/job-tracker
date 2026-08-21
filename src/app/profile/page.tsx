import {User} from '@/src/type/Usuario'
import {saveUser, getUser} from '@/src/lib/userService'
import FormProfile from '@/src/components/FormProfile'


export default async function perfil(){
    const user = await getUser()

    const handleSaveUser = (newuser:User) => saveUser(newuser)

    return(
        <FormProfile user={user} />
    )
}