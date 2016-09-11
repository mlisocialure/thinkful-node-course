# Make a GET request to fetch the list of items
curl http://localhost:8080/items

# Make a POST request to add an item
curl -X POST -H "Content-Type: application/json" -d '{"name": "durian"}' http://localhost:8080/items

# Make a PUT request to edit an item
curl -X PUT -H "Content-Type: application/json" -d '{"name": "durian", "id": 3}' http://localhost:8080/items/3

# Make a DELETE request to delete an item
curl -X DELETE http://localhost:8080/items/3

___________________________________________________________

# Fabric get:
# Download some logs
get(remote_path="/tmp/log_extracts.tar.gz", local_path="/logs/new_log.tar.gz")

# Download a database back-up
get("/backup/db.gz", "./db.gz")

# Fabric put:
# Upload a tar archive of an application
put("/local/path/to/app.tar.gz", "/tmp/trunk/app.tar.gz")

# Use the context manager `cd` instead of "remote_path" arg.
# This will upload app.tar.gz to /tmp/trunk/
with cd("/tmp"):
    put("local/path/to/app.tar.gz", "trunk")

# Upload a file and set the exact mode desired
upload = put("requirements.txt", "requirements.txt", mode=664)

# Verify the upload
upload.succeeded