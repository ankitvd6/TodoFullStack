**Make sure port 8080 and 4200 are not preoccupied.** If occupied please free these ports as the app uses these two ports. Although these 
properties can be modfied. The post 4200 is used by angular client and can be modified by small change in the ng serve command by using 
**ng serve --port <PORT_NUMBER>** rather than using ng serve command to start angular client.

**Steps to create the database:**
1. This project uses mysql db setup on port 3306.
2. Username and password should be both **root**. Username: **root** password: **root**
3. Create database todobackend. Use below command:

CREATE DATABASE `todobackend` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

4. create table todo inside database todobackend. Use below command:

CREATE TABLE `todo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `heading` varchar(50) NOT NULL,
  `duedate` date NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `priority` varchar(20) NOT NULL DEFAULT 'low',
  `status` varchar(20) NOT NULL DEFAULT 'new',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

Your database is ready to be used by the app.

**Steps to run the app:**

1. Clone the git repository
go to https://github.com/ankitvd6/TodoFullStack
clone the repository:  git clone https://github.com/ankitvd6/TodoFullStack.git
 
2. Go to the **TodoFullStack(app) directory** (TodoFullStack directory is our base directory of the app)

3. We have two sub steps now. First to start the **java backend service** and second is to start the **angular client app.**

4. make sure we have the node modules folder present inside: TodoFullStack\src\main\webapp\angular directory.

5. On the first time node modules will be missing, we need to install node modules, so run the npm i command or file: npm_install_run present in the TodoFullStack\src\main\webapp\angular directory

6. this is going to take some time. I have already installed this so i am terminating this job (using ctrl+c)

7. After downloading the node modules. Lets start the backend service first.

8. In the TodoFullStack directory (app directory) we can see the run batch file. run this file to make the backend service running. This will start our java backend service.

Usually it takes little time but if it too long try restarting the run.bat. First close the current open file using ctrl + c. Now againg run run.bat file


9. Then we need to start our angular client. Go to the TodoFullStack\src\main\webapp\angular directory and run the ng_serve_run
file. This will start our app on http://localhost:4200. (To change the port number to some other port number open the ng_serve_run file
in a text editor and replace the existing command(ng serve) with ng serve --port <PORT_NUMBER> ).

Navigate to localhost:4200 in browser to run the app (or localhost:PORT_NUMBER in case you have modified the port number in previous step).


10. In case the app is not running fine on localhost:4200 try restarting the backend and frontend services. Our app will be working after restart. (Use ctrl+c in the cmd to terminate current running service)

