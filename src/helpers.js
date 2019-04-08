export const petData = (data, id) => ({
    name: data[id].name,
    seed: data[id].seed,
    image: data[id].image
});

export const unknownPet = (gameId) => ({
    name: `Winner from Game ${gameId}`,
    seed: '',
    image: ''
});
