// Função que automatiza os pokemon

function autoPkmn(num1, num2, name) {
    var mother = document.getElementById("info-list")

    var elementDiv = document.createElement("div")
    elementDiv.classList.add("info")
    elementDiv.setAttribute("id", num1)
    mother.appendChild(elementDiv)

    var elementImg = document.createElement("img")
    elementImg.src = "imagens/pokemon/icon/"+num2+".gif"
    elementDiv.appendChild(elementImg)

    var elementBr = document.createElement('br')
    elementDiv.appendChild(elementBr)

    var elementP1 = document.createElement("p")
    elementP1.innerHTML = "#"+num1
    elementDiv.appendChild(elementP1)

    var elementP2 = document.createElement("p")
    elementP2.innerHTML = name
    elementP2.setAttribute("id", name)
    elementDiv.appendChild(elementP2)

    // Função para abrir o pop-up de informação

    elementDiv.onclick = function() {
        var img = document.getElementById('img-pkmn')
        img.src = "imagens/pokemon/"+num2+".png"
        img.style.animation = "pop 2s"

        var popup = document.getElementById("popUp")
        popup.classList.add("show")
        popup.style.animation = "pop 2s"
        autoDesc(num1, name)
        
        var num = document.getElementById("num")
        var nomes = document.getElementById("nomes")

        num.innerHTML = "#" + num1
        nomes.innerHTML = "<span style='font-size:20px'>" + name + "</span>"
    }
}

// Função que define as descrições no pop-up

