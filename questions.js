// PCAP Python Quiz - 141 Questions
// Categories: modules (21), exceptions (18), strings (25), oop (48), misc (29)

const questions = [
// ==================== MODULES & PACKAGES (21 questions) ====================
{
    category: 'modules',
    question: 'What is the correct way to import only the <code>sqrt</code> function from the <code>math</code> module?',
    options: ['import sqrt from math', 'from math import sqrt', 'import math.sqrt', 'math import sqrt'],
    answer: 1
},
{
    category: 'modules',
    question: 'What does <code>import math as m</code> do?',
    options: ['Creates a copy of math module', 'Creates an alias m for math module', 'Imports only function m from math', 'Causes an error'],
    answer: 1
},
{
    category: 'modules',
    question: 'What is stored in the <code>__name__</code> variable when a module is run directly?',
    options: ['The module filename', '"__main__"', 'The module path', 'None'],
    answer: 1
},
{
    category: 'modules',
    question: 'What is the purpose of the <code>__init__.py</code> file in a package?',
    options: ['To initialize variables', 'To mark the directory as a Python package', 'To import all modules', 'To define the main function'],
    answer: 1
},
{
    category: 'modules',
    question: 'What does <code>from module import *</code> do?',
    options: ['Imports everything except names starting with underscore', 'Imports absolutely everything', 'Imports only public classes', 'Causes an error'],
    answer: 0
},
{
    category: 'modules',
    question: 'Which variable contains the list of directories where Python looks for modules?',
    options: ['os.path', 'sys.modules', 'sys.path', 'module.path'],
    answer: 2
},
{
    category: 'modules',
    question: 'What is the <code>__pycache__</code> directory used for?',
    options: ['Storing module documentation', 'Storing compiled bytecode files', 'Caching imported modules', 'Temporary files'],
    answer: 1
},
{
    category: 'modules',
    question: 'What does the <code>dir()</code> function return when called on a module?',
    options: ['Module file path', 'List of all names defined in the module', 'Module documentation', 'Module version'],
    answer: 1
},
{
    category: 'modules',
    question: 'How do you import a submodule <code>submod</code> from package <code>pkg</code>?',
    options: ['import pkg/submod', 'from pkg import submod', 'import submod from pkg', 'pkg.import(submod)'],
    answer: 1
},
{
    category: 'modules',
    question: 'What happens if you import the same module twice?',
    options: ['Error occurs', 'Module is reloaded', 'Second import is ignored', 'Two copies are created'],
    answer: 2
},
{
    category: 'modules',
    question: 'Which statement imports the <code>platform</code> module and allows using <code>plt.system()</code>?',
    options: ['import platform as plt', 'from platform import plt', 'import plt from platform', 'from platform import * as plt'],
    answer: 0
},
{
    category: 'modules',
    question: 'What is a Python package?',
    options: ['A single .py file', 'A directory containing modules and __init__.py', 'A compiled Python file', 'A zip archive of modules'],
    answer: 1
},
{
    category: 'modules',
    question: 'How can you reload a module that has already been imported?',
    options: ['import module again', 'reload(module)', 'from importlib import reload; reload(module)', 'module.reload()'],
    answer: 2
},
{
    category: 'modules',
    question: 'What is a private variable naming convention in Python?',
    options: ['private_var', '__var__', '_var', 'var_private'],
    answer: 2
},
{
    category: 'modules',
    question: 'What does <code>sys.modules</code> contain?',
    options: ['List of available modules', 'Dictionary of imported modules', 'Module search paths', 'Python version'],
    answer: 1
},
{
    category: 'modules',
    question: 'When importing <code>from math import pi, e</code>, how do you use these values?',
    options: ['math.pi and math.e', 'pi and e directly', 'import.pi and import.e', 'must create variables first'],
    answer: 1
},
{
    category: 'modules',
    question: 'What is the file extension for compiled Python bytecode?',
    options: ['.py', '.pyo', '.pyc', '.pyw'],
    answer: 2
},
{
    category: 'modules',
    question: 'Which import statement will cause a syntax error?',
    options: ['import os', 'from os import *', 'import os.path', 'from os import path as p'],
    answer: -1  // None causes error, trick question - marking as invalid
},
{
    category: 'modules',
    question: 'What is the result of <code>__name__</code> when a module is imported (not run directly)?',
    options: ['"__main__"', 'The module name', 'Empty string', 'None'],
    answer: 1
},
{
    category: 'modules',
    question: 'How do you access the docstring of a module?',
    options: ['module.doc', 'module.__doc__', 'module.docstring', 'help.module'],
    answer: 1
},
{
    category: 'modules',
    question: 'What happens when you use <code>import package.module</code>?',
    options: ['Only module is available directly', 'package.module is available', 'Error if __init__.py is empty', 'All submodules are imported'],
    answer: 1
},

// ==================== EXCEPTIONS (18 questions) ====================
{
    category: 'exceptions',
    question: 'What is the base class for all built-in exceptions in Python?',
    options: ['Exception', 'BaseException', 'Error', 'Throwable'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'What is the correct syntax for handling multiple exception types?',
    options: ['except TypeError, ValueError:', 'except (TypeError, ValueError):', 'except TypeError and ValueError:', 'except TypeError || ValueError:'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'What does the <code>finally</code> block do?',
    options: ['Runs only if no exception occurs', 'Runs only if exception occurs', 'Always runs regardless of exceptions', 'Defines the final exception'],
    answer: 2
},
{
    category: 'exceptions',
    question: 'How do you raise a custom exception with a message?',
    options: ['throw Exception("message")', 'raise Exception("message")', 'except Exception("message")', 'error Exception("message")'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'What exception is raised when accessing a non-existent dictionary key using <code>[]</code>?',
    options: ['IndexError', 'KeyError', 'ValueError', 'AttributeError'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'What is the purpose of <code>except Exception as e</code>?',
    options: ['Creates new exception e', 'Binds exception object to variable e', 'Filters exceptions by e', 'Ignores exception e'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'Which exception is raised when dividing by zero?',
    options: ['ValueError', 'ArithmeticError', 'ZeroDivisionError', 'MathError'],
    answer: 2
},
{
    category: 'exceptions',
    question: 'What is the output?<pre>try:\n    print(1/0)\nexcept:\n    print("A")\nfinally:\n    print("B")</pre>',
    options: ['A', 'B', 'A\\nB', 'Error'],
    answer: 2
},
{
    category: 'exceptions',
    question: 'How do you create a custom exception class?',
    options: ['class MyError(Error):', 'class MyError extends Exception:', 'class MyError(Exception):', 'exception MyError:'],
    answer: 2
},
{
    category: 'exceptions',
    question: 'What exception is raised when importing a non-existent module?',
    options: ['ImportError', 'ModuleNotFoundError', 'Both A and B are correct', 'FileNotFoundError'],
    answer: 2
},
{
    category: 'exceptions',
    question: 'What is the output?<pre>try:\n    x = int("abc")\nexcept ValueError:\n    print("V")\nexcept:\n    print("E")</pre>',
    options: ['V', 'E', 'V\\nE', 'Error'],
    answer: 0
},
{
    category: 'exceptions',
    question: 'Which statement about <code>else</code> in try-except is correct?',
    options: ['Runs if exception occurs', 'Runs if no exception occurs', 'Runs always', 'Must come before except'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'What is the exception hierarchy for <code>ValueError</code>?',
    options: ['BaseException → Exception → ValueError', 'Exception → Error → ValueError', 'BaseException → ValueError', 'Error → Exception → ValueError'],
    answer: 0
},
{
    category: 'exceptions',
    question: 'What happens if an exception is not caught?',
    options: ['Program continues', 'Program terminates with traceback', 'Exception is ignored', 'None value is returned'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'How do you re-raise the current exception?',
    options: ['raise', 'throw', 'reraise', 'raise Exception'],
    answer: 0
},
{
    category: 'exceptions',
    question: 'What exception is raised when accessing an index out of range?',
    options: ['KeyError', 'IndexError', 'RangeError', 'OutOfBoundsError'],
    answer: 1
},
{
    category: 'exceptions',
    question: 'Which is NOT a valid exception in Python?',
    options: ['TypeError', 'NameError', 'NullPointerError', 'RuntimeError'],
    answer: 2
},
{
    category: 'exceptions',
    question: 'What is the output?<pre>def f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())</pre>',
    options: ['1', '2', '1\\n2', 'Error'],
    answer: 1
},

// ==================== STRINGS (25 questions) ====================
{
    category: 'strings',
    question: 'What is the output of <code>"Hello"[1:4]</code>?',
    options: ['Hel', 'ell', 'ello', 'Hell'],
    answer: 1
},
{
    category: 'strings',
    question: 'What does <code>"python".upper()</code> return?',
    options: ['PYTHON', 'Python', 'python', 'pYTHON'],
    answer: 0
},
{
    category: 'strings',
    question: 'What is the output of <code>"hello".replace("l", "L", 1)</code>?',
    options: ['heLLo', 'heLlo', 'HeLlo', 'hello'],
    answer: 1
},
{
    category: 'strings',
    question: 'What does <code>"  hello  ".strip()</code> return?',
    options: ['" hello "', '"hello"', '"  hello"', '"hello  "'],
    answer: 1
},
{
    category: 'strings',
    question: 'What is the output of <code>"abc" * 3</code>?',
    options: ['abc3', 'abcabcabc', '3abc', 'Error'],
    answer: 1
},
{
    category: 'strings',
    question: 'What does <code>"hello".find("l")</code> return?',
    options: ['1', '2', '3', '[2, 3]'],
    answer: 1
},
{
    category: 'strings',
    question: 'What is the output of <code>"Hello World".split()</code>?',
    options: ["['Hello', 'World']", "['Hello World']", "['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']", "('Hello', 'World')"],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>", ".join(["a", "b", "c"])</code> return?',
    options: ['abc', 'a, b, c', '[a, b, c]', 'a,b,c'],
    answer: 1
},
{
    category: 'strings',
    question: 'What is the output of <code>len("Python\\n")</code>?',
    options: ['6', '7', '8', '9'],
    answer: 1
},
{
    category: 'strings',
    question: 'What does <code>"Python".startswith("Py")</code> return?',
    options: ['True', 'False', '"Py"', '0'],
    answer: 0
},
{
    category: 'strings',
    question: 'What is the output of <code>"abc".isalpha()</code>?',
    options: ['True', 'False', '"abc"', 'Error'],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>"hello".count("l")</code> return?',
    options: ['1', '2', '3', '[2, 3]'],
    answer: 1
},
{
    category: 'strings',
    question: 'What is the output of <code>"Python"[-2]</code>?',
    options: ['o', 'n', 'th', 'on'],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>"hello world".title()</code> return?',
    options: ['HELLO WORLD', 'Hello World', 'Hello world', 'hello World'],
    answer: 1
},
{
    category: 'strings',
    question: 'What is the output of <code>"abc".center(7, "*")</code>?',
    options: ['**abc**', '***abc', 'abc****', '*abc***'],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>ord("A")</code> return?',
    options: ['65', '97', '"A"', '1'],
    answer: 0
},
{
    category: 'strings',
    question: 'What is the output of <code>chr(97)</code>?',
    options: ['"a"', '"A"', '97', '"97"'],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>"hello".index("x")</code> do?',
    options: ['Returns -1', 'Returns None', 'Raises ValueError', 'Returns 0'],
    answer: 2
},
{
    category: 'strings',
    question: 'What is the output of <code>"ABC".swapcase()</code>?',
    options: ['abc', 'ABC', 'Abc', 'aBC'],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>"42".isdigit()</code> return?',
    options: ['True', 'False', '42', 'Error'],
    answer: 0
},
{
    category: 'strings',
    question: 'What is the output of <code>"hello"[::-1]</code>?',
    options: ['hello', 'olleh', 'h', 'o'],
    answer: 1
},
{
    category: 'strings',
    question: 'What does <code>"  \\t\\n".isspace()</code> return?',
    options: ['True', 'False', 'Error', 'None'],
    answer: 0
},
{
    category: 'strings',
    question: 'What is the output of <code>f"{3.14159:.2f}"</code>?',
    options: ['"3.14"', '"3.14159"', '"3.1"', '"3"'],
    answer: 0
},
{
    category: 'strings',
    question: 'What does <code>"hello".capitalize()</code> return?',
    options: ['HELLO', 'Hello', 'hELLO', 'hello'],
    answer: 1
},
{
    category: 'strings',
    question: 'What is the output of <code>"abc123".isalnum()</code>?',
    options: ['True', 'False', 'Error', '"abc123"'],
    answer: 0
},

// ==================== OOP (48 questions) ====================
{
    category: 'oop',
    question: 'What is the correct way to define a class in Python?',
    options: ['class MyClass():', 'class MyClass:', 'def class MyClass:', 'Both A and B'],
    answer: 3
},
{
    category: 'oop',
    question: 'What is the purpose of <code>self</code> in a class method?',
    options: ['Reference to the class', 'Reference to the current instance', 'A keyword for inheritance', 'Reference to parent class'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the <code>__init__</code> method used for?',
    options: ['Destroying an object', 'Initializing object attributes', 'Creating class methods', 'Inheriting from parent'],
    answer: 1
},
{
    category: 'oop',
    question: 'How do you create an instance of class <code>Dog</code>?',
    options: ['Dog.create()', 'new Dog()', 'Dog()', 'create Dog()'],
    answer: 2
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    x = 1\na = A()\na.x = 2\nprint(A.x, a.x)</pre>',
    options: ['1 2', '2 2', '1 1', '2 1'],
    answer: 0
},
{
    category: 'oop',
    question: 'What is encapsulation in OOP?',
    options: ['Hiding implementation details', 'Creating multiple classes', 'Inheriting from parent', 'Method overloading'],
    answer: 0
},
{
    category: 'oop',
    question: 'How do you inherit from a parent class?',
    options: ['class Child extends Parent:', 'class Child(Parent):', 'class Child inherits Parent:', 'class Child <- Parent:'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is polymorphism?',
    options: ['Multiple inheritance', 'Method with same name behaves differently', 'Private methods', 'Class attributes'],
    answer: 1
},
{
    category: 'oop',
    question: 'What does <code>isinstance(obj, ClassName)</code> check?',
    options: ['If obj equals ClassName', 'If obj is an instance of ClassName', 'If obj has ClassName attribute', 'If obj is a subclass'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def greet(self):\n        print("A")\nclass B(A):\n    def greet(self):\n        print("B")\nb = B()\nb.greet()</pre>',
    options: ['A', 'B', 'A\\nB', 'Error'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is method overriding?',
    options: ['Defining method in parent class', 'Redefining parent method in child class', 'Creating multiple methods with same name', 'Deleting parent method'],
    answer: 1
},
{
    category: 'oop',
    question: 'How do you call parent class method from child class?',
    options: ['parent.method()', 'super().method()', 'self.parent.method()', 'Parent::method()'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the purpose of <code>__str__</code> method?',
    options: ['Convert to integer', 'String representation of object', 'Compare objects', 'Delete object'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is a class variable?',
    options: ['Variable inside __init__', 'Variable shared by all instances', 'Variable inside method', 'Private variable'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is an instance variable?',
    options: ['Variable defined with self', 'Variable outside class', 'Variable shared by all instances', 'Static variable'],
    answer: 0
},
{
    category: 'oop',
    question: 'What does <code>__dict__</code> contain for an instance?',
    options: ['Class methods', 'Instance attributes', 'Parent class info', 'Documentation'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is name mangling in Python?',
    options: ['Encrypting variable names', 'Converting __var to _classname__var', 'Deleting private variables', 'Renaming methods'],
    answer: 1
},
{
    category: 'oop',
    question: 'How do you define a private attribute?',
    options: ['private var', '__var', 'var__', '#var'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is multiple inheritance?',
    options: ['Class inheriting from multiple parents', 'Multiple classes inheriting from one parent', 'Nested classes', 'Abstract classes'],
    answer: 0
},
{
    category: 'oop',
    question: 'What is the diamond problem?',
    options: ['Syntax error in inheritance', 'Ambiguity in multiple inheritance', 'Circular import', 'Missing __init__'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def __init__(self):\n        self.x = 1\n        self.__y = 2\na = A()\nprint(a._A__y)</pre>',
    options: ['Error', '2', 'None', '__y'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is <code>issubclass(A, B)</code> used for?',
    options: ['Check if A is instance of B', 'Check if A is subclass of B', 'Check if A equals B', 'Check if A contains B'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is an abstract method?',
    options: ['Method with no code', 'Method that must be overridden', 'Private method', 'Static method'],
    answer: 1
},
{
    category: 'oop',
    question: 'How do you create a class method?',
    options: ['@classmethod decorator', '@static decorator', 'classmethod keyword', 'class def method():'],
    answer: 0
},
{
    category: 'oop',
    question: 'What is the first parameter of a class method?',
    options: ['self', 'cls', 'this', 'class'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is a static method?',
    options: ['Method that uses self', 'Method that uses cls', 'Method without self or cls', 'Method in __init__'],
    answer: 2
},
{
    category: 'oop',
    question: 'What decorator creates a static method?',
    options: ['@static', '@staticmethod', '@classmethod', '@method'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the MRO (Method Resolution Order)?',
    options: ['Order of method definition', 'Order of searching for methods in inheritance', 'Order of method execution', 'Order of imports'],
    answer: 1
},
{
    category: 'oop',
    question: 'How do you view MRO of a class?',
    options: ['ClassName.mro()', 'ClassName.__mro__', 'Both A and B', 'mro(ClassName)'],
    answer: 2
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    pass\nclass B(A):\n    pass\nprint(issubclass(B, A))</pre>',
    options: ['True', 'False', 'Error', 'None'],
    answer: 0
},
{
    category: 'oop',
    question: 'What is composition in OOP?',
    options: ['Combining classes through inheritance', 'One class contains objects of another class', 'Multiple inheritance', 'Method overriding'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class Dog:\n    species = "Canis"\n    def __init__(self, name):\n        self.name = name\nd1 = Dog("Max")\nd2 = Dog("Rex")\nprint(d1.species == d2.species)</pre>',
    options: ['True', 'False', 'Error', 'None'],
    answer: 0
},
{
    category: 'oop',
    question: 'What happens when you assign to a class variable through an instance?',
    options: ['Class variable is modified', 'New instance variable is created', 'Error occurs', 'Nothing happens'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the purpose of <code>__repr__</code> method?',
    options: ['User-friendly string', 'Developer-friendly string representation', 'Delete object', 'Compare objects'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\nc1 = Counter()\nc2 = Counter()\nprint(Counter.count)</pre>',
    options: ['0', '1', '2', 'Error'],
    answer: 2
},
{
    category: 'oop',
    question: 'What is <code>hasattr(obj, "name")</code> used for?',
    options: ['Check if obj has attribute name', 'Get attribute value', 'Set attribute value', 'Delete attribute'],
    answer: 0
},
{
    category: 'oop',
    question: 'How do you get an attribute value dynamically?',
    options: ['obj.attr', 'getattr(obj, "attr")', 'obj["attr"]', 'attr(obj)'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def __init__(self, x):\n        self.x = x\na = A(5)\nsetattr(a, "y", 10)\nprint(a.y)</pre>',
    options: ['Error', '5', '10', 'None'],
    answer: 2
},
{
    category: 'oop',
    question: 'What is inheritance used for?',
    options: ['Code reuse and specialization', 'Hiding data', 'Creating multiple instances', 'Defining constants'],
    answer: 0
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def show(self):\n        print("A", end="")\nclass B(A):\n    def show(self):\n        super().show()\n        print("B", end="")\nb = B()\nb.show()</pre>',
    options: ['A', 'B', 'AB', 'BA'],
    answer: 2
},
{
    category: 'oop',
    question: 'What is the purpose of <code>__del__</code> method?',
    options: ['Delete class', 'Destructor called when object is deleted', 'Delete attribute', 'Delete method'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def __init__(self):\n        self.data = []\na = A()\na.data.append(1)\nb = A()\nprint(b.data)</pre>',
    options: ['[1]', '[]', 'Error', 'None'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is a property decorator used for?',
    options: ['Create static method', 'Create getter/setter methods', 'Create class method', 'Create private variable'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the single underscore prefix convention (_var)?',
    options: ['Private variable', 'Protected/internal variable', 'Public variable', 'Constant'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    x = 1\nclass B(A):\n    pass\nclass C(A):\n    pass\nB.x = 2\nprint(A.x, C.x)</pre>',
    options: ['1 1', '2 2', '1 2', '2 1'],
    answer: 0
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def greet(self):\n        return "Hello"\na = A()\nprint(type(a.greet))</pre>',
    options: ['&lt;class \'function\'&gt;', '&lt;class \'method\'&gt;', '&lt;class \'str\'&gt;', 'Error'],
    answer: 1
},
{
    category: 'oop',
    question: 'When is <code>__init__</code> automatically called?',
    options: ['When class is defined', 'When instance is created', 'When method is called', 'When class is imported'],
    answer: 1
},
{
    category: 'oop',
    question: 'What is the output?<pre>class A:\n    def __init__(self, val=0):\n        self.val = val\na = A()\nb = A(5)\nprint(a.val, b.val)</pre>',
    options: ['0 5', '5 0', '0 0', '5 5'],
    answer: 0
},

// ==================== MISCELLANEOUS (29 questions) ====================
{
    category: 'misc',
    question: 'What is the output of <code>[x**2 for x in range(5)]</code>?',
    options: ['[0, 1, 4, 9, 16]', '[1, 4, 9, 16, 25]', '[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]'],
    answer: 0
},
{
    category: 'misc',
    question: 'What is a lambda function?',
    options: ['Named function', 'Anonymous function', 'Recursive function', 'Generator function'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the correct syntax for a lambda function?',
    options: ['lambda: x + 1', 'lambda x: x + 1', 'def lambda(x): x + 1', 'lambda(x) -> x + 1'],
    answer: 1
},
{
    category: 'misc',
    question: 'What does <code>map(lambda x: x*2, [1,2,3])</code> return?',
    options: ['[2, 4, 6]', 'map object', '(2, 4, 6)', '{2, 4, 6}'],
    answer: 1
},
{
    category: 'misc',
    question: 'What does <code>filter(lambda x: x>0, [-1, 0, 1, 2])</code> return when converted to list?',
    options: ['[-1, 0, 1, 2]', '[1, 2]', '[0, 1, 2]', '[-1]'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is a closure in Python?',
    options: ['Function that closes files', 'Function that remembers enclosing scope variables', 'Function that ends program', 'Deprecated function'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is a generator in Python?',
    options: ['Function that returns list', 'Function that yields values lazily', 'Function that generates classes', 'Function without return'],
    answer: 1
},
{
    category: 'misc',
    question: 'Which keyword is used to create a generator?',
    options: ['return', 'yield', 'generate', 'iter'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the output?<pre>def gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g), next(g))</pre>',
    options: ['1 1', '1 2', '2 1', 'Error'],
    answer: 1
},
{
    category: 'misc',
    question: 'What does <code>open("file.txt", "r")</code> do?',
    options: ['Opens file for writing', 'Opens file for reading', 'Creates new file', 'Deletes file'],
    answer: 1
},
{
    category: 'misc',
    question: 'What mode opens file for writing and creates if not exists?',
    options: ['r', 'w', 'a', 'x'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the purpose of <code>with</code> statement for files?',
    options: ['Loop through file', 'Automatically close file', 'Check if file exists', 'Create backup'],
    answer: 1
},
{
    category: 'misc',
    question: 'What does <code>file.read()</code> return?',
    options: ['First line', 'List of lines', 'Entire file content as string', 'Number of characters'],
    answer: 2
},
{
    category: 'misc',
    question: 'What does <code>file.readlines()</code> return?',
    options: ['Single string', 'List of lines', 'Generator', 'First line only'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the output of <code>list(filter(None, [0, 1, "", "a"]))</code>?',
    options: ['[0, 1, "", "a"]', '[1, "a"]', '[0, ""]', '[1]'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the output?<pre>nums = [1, 2, 3]\nres = list(map(str, nums))\nprint(res)</pre>',
    options: ['[1, 2, 3]', '["1", "2", "3"]', '"123"', 'Error'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the result of <code>[x for x in range(10) if x % 2 == 0]</code>?',
    options: ['[1, 3, 5, 7, 9]', '[0, 2, 4, 6, 8]', '[2, 4, 6, 8, 10]', '[0, 1, 2, 3, 4]'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is nested list comprehension output?<pre>[[j for j in range(3)] for i in range(2)]</pre>',
    options: ['[[0, 1, 2], [0, 1, 2]]', '[[0, 0], [1, 1], [2, 2]]', '[0, 1, 2, 0, 1, 2]', 'Error'],
    answer: 0
},
{
    category: 'misc',
    question: 'What does <code>reduce(lambda a,b: a+b, [1,2,3,4])</code> return? (from functools)',
    options: ['[1, 2, 3, 4]', '10', '4', '[10]'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is an iterator in Python?',
    options: ['Object with __iter__ and __next__ methods', 'Any list', 'Any function', 'Loop variable'],
    answer: 0
},
{
    category: 'misc',
    question: 'What does <code>iter([1,2,3])</code> return?',
    options: ['[1, 2, 3]', 'Iterator object', '1', 'None'],
    answer: 1
},
{
    category: 'misc',
    question: 'What exception is raised when iterator is exhausted?',
    options: ['IteratorError', 'StopIteration', 'EndIterator', 'NoMoreItems'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the "a" mode in file operations?',
    options: ['Read mode', 'Write mode', 'Append mode', 'Execute mode'],
    answer: 2
},
{
    category: 'misc',
    question: 'What is the output?<pre>f = lambda x, y: x + y\nprint(f(2, 3))</pre>',
    options: ['23', '5', 'x + y', 'Error'],
    answer: 1
},
{
    category: 'misc',
    question: 'What does <code>sorted([3,1,2], reverse=True)</code> return?',
    options: ['[1, 2, 3]', '[3, 2, 1]', '[2, 1, 3]', 'None'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the output?<pre>def outer():\n    x = 1\n    def inner():\n        return x\n    return inner\nf = outer()\nprint(f())</pre>',
    options: ['Error', '1', 'None', 'inner'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is a generator expression?',
    options: ['(x for x in range(10))', '[x for x in range(10)]', '{x for x in range(10)}', 'x for x in range(10)'],
    answer: 0
},
{
    category: 'misc',
    question: 'What does <code>enumerate(["a","b","c"])</code> return when converted to list?',
    options: ['["a", "b", "c"]', '[(0, "a"), (1, "b"), (2, "c")]', '[0, 1, 2]', '{"a": 0, "b": 1, "c": 2}'],
    answer: 1
},
{
    category: 'misc',
    question: 'What is the correct way to read binary file?',
    options: ['open("file", "r")', 'open("file", "rb")', 'open("file", "b")', 'open("file", "binary")'],
    answer: 1
}
];

// Fix question 18 (was invalid)
questions[17] = {
    category: 'modules',
    question: 'Which statement correctly imports multiple items from a module?',
    options: ['from math import pi e', 'from math import pi, e', 'from math import (pi e)', 'import pi, e from math'],
    answer: 1
};
