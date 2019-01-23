ClientBuilder.url("https://ebbdd9a3-4b51-43ce-92d9-7c5d62d821c7-bluemix:b4b2b5443239a786c471c7780f219aab64bd843b6f3de8bd34b48c1065b41ce4@ebbdd9a3-4b51-43ce-92d9-7c5d62d821c7-bluemix.cloudantnosqldb.appdomain.cloud")
             .iamApiKey("gHOrndPDWqG0l47uQpT4UOF3eL22koYBXG6gK8RoBQlF")
	         .build();

System.out.println("Server Version: " + client.serverVersion());

// Get a List of all the databases this Cloudant account
List<String> databases = client.getAllDbs();
System.out.println("All my databases : ");
for ( String db : databases ) {
	System.out.println(db);
}

// Working with data

// Delete a database we created previously.
client.deleteDB("example_db");

// Create a new database.
client.createDB("example_db");

// Get a Database instance to interact with, but don't create it if it doesn't already exist
Database db = client.database("example_db", false);

// A Java type that can be serialized to JSON
public class ExampleDocument {
  private String _id = "example_id";
  private String _rev = null;
  private boolean isExample;

  public ExampleDocument(boolean isExample) {
    this.isExample = isExample;
  }

  public String toString() {
    return "{ id: " + _id + ",\nrev: " + _rev + ",\nisExample: " + isExample + "\n}";
  }
}

// Create an ExampleDocument and save it in the database
db.save(new ExampleDocument(true));
System.out.println("You have inserted the document");

// Get an ExampleDocument out of the database and deserialize the JSON into a Java type
ExampleDocument doc = db.find(ExampleDocument.class,"example_id");
System.out.println(doc);