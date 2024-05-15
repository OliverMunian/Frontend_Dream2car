const participation = [
  {
    id: "price_1PFyUtDg73pK5OPosJjRgGpK",
    description: "1 participation au jeu concours",
    price: 19.95,
    quantity: 1,
    participation: 1,
  },
  {
    id: "price_1PFyY0Dg73pK5OPo12pXhZdw",
    description: "5 participations au jeu concours",
    price: 29.95,
    quantity: 1,
    participation: 5,
  },
  {
    id: "price_1PFyb8Dg73pK5OPos2MGHnFw",
    description: "10 participations au jeu concours",
    price: 39.95,
    quantity: 1,
    participation: 10,
  },
];

function getParticipationData(id){
    let participationData = participation.find(item => item.id == id)

    if(participationData == undefined){
        console.log("le produit n'existe pas")
    }

    return participationData
}


export {participation, getParticipationData}