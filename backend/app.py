from flask import Flask, request
import sqlite3
app = Flask(__name__)

@app.route("/")
def start():
  return ''


Db_connect = sqlite3.connect('Project1.db')
Db_connect.execute(
  '''Create table if not exists Student(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    credits INTEGER)
    '''
)

Db_connect.execute(
  '''Create table if not exists Instructor(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    course_deparment TEXT, 
    name TEXT)
    '''
)

Db_connect.execute(
  '''Create table if not exists Course(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title TEXT, 
    instructorid INTEGER,
    FOREIGN KEY(instructorid) REFERENCES instructor(id) )
    '''
)

Db_connect.execute(
  '''Create table if not exists Student_Course(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    grade REAL, 
    studentid INTEGER, 
    courseid INTEGER,
    FOREIGN KEY(studentid) REFERENCES student(id),
    FOREIGN KEY(courseid) REFERENCES course(id) )
    '''
)
Db_connect.commit()
Db_connect.close()

def ConnectAndExecute(command, fetch):
  db = sqlite3.connect('Project1.db')
  result = db.execute(command)
  if (fetch):
    result = result.fetchall()
  else:
    db.commit()
  db.close()
  return result

@app.route("/student", defaults={'id': 0}, methods=['GET', 'POST'])
@app.route("/student/<id>", methods=['GET'])
def student(id):
  if request.method == 'GET':
    if id == 0:
      return ConnectAndExecute(f'''SELECT * FROM Student ''', True)
    else:
      return ConnectAndExecute(f'''SELECT * FROM Student WHERE id = {id}''', True)
  elif request.method == 'POST':
    data = request.get_json()
    ConnectAndExecute(f'''INSERT INTO Student values (NULL, '{data['name']}', {data['credits']})''', False)
    return 'works'
  
if __name__ == "__main__":
  app.run()
