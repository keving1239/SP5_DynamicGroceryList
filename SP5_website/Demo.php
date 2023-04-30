<!DOCTYPE html>
<html>
  <head>
    <title>Dyanmic List</title>
    <meta name="author" content="Phillip Magnicheri">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <script src="Demo_Slides.js" type="text/javascript"></script>
    <link href="SP5_Style.css" rel="stylesheet" type="text/css"/>
    <link href="Demo_Style.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
    <body>
        <header>
            <a id = "logo" href = "Home.php"><img src = "/SP5_Website/img/SP5_logo.png" alt = "CartShare"></a>
            <img id = "color-bar" src = "/SP5_Website/img/color_trim.png" alt = "color-scheme">
            <ul id = "navbar">
                <li><a href="https://youtu.be/rawae-R7TB4" class = "navlink"
                target="_blank" rel="noopener noreferrer">Presentation Video</a></li>
                <li><a href="https://marvelapp.com/prototype/75idh1f" class = "navlink"
                target="_blank" rel="noopener noreferrer">Demo</a></li>
                <li><a href="/SP5_Website/docs/SP5_Final_Report.pdf" class = "navlink"
                target="_blank" rel="noopener noreferrer">Final Report</a></li>
                <li style = " border: none"><a href="https://github.com/keving1239/SP5_DynamicGroceryList" 
                class = "navlink" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
        </header>
        
        <div class = "content">
            <div class = screen-name-wrapper>
                <h1 id = "screen-name">Check It Out</h1>
            </div>
            <div class = "demo-wrapper" id = "walkthrough">
                <h2 class = "demo-name">Video Walkthrough</h2>
                <iframe src="https://www.youtube.com/embed/83a7-IA7QHs" 
                id = "video" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class = "demo-wrapper" id = "prototype">
                <h2 class = "demo-name">Interactive Prototype</h2>
                <iframe src="https://marvelapp.com/prototype/75idh1f?emb=1&iosapp=false&frameless=false" 
                id = "app" allowTransparency="true" style="-webkit-clip-path: inset(2px 2px); 
                clip-path: inset(2px 2px);"></iframe>
            </div>
            <div class = "demo-wrapper" id = "screenshots">
                <h2 class = "demo-name">App Screenshots</h2>
                <div class = "slides-wrapper">
                    <img class="slide" src="/SP5_Website/img/login_ss.png" alt = "screenshot">
                    <img class="slide" src="/SP5_Website/img/menu_ss.png" alt = "screenshot">
                    <img class="slide" src="/SP5_Website/img/lists_ss.png" alt = "screenshot">
                    <img class="slide" src="/SP5_Website/img/items_ss.png" alt = "screenshot">
                    <img class="slide" src="/SP5_Website/img/add_item_ss.png" alt = "screenshot">
                    <img class="slide" src="/SP5_Website/img/deleted_ss.png" alt = "screenshot">
                    <button id = "left" onclick="moveSlide(-1)">&#10094;</button>
                    <button id = "right" onclick="moveSlide(1)">&#10095;</button>
                </div>
            </div>
        </div>
        <footer>
            <p id="copyright">Copyright &copy; 2023 SP5Y. All rights reserved.</p>
            <table id = "accesstable">
                <tr>
                    <th>Documentation</th>
                    <th>Social Media</th>
                    <th>Policies</th>
                </tr>
                <tr>
                    <td><a class = "accesslink" href="/SP5_Website/docs/SP5_ProjectPlan.pdf" 
                    target="_blank" rel="noopener noreferrer">Project Plan</a></td>
                    <td><a class = "accesslink" href="https://github.com/keving1239/SP5_DynamicGroceryList" 
                    target="_blank" rel="noopener noreferrer">GitHub</a></td>
                    <td><a class = "accesslink" href="Home.php" 
                    target="_blank" rel="noopener noreferrer">Privacy</a></td>
                </tr>
                <tr>
                    <td><a class = "accesslink" href="/SP5_Website/docs/SP5_SRS.pdf" 
                    target="_blank" rel="noopener noreferrer">SRS Document</a></td>
                    <td><a class = "accesslink" href="https://www.instagram.com" 
                    target="_blank" rel="noopener noreferrer">Instagram</a></td>
                    <td><a class = "accesslink" href="Home.php" 
                    target="_blank" rel="noopener noreferrer">Risk Management</a></td>
                </tr>
                <tr>
                    <td><a class = "accesslink" href="/SP5_Website/docs/SP5_UserGuide.pdf" 
                    target="_blank" rel="noopener noreferrer">User Guide</a></td>
                    <td><a class = "accesslink" href="https://twitter.com" 
                    target="_blank" rel="noopener noreferrer">Twitter</a></td>
                    <td><a class = "accesslink" href="Home.php" 
                    target="_blank" rel="noopener noreferrer">Cookies</a></td>
                </tr>
            </table>
        </footer>
  </body>
</html>