function autoDesc(num1, name) {
    var tip = document.getElementById("tip")
    var desc = document.getElementById("desc")
    if (name == "Bulbasaur") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "A strange seed was planted on its back at birth. The plant sprouts and grows with this pokémon."
    } else if (name == "Ivysaur") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
    } else if (name == "Venusaur") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
    } else if (name == "Charmander") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
    } else if (name == "Charmeleon") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "When it swings its burning tail, it elevates the temperature to unbearably high levels."
    } else if (name == "Charizard") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
    } else if (name == "Squirtle") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
    } else if (name == "Wartortle") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance."
    } else if (name == "Blastoise") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "A brutal pokémon with pressurized water jets on its shell. They are used for high speed tackles."
    } else if (name == "Caterpie") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>"
        desc.innerHTML = "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
    } else if (name == "Metapod") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>"
        desc.innerHTML = "This pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body."
    } else if (name == "Butterfree") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "In battle, it flaps its wings at high speed to release highly toxic dust into the air."
    } else if (name == "Weedle") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Often found in forests, eating leaves. It has a sharp venomous stinger on its head."
    } else if (name == "Kakuna") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Almost incapable of moving, this pokémon can only harden its shell to protect itself from predators."
    } else if (name == "Beedrill") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail."
    } else if (name == "Pidgey") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."
    } else if (name == "Pidgeotto") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Very protective of its sprawling territorial area, this pokémon will fiercely peck at any intruder."
    } else if (name == "Pidgeot") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp."
    } else if (name == "Rattata") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Bites anything when it attacks. Small and very quick, it is a common sight in many places."
    } else if (name == "Raticate") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off."
    } else if (name == "Spearow") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne."
    } else if (name == "Fearow") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "With its huge and magnificent wings, it can keep aloft without ever having to land for rest."
    } else if (name == "Ekans") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole."
    } else if (name == "Arbok") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "It is rumored that the ferocious warning markings on its belly differ from area to area."
    } else if (name == "Pikachu") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>"
        desc.innerHTML = "When several of these pokémon gather, their electricity could build and cause lightning storms."
    } else if (name == "Raichu") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>"
        desc.innerHTML = "Its long tail serves as a ground to protect itself from its own high voltage power."
    } else if (name == "Sandschrew") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Burrows deep underground in arid locations far from water. It only emerges to hunt for food."
    } else if (name == "Sandslash") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape."
    } else if (name == "Nidoran F") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Although small, its venomous barbs render this pokémon dangerous. The female has smaller horns."
    } else if (name == "Nidorina") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "The female's horn develops slowly. Prefers physical attacks such as clawing and biting."
    } else if (name == "Nidoqueen") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves."
    } else if (name == "Nidoran M") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom."
    } else if (name == "Nidorino") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "An aggressive pokémon that is quick to attack. The horn on its head secretes a powerful venom."
    } else if (name == "Nidoking") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "It uses its powerful tail in battle to smash, constrict, then break the prey's bones."
    } else if (name == "Clefairy") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Its magical and cute appeal has many admirers. It is rare and found only in certain areas."
    } else if (name == "Clefable") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "A timid fairy pokémon that is rarely seen. It will run and hide the moment it senses people."
    } else if (name == "Vulpix") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "At the time of birth, it has just one tail. The tail splits from its tip as it grows older."
    } else if (name == "Ninetales") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse."
    } else if (name == "Jigglypuff") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep."
    } else if (name == "Wigglytuff") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size."
    } else if (name == "Zubat") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets."
    } else if (name == "Golbat") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly."
    } else if (name == "Oddish") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds."
    } else if (name == "Gloom") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey."
    } else if (name == "Vileplume") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up."
    } else if (name == "Paras") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:green'>Grass</span>"
        desc.innerHTML = "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host."
    } else if (name == "Parasect") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:green'>Grass</span>"
        desc.innerHTML = "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places."
    } else if (name == "Venonat") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night."
    } else if (name == "Venomoth") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has."
    } else if (name == "Diglett") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground."
    } else if (name == "Dugtrio") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground."
    } else if (name == "Meowth") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change."
    } else if (name == "Persian") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness."
    } else if (name == "Psyduck") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers."
    } else if (name == "Golduck") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa."
    } else if (name == "Mankey") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "Extremely quick to anger. It could be docile one moment then thrashing away the next instant."
    } else if (name == "Primeape") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught."
    } else if (name == "Growlithe") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "Very protective of its territory. It will bark and bite to repel intruders from its space."
    } else if (name == "Arcanine") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "A pokémon that has been admired since the past for its beauty. It runs agilely as if on wings."
    } else if (name == "Poliwag") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand."
    } else if (name == "Poliwhirl") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Capable of living in or out of water. When out of water, it sweats to keep its body slimy."
    } else if (name == "Poliwrath") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers."
    } else if (name == "Abra") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Using its ability to read minds, it will identify impending danger and teleport to safety."
    } else if (name == "Kadabra") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "It emits special alpha waves from its body that induce headaches just by being close by."
    } else if (name == "Alakazam") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000."
    } else if (name == "Machop") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "Loves to build its muscles. It trains in all styles of martial arts to become even stronger."
    } else if (name == "Machoke") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions."
    } else if (name == "Machamp") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon."
    } else if (name == "Bellsprout") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "A carnivorous pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture."
    } else if (name == "Weepinbell") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "It spits out poison powder to immobilize the enemy and then finishes it with a spray of acid."
    } else if (name == "Victreebel") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Said to live in huge colonies deep in jungles, although no one has ever returned from there."
    } else if (name == "Tentacool") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid."
    } else if (name == "Tentacruel") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey."
    } else if (name == "Geodude") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them."
    } else if (name == "Graveler") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction."
    } else if (name == "Golem") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage."
    } else if (name == "Ponyta") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time."
    } else if (name == "Rapidash") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "Very competitive, this pokémon will chase anything that moves fast in the hopes of racing it."
    } else if (name == "Slowpoke") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack."
    } else if (name == "Slowbro") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "The Shellder that is latched onto Slowpoke's tail is said to feed on the host's left over scraps."
    } else if (name == "Magnemite") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:grey'>Steel</span>"
        desc.innerHTML = "Uses anti-gravity to stay suspended. Appears without warning and uses thunder wave and similar moves."
    } else if (name == "Magneton") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:grey'>Steel</span>"
        desc.innerHTML = "Formed by several Magnemites linked together. They frequently appear when sunspots flare up."
    } else if (name == "Farfetch'd") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "The sprig of green onions it holds is its weapon. It is used much like a metal sword."
    } else if (name == "Doduo") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints."
    } else if (name == "Dodrio") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake."
    } else if (name == "Seel") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "The protruding horn on its head is very hard. It is used for bashing through thick ice."
    } else if (name == "Dewgong") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:cyan'>Ice</span>"
        desc.innerHTML = "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters."
    } else if (name == "Grimer") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories."
    } else if (name == "Muk") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison."
    } else if (name == "Shellder") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open."
    } else if (name == "Cloyster") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:cyan'>Ice</span>"
        desc.innerHTML = "When attacked, it launches its horns in quick volleys. Its innards have never been seen."
    } else if (name == "Gastly") {
        tip.innerHTML = "<span style='font-size:20px; color:darkviolet'>Ghost</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Almost invisible, this gaseous pokémon cloaks the target and puts it to sleep without notice."
    } else if (name == "Haunter") {
        tip.innerHTML = "<span style='font-size:20px; color:darkviolet'>Ghost</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Because of its ability to slip through block walls, it is said to be from another dimension."
    } else if (name == "Gengar") {
        tip.innerHTML = "<span style='font-size:20px; color:darkviolet'>Ghost</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Under a full moon, this pokémon likes to mimic the shadows of people and laugh at their fright."
    } else if (name == "Onix") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black."
    } else if (name == "Drowzee") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams."
    } else if (name == "Hypno") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "When it locks eyes with an enemy, it will use a mix of psi moves such as hypnosis and confusion."
    } else if (name == "Krabby") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Its pincers are not only powerful weapons, they are used for balance when walking sideways."
    } else if (name == "Kingler") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use."
    } else if (name == "Voltorb") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>"
        desc.innerHTML = "Usually found in power plants. Easily mistaken for a poké ball, they have zapped many people."
    } else if (name == "Electrode") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>"
        desc.innerHTML = "It stores electric energy under very high pressure. It often explodes with little or no provocation."
    } else if (name == "Exeggcute") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms."
    } else if (name == "Exeggutor") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute."
    } else if (name == "Cubone") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "Because it never removes its skull helmet, no one has ever seen this pokémon's real face"
    } else if (name == "Marowak") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>"
        desc.innerHTML = "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets."
    } else if (name == "Hitmonlee") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides."
    } else if (name == "Hitmonchan") {
        tip.innerHTML = "<span style='font-size:20px; color:maroon'>Fighting</span>"
        desc.innerHTML = "While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see."
    } else if (name == "Lickitung") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies."
    } else if (name == "Koffing") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning."
    } else if (name == "Weezing") {
        tip.innerHTML = "<span style='font-size:20px; color:purple'>Poison</span>"
        desc.innerHTML = "Where two kinds of poison gases meet, 2 Koffings can fuse into a Weezing over many years."
    } else if (name == "Rhyhorn") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:burlywood'>Rock</span>"
        desc.innerHTML = "Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying."
    } else if (name == "Rhydon") {
        tip.innerHTML = "<span style='font-size:20px; color:goldenrod'>Ground</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:burlywood'>Rock</span>"
        desc.innerHTML = "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees."
    } else if (name == "Chansey") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "A rare and elusive pokémon that is said to bring happiness to those who manage to get it."
    } else if (name == "Tangela") {
        tip.innerHTML = "<span style='font-size:20px; color:green'>Grass</span>"
        desc.innerHTML = "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks."
    } else if (name == "Kangaskhan") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "The infant rarely ventures out of its mother's protective pouch until it is 3 years old."
    } else if (name == "Horsea") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Known to shoot down flying bugs with precision blasts of ink from the surface of the water."
    } else if (name == "Seadra") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail."
    } else if (name == "Goldeen") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen."
    } else if (name == "Seaking") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks."
    } else if (name == "Staryu") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "An enigmatic pokémon that can effortlessly regenerate any appendage it loses in battle."
    } else if (name == "Starmie") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem."
    } else if (name == "Mr. Mime") {
        tip.innerHTML =  "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "If interrupted while it is miming, it will slap around the offender with its broad hands."
    } else if (name == "Scyther") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "With ninja-like agility and speed, it can create the illusion that there is more than one."
    } else if (name == "Jynx") {
        tip.innerHTML =  "<span style='font-size:20px; color:cyan'>Ice</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it."
    } else if (name == "Electabuzz") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>"
        desc.innerHTML = "Normally found near power plants, they can wander away and cause major blackouts in cities."
    } else if (name == "Magmar") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "Its body always burns with an orange glow that enables it to hide perfectly among flames."
    } else if (name == "Pinsir") {
        tip.innerHTML = "<span style='font-size:20px; color:chartreuse'>Bug</span>"
        desc.innerHTML = "If it fails to crush the victim in its pincers, it will swing it around and toss it hard."
    } else if (name == "Tauros") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "When it targets an enemy, it charges furiously while whipping its body with its long tails."
    } else if (name == "Magikarp") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today."
    } else if (name == "Gyarados") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage."
    } else if (name == "Lapras") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:cyan'>Ice</span>"
        desc.innerHTML = "A pokémon that has been overhunted almost to extinction. It can ferry people across the water."
    } else if (name == "Ditto") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy."
    } else if (name == "Eevee") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones."
    } else if (name == "Vaporeon") {
        tip.innerHTML = "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's."
    } else if (name == "Jolteon") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>"
        desc.innerHTML = "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts."
    } else if (name == "Flareon") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>"
        desc.innerHTML = "When storing thermal energy in its body, its temperature could soar to over 1600 degrees."
    } else if (name == "Porygon") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "A pokémon that consists entirely of programming code. Capable of moving freely in cyberspace."
    } else if (name == "Omanyte") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Although long extinct, in rare cases, it can be genetically resurrected from fossils."
    } else if (name == "Omastar") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "A prehistoric pokémon that died out when its heavy shell made it impossible to catch prey."
    } else if (name == "Kabuto") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "A pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago."
    } else if (name == "Kabutops") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:blue'>Water</span>"
        desc.innerHTML = "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
    } else if (name == "Aerodactyl") {
        tip.innerHTML = "<span style='font-size:20px; color:burlywood'>Rock</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "A ferocious, prehistoric POKéMON that goes for the enemy's throat with its serrated saw-like fangs."
    } else if (name == "Snorlax") {
        tip.innerHTML = "<span style='font-size:20px; color:bisque'>Normal</span>"
        desc.innerHTML = "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful."
    } else if (name == "Articuno") {
        tip.innerHTML =  "<span style='font-size:20px; color:cyan'>Ice</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "A legendary bird pokémon that is said to appear to doomed people who are lost in icy mountains."
    } else if (name == "Zapdos") {
        tip.innerHTML = "<span style='font-size:20px; color:gold'>Electric</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "A legendary bird pokémon that is said to appear from clouds while dropping enormous lightning bolts."
    } else if (name == "Moltres") {
        tip.innerHTML = "<span style='font-size:20px; color:red'>Fire</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames."
    } else if (name == "Dratini") {
        tip.innerHTML = "<span style='font-size:20px; color:navy'>Dragon</span>"
        desc.innerHTML = "Long considered a mythical pokémon until recently when a small colony was found living underwater."
    } else if (name == "Dragonair") {
        tip.innerHTML = "<span style='font-size:20px; color:navy'>Dragon</span>"
        desc.innerHTML = "A mystical pokémon that exudes a gentle aura. Has the ability to change climate conditions."
    } else if (name == "Dragonite") {
        tip.innerHTML = "<span style='font-size:20px; color:navy'>Dragon</span>" + "<span style='color:grey'> • </span>" + "<span style='font-size:20px; color:aliceblue'>Flying</span>"
        desc.innerHTML = "An extremely rarely seen marine pokémon. Its intelligence is said to match that of humans."
    } else if (name == "Mewtwo") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments."
    } else if (name == "Mew") {
        tip.innerHTML = "<span style='font-size:20px; color:magenta'>Psychic</span>"
        desc.innerHTML = "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
    } else {
        desc.innerHTML = ""
    }
}

