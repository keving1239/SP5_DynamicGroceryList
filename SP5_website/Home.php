<!DOCTYPE html>
<html>
    <head>
        <title>Dynamic Grocery List</title>
        <meta name="author" content="Phillip Magnicheri">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <link href="SP5_Style.css" rel="stylesheet" type="text/css" />
        <link href="Home_Style.css" rel="stylesheet" type="text/css"/>
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
                <h1 id = "screen-name">The Dynamic Grocery List</h1>
            </div>
            <div class = "member-wrapper">
                <h1>Project Members</h1>
                <div class = member-pfp-name>
                    <img src = "https://lh3.googleusercontent.com/XGCx-C6I4z8a2UQVOrTKs5wMTty7nskA7uLhUvqaeQrRv-aa4ENZCGd0-o2QzSFVX2x2BcLkzoYbidqHMW2IucSYTBqLJZwUePRAgnSTwmzWsaUlNaTu-vkmaPx9rZsk9v8uQnUb=w2400" 
                    class = "member-pfp" id = "Phillip-pfp" alt="Phillip">
                    <p>Phillip Magnicheri</p>
                </div>
                <div class = member-pfp-name>
                    <img src = "https://lh3.googleusercontent.com/3FHeIluUNQY6BUOQRvOWchoRn4nbiz61CchyvmWHCeX23UNK2ftUfkj6j_KYhb7w2YVZje4X93w2PrARVYg2Bc5WOU5fFZyqDkgq4otBCrcnP9HdEqrAHH3lSEEkR5jjWhJ6bJ7m=w2400"
                    class = "member-pfp" id = "Kevin-pfp" alt="Kevin">
                    <p>Kevin Galdamez</p>
                </div>
                <div class = member-pfp-name>
                    <img src = "https://lh3.googleusercontent.com/Qo1YLhMmb8e03Z-JTUvdqb2Xr22rapvfyhC_VEg_WxoFaNIRw8G1xbjj3oQ2Mmo8m9h9gP-lg8BWsTANDkAY0VDOdDtkSBoitiDLcS9RyfAb_qK9_wx6iHe5kQeFW_94VfyYO4mv=w2400"
                    class = "member-pfp" id = "Scott-pfp" alt="Scott">
                    <p>Scott McCandless</p>
                </div>
                <div class = member-pfp-name>
                    <img src = "https://lh3.googleusercontent.com/RjhaK457p0StF8XaMuHAl644Tci28YV-JlXPrAvhbejmyMe8vXI6fD1CZe735HKHj48F-NoEVOgJesIaSc5Rsmt6KohS3GvWyUxsXgA4s4hTVn_toMaH98yXEp_HfJDqYPCg-gY6=s252-p-k"
                    class = "member-pfp" id = "Ashia-pfp" alt="Ashia">
                    <p>Ashia Hawkins</p>
                </div>
            </div>
            <div class = "project-content">
                <h1>Project Overview</h1>
                <p>The main goal for the project is to create a grocery list app which allows users 
                to create a list, add items to the list, edit the list, save the list locally 
                and in a database. With that list, users may share it to other users so that 
                they can view or edit it. We want to expand this project to include nested 
                lists, which would allow users to group their list into different stores and needs. 
                We also want to construct an ability to find coupons and to monetize the applications.</p>
                <h1>Project Links</h1>
                <ul>
                    <li><a href="About.php">About</a></li>
                    <li><a href="Demo.php">Illustrations</a></li>
                    <li><a href="Resources.php">Resources</a></li>
                    <li><a href="Contact.php">Contact</a></li>
                </ul>
                <img id = "logo-cart" src = "/SP5_Website/img/logo_cart.png" alt = "logo-cart">
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