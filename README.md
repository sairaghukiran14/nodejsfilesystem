# nodejsfilesystem

API Endpoints:
1.  http://localhost:3000/
    This gives you the homepage
2.  http://localhost:3000/foldername
    Creates a Folder with the name given in the api endpoint
3.  http://localhost:3000/foldername/create
    This Endpoint creates a File with the Date-time.txt file inside the foldername
    if the folder is not present it creates the folder and inserts file
    The File contains the current Timestamp
4.  http://localhost:3000/foldername/display
    this Endpoint displays the array of files which are present in foldername
