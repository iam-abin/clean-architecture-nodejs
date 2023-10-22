# What is Clean Architecture?

- The fundamentals of clean architecture is separation of concerns, in other words dividing our application into layers so that every layer is independent of the other.
- It emphasizes the independence of your application’s core business logic from external concerns like the database, the framework, or the user interface. 
- This separation makes your codebase more maintainable, testable, and adaptable to changes.

### The benefits are as follows.

- Independence from any underlying framework.
- Freedom to plug and play with any database.
- Improve testability of code.
- Helps in maintaining larger code base easily.
- Modularity.
- Reduce development time and cost.

***Code Dependency Rule:***
 - Code Dependencies can only move from the outer levels inward. Code on the inner layers can have no knowledge of functions on the outer layers. 
 
 - The variables, functions, and classes in the outer layers cannot be mentioned in the more inward levels.

***Dependency injections: ***
Dependency injection in Clean Architecture is a technique that allows you to provide the dependencies a component needs from the outside, promoting the separation of concerns and making it easier to test different implementations of those dependencies.

### Four Layers of Clean Architecture

1. Entity: is the inner most layer. It is like the heart of your application; it's where you define what your data looks like(structure of data) and how it behaves.

2. Use case: is a layer that will handle a specific business logic, for example getUserById or updateUser and will have all required validations and manipulation.

3. Controller: will handle the user requests and will make responses, but in order to get the responses we will call the relevant use cases, every controller will be connected to the express router.

4. Frameworks: are the outermost layer. responsible for handling external interfaces and communication, such as web interfaces, databases, and external services. 
 In a Node.js application, this typically includes Express.js for web APIs, databases like PostgreSQL or MongoDB, and any external libraries or services. This layer should contain all the code that interacts with the outside world, and it's the most concrete layer.

<br>

<img src="https://merlino.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvsall43tabcn%2FgyZteBML1XipqwnZTPzRJ%2F0ad14b0e2271d7797e92791b66689ff3%2FClean_Architecture.jpeg&w=828&q=75" alt="Clean Architecture">
