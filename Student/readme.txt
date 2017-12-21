Student application :
Introduction
Student application is an application to get the information of students that have attributes like name,age,major,sport and rank.
This is a Student application project index page  includes the options like add,edit and delete .

Technolgies used :
 Frontend :html
Backend:mysql
REST API:Python

Folders and Files in the Project:
assignment---->
	        --> Student----
			->student_flask.py
			-->requirements.txt
			-->README.txt

	         -->student-ui----
			->WebContent---
				          --->scripts---
						-->script.js
				         ---->editStudent.html
				         ---->index.html
	         --->database.sql
	        ----> Student App in HTML and Python.txt 

REST API:i.e (student_flask.py)
In Student project REST(REpresentational State Transfer) includes methods:
getStudents();---This includes "GET" method to get all the students in project.
getStudent();---This includes "GET" method to get a student in project.
addStudent();---This includes "POST" method to add student in project.
editStudent();---This includes "PUT" method to edit a student in project.
deleteStudent();--This includes "DELETE" method to delete a student in project.

Backend:
The backend is made in mysql.The database name is "student" and the table name is "student"  and the table includes properties includes 
id,name,age,major,sport,rank.

Frontend:
The frontend is made with using html,jquery.
The files that are included as index.html,editStudent.html.

Installation Steps:
Installing python:
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

 Adding pip
 	Pip is package management system used to install and manage package written in Python.
	Link to add pip:
	https://github.com/BurntSushi/nfldb/wiki/Python-&-pip-Windows-installation

Installing flask
	Flask is micro web framework used in python.
	1. Open cmd  and type ”pip install flask”
	2. Done with the installation ,then move towards other step.

Installing  mysql connection
	MySQL Enterprise Edition. The most comprehensive set of advanced features, management        tools and technical support to achieve the highest levels 	of MySQL scalability, security, reliability,   and uptime. 
	To install the mysql ,type “pip install mysql” in the cmd, which connect the databse with api.

Installing CORS
	Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected 	resources from a server on a different origin (domain) than the site currently in use. A user agent makes a cross-origin HTTP request when it requests a 	resource from a different domain, protocol, or port than the one from which the current document originated.


How to start application

	Start mysql  in xampp.
	Start  the server.
 	Open the index.html file from the given folder in Google Chrome.The url created on the first page is index.html
	That page will show index or first page, which includes getting the students, adding a student, edit a student as well as deleting a student.


Running Application

	Start mysql server
	Run Python (student_flask.py) . You can use Eclipse to start .
	Open index.html in browser, preferably Chrome.


Results while running the Project:
	Firstly when index.html is running in the chrome ,it will open a page that includes all the students in the database and along with that it includes options 
	add,edit and delete.

	When in index.html we click on "add" button that page leads to add student in database.And finally get all students with the added one.

	If edit is called another page will open , this will open a new HTML, We are passing id which is unique for each user as request parameter. Once page 		opens it uses this request parameter to initiate a get request and fetch all the parameter corresponding to user and sets it to form. After that we can edit the 	details and press submit button to edit. Edit will call the PUT request from its javascript function.
	Once added we have options to edit and delete .
	When the databse is updated with the values finally get all students with updated one.

	When in index page click on "delete" button ,the respective student will get removed from the database and finally get students removing the deleted one.
	Once delete is called deleteStudent(id) function is called . This will again trigger ajax request to server, which will delete the added user.This is done by 	      	calling REST url of delete.



	
	
		