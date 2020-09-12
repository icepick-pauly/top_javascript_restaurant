const content = document.getElementById('content');

export function menu() {
    content.innerHTML = `
    <div class="window" id="window">
            <div class="window-econtainer">
                <div class="window-content">
                    <div class="window-upper">
                        <h1>Check Out Our Menu!</h1>
                    </div>
                    <div class="window-lower">
                        <table>
                            <tr>
                                <th></th>
                                <th>Entrees</th>
                                <th>Price</th>
                            </tr>
                            <tr>
                                <td>01.</td>
                                <td>Pho House 69 Special</td>
                                <td>$15.74</td>
                            </tr>
                            <tr>
                                <td>02.</td>
                                <td>Pho B Combo</td>
                                <td>$9.26</td>
                            </tr>
                            <tr>
                                <td>03.</td>
                                <td>Pho Tai</td>
                                <td>$9.26</td>
                            </tr>
                            <tr>
                                <td>04.</td>
                                <td>Pho Chin</td>
                                <td>$9.26</td>
                            </tr>
                            <tr>
                                <td>05.</td>
                                <td>Pho Tai Chin</td>
                                <td>$9.26</td>
                            </tr>
                            <tr>
                                <td>06.</td>
                                <td>Pho Rau</td>
                                <td>$9.26</td>
                            </tr>
                            <tr>
                                <td>07.</td>
                                <td>Pho Filet Mignon</td>
                                <td>$12.04</td>
                            </tr>
                            <tr>
                                <td>08.</td>
                                <td>Pho Ox Tail</td>
                                <td>$12.04</td>
                            </tr>
                            <tr>
                                <td>09.</td>
                                <td>Pho Ga</td>
                                <td>$9.26</td>
                            </tr>
                            <tr>
                                <td>10.</td>
                                <td>Pho Shrimp</td>
                                <td>$9.26</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
}