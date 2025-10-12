function goback () {
    // window.history.back();
    window.location.href = "../index.html";
}

const footerBodyHTML = `
    <div class="projector">
        <svg viewbox="0 0 500 100">
            <defs>
                <clipPath id="lensinner">
                    <path d="
                    M 190 22
                    a 60 12 0 0 1 120 0
                    l 7 50
                    h -120
                    h -14
                    Z
                    "></path>
                </clipPath>

                <clipPath id="lensall">
                    <path d="
                    M 190 13
                    a 60 12 0 0 1 120 0
                    l 7 50
                    h -120
                    h -14
                    Z
                    "></path>
                </clipPath>

                <clipPath id="projall">
                    <path d="
                    M 40 30
                    h 125
                    l 30 20
                    h 110
                    l 30 -20
                    h 125
                    C 490 30 493 51 495 65
                    L 500 100
                    H 0
                    l 5 -35 
                    C 7 51 10 30 40 30
                    "></path>
                </clipPath>
            </defs>

            <style>
                .svgtext {
                    font-family: "Quicksand", Helvetica, sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 500;
                    font-style: normal;
                    font-size: 10;
                }

                .button {
                    fill: #000;
                    cursor:pointer;
                }

                .button:hover {
                    fill: #888;
                }
            </style>

            <path fill="#555" d="
            M 190 13
            a 60 12 0 0 1 120 0
            l 7 50
            h -120
            h -14
            Z
            "></path>

            <path clip-path="url(#lensall)" fill="#888" d="
            M 189 20
            a 60 12 0 0 1 122 0
            l 7 50
            h -122
            h -14
            Z
            "></path>

            <path clip-path="url(#lensinner)" fill="#aaa" d="
            M 210 0
            h 20
            l -2 60
            h -23
            Z
            "></path>

            <path clip-path="url(#lensinner)" fill="#666" d="
            M 300 0
            h 40
            V 60
            h -34
            Z
            "></path>

            <path fill="#bbb" d="
            M 40 30
            h 125
            l 30 20
            h 110
            l 30 -20
            h 125
            C 490 30 493 51 495 65
            L 500 100
            H 0
            l 5 -35 
            C 7 51 10 30 40 30
            "></path>
            <!-- l 10 70 -->
            <!-- (1-30/(10^2 + 70^2)^0.5)*10 -->

            <path clip-path="url(#projall)" fill="#aaa" d="
                M 165 30
                L 155 37
                l 30 20
                L 195 50
            "></path>
            
            <path clip-path="url(#projall)" fill="#aaa" d="
                M 500 10
                l -50 50
                V 100
                H 500
                Z
            "></path>

            <path clip-path="url(#projall)" fill="#ccc" d="
                M 335 30
                L 345 37
                l -30 20
                L 305 50
            "></path>
            
            <path clip-path="url(#projall)" fill="#ccc" d="
                M 0 10
                l 50 50
                V 100
                H 0
                Z
            "></path>

            <path fill="#ffe" d="
            M 40 37
            h 115
            l 30 20
            h 130
            l 30 -20
            h 115
            C 480 37 480 51 482 65
            L 486 100
            H 14
            l 4 -35 
            C 20 51 20 37 40 37
            "></path>

            <text x="35" y="57" class="svgtext">Henry Zhao</text>
            <g><a href="mailto:henryzhao@zlww.com"><svg class="email button" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                x="440"  y="40" width="20" height="20" ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <rect fill="#ffff" top="0" left="0" width="512" height="512"></rect>
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64z
                M48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2z
                M0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
            </svg></a></g>

            <g><a href="https://www.linkedin.com/in/henry--zhao/"><svg class="linkedin button" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                x="415"  y="41" width="18" height="18"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <rect fill="#ffff" top="0" left="0" width="448" height="512"></rect>
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3z
                M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5z
                m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg></a></g>
        </svg>
    </div>
`

const footerLightHTML = `
    <svg viewbox="0 0 100 100" class="projlight" preserveAspectRatio="none" style="mix-blend-mode: multiply">
        <path fill="#dfe3ffdf" d="
        M 0 0
        H 100
        V 80
        L 50 90
        L 0 80
        Z
        "></path>
        
        <path fill="#ffffffdf" d="
        M 0 0
        H 100
        V 80
        H 0
        Z
        "></path>
    </svg>
`

document.getElementById("footerBody").innerHTML = footerBodyHTML;
document.getElementById("footerLight").innerHTML = footerLightHTML;