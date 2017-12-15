from flask import Flask , jsonify, request,Response,json
import collections
from flask_cors import CORS
from flask_mysqldb import MySQL
app = Flask(__name__)  # Construct an instance of Flask class for our webapp
CORS(app)

@app.route('/new')   
def index():  
    return ('index')

#get  students
@app.route('/v1/students', methods=['GET'])
def getStudents():
    
    # connecting mysql with cursor
    cur = mysql.connection.cursor()
    
    #execute the query
    cur.execute('''select * from student.student''')
    
    #fetching all students
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify(r)


# get  student

@app.route('/v1/student/<string:id>')
def getStudent(id):
    
    #mysql connection
    curs = mysql.connection.cursor()
    
    #query execution
    query_string = "SELECT * FROM student.student where id= {id}".format(id=id)  
    curs.execute(query_string)
    data =curs.fetchall()
    #Converting data into json
    user_list = []
    for row in data :
        d=collections.OrderedDict()
        d['id']  = row[0] #id
        d['name']   = row[1] #name
        d['age']      = row[2] #age
        d['major']      = row[3] #major
        d['sport']      = row[4] #sport
        d['rank']      = row[5] #rank
    user_list.append(d)
    return jsonify(user_list[0])
 
 
#adding   student
    
@app.route('/v1/student', methods=['POST'])
def addStudent():
    #id=request.json['id'];
    student_id="";
    request_name=request.json['name'];
    request_age=request.json['age']
    request_major=request.json['major']
    request_sport=request.json['sport']
    request_rank=request.json['rank']
    try:
        con = mysql.connection
        curr=con.cursor()
        curr.execute ("""INSERT INTO student.student(name,age,major,sport,rank) VALUES  (%s,%s,%s,%s,%s)""", (request_name,request_age,request_major,request_sport,request_rank))
        con.commit();
        student_id=curr.lastrowid
    except:
        con.rollback()
    
    #response=Response(status=201);
    #response.headers['id'] = student_id
       
    return json.dumps({'success':True}), 201, {'id':student_id} 

#put(edit) student

@app.route('/v1/student/<string:student_id>', methods=['PUT'])
def editStudent(student_id):
    request_name=request.json['name'];
    request_age=request.json['age']
    request_major=request.json['major']
    request_sport=request.json['sport']
    request_rank=request.json['rank']
    
    try:
        con = mysql.connection
        cur=con.cursor()
        cur.execute("""UPDATE student.student SET name=%s, age=%s, major=%s, sport=%s, rank=%s  WHERE id=%s""",(request_name,request_age,request_major,request_sport,request_rank,student_id))
        #cur.execute(query_str)
        con.commit()
    except Exception as e: 
        print(e)
        con.rollback()
    return jsonify()
    

#delete Student

@app.route('/v1/student/<int:student_id>', methods=['DELETE'])
def deleteStudent(student_id):
    
    try:
        con = mysql.connection
        curr=con.cursor()
        curr.execute ("DELETE FROM student.student WHERE id=%s"%(str(student_id)))
        con.commit();
        
    except Exception as e:
        print("s")
        print(e)
        con.rollback()
      
    return  jsonify() 

mysql = MySQL()
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_DB'] = 'student'
app.config['MYSQL_HOST'] = 'localhost'
mysql = MySQL(app)


if __name__ == '__main__':
    app.run(debug=True)   
# 
