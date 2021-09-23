import { Link } from "react-router-dom";

const MiniCard = ({data}) => {
    console.log(data);
    return (
        <>
            {data.map(function (user) {
                console.log(user);
                return (
                    <div key={user.id} className={"card"}>
                        <h1>{user.name}</h1>
                        <p>@{user.username}</p>
                        <p>{user.website}</p>
                        <Link to={`/user/${user.id}`}> More Details </Link>
                    </div>
                );
            })}
        </>
    );
};


export default MiniCard;
