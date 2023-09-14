'use client'
import React, { useReducer } from 'react';
import Card from './Card';

export default function Panel() {
    const compareReducer = (ratingList: Map<string, number>, action: { type: string, Name: string, Rating?: number }) => {
        switch (action.type) {
            case 'add': {
                const newRatingList = new Map(ratingList);
                const ratingToAdd = action.Rating !== undefined ? action.Rating : 0; // Set the default rating to 0
                newRatingList.set(action.Name, ratingToAdd);
                return newRatingList;
            }
            case 'remove': {
                const newRatingList = new Map(ratingList);
                newRatingList.delete(action.Name);
                return newRatingList;
            }
            default:
                return ratingList;
        }
    };
    

    const [raitingList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>());

    const handleDelete = (Name: string) => {
        dispatchCompare({ type: 'remove', Name });
    };

    const handleRatingClick = (Name: string) => {
        // Call the handleDelete function when a rating is clicked
        handleDelete(Name);
    };

    return (
        <div>
            <div style={{
                margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around",
                justifyContent: "space-around", flexWrap: "wrap"
            }}>
                <Card Name='Chulalongkorn Hospital' imgSrc='/chula.jpg' onCompare={(Name: string, Rating: number) => dispatchCompare({ type: 'add', Name, Rating })} Ratinglist={raitingList} />
                <Card Name='Rajavithi Hospital' imgSrc='/rajavithi.jpg' onCompare={(Name: string, Rating: number) => dispatchCompare({ type: 'add', Name, Rating })} Ratinglist={raitingList}/>
                <Card Name='Thammasat University Hospital' imgSrc='/thammasat.jpg' onCompare={(Name: string, Rating: number) => dispatchCompare({ type: 'add', Name, Rating })} Ratinglist={raitingList}/>
            </div>
            <div className='w-full text-xl font-medium ml-28 mb-1'>
                Rating List {raitingList.size}
            </div>
            {Array.from(raitingList).map(([Name, Rating]) => (
                <div className='ml-32 mb-1' key={Name} onClick={() => handleRatingClick(Name)}>
                    {Name}: {Rating}
                </div>
            ))}
        </div>
    );
}
