function getFortune(){
    const fortunes = [

        "There are countless consequences for messing with history. You’re living in one of them.",
        "Your world is being watched by a distant pair of eyes. They burn with hunger.",
        "He may have been forgotten, but marks of his handiwork are still remain.",
        "The howls that echo across the eldritch wasteland shall one day be drowned out by the screams of the innocent.",
        "He doesn’t want to work for them, but he has to if he wants to live. At least, that’s what he’s been told.",
        "There’s a spark of divinity in everyone. Just not enough to start a fire.",
        "The disease will ravage the kingdom, and only the impossible will survive it. You do not qualify as impossible.",
        "The scars in reality still have yet to heal. Maybe that’s for the best.",

    ];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];

    document.getElementById("fortuneArea").textContent=randomFortune;
    alert(randomFortune);
}