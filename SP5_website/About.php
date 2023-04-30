<!DOCTYPE html>
<html>
    <head>
        <title>Dynamic Grocery List</title>
        <meta name="author" content="Phillip Magnicheri">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <link href="SP5_Style.css" rel="stylesheet" type="text/css"/>
        <link href="About_Style.css" rel="stylesheet" type="text/css"/>
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
                <h1 id = "screen-name">A New Kind of Grocery List</h1>
            </div>
            <section id = "description">
                <h1 id = "section-name">Why do we need this?</h1>
                <div class = "text-wrapper" id = "about">
                    <p>Have you ever been in a hurry to leave the house and get to the store, 
                    and as soon as you are about to leave someone asks you to grab something?! 
                    Then, As soon as you get to the store, you forget what that thing was! Now 
                    you have to call that person to ask. No one wants to make that call. <br>
                    <br>Wouldn't it be so much easier to have a sharable list that both parties 
                    can update? Then you wouldn't have to worry about forgetting? We do too, 
                    so that is where CartShare can save the day! Now you can 
                    create lists, share those lists with friends and family, update that list 
                    when something comes up, and make sure nothing is ever forgotten again. </p> 
                </div>
                <div class = "img-wrapper" id = "grocery-bag">    
                    <img src = "/SP5_Website/img/shopping_bag.jpg" alt="grocery img">
                    <p> Photo by 
                        <a href="https://unsplash.com/@ciabattespugnose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank" rel="noopener noreferrer">Lucrezia Carnelos</a> on
                        <a href="https://unsplash.com/photos/wQ9VuP_Njr4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank" rel="noopener noreferrer">Unsplash</a>
                    </p>
	            </div>
	        </section>
	        <section id = "innovation">
	            <h1 id = "section-name">What makes this special?</h1>
	            <div class = "text-wrapper" id = "technologies">
	                <p>CartShare is on the forefront of mobile app development and user-centered design! Our app utilizes
	                React and Microsoft Azure to provide a beautiful, lightning fast experience. Not only can you create separate
	                grocery lists for separte shopping trips and share those lists with friends and family, we have added so 
	                much more to the shopping experience!<br><br>With the use of artificial intelligence and cloud computing, we will
	                scour the internet for copouns tailored to your experience, remind you when you need to restock an item, and 
	                sort your items into a "smart list" sorted by stores, departments, and savings!</p>
	            </div>
	            <div class = "img-wrapper" id = "design-img">    
                    <img src = "/SP5_Website/img/design_img.jpg" alt="grocery img">
                    <p> Photo by 
                        <a href="https://unsplash.com/@headwayio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank" rel="noopener noreferrer">Headway</a> on
                        
                        <a href="https://unsplash.com/photos/5QgIuuBxKwM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank" rel="noopener noreferrer">Unsplash</a>
                    </p>
	            </div>
	        </section>
	        <section id = "marketing">
	            <h1 id = "section-name">Where do I sign up?</h1>
	            <div class = "text-wrapper" id = "signup">
	                <p style = "padding: 25px 20px 15px 20px;">
	                You can download our app by searching "CartShare" on the App Store or the Google Play store! Once 
	                you've done that, you can sign up with a valid email and password. We can also make an account 
	                for you! Just fill out the form below, and we will send you your sign in information!</p>
	                <form id = "account-form">
	                    <input type="text" id="fname" name="firstname" placeholder="First Name" maxlength = 64 required>
	                    <input type="text" id="lname" name="lastname" placeholder="Last Name" maxlength = 64 required>
	                    <input type="email" id="email" name="Email" placeholder="Email" maxlength = 64 required>
	                    <input type = "submit" id = "submit" value = "Send">
	                </form>
	            </div>
	            <div class = "img-wrapper" id = "grocery-eggs">    
                    <img src = "/SP5_Website/img/grocery_eggs.jpg" alt="grocery img">
                    <p> Photo by 
                        <a href="https://unsplash.com/@ntaylor13?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank" rel="noopener noreferrer">natasha t</a> on
                        <a href="https://unsplash.com/photos/pA63qniGriA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank" rel="noopener noreferrer">Unsplash</a>
                    </p>
	            </div>
	        </section>
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