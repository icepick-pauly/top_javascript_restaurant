const content = document.getElementById('content');

export function order() {
    content.innerHTML = `
    <div class="window" id="window">
        <div class="window-container">
            <div class="window-content">
                <div class="window-upper">
                    <h1>Order Online!</h1>
                </div>
                <div class="window-lower-delivery">
                    <img src="./assets/img/delivery/dd.png"  class="deliver-img" alt="">
                    <img src="./assets/img/delivery/pm.png"  class="deliver-img" alt="">
                    <img src="./assets/img/delivery/ue.jpg"  class="deliver-img" alt="">
                </div>
            </div>
        </div>
    </div>
    `
}