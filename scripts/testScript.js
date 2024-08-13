Hooks.on("ready", async function() {
    console.log("start building");

    let sprite;
    let actorData

    let number = Math.floor(Math.random() * 1000);
    fetch("https://pokeapi.co/api/v2/pokemon/"+number).then(
        function(response) {
            return response.json();
        }).then(
    async function(data) {
        sprite = data.sprites.front_default;
        let name = data.name;
        fetch(../resources/testCharacter.json).then(
            function(response) {
                actorData = response;
                actorData.prototypeToken.name = name;
                actorData.prototypeToken.texture.src = sprite
                actorData.name = name;
                actorData.img = sprite;
            }
        )
        console.log(actorData);
        let actor = new Actor(actorData, {});
        console.log(actor);
        await Actor.create(actorData);
    })
});