import { useContext } from "react"
import UserContext, { UserState } from '../store/store';
const ConsumerComponent = () => {
    const user = useContext<UserState>(UserContext);
    return (
        <div>
            <p>FirstName:{user.first}</p>
            <p>LastName:{user.last}</p>
        </div>
    )
}

export default ConsumerComponent
