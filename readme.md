Student Application 
===================
Student App in Python and HTML/Jquery using RESTful api

----------


1.Introduction
-------------
This  **Student application** contains two basic parts:

 - REST API(Python)  
 -   Front-end(HTML,jquery)

**1.1.REST API**
| URL  |  Method   |   Body  |  Response  | Response Status | Contents |
|:-----| :--------| :-------|:------------|:--------|:------|:-------:|
|v1/students|get|  | | 200||
|v1/student|post|{ "name":"Jeny","age":22,"major":"Maths","sport":"Cricket","rank":1}| {"success": true}|201| |
|v1/student/<string:id>|put|||200||
|v1/student/<string:id>|delete|||200||


**1.2.Frontend**
A simple HTML , Jquery ,Bootstrap application.

2.	Prerequest
---------
Technology used:
**Python,mysql,html,jquey**

3.	Installation Steps:
---------
**3.1 Installing python:**
            1.Download Python from the url: https://www.python.org/downloads/
           2.After downloading install the python by following the steps to install.
	3.After the installation of python ,plugin the pydev in eclipse
       4.Open Eclipse.
5.Go to  “help”.->”Install new software”.
6. “Go to "http://www.pydev.org/updates" and press Enter.
7. Select PyDev.
8. Click Next and follow the instructions.
9. Restart Eclipse
10.For reference link used: https://www.wikihow.com/Install-Pydev-on-Eclipse

**3.2. Adding pip**
Pip is package management system used to install and manage package written in Python.
Link to add pip:
https://github.com/BurntSushi/nfldb/wiki/Python-&-pip-Windows-installation

**3.3.Installing flask**
	Flask is micro web framework used in python.
	1. Open cmd  and type **”pip install flask”**
	2. Done with the installation ,then move towards other step.
	
**3.4.Installing  mysql connection**
MySQL Enterprise Edition. The most comprehensive set of advanced features, management        tools and technical support to achieve the highest levels of MySQL scalability, security, reliability,   and uptime. 
To install the mysql ,type “pip install mysql” in the cmd, which connect the databse with api.

**3.5.Installing CORS**
Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use. A user agent makes a cross-origin HTTP request when it requests a resource from a different domain, protocol, or port than the one from which the current document originated.

4.	How to start application
-
4.1.Start **mysql**  in xampp.
4.2.Start  the server.
4.3. Open the **index.html** file from the given folder in Google Chrome.The URL  created on the first page is index.html
That page will show index or first page, which includes **getting the students, adding a student, edit a student as well as deleting a student.**


5.	Running Application
-
•	Start mysql server
•	Run Python `(student_flask.py)` . You can use Eclipse to start too.
•	Open index.html in browser, preferably Chrome.
•	Following page will be displayed

![enter image description here](https://lh3.googleusercontent.com/-iCJAh354tH4/WjvFbqiJ2jI/AAAAAAAACNE/uedLe3skEt8--dZqsOcsYWy7Zat7WAJpACLcBGAs/s0/img1.png "img1.png")

•	Enter Student delete and press **Add** button. This will trigger a **POST** request. Add button calls a javascript function addStudent which is in `scripts/script.js` . It will start an ajax request to python server. Python code(server) will add an entry in database.
•	Once added Page will refresh and new added user will be displayed at page as in figure below

![enter image description here](https://lh3.googleusercontent.com/-VBUgsoc7KpA/WjvGQWYPc4I/AAAAAAAACNQ/3p5a-37P6rohWT8e5to5NiFDgjihrhgfQCLcBGAs/s0/img2.png "img2.png")

•	Once added we have options to edit and delete as shown above.
•	Once delete is called **deleteStudent(id)** function is called . This will again trigger ajax request to server, which will delete the added user.This is done by calling **REST** url of delete as described above.

![enter image description here](https://lh3.googleusercontent.com/-t1l2LNkUeN8/WjvG2immvxI/AAAAAAAACNg/kuo7T5FRv9EHrQa2iFoinbV5wStALoVoACLcBGAs/s0/img3.png "img3.png")


•	If **edit** is called another page will open , this will open a new HTML, We are passing id which is unique for each user as request parameter. Once page opens it uses this request parameter to initiate a get request and fetch all the parameter corresponding to user and sets it to form. After that we can edit the details and press submit button to edit. Edit will call the PUT request from its javascript function.


