const content = document.getElementById('content');

export function home() {
    content.innerHTML = `
        <div class="window" id="window">
            <div class="window-container">
                <div class="window-content">
                    <div class="window-upper">
                        <h1>Our Phở is Phở-king Dank!</h1>
                    </div>
                    <div class="window-lower">
                        <img src="assets/img/pho_home.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    `
}