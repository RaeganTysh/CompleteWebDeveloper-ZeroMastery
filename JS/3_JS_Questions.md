How JS works...

//How does JS work
What is a program - allocate memory, parse and execute scripts (read and run commands)
                  - JS script engine that each browser implements (chrome -V8) - engine reads JS we wrtie and changes it to machine executable instructions
                  - Engine - memory heap (memory allocation happens) = define var/const/let
                                - memory leaks - unused memory fills up memory heap- global variables are bad if not used
                            - call stack (code is read and executed) =  first in last out 
JavaScript Runtime Environment (includes) - JS (Memory heap and callstack)
                                - Web API's (DOM (document), AJAX (XMLHttpRequest), Timeout(seTimeout)) 
                                -EventLoop - checks to see if callstack is empty if yes checks the callback queue
                                -Callback Queue - on click/on Load/on Done                            


//What is the difference between synchronous and asychonous
Synchronous means line 1 from top gets executed then line 2 and so on until the stack gets to the bottom and is emptied. If one tasks takes a long time then the website doesn't respond efficiently 
StackOverflow- when a stack is overflowing- call stack doesn't have enough space anymore (recursive statements cna do this);

Asynchronous -
                happens alot-talk between machines, reading files form a Database,  reading files, network requests, image processingequests, processing files 


//Javascript is a single threaded language that can be non-blocking? Explain the statement
 Single threaded means there is only one call stack, one call stack only it can only do one thing at a time - first in a last out. Top of call stack gets run first.
 Running code in a sigle threaded environment relatively easy - one item at a time to worry about
 Multithreaded environments can have such things as deadlocks
 
JS is a single threaded language that can be non blocking, it has one callstack and does one thing at time. In order to be not block the single thread it can be asynchronous with callback functions. The callback functions get run in the background through the Callback queue and the event loop to bring it back to the callstack.   

