# Spring Tools 

Installez Spring Tools via l'url suivant:
``https://spring.io/tools``


## POSTMAN

On peux télécharger Postman avec le lien suivant :
``https://www.postman.com/downloads/``

### Test Intégration backend_frontend

***********************************BACKEND**************************************
Dans spring tool, on trouve le fichier ``/springboot-backend/src/main/istic/nyousefian/springboot/ProjetBackendApplication.java`` permettant d'exécuter le programme.

 ``ProjetBackendApplication.java => Run AS => Spring Boot App ``
 
 
#### REST

On utilise des méthodes avec des annotations :
- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping

On utilise les requêtes suivantes dans Postman, pour la méthode ``@PostMapping`` :

``http://localhost:8080/api/v1/employees``

Le body dans Postman nous donne :
```
{
 {
        "id": 1,
        "firstName": "Neda",
        "lastName": "YOUSEFIAN",
        "emailId": "nd_yousefian@yahoo.com"
    }
}

```

```
{
 {
        "id": 2,
        "firstName": "Pierre",
        "lastName": "DUPONT",
        "emailId": "pr_dupont@yahoo.com"
    }
}


```
```
{
 {
        "id": 3,
        "firstName": "Marie",
        "lastName": "GUIBOURG",
        "emailId": "mr_guibourg@yahoo.com"
    }
}

```
On utilise les requêtes suivantes dans Postman, pour la méthode ``@GetMapping`` :

``http://localhost:8080/api/v1/employees/{id}``

Le body dans Postman nous donne pour ``http://localhost:8080/api/v1/employees/1``:

```
{
 {
        "id": 1,
        "firstName": "Neda",
        "lastName": "YOUSEFIAN",
        "emailId": "nd_yousefian@yahoo.com"
    }
}

```
On utilise les requêtes suivantes dans Postman, pour la méthode ``@PutMapping`` :

``http://localhost:8080/api/v1/employees/{id}``

On change le body dans Postman afin de mettre à jours l'employé ``{id = 1}``, par example : 

``http://localhost:8080/api/v1/employees/1``

```
{

   {
    "firstName" : "Sarah",
    "lastName" : "DETOC",
    "emailId" : "sr_detoc@yahoo.com"
   }
}

```

Le body dans Postman nous donne pour ``http://localhost:8080/api/v1/employees/1``:


```
{

   {
    "firstName" : "Sarah",
    "lastName" : "DETOC",
    "emailId" : "sr_detoc@yahoo.com"
   }
}

```

On utilise les requêtes suivantes dans Postman, pour la méthode ``@DeleteMapping`` :

``http://localhost:8080/api/v1/employees/{id}``



