import React from 'react';
import Card from './Card';
//this is one way to write it 
/*const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    })

    return (
        <div>
            {cardArray}
        </div>

    );
}*/


const CardList = ({ robots }) => {
//test error
/*if (true) {
    throw new Error('Nooooo');
}*/

    return (
        <div>
            {
                //because everything in these brackets is JS can be written this way 
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })

            }

        </div>

    );
}


export default CardList;

//when using react you need to define key element for each i when doing loops