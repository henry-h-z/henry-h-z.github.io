const casettesvg = `
<svg viewBox="0 0 100 63.3">
    <circle class="reel1" fill="#3b1f0b" cx="28.75" cy="28.747" r="18" clip-path="url(#bodyCircles)" />
    <circle class="reel2" fill="#3b1f0b" cx="71.25" cy="28.747" r="13" clip-path="url(#bodyCircles)" />

    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(0 28.75 28.747)   translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(45 28.75 28.747)  translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(90 28.75 28.747)  translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(135 28.75 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(180 28.75 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(225 28.75 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(270 28.75 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="28.75" y="28.75" width="2" height="1.2" transform="rotate(315 28.75 28.747) translate(5, 0) translate(-1, -0.4)" />

    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(0 71.25 28.747)   translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(45 71.25 28.747)  translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(90 71.25 28.747)  translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(135 71.25 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(180 71.25 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(225 71.25 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(270 71.25 28.747) translate(5, 0) translate(-1, -0.4)" />
    <rect fill="#c8c8c8" x="71.25" y="28.75" width="2" height="1.2" transform="rotate(315 71.25 28.747) translate(5, 0) translate(-1, -0.4)" />


    <circle fill="#cacaca" cx="28.75" cy="28.747" r="11" clip-path="url(#bodyCircles)" />
    <circle fill="#cacaca" cx="71.25" cy="28.747" r="11" clip-path="url(#bodyCircles)" />

    <rect fill="#323232" x="0" y="0" width="100" height="63.3" rx="2.5" clip-path="url(#bodyClip)" />
    <rect fill="#fff9f0" x="5.5" y="5.5" width="88" height="39.5" rx="2" clip-path="url(#bodyClip)" />
    <rect fill="#323232" x="19.75" y="19.747" width="59.5" height="18" rx="2" clip-path="url(#bodyClip)" />
    <circle stroke="#dddddd" stroke-width="1.2" fill="transparent" cx="28.75" cy="28.747" r="6" />
    <circle stroke="#dddddd" stroke-width="1.2" fill="transparent" cx="71.25" cy="28.747" r="6" />

    <path fill="#222" d="
        M 15.5 63.4
        l 5 -15.5
        h 59
        l 5 15.5
        h -2
        l -4.9 -14.5
        h -55
        l -4.9 14.5
        Z
    "/>
</svg>`


const cardholder = document.getElementById("cardholder");
const animholder = document.getElementById("animholder");

function handleauxclick(event, e) {
    console.log(event.button)
    if (event.button == 1) {
        usecard(event, true, e);
        return false;
    }
}


function usecard (event, newtab, e) {
    let newel = e.cloneNode(true);
    newel.classList.add("cardanim");
    newel.classList.remove("card");
    let rect = e.getBoundingClientRect();
    newel.style.left = `${rect.left / window.innerWidth * 100}%`;
    newel.style.bottom = `${(window.innerHeight - rect.bottom) / Math.min(window.innerHeight, window.innerWidth) * 100}vmin`;
    newel.style.width = `${(rect.right-rect.left) / window.innerWidth * 100}%`;
    newel.removeAttribute("onclick");

    animholder.appendChild(newel);

    e.classList.add("active");

    document.body.style.overflow="hidden";

    window.setTimeout(() => {
        newel.classList.add("move1");
        newel.ontransitionend = () => {
            console.log("hi")
            newel.classList.add("move2");

            document.getElementById("header").classList.add("move3");
            document.getElementById("footer").classList.add("move3");
            document.getElementById("content").classList.add("move3");

            newel.ontransitionend = () => {
                newel.ontransitionend = undefined;

                window.setTimeout(() => {
                    if (newtab) {
                        // window.open(e.dataset.endurl).focus();
                        window.open(e.dataset.endurl, '_blank').focus();
                        // window.location.href = e.dataset.endurl;

                        resetPage();
                    } else {
                        // window.open(e.dataset.endurl, '_blank').focus();
                        window.location.href = e.dataset.endurl;
                    }
                }, 200); 
            }
        }
    }, 50); 
}

function resetPage () {
    document.querySelectorAll(".card").forEach ((e) => {
        e.classList.remove("active");
    })
    document.getElementById("header").classList.remove("move3");
    document.getElementById("footer").classList.remove("move3");
    document.getElementById("content").classList.remove("move3");

    while (animholder.firstChild) {
        animholder.removeChild(animholder.lastChild);
    }
    document.body.style.overflow="unset";
}

window.addEventListener('pageshow', (event) => {
    resetPage();
});
  

function fromHTML(html) {
    // Then set up a new template element.
    const template = document.createElement('template');
    template.innerHTML = html;
    const result = template.content.children;
  
    // Then return either an HTMLElement or HTMLCollection,
    // based on whether the input HTML had one or more roots.
    if (result.length === 1) return result[0];
    return result;
}

cards.forEach((card) => {
    const div = fromHTML(`
        <div class="card cardsize" onclick="usecard(event, event.ctrlKey || event.metaKey, this)" onauxclick="handleauxclick(event, this)" data-endurl="${card.url}" style="--reel-am: ${Math.floor(Math.random() * 16)}">
            <div class="cardimage cardsize" style="background-image: url('${card.image}')">
            </div>
            <p class="cardtext ${card.dark?"darktext":""}">${card.title}</p>
            <div class="backside cardsize">
                ${casettesvg}
                <p class="cardbacktext">${card.title}</p>
            </div>
            
        </div>
    `);

    cardholder.append(div);
});