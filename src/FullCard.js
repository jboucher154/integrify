import {useParams} from "react-router-dom";

const FullCard = ({data}) => {
    // console.log(data);
    const params  = useParams();
    // console.log(params);

    let myUser = data.filter((user) => user.id.toString() === params.id);
    console.log(myUser);
    return (
        <section className="full">
            <div className="container"> User Details </div>
            <div className="container"> Coming Soon! </div>
            <>
                {[myUser].map(function (details) {
                    // console.log(details);
                    return (
                        <div key={details.id} className="container">
                            <h1>{details.name}</h1>
                            <p>{details.username}</p>
                            <p>{details.company}</p>
                            <p>{details.website}</p>
                            {/*<p>{details.address}</p>*/}
                            {/*<p>{details.address.street}</p>*/}
                            {/*<p> done </p>*/}
                        </div>
                );
                })}
            </>
        </section>
    );

};

export default FullCard;




/*{data.filter((user) => user.id === id)
    .map((user,index) => (
            <div key={user.index} className={"fullcard"}>
                <h1>{user.name}</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.company}</p>
                <p>{user.website}</p>
                <p>{user.address}</p>
                <p>{user.address.street}</p>
                <p> done </p>
            </div>
        )
    )} */


/*{data.map(function (card) {
    if (card.id === id) => (
    return (
        <div key={card.index} className={"fullcard"}>
            <h1>{card.name}</h1>
            <p>{card.username}</p>
            <p>{card.email}</p>
            <p>{card.phone}</p>
            <p>{card.company}</p>
            <p>{card.website}</p>
            <p>{card.address}</p>
            <p>{card.address.street}</p>
            <p> done </p>
        </div>
    )
)
})}*/