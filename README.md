# QuorumIT - Backend Assignment

## Steps to run the project locally
##### PREREQUISITES
Install the following packages:
* git
* docker
* docker-compose

##### Step 0 – Clone the repository
```sh
> git clone https://github.com/MartinBert/quorum-challenge .
```

##### Step 1 – Add a .env file at the root of the project with the following content:
```sh
DATABASE_URL=postgresql://postgres:postgres@172.17.0.1:5433/challenge?schema=public
```

##### Step 2 – Execute the following commands
```sh
> cd quorum-challenge
> docker compose up
```

##### Step 3 – Check the API is ready
Go to http://localhost:3000


##### Step 4 (Optional)
You can also open PGAdmin from the following url:
http://localhost:5050

Use the following credentials:
* postgres@postgres.com
* postgres

#### Note:
The first time that you open PGAdmin you need to create a New Server with the following properties:
* General Tab
    * Name: "Put whatever name you want"
* Connection Tab
    * Host name/address: **postgres**
    * Port: **5432**
    * Username: **postgres**
    * Password: **postgres**

After you configure PGAdmin you should see the database with name **challenge** used in this project

#### API doc:
Go to http://localhost:3000/api-doc

#### Postman folder with all endpoints:
Copy https://www.getpostman.com/collections/f399a01f12673b9547c4 and paste in import > link option.

#### Preset credentials
##### User 1 (create, update and delete users)
```
{
    email: martinbertello7@gmail.com
    password: 12345
}
```
##### User 2 (assign permissions and roles)
```
{
    email: juanperez@gmail.com
    password: 12345
}
```
##### User 3 (create, update and delete permissions)
```
{
    email: antonela@gmail.com
    password: 12345
}
```
##### User 4 (create, update and delete roles)
```
{
    email: brendaramirez@gmail.com
    password: 12345
}
```