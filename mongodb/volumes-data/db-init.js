db.createUser({
      user: "app_user",
      pwd: "app_pass",
      roles: [ { role: "dbOwner", db: "VBOT" } ]
})
db.createCollection('person');
 