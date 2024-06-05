import React from 'react'
export default UnlockPage

function UnlockPage() {
   return (
   <div class="main-container">
        <div class="blur-background" id="blurBackground"></div>
        
        <div class="download-panel" id="downloadPanel">
            <button id="unlockerBtn" onclick={Ads}>Unlock</button>
            <button id="downloadBtn" disabled onclick={Goto}>Dowload</button>
        </div>
   </div>
    )
}

function Ads() {
   alert("Test")
   document.getElementById("downloadBtn").disabled = false;
}

function Goto() {
   alert("Dimz & Alvqid")
   document.location = "dimzproject.my.id"
}