// Invocando os pokemon

autoPkmn('001','1','Bulbasaur')
autoPkmn('002','2','Ivysaur')
autoPkmn('003','3','Venusaur')
autoPkmn('004','4','Charmander')
autoPkmn('005','5','Charmeleon')
autoPkmn('006','6','Charizard')
autoPkmn('007','7','Squirtle')
autoPkmn('008','8','Wartortle')
autoPkmn('009','9','Blastoise')
autoPkmn('010','10','Caterpie')
autoPkmn('011','11','Metapod')
autoPkmn('012','12','Butterfree')
autoPkmn('013','13','Weedle')
autoPkmn('014','14','Kakuna')
autoPkmn('015','15','Beedrill')
autoPkmn('016','16','Pidgey')
autoPkmn('017','17','Pidgeotto')
autoPkmn('018','18','Pidgeot')
autoPkmn('019','19','Rattata')
autoPkmn('020','20','Raticate')
autoPkmn('021','21','Spearow')
autoPkmn('022','22','Fearow')
autoPkmn('023','23','Ekans')
autoPkmn('024','24','Arbok')
autoPkmn('025','25','Pikachu')
autoPkmn('026','26','Raichu')
autoPkmn('027','27','Sandschrew')
autoPkmn('028','28','Sandslash')
autoPkmn('029','29','Nidoran F')
autoPkmn('030','30','Nidorina')
autoPkmn('031','31','Nidoqueen')
autoPkmn('032','32','Nidoran M')
autoPkmn('033','33','Nidorino')
autoPkmn('034','34','Nidoking')
autoPkmn('035','35','Clefairy')
autoPkmn('036','36','Clefable')
autoPkmn('037','37','Vulpix')
autoPkmn('038','38','Ninetales')
autoPkmn('039','39','Jigglypuff')
autoPkmn('040','40','Wigglytuff')
autoPkmn('041','41','Zubat')
autoPkmn('042','42','Golbat')
autoPkmn('043','43','Oddish')
autoPkmn('044','44','Gloom')
autoPkmn('045','45','Vileplume')
autoPkmn('046','46','Paras')
autoPkmn('047','47','Parasect')
autoPkmn('048','48','Venonat')
autoPkmn('049','49','Venomoth')
autoPkmn('050','50','Diglett')
autoPkmn('051','51','Dugtrio')
autoPkmn('052','52','Meowth')
autoPkmn('053','53','Persian')
autoPkmn('054','54','Psyduck')
autoPkmn('055','55','Golduck')
autoPkmn('056','56','Mankey')
autoPkmn('057','57','Primeape')
autoPkmn('058','58','Growlithe')
autoPkmn('059','59','Arcanine')
autoPkmn('060','60','Poliwag')
autoPkmn('061','61','Poliwhirl')
autoPkmn('062','62','Poliwrath')
autoPkmn('063','63','Abra')
autoPkmn('064','64','Kadabra')
autoPkmn('065','65','Alakazam')
autoPkmn('066','66','Machop')
autoPkmn('067','67','Machoke')
autoPkmn('068','68','Machamp')
autoPkmn('069','69','Bellsprout')
autoPkmn('070','70','Weepinbell')
autoPkmn('071','71','Victreebel')
autoPkmn('072','72','Tentacool')
autoPkmn('073','73','Tentacruel')
autoPkmn('074','74','Geodude')
autoPkmn('075','75','Graveler')
autoPkmn('076','76','Golem')
autoPkmn('077','77','Ponyta')
autoPkmn('078','78','Rapidash')
autoPkmn('079','79','Slowpoke')
autoPkmn('080','80','Slowbro')
autoPkmn('081','81','Magnemite')
autoPkmn('082','82','Magneton')
autoPkmn('083','83',"Farfetch'd")
autoPkmn('084','84','Doduo')
autoPkmn('085','85','Dodrio')
autoPkmn('086','86','Seel')
autoPkmn('087','87','Dewgong')
autoPkmn('088','88','Grimer')
autoPkmn('089','89','Muk')
autoPkmn('090','90','Shellder')
autoPkmn('091','91','Cloyster')
autoPkmn('092','92','Gastly')
autoPkmn('093','93','Haunter')
autoPkmn('094','94','Gengar')
autoPkmn('095','95','Onix')
autoPkmn('096','96','Drowzee')
autoPkmn('097','97','Hypno')
autoPkmn('098','98','Krabby')
autoPkmn('099','99','Kingler')
autoPkmn('100','100','Voltorb')
autoPkmn('101','101','Electrode')
autoPkmn('102','102','Exeggcute')
autoPkmn('103','103','Exeggutor')
autoPkmn('104','104','Cubone')
autoPkmn('105','105','Marowak')
autoPkmn('106','106','Hitmonlee')
autoPkmn('107','107','Hitmonchan')
autoPkmn('108','108','Lickitung')
autoPkmn('109','109','Koffing')
autoPkmn('110','110','Weezing')
autoPkmn('111','111','Rhyhorn')
autoPkmn('112','112','Rhydon')
autoPkmn('113','113','Chansey')
autoPkmn('114','114','Tangela')
autoPkmn('115','115','Kangaskhan')
autoPkmn('116','116','Horsea')
autoPkmn('117','117','Seadra')
autoPkmn('118','118','Goldeen')
autoPkmn('119','119','Seaking')
autoPkmn('120','120','Staryu')
autoPkmn('121','121','Starmie')
autoPkmn('122','122','Mr. Mime')
autoPkmn('123','123','Scyther')
autoPkmn('124','124','Jynx')
autoPkmn('125','125','Electabuzz')
autoPkmn('126','126','Magmar')
autoPkmn('127','127','Pinsir')
autoPkmn('128','128','Tauros')
autoPkmn('129','129','Magikarp')
autoPkmn('130','130','Gyarados')
autoPkmn('131','131','Lapras')
autoPkmn('132','132','Ditto')
autoPkmn('133','133','Eevee')
autoPkmn('134','134','Vaporeon')
autoPkmn('135','135','Jolteon')
autoPkmn('136','136','Flareon')
autoPkmn('137','137','Porygon')
autoPkmn('138','138','Omanyte')
autoPkmn('139','139','Omastar')
autoPkmn('140','140','Kabuto')
autoPkmn('141','141','Kabutops')
autoPkmn('142','142','Aerodactyl')
autoPkmn('143','143','Snorlax')
autoPkmn('144','144','Articuno')
autoPkmn('145','145','Zapdos')
autoPkmn('146','146','Moltres')
autoPkmn('147','147','Dratini')
autoPkmn('148','148','Dragonair')
autoPkmn('149','149','Dragonite')
autoPkmn('150','150','Mewtwo')
autoPkmn('151','151','Mew')