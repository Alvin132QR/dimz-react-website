import React from 'react'
export default UnlockPage

function UnlockPage() {
   return (
   <div class="main-container">
        <div class="blur-background" id="blurBackground"></div>
        
        <div class="download-panel" id="downloadPanel">
            <button id="unlockerBtn" >Unlock</button>
            <button id="downloadBtn" disabled >Dowload</button>
        </div>
   </div>
    )
}

document.getElementById('unlockerBtn').addEventListener('click', function () {
   alert("Test")
   document.getElementById("downloadBtn").disabled = false;
   )
}

document.getElementById('downloadBtn').addEventListener('click', function () {
   alert("Dimz & Alvqid")
   document.location = "dimzproject.my.id"
   )
}
