# technical-tes-nodejs-upscale

List of Available Endpoints:
- `GET /tasks`
- `POST /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`


&nbsp;
&nbsp;
### 1. GET /tasks
#### Description
- Get all the task data

#### Response
_200 - OK_

- Body
    ```json
      [
        {
            "id": Integer,
            "title": String,
            "Description": String,
            "Completed": Boolean,
            "createdAt": Date,
            "updatedAt": Date
        },
        ...
      ]
    ```
&nbsp;
&nbsp;

&nbsp;
&nbsp;

### 2. POST /tasks
#### Description
- Create a new task data

#### Request
- Body
    ```json
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
    ```
    ```json
    {
        "title": String,
        "Description": String
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
        "id": Integer,
        "title": String,
        "Description": String,
        "createdAt": Date,
        "updatedAt": Date
    }
    ```

_400 - Bad Request_
- Body
    ```json
    {
      "message" : "Title cannot be empty"
    }
    ```
    
&nbsp;
&nbsp;

### 3. GET /tasks/:id
#### Description
- Get a task data based on given id

#### Response
_200 - OK_

- Body
    ```json
    
        {
            "id": Integer,
            "title": String,
            "Description": String,
            "Completed": Boolean,
            "createdAt": Date,
            "updatedAt": Date
        }
    
    ```
_404 - Not Found_
- Body
    ```json

      {
        "message": "Task Not Found"
      }
      
&nbsp;
&nbsp;

### 4. PATCH /tasks/:id
#### Description
- update a task data based on given id

#### Request
- Body
    ```json
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
    ```
    ```json
    {
        "title": String,
        "Description": String,
        "Completed" : Boolean
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
      "message": `successfully update the task with id ${id}`
    }
    ```
_404 - Not Found_
- Body
    ```json

      {
        "message": "Task Not Found"
      }
&nbsp;
&nbsp;

### 5.DELETE /tasks/:id
#### Description
- Remove a task data based on given id

#### Response
_200 - OK_
- Body
    ```json
    {
      "message" : `succesfully delete task with id ${id}`
    }
    ```
_404 - Not Found_
- Body
    ```json
    {
      "message": "Task not found"
    }
    
    ```

&nbsp;
&nbsp;

### Global Error
#### Response
_500 - Internal Server Error_
- Body
    ```json
      {
        "message": "Internal Server Error"
      }
    ```

