<?php
require 'conn.php';
// after submit form
if(isset($_POST['Submit']))
{
    //echo "<pre>";print_r($_POST);die;
    // Variables to be inserted into the table
    $Firstname = $_POST['Firstname'];
    $Lastname = $_POST['Lastname'];
    $Email = $_POST['Email'];
    $Comment = $_POST['Comment'];
                             
    // Email check
    $sql="select * from data where (Email='".$Email."');";
      $result=mysqli_query($conn,$sql);
      if (mysqli_num_rows($result) > 0) 
    {
          $row = mysqli_fetch_assoc($result);
                  if($row['id'] != $_GET['id'])
      {
          if($Email==isset($row['Email']))
         {
                $success = "email already exists";
         }
      }
     }
        else
        {
                          $sql = "UPDATE data SET Firstname='".$Firstname."', Lastname='".$Lastname."', Email='".$Email."', Comment='".$Comment."' Where id='".$_GET['id']."'";
                          $success = " New data insert is success... ";
        }
        
         
      if($result)
 {
   header("location:mydemo.php?success=".$success);
 }
   else
   {
    echo "faild";   
   }
   $result = mysqli_query($conn, $sql);
}
 
// when page load data get from this code
if(isset($_GET['id']))
        {
           $sql = "select * from data where id=".$_GET['id']; 
           $result = mysqli_query($conn, $sql);  
    
           if (mysqli_num_rows($result) > 0)
             {
               $row = mysqli_fetch_row($result);
                $Fristname=$row["1"];
                $Lastname=$row["2"];
                $Email=$row["3"];
                $Comment=$row["4"];
                
             }
        }       
?>
<html>
<div class="container">
  <form method= "post">
    <label for="Firstname">Firstname</label>
    <input type="text" id="Firstname" name="Firstname" placeholder="Your name.." value="<?php echo $Fristname?>">
    <label for="Lastname">Lastname</label>
    <input type="text" id="Lastname" name="Lastname" placeholder="Your last name.." value="<?php echo $Lastname ?>" >
    
     <label for="Email">Email</label>
    <input type="Email" name="Email" placeholder="Enter Your Email.." required value="<?php echo $Email ?>">
    <label for="Comment">Comment</label>
    <textarea id="subject" name="Comment" placeholder="Write something.." style="height:200px"><?php echo $Comment ?></textarea>
    <input type="Submit"  name="Submit" value="Submit">
  </form>
</div>
</html>