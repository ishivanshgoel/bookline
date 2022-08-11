# Bookline
### Dependencies
```.json
 "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "mongoose": "^6.5.1",
    "nodemon": "^2.0.19"
  }
```

### Tasks
1. Create an API which stores the user ID and password, along with an expiry date for that password as 30 days from the date of creation. Passwords should be encrypted one way, i.e. they cannot be decrypted.
### Request Body
```.json
{
    "userId": "shivanshgoel2@gmail.com",
    "password": "1234"
}
```
### Response
```.json
{
    "message": "success",
    "response": {
        "userId": "shivanshgoel3@gmail.com"
    }
}
```

2. Create an API to store Student details - ID, Name and Date of birth

### Request Body
```.json
{
    "userId": "shivanshgoel@gmail.com",
    "studentId": "19BLC1037",
    "name": "Shivansh",
    "dob": "Fri Aug 12 2022 00:37:13 GMT+0530 (India Standard Time)"
}
```

### Response
```.json
{
    "message": "success",
    "response": {
        "studentId": "19BLC1097",
        "userId": "shivanshgoel3@gmail.com",
        "name": "Shivansh",
        "dob": "2022-08-11T19:07:13.000Z",
        "_id": "62f55aaf92d16ae5a3a135bf",
        "__v": 0
    }
}
```

3. Create an API to store the details of a class.
### Request Body
```.json
{
    "className": "Class - 10",
    "year": 2022,
    "classTeacher": "Preeti",
    "subjectList": ["Physics", "Chemistry", "Math", "Biology"],
    "students": {
        "Roll-1": {
            "studentId": "19BLC1037",
            "marks": {
                "Physic": 90,
                "Math": 100
            }
        },
        "Roll-2": {
            "student-2": "19BLC1046",
            "marks": {
                "Physics": 100,
                "Math": 100
            }
        }
    }
}
```
### Response
```.json
{
    "message": "success",
    "response": true
}
```
4. Create an API to get the score of all students in a class for a particular subject.

### Query Params
```
/class/studentsmarks?className=Class - 10&subjectName=Physics
```
### Response
```.json
{
    "message": "success",
    "response": [
        {
            "studentId": "19BLC1037",
            "subjectName": "Physics",
            "marks": 90,
            "className": "Class - 10"
        }
    ]
}
```
### .env file
```
ENVIRONMENT=dev

DB_URI=<--mongodb DB URI -->
