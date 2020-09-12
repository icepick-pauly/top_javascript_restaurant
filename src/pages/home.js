const content = document.getElementById('content');

export function home() {
    content.innerHTML = `
        <div class="window" id="window">
            <div class="home-container">
                <div class="home-content">
                    <div class="home-text">
                        <h1>Our Phở is Phở-king Dank!</h1>
                    </div>
                    <div class="home-img">
                        <img src="assets/img/pho_home.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    `
}