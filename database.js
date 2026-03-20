const quizDB = {
  "rev1": {
    title: "Reviewer 1: Core Java",
    description: "The complete 50-item exam covering variables, loops, arrays, and basic OOP.",
    hasTimer: false,
    questions: [
      { type: 'mcq', q: 'What is the output of the following code?', code: 'public void printInt() {\n  if(true) {\n    int num = 1;\n    if(num > 0) { num++; }\n  }\n  int num = 1;\n  addOne(num);\n  num = num - 1;\n  System.out.println(num);\n}\npublic void addOne(int num) { num = num + 1; }', choices: ['A. 0', 'B. 1', 'C. 2', 'D. 3'], answer: 0, explanation: 'A is correct. addOne() is pass-by-value so the caller\'s num stays 1.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'double number = 27;\nnumber %= -3d;\nnumber += 10f;\nnumber *= -4;\nSystem.out.println(number);', choices: ['A. 27.0', 'B. 40.0', 'C. -40.0', 'D. -4.0'], answer: 2, explanation: 'C is correct. 27 % -3d is 0. 0 + 10 = 10. 10 * -4 = -40.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'int v = 5;\nint x = 10;\nint y = ++v * x--;\nSystem.out.println(y);', choices: ['A. 50', 'B. 55', 'C. 60', 'D. 66'], answer: 2, explanation: 'C is correct. ++v makes v=6. x-- uses 10 then becomes 9. 6 * 10 = 60.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'int v = 5;\nint x = 10;\nint y = ++v * x--;\nint z = v-- + ++x;\nSystem.out.println(z);', choices: ['A. 15', 'B. 16', 'C. 17', 'D. 14'], answer: 1, explanation: 'B is correct. v is 6, x is 9. v-- uses 6, ++x makes x=10. 6 + 10 = 16.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'char value1 = 97;\nSystem.out.println(value1);', choices: ['A. 97', 'B. a', 'C. A', 'D. \'97\''], answer: 1, explanation: 'B is correct. 97 is the ASCII decimal value for lowercase "a".' },
      { type: 'mcq', q: 'What happens when the following code runs?', code: 'double dNum = 2.667;\nint iNum = 0;\niNum = (int) dNum;\nSystem.out.println(iNum);', choices: ['A. iNum has a value of 0', 'B. An exception is thrown', 'C. iNum has a value of 2', 'D. iNum has a value of 3'], answer: 2, explanation: 'C is correct. Casting double to int truncates the decimal entirely.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'Scanner input = new Scanner("1 Excellent 2 Good 3 Fair 4 Poor");\nObject data1 = input.next();\nObject data2 = input.next();\nObject data3 = input.nextInt();\nObject data4 = input.nextInt();\nSystem.out.println(data4);', choices: ['A. Good', 'B. 2', 'C. 3 Fair 4 Poor', 'D. An exception is thrown'], answer: 3, explanation: 'D is correct. data4 tries to read "Good" as an int, throwing an InputMismatchException.' },
      { type: 'mcq', q: 'What is the value of the arithmetic expression: (2 + 3) * 4 - 1', code: null, choices: ['A. 15', 'B. 19', 'C. 26', 'D. 20'], answer: 1, explanation: 'B is correct. (5) * 4 - 1 = 20 - 1 = 19.' },
      { type: 'mcq', q: 'What is the value of the arithmetic expression: 4 * 4 + 2 * 5', code: null, choices: ['A. 19', 'B. 90', 'C. 26', 'D. 60'], answer: 2, explanation: 'C is correct. 16 + 10 = 26.' },
      { type: 'mcq', q: 'What is the value of the arithmetic expression: 8 * 2 % 3', code: null, choices: ['A. 0', 'B. 2', 'C. 1', 'D. 5'], answer: 2, explanation: 'C is correct. 16 % 3 leaves a remainder of 1.' },
      { type: 'mcq', q: 'What is the value of the arithmetic expression: 5 / 2 - 4 % 2', code: null, choices: ['A. 0', 'B. 1', 'C. 2', 'D. 2.5'], answer: 2, explanation: 'C is correct. 5/2 is 2 (integer division). 4%2 is 0. 2 - 0 = 2.' },
      { type: 'mcq', q: 'What is the return value when model = \'K\'?', code: 'public static int fee(char model) {\n  int price = 0;\n  switch(model) {\n    case \'A\': price = 50; break;\n    case \'K\': price = 20;\n    case \'I\': price = 5; break;\n    default: price = 100; break;\n  }\n  return price;\n}', choices: ['A. 20', 'B. 5', 'C. 50', 'D. 100'], answer: 1, explanation: 'B is correct. \'K\' has no break statement, so it falls through to \'I\' and price becomes 5.' },
      { type: 'mcq', q: 'Using the same fee() method above, what is the return value when model = \'A\'?', code: null, choices: ['A. 20', 'B. 5', 'C. 50', 'D. 100'], answer: 2, explanation: 'C is correct. \'A\' sets price to 50 and hits a break.' },
      { type: 'mcq', q: 'Using the same fee() method above, what is the return value when model = \'Z\'?', code: null, choices: ['A. 20', 'B. 5', 'C. 50', 'D. 100'], answer: 3, explanation: 'D is correct. \'Z\' triggers the default case, setting price to 100.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'public static void main(String args[]) {\n  int anum = 55;\n  for(int cnt = 0; cnt < 10; cnt++) {\n    add(anum);\n  }\n  System.out.println(anum);\n}\npublic static void add(int anum) { anum++; }', choices: ['A. 65', 'B. 56', 'C. 55', 'D. 64'], answer: 2, explanation: 'C is correct. Primitives are passed by value; the original anum in main is never changed.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'public class JavaProgram1 {\n  int x = 25;\n  public static void main(String args[]) {\n    JavaProgram1 app = new JavaProgram1();\n    { int x = 5; }\n    { int x = 10; }\n    int x = 100;\n    System.out.println(x);\n    System.out.println(app.x);\n  }\n  public JavaProgram1() {\n    int x = 1;\n    System.out.println(x);\n  }\n}', choices: ['A. 25, 100, 1', 'B. 100, 25, 1', 'C. 1, 100, 25', 'D. 1, 25, 100'], answer: 2, explanation: 'C is correct. Constructor prints 1. Main prints local x (100). Then app.x prints instance x (25).' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'System.out.format("Pi is %.3f", Math.PI);', choices: ['A. Pi is 3.14', 'B. Pi is 3.142', 'C. Pi is 3.1416', 'D. Pi is 03.141593'], answer: 1, explanation: 'B is correct. %.3f formats to 3 decimal places and rounds up.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'System.out.format("Pi is %.0f", Math.PI);', choices: ['A. Pi is 3', 'B. Pi is 3.0', 'C. Pi is 3.14', 'D. Pi is 0'], answer: 0, explanation: 'A is correct. %.0f formats to 0 decimal places.' },
      { type: 'mcq', q: 'What is the output of the following code?', code: 'System.out.format("Pi is %09f", Math.PI);', choices: ['A. Pi is 3.141593', 'B. Pi is 3.14159', 'C. Pi is 03.141593', 'D. Pi is 000003.14'], answer: 2, explanation: 'C is correct. %09f pads with leading zeros to make the total string length 9.' },
      { type: 'mcq', q: 'Which of the following outputs will be displayed when this code runs?', code: 'try {\n  int x = 1/0;\n  System.out.println("try");\n} catch(ArithmeticException ex) {\n  System.out.println("catch ArithmeticException");\n} catch(Exception ex) {\n  System.out.println("catch Exception");\n} finally {\n  System.out.println("finally");\n}', choices: ['A. try, finally', 'B. catch ArithmeticException, catch Exception, finally', 'C. catch ArithmeticException, finally', 'D. try, catch Exception, finally'], answer: 2, explanation: 'C is correct. 1/0 triggers ArithmeticException, skipping the rest of try. Only one catch executes. finally always runs.' },
      { type: 'mcq', q: 'To store patient data using the least amount of memory, which data type is best for: age = 18?', code: null, choices: ['A. int', 'B. long', 'C. short', 'D. byte'], answer: 3, explanation: 'D is correct. byte ranges from -128 to 127.' },
      { type: 'mcq', q: 'To store patient data using the least amount of memory, which data type is best for: birthYear = 1974?', code: null, choices: ['A. byte', 'B. short', 'C. int', 'D. long'], answer: 1, explanation: 'B is correct. short holds up to 32,767.' },
      { type: 'mcq', q: 'To store patient data using the least amount of memory, which data type is best for: salary = 22123.5f?', code: null, choices: ['A. double', 'B. int', 'C. float', 'D. short'], answer: 2, explanation: 'C is correct. The "f" at the end of the literal designates it as a float.' },
      { type: 'mcq', q: 'You need to store the numeric value 3,000,000,000 (3 billion) using the least amount of memory.\nWhich data type should you use?', code: null, choices: ['A. int', 'B. short', 'C. byte', 'D. long'], answer: 3, explanation: 'D is correct. 3 billion is larger than the maximum int value (approx 2.14 billion), so long is required.' },
      { type: 'mcq', q: 'You need to convert a numeric String to a primitive double value. Which code segment should you use?', code: null, choices: ['A. Double.valueOf(numberString);', 'B. double.parseDouble(numberString);', 'C. String.parseDouble(numberString);', 'D. Double.parseDouble(numberString);'], answer: 3, explanation: 'D is correct. Double.parseDouble() returns a primitive double.' },
      { type: 'mcq', q: 'You need to convert the first command-line argument to a whole number. Which code is correct?', code: null, choices: ['A. int amount = Integer.toInt(args[0]);', 'B. int amount = Integer.parseInt(args[0]);', 'C. int amount = int.parseInt(args[1]);', 'D. int amount = Integer.parseint(args[0]);'], answer: 1, explanation: 'B is correct. Integer.parseInt() converts a String to a primitive int.' },
      { type: 'mcq', q: 'Which code correctly converts a String to a number when both whole and fractional numbers are possible?', code: 'public void convertStringToNumber(String numberAsString) {\n  ________ number = ________.parseDouble(numberAsString);\n  System.out.println(number);\n}', choices: ['A. int ... Integer', 'B. String ... Double', 'C. double ... Double', 'D. Integer ... Integer'], answer: 2, explanation: 'C is correct. double handles both fractional and whole numbers.' },
      { type: 'mcq', q: 'To capitalize the first letter and lowercase the rest of a firstName String, which code is correct?', code: null, choices: ['A. firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()', 'B. firstName.substring(0,1).toUpperCase() + firstName.substring(1).toLowerCase()', 'C. firstName.toUpperCase(0) + firstName.substring(1).toLowerCase()', 'D. firstName.charAt(1).toUpperCase() + firstName.substring(0).toLowerCase()'], answer: 1, explanation: 'B is correct. substring(0,1) returns a String, which allows .toUpperCase() to work.' },
      { type: 'mcq', q: 'To truncate a String named firstName to its first 5 characters, which method call is correct?', code: null, choices: ['A. firstName.substring(0, 4)', 'B. firstName.substring(1, 5)', 'C. firstName.substring(0, 5)', 'D. firstName.trim(5)'], answer: 2, explanation: 'C is correct. substring(0, 5) grabs indexes 0, 1, 2, 3, and 4 (stopping before 5).' },
      { type: 'mcq', q: 'Given String region = ""; which of the following evaluates to true?', code: null, choices: ['A. region == null', 'B. region.isNull()', 'C. region.isEmpty()', 'D. region.equals(null)'], answer: 2, explanation: 'C is correct. The string is empty, but it is not null.' },
      { type: 'mcq', q: 'To declare a 2x3 double array with initial values, which is correct?', code: null, choices: ['A. double[][] maxArray = {0.77, 3.4, 55, 2.2, .045, 2};', 'B. double[2][3] maxArray = {{0.77, 3.4, 55},{2.2, .045, 2}};', 'C. double[][] maxArray = {{0.77, 3.4, 55},{2.2, .045, 2}};', 'D. double maxArray[][] = new double[2,3];'], answer: 2, explanation: 'C is correct. The 2D array literal uses nested braces.' },
      { type: 'mcq', q: 'To create an int array named grades initialized with val1, val2, and val3, which is correct?', code: null, choices: ['A. int grades[] = {val1, val2, val3};', 'B. int[] grades = new int[] {val1, val2, val3};', 'C. int[] grades = new int[val1, val2, val3];', 'D. int grades = new int[]{val1, val2, val3};'], answer: 1, explanation: 'B is correct. This is the formal inline initialization syntax.' },
      { type: 'mcq', q: 'In a char grid[][], given:\ngrid = {{\'_\',\'_\',\'X\'}, {\'_\',\'_\',\'_\'}, {\'_\',\'O\',\'_\'}};\nWhich element contains \'X\'?', code: null, choices: ['A. grid[0][0]', 'B. grid[0][2]', 'C. grid[1][2]', 'D. grid[2][0]'], answer: 1, explanation: 'B is correct. Row 0, column 2.' },
      { type: 'mcq', q: 'Using the same grid above, which element contains \'O\'?', code: null, choices: ['A. grid[2][0]', 'B. grid[1][1]', 'C. grid[2][1]', 'D. grid[0][1]'], answer: 2, explanation: 'C is correct. Row 2, column 1.' },
      { type: 'mcq', q: 'To traverse a 2D String array where each row may have a different length, which inner loop condition is correct?', code: 'for(int x = 0; x < board.length; x++)\n  for(int y = 0; y < ______; y++)\n    System.out.println(board[x][y]);', choices: ['A. board.length', 'B. board[0].length', 'C. board[x].length', 'D. board[y].length'], answer: 2, explanation: 'C is correct. board[x].length checks the length of the specific row currently being iterated.' },
      { type: 'mcq', q: 'Which access modifier allows a member to be accessed by classes in the same package AND by subclasses in any package?', code: null, choices: ['A. public', 'B. private', 'C. static', 'D. protected'], answer: 3, explanation: 'D is correct. Protected gives package and subclass visibility.' },
      { type: 'mcq', q: 'Which access modifier makes a member only accessible within the class it is declared in?', code: null, choices: ['A. public', 'B. private', 'C. protected', 'D. default'], answer: 1, explanation: 'B is correct. Private restricts access strictly to the current class.' },
      { type: 'mcq', q: 'Which keyword allows a method to be called without instantiating the class it belongs to?', code: null, choices: ['A. final', 'B. protected', 'C. static', 'D. abstract'], answer: 2, explanation: 'C is correct. Static methods belong to the class itself, not instances.' },
      { type: 'mcq', q: 'To define a constant named RATE in InsurancePolicy that is accessible without instantiation, which declaration is correct?', code: null, choices: ['A. public static finally double RATE = .0642;', 'B. public final double RATE = .0642;', 'C. public static final double RATE = .0642;', 'D. public static double RATE = .0642;'], answer: 2, explanation: 'C is correct. public static final makes it globally accessible, uninstantiated, and unchangeable.' },
      { type: 'mcq', q: 'To have SavingsAccount inherit from Account and call the parent\'s constructor, which code is correct?', code: 'public class SavingsAccount ________ Account {\n  SavingsAccount(double startingBalance) {\n    ________(startingBalance);\n  }\n}', choices: ['A. implements ... this', 'B. extends ... super', 'C. inherits ... base', 'D. extends ... this'], answer: 1, explanation: 'B is correct. extends is for inheritance, super() calls the parent constructor.' },
      { type: 'mcq', q: 'To override a parent class method in a subclass, which annotation is used?', code: null, choices: ['A. @Override', 'B. @Overwrite', 'C. @Replace', 'D. @Extends'], answer: 0, explanation: 'A is correct. The @Override tag ensures the compiler checks if you are actually overriding a parent method.' },
      { type: 'mcq', q: 'Can this if-else chain be converted to a switch statement with up to three cases?', code: 'if (grade == "A") { message = "Exceeds Standards"; }\nelse if (grade == "B") { message = "Meets Standards"; }\nelse { message = "Needs Improvement"; }', choices: ['A. Yes', 'B. No, switch cannot compare Strings', 'C. No, there are too many branches', 'D. No, switch requires integer values only'], answer: 0, explanation: 'A is correct. Since Java 7, switch statements support exact String matching.' },
      { type: 'mcq', q: 'Can this if-else chain be converted to a switch statement with up to three cases?', code: 'if (age >= 25) { discount = 0.50; }\nelse if (age >= 21) { discount = 0.25; }\nelse { discount = 0.0; }', choices: ['A. Yes', 'B. No, switch cannot use range/inequality comparisons', 'C. No, there are too many cases', 'D. Yes, using a default case'], answer: 1, explanation: 'B is correct. Switch evaluates discrete matches, not ranges.' },
      { type: 'mcq', q: 'When this code runs, which outputs are displayed?\nWhat does \'break\' affect here?', code: 'boolean isDuplicate = false;\nfor(int x = 0; x < array.length - 1; x++) {\n  for(int y = x+1; y < array.length; y++) {\n    if(array[x] == array[y]) isDuplicate = true;\n  }\n  if(isDuplicate) break;\n}\nreturn isDuplicate;', choices: ['A. It exits both loops', 'B. It exits only the inner loop', 'C. It exits only the outer loop', 'D. It restarts the outer loop'], answer: 2, explanation: 'C is correct. Because the break is inside the outer loop (and outside the inner loop), it immediately ends the outer loop.' },
      { type: 'mcq', q: 'Which data type tends to lose precision when used in calculations?', code: null, choices: ['A. int', 'B. double', 'C. float', 'D. long'], answer: 2, explanation: 'C is correct. Float has 32-bit precision and can drop decimal accuracy. Double is generally preferred for decimals.' },
      { type: 'mcq', q: 'To process invoices in an ArrayList and remove each one after processing, which method correctly gets the list size?', code: null, choices: ['A. invoices.length()', 'B. invoices.length', 'C. invoices.size()', 'D. invoices.count()'], answer: 2, explanation: 'C is correct. .size() gets the dynamic size of an ArrayList (unlike .length for standard arrays).' },
      { type: 'mcq', q: 'Which exception is thrown when an incorrect data type is entered or read by a Scanner?', code: null, choices: ['A. IOException', 'B. IllegalArgumentException', 'C. InputMismatchException', 'D. NullPointerException'], answer: 2, explanation: 'C is correct. Scanners throw InputMismatchException when parsing fails.' },
      { type: 'mcq', q: 'Which exception occurs when a file being read from does not exist?', code: null, choices: ['A. InputMismatchException', 'B. IOException', 'C. NullPointerException', 'D. ArithmeticException'], answer: 1, explanation: 'B is correct. File operations throw IOException.' },
      { type: 'mcq', q: 'To convert a boolean variable named answer to a String named finalAnswer, which code is correct?', code: null, choices: ['A. String finalAnswer = answer.toString();', 'B. String finalAnswer = String.valueOf(answer);', 'C. String finalAnswer = Boolean.toString(answer);', 'D. Both B and C are correct'], answer: 3, explanation: 'D is correct. String.valueOf and Boolean.toString both work.' },
      { type: 'mcq', q: 'Which of the following statements about exceptions in Java is FALSE?', code: null, choices: ['A. Checked exceptions happen at compile time', 'B. Unchecked exceptions happen at runtime', 'C. A divide-by-zero error is an example of a checked exception', 'D. The finally block always executes whether or not an exception occurs'], answer: 2, explanation: 'C is correct. Divide-by-zero (ArithmeticException) is an UNCHECKED exception.' }
    ]
  },
  "rev2": {
    title: "Reviewer 2: Java Fundamentals",
    description: "A 20-item quiz covering variables, data types, objects, methods, and basic programming logic.",
    hasTimer: false,
    questions: [
      { type: 'mcq', q: 'Java variables are divided into two main categories. What are they?', code: null, choices: ['A. Static and Non-Static', 'B. Primitive Types and Reference Types', 'C. Local and Global', 'D. Classes and Methods'], answer: 1, explanation: 'B is correct. Java variables are broadly categorized into primitive types (like int, double, boolean) and reference types (objects like String, Scanner).' },
      { type: 'mcq', q: 'Which of the following is a primitive data type in Java?', code: null, choices: ['A. String', 'B. Scanner', 'C. int', 'D. ArrayList'], answer: 2, explanation: 'C is correct. "int" is a primitive data type. String, Scanner, and ArrayList are all reference types (objects).' },
      { type: 'mcq', q: 'Which of the following is a reference type (object)?', code: null, choices: ['A. double', 'B. char', 'C. String', 'D. byte'], answer: 2, explanation: 'C is correct. String is a class, meaning it is a reference type. double, char, and byte are all primitive types.' },
      { type: 'mcq', q: 'Which of the following statements about objects is correct?', code: null, choices: ['A. Objects always start with a lowercase letter.', 'B. Objects are created from classes.', 'C. Objects cannot store values.', 'D. Objects are primitive types.'], answer: 1, explanation: 'B is correct. A class is a blueprint, and objects are the actual instances created from that blueprint.' },
      { type: 'mcq', q: 'Which keyword is used to create a new object in Java?', code: null, choices: ['A. class', 'B. new', 'C. object', 'D. create'], answer: 1, explanation: 'B is correct. The "new" keyword dynamically allocates memory for an object at runtime.' },
      { type: 'mcq', q: 'When creating an object, how many main parts are involved?', code: null, choices: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], answer: 1, explanation: 'B is correct. There are 3 main parts: Declaration (Type name), Instantiation (new keyword), and Initialization (calling the constructor).' },
      { type: 'mcq', q: 'Primitive data types usually start with what type of letter?', code: null, choices: ['A. Capital letter', 'B. Small letter', 'C. Any letter', 'D. Number'], answer: 1, explanation: 'B is correct. Primitive types (int, double, float, char, etc.) always start with a lowercase/small letter.' },
      { type: 'mcq', q: 'What happens when a variable is declared but not initialized?', code: null, choices: ['A. It automatically stores zero', 'B. It stores random text', 'C. It may cause a compiler error or a null error when used', 'D. It becomes static'], answer: 2, explanation: 'C is correct. If it is a local variable, Java will throw a compiler error. If it is an uninitialized reference instance variable, it defaults to null and can cause a NullPointerException.' },
      { type: 'mcq', q: 'Which part of a program contains methods and global variables?', code: null, choices: ['A. Class', 'B. Method', 'C. Variable', 'D. Parameter'], answer: 0, explanation: 'A is correct. A Class acts as the container/blueprint that holds all the variables (attributes) and methods (behaviors).' },
      { type: 'mcq', q: 'Which naming style is commonly used in Java for variables and methods?', code: null, choices: ['A. Snake_case', 'B. PascalCase', 'C. camelCase', 'D. UPPERCASE'], answer: 2, explanation: 'C is correct. Standard Java convention dictates that variables and methods should be written in camelCase (e.g., myVariableName).' },
      { type: 'mcq', q: 'What is the class/type used in this code?', code: 'String name = new String("John");', choices: ['A. name', 'B. String', 'C. John', 'D. new'], answer: 1, explanation: 'B is correct. "String" is the data type (Class) defining what kind of object "name" is.' },
      { type: 'mcq', q: 'What type of variable is age?', code: 'int age = 20;', choices: ['A. Reference Type', 'B. Primitive Type', 'C. Object Class', 'D. Static Variable'], answer: 1, explanation: 'B is correct. "int" is one of the 8 core primitive data types in Java.' },
      { type: 'mcq', q: 'Analyze the object creation below. Which part represents the variable name?', code: 'Scanner input = new Scanner(System.in);', choices: ['A. Scanner', 'B. input', 'C. new', 'D. System.in'], answer: 1, explanation: 'B is correct. "input" is the identifier/variable name chosen by the programmer to reference the Scanner object.' },
      { type: 'mcq', q: 'Which keyword allows this method to be called inside the main method without creating an object?', code: 'public static void printText() {\n  System.out.println("Hello");\n}', choices: ['A. public', 'B. void', 'C. static', 'D. printText'], answer: 2, explanation: 'C is correct. The "static" keyword means the method belongs to the class itself, not to any specific object instance.' },
      { type: 'mcq', q: 'What does "Hello World" represent in the code below?', code: 'printText("Hello World");', choices: ['A. Method name', 'B. Parameter', 'C. Argument value', 'D. Return type'], answer: 2, explanation: 'C is correct. "Hello World" is the actual argument value being passed to the method when it is called.' },
      { type: 'mcq', q: 'You need to write a static method named printMessage that prints the text: Welcome to Java. The method should not have parameters.\n\nWhich code block is correct?', code: null, choices: ['A. public static void printMessage() {\n     System.out.println("Welcome to Java");\n   }', 'B. public void printMessage() {\n     System.out.println("Welcome to Java");\n   }', 'C. public static String printMessage() {\n     return "Welcome to Java";\n   }', 'D. static printMessage() {\n     System.out.print("Welcome to Java");\n   }'], answer: 0, explanation: 'A is correct. It uses public static void (because it prints, not returns), has no parameters in the parentheses (), and correctly prints the string.' },
      { type: 'mcq', q: 'Create a static method named printName that accepts a String parameter called name and prints: Hello, <name>\n\nWhich code block is correct?', code: null, choices: ['A. public static void printName() {\n     System.out.println("Hello, " + name);\n   }', 'B. public void printName(String name) {\n     System.out.println(Hello, name);\n   }', 'C. public static void printName(String name) {\n     System.out.println("Hello, " + name);\n   }', 'D. public static String printName(String name) {\n     System.out.println("Hello");\n   }'], answer: 2, explanation: 'C is correct. It accepts a parameter (String name) and safely concatenates it to "Hello, ".' },
      { type: 'mcq', q: 'Write a static method named addNumbers that accepts two integers and prints their sum.\n\nWhich code block is correct?', code: null, choices: ['A. public static int addNumbers(int a, int b) {\n     return a + b;\n   }', 'B. public static void addNumbers(int a, int b) {\n     System.out.println(a + b);\n   }', 'C. public void addNumbers(int a, int b) {\n     System.out.println(a + b);\n   }', 'D. public static void addNumbers() {\n     System.out.println(3 + 5);\n   }'], answer: 1, explanation: 'B is correct. The instructions asked to PRINT the sum, not return it, so the return type must be void.' },
      { type: 'mcq', q: 'Write a simple Java program that creates a String variable named message, stores the text "Java is fun", and prints the variable.\n\nWhich code block is correct?', code: null, choices: ['A. String message = "Java is fun";\n   System.out.println(message);', 'B. String "Java is fun" = message;\n   System.out.println(message);', 'C. message String = "Java is fun";\n   System.out.print(message);', 'D. String message == "Java is fun";\n   System.out.println("message");'], answer: 0, explanation: 'A is correct. Variables are declared with Type Name = Value. When printing the variable, you do not use quotes around it.' },
      { type: 'mcq', q: 'Write a program that declares two integers named num1 and num2, stores values, and prints their sum. (Example Output: "The sum is: 15")\n\nWhich code block accurately performs the math without a bug?', code: null, choices: ['A. int num1 = 5; int num2 = 10;\n   System.out.println("The sum is: " + num1 + num2);', 'B. int num1 = 5, num2 = 10;\n   System.out.println(num1 + num2);', 'C. int num1, num2 = 15;\n   System.out.println("The sum is: " + num1);', 'D. int num1 = 5; int num2 = 10;\n   System.out.println("The sum is: " + (num1 + num2));'], answer: 3, explanation: 'D is correct. Adding parentheses around (num1 + num2) forces Java to calculate the math first. Option A would concatenate them as strings, resulting in "The sum is: 510".' }
    ]
  },
  "rev3": {
    title: "Reviewer 3: Java Swing Basics",
    description: "A 20-item quiz covering GUI components like JFrame, JLabel, and JTextField.",
    hasTimer: false,
    questions: [
      { type: 'mcq', q: 'What is the purpose of a JFrame in Java?', code: null, choices: ['A. To store numbers', 'B. To create a window for a program', 'C. To print text in the console', 'D. To store files'], answer: 1, explanation: 'B is correct. JFrame is the fundamental top-level container (window) in Java Swing.' },
      { type: 'mcq', q: 'Which class is used to display text inside a window?', code: null, choices: ['A. JTextField', 'B. JFrame', 'C. JLabel', 'D. Scanner'], answer: 2, explanation: 'C is correct. JLabel is used to display short strings or image icons.' },
      { type: 'mcq', q: 'Which component allows a user to type text into a box?', code: null, choices: ['A. JLabel', 'B. JTextField', 'C. JFrame', 'D. JButton'], answer: 1, explanation: 'B is correct. JTextField is a lightweight component that allows the editing of a single line of text.' },
      { type: 'mcq', q: 'Which package usually contains JFrame, JLabel, and JTextField?', code: null, choices: ['A. java.util', 'B. java.swing', 'C. javax.swing', 'D. java.io'], answer: 2, explanation: 'C is correct. The "x" in javax indicates it is a Java extension package, which is where Swing lives.' },
      { type: 'mcq', q: 'Which component is considered the main window container?', code: null, choices: ['A. JLabel', 'B. JFrame', 'C. JTextField', 'D. Layout'], answer: 1, explanation: 'B is correct. JFrame acts as the main frame/window that holds all other components.' },
      { type: 'mcq', q: 'Which of the following displays static text that the user cannot edit?', code: null, choices: ['A. JLabel', 'B. JTextField', 'C. JFrame', 'D. Scanner'], answer: 0, explanation: 'A is correct. JLabel displays read-only text or images.' },
      { type: 'mcq', q: 'What method is commonly used to make a JFrame visible?', code: null, choices: ['A. showFrame(true)', 'B. setVisible(true)', 'C. displayWindow()', 'D. openFrame()'], answer: 1, explanation: 'B is correct. setVisible(true) tells the JVM to actually render and display the window on screen.' },
      { type: 'mcq', q: 'What method sets the size of a JFrame window?', code: null, choices: ['A. setVisible()', 'B. setLayout()', 'C. setSize()', 'D. setWindow()'], answer: 2, explanation: 'C is correct. setSize(width, height) defines the dimensions of the frame.' },
      { type: 'mcq', q: 'Which method is used to add components like JLabel or JTextField into a JFrame?', code: null, choices: ['A. insert()', 'B. put()', 'C. add()', 'D. attach()'], answer: 2, explanation: 'C is correct. The .add() method appends the component to the containers layout.' },
      { type: 'mcq', q: 'What does a JTextField primarily store?', code: null, choices: ['A. Images', 'B. User input text', 'C. Windows', 'D. Layouts'], answer: 1, explanation: 'B is correct. It captures and stores text typed by the user.' },
      { type: 'mcq', q: 'Examine the code below. What is the variable name?', code: 'JFrame frame = new JFrame("My Window");', choices: ['A. JFrame', 'B. frame', 'C. My Window', 'D. new'], answer: 1, explanation: 'B is correct. "frame" is the identifier/variable name for the JFrame object.' },
      { type: 'mcq', q: 'Look at the following code. What text will appear in the window?', code: 'JLabel label = new JLabel("Hello");', choices: ['A. label', 'B. JLabel', 'C. Hello', 'D. new'], answer: 2, explanation: 'C is correct. The string passed into the JLabel constructor is the text that gets displayed.' },
      { type: 'mcq', q: 'Analyze the code below. What does the number 10 represent?', code: 'JTextField field = new JTextField(10);', choices: ['A. Window size', 'B. Number of characters allowed in the text field size', 'C. Font size', 'D. Number of labels'], answer: 1, explanation: 'B is correct. It sets the preferred width of the text field to be roughly 10 columns/characters wide.' },
      { type: 'mcq', q: 'Observe the code below. What does this line do?', code: 'frame.setSize(400,300);', choices: ['A. Creates a text field', 'B. Sets the window size', 'C. Prints text', 'D. Adds a label'], answer: 1, explanation: 'B is correct. It sets the window to be 400 pixels wide and 300 pixels tall.' },
      { type: 'mcq', q: 'Look at the code below. What does this line do?', code: 'frame.add(label);', choices: ['A. Removes the label', 'B. Adds the label into the window', 'C. Prints the label', 'D. Creates a new frame'], answer: 1, explanation: 'B is correct. It takes the "label" object and places it inside the "frame" container.' },
      { type: 'mcq', q: 'Write a static method named createLabel that creates a JLabel with the text "Welcome". Which code block is correct?', code: null, choices: ['A. public static void createLabel() {\n     JLabel("Welcome");\n   }', 'B. public static JLabel createLabel() {\n     return new JLabel("Welcome");\n   }', 'C. public JLabel createLabel() {\n     new JLabel("Welcome");\n   }', 'D. static void createLabel() {\n     return JLabel("Welcome");\n   }'], answer: 1, explanation: 'B is correct. It returns a JLabel object and correctly uses the "new" keyword to instantiate it.' },
      { type: 'mcq', q: 'Write a static method named createTextField that creates a JTextField with size 15. Which code block is correct?', code: null, choices: ['A. public static JTextField createTextField() {\n     return new JTextField(15);\n   }', 'B. public void createTextField() {\n     JTextField field = new JTextField(15);\n   }', 'C. public static int createTextField() {\n     return JTextField(15);\n   }', 'D. static new JTextField(15) createTextField();'], answer: 0, explanation: 'A is correct. It defines the return type as JTextField and properly instantiates it with the column size 15.' },
      { type: 'mcq', q: 'Write a static method named createWindow that creates a JFrame and sets its size to 300 by 200. Which code block is correct?', code: null, choices: ['A. public static JFrame createWindow() {\n     JFrame f = new JFrame();\n     f.setSize(300, 200);\n     return f;\n   }', 'B. public static void createWindow() {\n     JFrame(300, 200);\n   }', 'C. public JFrame createWindow(300, 200) {\n     return new JFrame;\n   }', 'D. public static JFrame createWindow() {\n     JFrame.setSize(300, 200);\n   }'], answer: 0, explanation: 'A is correct. You must instantiate the frame, call the setSize method on that specific instance, and then return it.' },
      { type: 'mcq', q: 'Write a small Java program that creates a JFrame, adds a JLabel that says "Hello World", and makes the window visible. Which code block is correct?', code: null, choices: ['A. JFrame f = new JFrame();\n   f.add(new JLabel("Hello World"));\n   f.setVisible(true);', 'B. JFrame f = JFrame("Hello World");\n   f.visible(true);', 'C. JFrame f = new JFrame();\n   JLabel l = new JLabel();\n   f.add("Hello World");', 'D. Window w = new Window();\n   w.add(JLabel("Hello World"));\n   w.show();'], answer: 0, explanation: 'A is correct. It creates the frame, adds an instantiated label, and finally sets the frame to be visible.' },
      { type: 'mcq', q: 'Write a small program that creates a JFrame, adds a JLabel that says "Name:", and adds a JTextField. Which snippet correctly accomplishes this?', code: null, choices: ['A. JFrame f = new JFrame();\n   f.add(new JLabel("Name:"));\n   f.add(new JTextField(10));\n   f.setVisible(true);', 'B. JFrame f = new JFrame();\n   f.add("Name:");\n   f.add(JTextField(10));', 'C. JFrame f = new JFrame();\n   f.JLabel("Name:");\n   f.JTextField();', 'D. JFrame f = new JFrame();\n   f.addLabel("Name:");\n   f.addTextField(10);'], answer: 0, explanation: 'A is correct. Components must be instantiated with "new" inside the add() method (or instantiated previously as variables).' }
    ]
  },
  "rev4": {
    title: "Mock Exam: ITS Java Specialist",
    description: "A 40-item Certiport-style mock exam (10 Drag & Drop, 10 Fill-in-Blank, 10 Multi-Select, 10 Predict Output). 50-min limit. Advanced difficulty.",
    hasTimer: true,
    timeLimitMins: 50,
    questions: [
      // ==========================================
      // 1-10: DRAG AND DROP (Code Completion)
      // ==========================================
      { 
        type: 'dragdrop', 
        q: '(Java Fundamentals) Drag the correct keywords to initialize the main class and method properly:', 
        code: '[ZONE] class Application {\n  public [ZONE] void main([ZONE][] args) {\n    System.out.println("Started");\n  }\n}',
        draggables: ['public', 'private', 'static', 'String', 'void', 'class'],
        answer: ['public', 'static', 'String'], 
        explanation: 'Top-level classes are usually public. The main method must be static so the JVM can invoke it without instantiation, and it accepts an array of Strings.' 
      },
      { 
        type: 'dragdrop', 
        q: '(Data Types) Complete the instantiation of a 2D integer array with 3 rows and 4 columns:', 
        code: 'int[][] matrix = [ZONE] [ZONE][3][ZONE];',
        draggables: ['new', 'int', '[4]', 'array', '(4)', 'Integer'],
        answer: ['new', 'int', '[4]'], 
        explanation: 'Multi-dimensional arrays are instantiated using the new keyword, the primitive type (int), and brackets for each dimension.' 
      },
      { 
        type: 'dragdrop', 
        q: '(Data Types) Drag the correct types to use autoboxing with an ArrayList:', 
        code: 'ArrayList<[ZONE]> numbers = new ArrayList<>();\nnumbers.add(5);\n[ZONE] val = numbers.get(0);',
        draggables: ['int', 'Integer', 'Double', 'String', 'Number'],
        answer: ['Integer', 'int'], 
        explanation: 'Collections cannot store primitives, so the generic type must be the wrapper class Integer. When retrieving, Java automatically unboxes it back to an int.' 
      },
      { 
        type: 'dragdrop', 
        q: '(Flow Control) Complete the for-each loop to iterate through a String array:', 
        code: 'String[] names = {"Alice", "Bob"};\nfor([ZONE] name [ZONE] [ZONE]) {\n  System.out.print(name);\n}',
        draggables: ['String', ':', 'names', 'in', 'int'],
        answer: ['String', ':', 'names'], 
        explanation: 'The enhanced for-loop (for-each) declares a variable of the element type, uses a colon (:), and references the array to iterate over.' 
      },
      { 
        type: 'dragdrop', 
        q: '(Flow Control) Setup this while loop to read from a Scanner until there is no more input:', 
        code: 'Scanner sc = new Scanner(System.in);\n[ZONE] (sc.[ZONE]()) {\n  String word = sc.[ZONE]();\n}',
        draggables: ['if', 'while', 'hasNext', 'next', 'read'],
        answer: ['while', 'hasNext', 'next'], 
        explanation: 'A while loop combined with Scanner.hasNext() ensures the loop processes tokens continuously until the input stream is exhausted.' 
      },
      { 
        type: 'dragdrop', 
        q: '(OOP) Complete the constructor chain so the child class calls the parent constructor:', 
        code: 'class Employee extends Person {\n  public Employee(String name) {\n    [ZONE](name);\n  }\n  public Employee() {\n    [ZONE]("Unknown");\n  }\n}',
        draggables: ['super', 'this', 'parent', 'Employee', 'Person'],
        answer: ['super', 'this'], 
        explanation: 'super() calls the parent class constructor. this() calls an overloaded constructor within the same class.' 
      },
      { 
        type: 'dragdrop', 
        q: '(OOP) Drag the keywords to implement an interface and override its method:', 
        code: 'class Robot [ZONE] Controllable {\n  [ZONE]\n  public void move() { }\n}',
        draggables: ['extends', 'implements', '@Override', '@Overload', 'virtual'],
        answer: ['implements', '@Override'], 
        explanation: 'Classes implement interfaces. The @Override annotation ensures the compiler checks that you are correctly matching the parent methods signature.' 
      },
      { 
        type: 'dragdrop', 
        q: '(OOP) Properly define a constant variable that belongs to the class itself:', 
        code: 'public [ZONE] [ZONE] double PI = 3.14159;',
        draggables: ['static', 'final', 'const', 'immutable', 'private'],
        answer: ['static', 'final'], 
        explanation: 'Static attaches the variable to the class rather than instances. Final makes the value unchangeable, effectively creating a constant.' 
      },
      { 
        type: 'dragdrop', 
        q: '(Debugging) Construct a try-with-resources block to automatically close the Scanner:', 
        code: 'try ([ZONE] scan = [ZONE] Scanner(System.in)) {\n  scan.nextLine();\n} [ZONE] (Exception e) { }',
        draggables: ['Scanner', 'new', 'catch', 'finally', 'close'],
        answer: ['Scanner', 'new', 'catch'], 
        explanation: 'Try-with-resources declares auto-closeable objects inside parentheses immediately following the try keyword.' 
      },
      { 
        type: 'dragdrop', 
        q: '(Debugging) Complete the custom exception class definition:', 
        code: 'class InvalidAgeException [ZONE] [ZONE] {\n  public InvalidAgeException(String msg) {\n    [ZONE](msg);\n  }\n}',
        draggables: ['extends', 'Exception', 'super', 'implements', 'Throwable'],
        answer: ['extends', 'Exception', 'super'], 
        explanation: 'Custom exceptions must extend the Exception class (or RuntimeException). Calling super(msg) passes the error text to the parent class.' 
      },

      // ==========================================
      // 11-20: FILL IN THE BLANKS (Dropdowns)
      // ==========================================
      { 
        type: 'dropdown', 
        q: '(Java Fundamentals) Identify the correct comment types.', 
        code: '[ZONE] Defines documentation for a method\n[ZONE] Comments out a specific code block', 
        options: [['/** ... */', '/* ... */', '//'], ['/** ... */', '/* ... */', '//']],
        answer: ['/** ... */', '/* ... */'], 
        explanation: 'Javadoc comments start with /**. Standard multi-line or block comments use /*.' 
      },
      { 
        type: 'dropdown', 
        q: '(Data Types) Select the correct methods to compare Strings securely.', 
        code: 'String s1 = new String("Java");\nString s2 = "java";\nboolean exact = s1.[ZONE](s2);\nboolean ignore = s1.[ZONE](s2);', 
        options: [['==', 'equals', 'compareTo'], ['equalsIgnoreCase', 'equals', 'match']],
        answer: ['equals', 'equalsIgnoreCase'], 
        explanation: 'Because new String() bypasses the string pool, == will fail. You must use .equals() or .equalsIgnoreCase() for content comparison.' 
      },
      { 
        type: 'dropdown', 
        q: '(Data Types) Select the correct implicit or explicit cast.', 
        code: 'int small = 50;\ndouble large = [ZONE]; // Implicit\n\ndouble x = 9.99;\nint y = [ZONE] x; // Explicit', 
        options: [['small', '(double) small', '(int) small'], ['(int)', '(double)', 'int']],
        answer: ['small', '(int)'], 
        explanation: 'Moving from int to double happens automatically (implicitly). Moving from double to int requires an explicit cast like (int).' 
      },
      { 
        type: 'dropdown', 
        q: '(Flow Control) Choose the correct short-circuit operators.', 
        code: 'if (obj != null [ZONE] obj.isValid()) { }\nif (x == 5 [ZONE] y == 10) { }', 
        options: [['&&', '&', 'AND'], ['||', '|', 'OR']],
        answer: ['&&', '||'], 
        explanation: '&& (AND) and || (OR) are short-circuit operators. They stop evaluating if the first condition guarantees the result, preventing errors like NullPointerExceptions.' 
      },
      { 
        type: 'dropdown', 
        q: '(Flow Control) Select the proper statements to manage a labeled loop.', 
        code: 'outer: for(int i=0; i<5; i++) {\n  for(int j=0; j<5; j++) {\n    if (j == 2) [ZONE] outer;\n  }\n}', 
        options: [['break', 'stop', 'exit', 'return']],
        answer: ['break'], 
        explanation: 'Using "break outer;" immediately breaks out of the outer loop entirely, not just the inner loop.' 
      },
      { 
        type: 'dropdown', 
        q: '(OOP) Determine the correct access modifiers for these scenarios.', 
        text: 'A variable accessible to subclasses in different packages needs the [ZONE] modifier. A variable strictly for the current class needs [ZONE].', 
        options: [['public', 'protected', 'default'], ['private', 'protected', 'default']],
        answer: ['protected', 'private'], 
        explanation: 'Protected grants access to the package AND subclasses anywhere. Private strictly limits it to the defining class.' 
      },
      { 
        type: 'dropdown', 
        q: '(OOP) Choose the proper relationship keywords.', 
        text: 'A class [ZONE] another class, an interface [ZONE] another interface, and a class [ZONE] an interface.', 
        options: [['extends', 'implements'], ['extends', 'implements'], ['extends', 'implements']],
        answer: ['extends', 'extends', 'implements'], 
        explanation: 'Classes extend classes. Interfaces extend interfaces. Classes implement interfaces.' 
      },
      { 
        type: 'dropdown', 
        q: '(OOP) Select the accurate characteristic of overloading vs overriding.', 
        text: 'Method Overloading occurs at [ZONE]-time and requires different [ZONE].', 
        options: [['compile', 'runtime'], ['return types', 'parameters', 'access modifiers']],
        answer: ['compile', 'parameters'], 
        explanation: 'Overloading is resolved by the compiler based on method signatures (parameter lists). Overriding happens at runtime via polymorphism.' 
      },
      { 
        type: 'dropdown', 
        q: '(Debugging) Order these catch blocks properly.', 
        code: 'try { \n  int x = 1/0; \n} catch ([ZONE] e1) {\n} catch ([ZONE] e2) { }', 
        options: [['Exception', 'ArithmeticException', 'Throwable'], ['Exception', 'ArithmeticException', 'Throwable']],
        answer: ['ArithmeticException', 'Exception'], 
        explanation: 'Catch blocks must go from most specific to most broad. If Exception came first, it would catch everything, making the ArithmeticException block unreachable.' 
      },
      { 
        type: 'dropdown', 
        q: '(Debugging) Select the appropriate throws declaration.', 
        code: 'public void readFile() [ZONE] IOException {\n  throw new IOException();\n}', 
        options: [['throws', 'throw', 'catch', 'finally']],
        answer: ['throws'], 
        explanation: '"throws" is used in the method signature to declare that the method might output a checked exception.' 
      },

      // ==========================================
      // 21-30: MULTIPLE SELECT (Checkboxes)
      // ==========================================
      { 
        type: 'msq', 
        q: '(Java Fundamentals) Which of the following are valid Java variable identifiers? (Choose all that apply)', 
        code: null, 
        choices: ['_userAge', '1stPlace', '$currency', 'user-name', 'totalSum'], 
        answer: [0, 2, 4], 
        explanation: 'Identifiers can start with a letter, underscore (_), or dollar sign ($). They cannot start with numbers or contain hyphens.' 
      },
      { 
        type: 'msq', 
        q: '(Data Types) Which of the following classes are immutable in Java? (Choose all that apply)', 
        code: null, 
        choices: ['String', 'StringBuilder', 'Integer', 'ArrayList', 'Double'], 
        answer: [0, 2, 4], 
        explanation: 'String and all primitive wrapper classes (Integer, Double, etc.) are immutable. StringBuilder and ArrayList are mutable.' 
      },
      { 
        type: 'msq', 
        q: '(Data Types) Which of the following result in an implicit widening conversion? (Choose all that apply)', 
        code: null, 
        choices: ['Assigning an int to a double variable', 'Assigning a double to an int variable', 'Assigning a float to a double variable', 'Assigning a long to a short variable'], 
        answer: [0, 2], 
        explanation: 'Widening moves from a smaller type to a larger type (int -> double, float -> double) and happens automatically.' 
      },
      { 
        type: 'msq', 
        q: '(Flow Control) Which of the statements will cause a compilation error? (Choose all that apply)', 
        code: null, 
        choices: ['while(false) { x++; }', 'if(false) { x++; }', 'for(int i=0; false; i++) { }', 'do { x++; } while(false);'], 
        answer: [0, 2], 
        explanation: 'while(false) and a for loop with a false condition create strictly unreachable code, which is a compiler error. if(false) is permitted for flag toggling.' 
      },
      { 
        type: 'msq', 
        q: '(Flow Control) Which loop structures test their condition BEFORE executing the loop body? (Choose all that apply)', 
        code: null, 
        choices: ['for loop', 'do-while loop', 'while loop', 'enhanced for-each loop'], 
        answer: [0, 2, 3], 
        explanation: 'Only the do-while loop executes the body first before checking the condition.' 
      },
      { 
        type: 'msq', 
        q: '(OOP) Which of the following are true regarding constructors? (Choose all that apply)', 
        code: null, 
        choices: ['They must have the exact same name as the class.', 'They return void.', 'They can be overloaded.', 'They are inherited by subclasses.'], 
        answer: [0, 2], 
        explanation: 'Constructors share the class name and can be overloaded. They have NO return type (not even void), and they are not inherited.' 
      },
      { 
        type: 'msq', 
        q: '(OOP) Which modifiers are allowed for a top-level class? (Choose all that apply)', 
        code: null, 
        choices: ['public', 'private', 'protected', 'default (no modifier)', 'static'], 
        answer: [0, 3], 
        explanation: 'Top-level classes can only be public or default (package-private). Inner classes can be private, protected, or static.' 
      },
      { 
        type: 'msq', 
        q: '(OOP) By default, fields defined inside an Interface are implicitly: (Choose all that apply)', 
        code: null, 
        choices: ['public', 'private', 'static', 'final', 'protected'], 
        answer: [0, 2, 3], 
        explanation: 'All variables in an interface are implicitly public, static, and final (they are constants).' 
      },
      { 
        type: 'msq', 
        q: '(Debugging) Which of the following exceptions are UNCHECKED (Runtime)? (Choose all that apply)', 
        code: null, 
        choices: ['NullPointerException', 'IOException', 'IndexOutOfBoundsException', 'FileNotFoundException', 'IllegalArgumentException'], 
        answer: [0, 2, 4], 
        explanation: 'Runtime exceptions do not need to be declared in throws. IO and FileNotFound are checked exceptions.' 
      },
      { 
        type: 'msq', 
        q: '(Debugging) A try block can be followed by which of these blocks to compile successfully? (Choose all that apply)', 
        code: null, 
        choices: ['catch only', 'finally only', 'catch and finally', 'throws only'], 
        answer: [0, 1, 2], 
        explanation: 'A try block must be followed by at least one catch block, OR a finally block, OR both.' 
      },

      // ==========================================
      // 31-40: PREDICT OUTPUT (Text Inputs)
      // ==========================================
      { 
        type: 'text', 
        q: '(Data Types) Predict the exact console output:', 
        code: 'int x = 5;\nSystem.out.print(x++ + ++x);', 
        answer: '12', 
        explanation: 'x++ uses 5, then x becomes 6. ++x increments 6 to 7, then uses 7. 5 + 7 = 12.' 
      },
      { 
        type: 'text', 
        q: '(Data Types) Predict the exact console output:', 
        code: 'System.out.print("Result: " + 5 + 5);\nSystem.out.print(" ");\nSystem.out.print("Result: " + (5 + 5));', 
        answer: 'Result: 55 Result: 10', 
        explanation: 'Without parentheses, String + int evaluates as string concatenation. With parentheses, math occurs first.' 
      },
      { 
        type: 'text', 
        q: '(Flow Control) Predict the exact output:', 
        code: 'int count = 0;\nfor(int i=0; i<3; i++) {\n  for(int j=0; j<2; j++) {\n    if(i == 1) break;\n    count++;\n  }\n}\nSystem.out.print(count);', 
        answer: '4', 
        explanation: 'i=0 runs twice (count=2). i=1 breaks immediately. i=2 runs twice (count=4).' 
      },
      { 
        type: 'text', 
        q: '(Flow Control) Predict the exact output (Note the missing breaks):', 
        code: 'int val = 2;\nswitch(val) {\n  case 1: System.out.print("1");\n  case 2: System.out.print("2");\n  case 3: System.out.print("3");\n  default: System.out.print("D");\n}', 
        answer: '23D', 
        explanation: 'Execution jumps to case 2, prints "2", and because there are no breaks, falls through all remaining cases printing "3" and "D".' 
      },
      { 
        type: 'text', 
        q: '(OOP) Predict the exact output regarding variable scope:', 
        code: 'class Test {\n  int x = 10;\n  void doSomething() {\n    int x = 5;\n    System.out.print(this.x);\n  }\n}\nnew Test().doSomething();', 
        answer: '10', 
        explanation: 'The local variable x is 5, but "this.x" explicitly refers to the instance variable, which is 10.' 
      },
      { 
        type: 'text', 
        q: '(OOP) Predict the exact output of this static interaction:', 
        code: 'class Calc {\n  static int count = 0;\n  Calc() { count++; }\n}\nnew Calc();\nnew Calc();\nSystem.out.print(Calc.count);', 
        answer: '2', 
        explanation: 'Static variables belong to the class, so they are shared across all instances. Creating two objects increments the shared variable twice.' 
      },
      { 
        type: 'text', 
        q: '(OOP) Predict the exact output of this polymorphic call:', 
        code: 'class A { void run() { System.out.print("A"); } }\nclass B extends A { void run() { System.out.print("B"); } }\n\nA obj = new B();\nobj.run();', 
        answer: 'B', 
        explanation: 'Even though the reference type is A, the actual object is B. At runtime, Java calls the overridden method in B.' 
      },
      { 
        type: 'text', 
        q: '(Java Fundamentals) Predict the exact output regarding pass-by-value on references:', 
        code: 'void changeArr(int[] arr) {\n  arr[0] = 99;\n}\nint[] nums = {1, 2, 3};\nchangeArr(nums);\nSystem.out.print(nums[0]);', 
        answer: '99', 
        explanation: 'Arrays are objects. The reference is passed by value, meaning the method modifies the exact same array memory space.' 
      },
      { 
        type: 'text', 
        q: '(Debugging) Predict the exact output returned by the method:', 
        code: 'int test() {\n  try {\n    return 1;\n  } finally {\n    return 2;\n  }\n}\nSystem.out.print(test());', 
        answer: '2', 
        explanation: 'The finally block executes before the method finishes. If finally contains a return statement, it overrides any return from the try block.' 
      },
      { 
        type: 'text', 
        q: '(Debugging) Predict the exact output:', 
        code: 'try {\n  String s = null;\n  s.length();\n} catch(NullPointerException e) {\n  System.out.print("N");\n} catch(Exception e) {\n  System.out.print("E");\n} finally {\n  System.out.print("F");\n}', 
        answer: 'NF', 
        explanation: 'The specific NullPointerException is caught first printing "N". The broader Exception is skipped. Finally always runs printing "F".' 
      }
    ]
  }
};
