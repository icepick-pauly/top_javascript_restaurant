const content = document.getElementById('content');

export function contact() {
    content.innerHTML = `
    <div class="window" id="window">
        <div class="window-container">
            <div class="window-content">
                <div class="window-upper">
                    <h1>Get In Touch With Us!</h1>
                </div>
                <div class="window-lower-contact">
                    <img src="./assets/img/noods.svg" height="100px" style="border:none;" alt="">
                    <div class="contact">
                        <h3>Phone: (202)-555-6969</h3>
                        <h3>Email: pho69@gmail.com</h3>
                        <h3>Address: 2607 Burton Avenue, McLouth Kansas 66054 </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}