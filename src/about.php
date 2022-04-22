<!DOCTYPE html>
<html lang="en">
<head>

    <!--Name    : L.P.N. Gunathilaka
        IT No   : IT21286414
        Campus  : Malabe
        Labsheet: 2 -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles.css">
    <script src="js/myScript.js"></script>

    <!--Add a title (a)-->
    <title>My Shopping Cart</title>
</head>
<body>

    <!--Add a logo (b)-->
    <img class="logo" src="images/cart icon.png" width="200px" heigth="200px">

    <!--Add a Header (c)-->
    <header>
        <h1>Shopping Cart</h1>
        <h3>The online shopping store</h3>
    </header>

    <!--Add a horizontal line (d)-->
    <hr>

    <!--Add a horizontal menu (e)-->
    <div class="nav"><ul>
        <li>
            <a href="index.html">Home</a>
        </li>
        <li>
            <a href="news.html">News</a>
        </li>
        <li>
            <a href="register.html">Contact</a>
        </li>
        <li>
            <a href="http://courseweb.sliit.lk/">About Us</a>
        </li>
    </ul></div>



    <center>


    <?php
        #header
        define("CompanyName", "ABC Company");
        echo "<h1>".CompanyName."</h1>";

        #About
        echo "<h2>"."About " . CompanyName ."</h2>";
        echo "This page is mainly about the (company name) web site";

        #sales
        $sold = 75;
        $total = 100;


        echo "<h3> The Shopping Cart</h3>";
        echo "<br>No of Sold = $sold <br> No of Total = $total";

        function findPercentage(){
            $GLOBALS['percentage']= ($GLOBALS['sold']/$GLOBALS['total']) * 100;
        }

        findPercentage();
        echo "<br>Percentage of sold items = $percentage %<br>";

      
  
        #date
        echo "Today is ".date("l");


        $status;
        $today = date("Y-m-d");
        $shipDay = date("2019-09-21");

        if ($shipDay > $today)
        {
            $status = "TO BE SHIPPED";
        }
        else 
        {
            $status = "SHIPPED";
        }

        echo "<br>For $today 24 items has $status<br>"

        

        #LOOPING FUNCTIONS

        function loopUsingWhile(){
            
        }

    ?>

    </center>

    <!--for scroll- experiment purpose-->
    <div class="box"></div>

    <!--Add a footer (g)-->
    <div class="footer">
        <footer>
            <p>Created by : Pawara Gunathilaka</p>
            <a href="http://courseweb.sliit.lk/" target="_blank">Visit to Our Course</a>
        </footer>
    </div>

    
</body>
</html>